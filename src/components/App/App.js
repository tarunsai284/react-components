import { Routes, Route } from "react-router-dom"
import {Home, Cards, Carousels, Navigator, Popup} from '../../components';
import './App.module.css';

const carouselJson = require('../../common/Carousel.json');


function App() {
    return (
        <div className="container-fluid">
            <Navigator/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="cards" element={ <Cards/> } />
                <Route path="carousels" element={ <Carousels carouselJson = {carouselJson}/> } />
                <Route path="popup" element={ <Popup/> } />
            </Routes>
        </div>
    );
}

export default App;
