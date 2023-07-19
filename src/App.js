import './App.css';
import ItemListContainer from './Components/Content/ItemListContainer/ItemListContainer';
import Error from './Components/Content/Pages/Error';
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
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>

        <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
