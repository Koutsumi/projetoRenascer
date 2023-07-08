import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Painel from "../pages/Painel/Painel"


function RoutesApp(){
    return(
        <Router>
            <Routes>

                <Route path='/' element = {<Home/>}/>
                <Route path='/Login' element = {<Login/>}/>
                <Route path='/Painel' element = {<Painel/>}/>

            </Routes>
        </Router>
    )
}

export default RoutesApp