import './App.css';
import Appbar from './components/Appbar';
import bgpic from './components/assets/basicbg.jpg'
import {BrowserRouter}  from 'react-router-dom';
import Footer from './components/Footer';
import Category from './components/Category';
import Pages from './pages/Pages';
function App(){


    return (
        <div className="App" style={{backgroundImage: `url(${bgpic})`}}>
        <BrowserRouter>
        <Appbar/>
        <Category/>
        <Pages/>


        <Footer/>
        </BrowserRouter>




        </div>
    );
}

export default App;