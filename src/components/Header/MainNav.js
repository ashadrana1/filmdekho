import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import {useHistory, useNavigate, useEffect} from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

    useEffect(()=>{
    if(value===0) navigate("/");
    
  }, [value]);

  return (
    <Box sx={{ width: "100%",
              position : "fixed",
              bottom:0,
              backgroundColor:"#2d313a",
              zIndex:100}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style = {{color:"black"}} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style = {{color:"black"}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style = {{color:"black"}} label="TV Series" icon={<SearchIcon />} />
        <BottomNavigationAction style = {{color:"black"}} label="Search" icon={<TvIcon />} />
      </BottomNavigation>
    </Box>
  );
}
