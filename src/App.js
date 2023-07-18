import './App.css';
import ItemListContainer from './Components/Content/ItemListContainer/ItemListContainer';
import Almacen from './Components/Content/Pages/Almacen';
import Bebidas from './Components/Content/Pages/Bebidas';
import Carnes from './Components/Content/Pages/Carnes';
import Error from './Components/Content/Pages/Error';
import Guarnicion from './Components/Content/Pages/Guarnicion';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/Content/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className='App'>
      <div className='main'>
        <BrowserRouter>
        <Header/>
        
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/carnes' element={<Carnes/>}/>
          <Route path='/carnes/:id' element={<ItemDetailContainer/>}/>
          <Route path='/guarnicion' element={<Guarnicion/>}/>
          <Route path='/guarnicion:id' element={<ItemDetailContainer/>}/>
          <Route path='/almacen' element={<Almacen/>}/>
          <Route path='/almacen:id' element={<ItemDetailContainer/>}/>
          <Route path='/bebidas' element={<Bebidas/>}/>
          <Route path='/bebidas:id' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>

        <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
