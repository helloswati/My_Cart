import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const product = [
    {
      price: 99999,
      name:"Iphone",
      quantity:0,
    },

    {
      price: 99999,
      name:"Oneplus",
      quantity:0,
    }, 

  ]
  return (
    <>
    <Navbar/>
    <ProductList/>
    <Footer/>
    </>

  );
}

export default App;
