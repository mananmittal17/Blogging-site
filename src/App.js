import logo from './logo.svg';
import './App.css';
import HeaderBar from './Common/headerBar';
import Footer from './Common/footer';
import Template1 from './templates/template1';
import Template2 from './templates/template2';
import Carousel from './templates/carousel';


function App() {
  return (
    <div className="App">
      <div className='topToBottom'>
        <div>
      <HeaderBar ></HeaderBar>
      <Carousel />
      <Template1 />
      <Template2 />
      </div>
      <Footer />
      </div>
    </div>
      
  );
}

export default App;
