import './App.css';
import Appbar from './components/Appbar';
import bgpic from './components/assets/basicbg.jpg'

function App(){


    return (
        <div className="App" style={{backgroundImage: `url(${bgpic})`}}>
        <Appbar/>




        </div>
    );
}

export default App;