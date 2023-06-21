
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import CardContainer from './Components/CardContainer/CardContainer';
import DetailProducto from './Components/DetailProducto/DetailProducto';
import FormProducto from './Components/FormProducto/FormProducto';
import LandingPage from './Components/LandingPage/LandingPage';
import {useLocation, Routes, Route, useNavigate} from 'react-router-dom'

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  //Funcion para salir de la landing page e ir al home 
  function onClick(){
    navigate('/home')
  }

  return (
    <div>
      {location.pathname === '/' ? <LandingPage onClick={onClick}></LandingPage> : <NavBar></NavBar>}
      <Routes>
        <Route path='/home' element ={<CardContainer/>}></Route>
        <Route path='/formProducto' element ={<FormProducto/>}></Route>
        <Route path='/detailProducto/:id' element ={<DetailProducto/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
