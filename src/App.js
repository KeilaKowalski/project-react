// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
// import Input from './components/Input';
import ItemListContainer from './containers/ItemListContainer';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import NotFound from './components/NotFound';
import ItemDetailContainer from './containers/ItemListContainer/ItemDetailContainer';

function App() {
  
  return (
    // <BrowserRouter>
    
    // <NavBar></NavBar>
    // <Routes>

    //   <Route path='/' element={<ItemListContainer/>}></Route>

    //   <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>

    //   <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>

    //   <Route path='*' element={<NotFound/>}></Route>
    // </Routes>

    // </BrowserRouter>
    
    
    <div className='container'>
      <NavBar />
      {/* // {/* <ItemListContainer greeting={"Bienvenido/a"}>
    //   <h2>Este es el item list container</h2> */}
    <ItemDetailContainer />
    </div>
    
  );
}

//App es el componente principal
export default App;
