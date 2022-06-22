import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Input from './components/Input';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  
  return (
    <div className='container'>
    <NavBar></NavBar>
    <ItemListContainer greeting={"Bienvenido/a"}>
      <h2>Este es el item list container</h2>
    </ItemListContainer>
    {/* <Input valorPlaceholder={"Hola"} title={" como estas?"}/> */}
    </div>
  );
}

//App es el componente principal
export default App;
