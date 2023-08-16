import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/Header/MainNav';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Container} from '@mui/material';
import Trending from './Pages/Trending/Trending';
import Series from './Pages/Series/Series';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="app"> </div>
    <Container>
      <Switch>
        <Route path='/' component={Trending} exact/>
        <Route path='/movies' component={Movies}/>
        <Route path='/series' component={Series}/>
        <Route path='/search' component={Search}/>
      </Switch>
    </Container>
    <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
