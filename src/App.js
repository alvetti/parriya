import './App.css';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className='App'>
      <div className='main'>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
