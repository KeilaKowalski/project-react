import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Input from './components/Input';

function App() {
  
  return (
    <div className='container'>
    <NavBar></NavBar>
    <Input valorPlaceholder={"Hola"} title={" como estas?"}/>
    </div>
  );
}

//App es el componente principal
export default App;
