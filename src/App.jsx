import './App.css';
import Appbar from './components/Appbar';
import bgpic from './components/assets/basicbg.jpg'
import {BrowserRouter}  from 'react-router-dom';

function App(){


    return (
        <div className="App" style={{backgroundImage: `url(${bgpic})`}}>
        <BrowserRouter>
        <Appbar/>




        </BrowserRouter>




        </div>
    );
}

export default App;