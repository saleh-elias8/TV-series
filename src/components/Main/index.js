import React from "react";
import {Router,Routes,Route} from 'react-router-dom';
import Series from "../../containers/Series";
import SingleSeries from "../../containers/SingleSeries";

const Main = (props) =>{
    <Router>
        <Routes>
            <Route exact path="/" element={<Series/>} />
            <Route path="/series/:id" element={<SingleSeries/>} />  
        </Routes>
    </Router>
};

export default Main;