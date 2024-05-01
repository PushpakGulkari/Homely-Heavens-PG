import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Landingscreen from './screens/Landingscreen';
import Profilescreen from './screens/Profilescreen';
import Footer from './components/Footer';
import Aboutus from './screens/Aboutus';
import Contactus from './screens/Contactus';


function App() {
  return (
    <div className="App">
     <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Homescreen/>}></Route>
        <Route path='/book/:roomid/:fromdate/:todate' element={<Bookingscreen/>}></Route>
        <Route path='/register' element={<Registerscreen/>}></Route>
        <Route path='/login' element={<Loginscreen/>}></Route>
        <Route path='/' element={<Landingscreen/>}></Route>
        <Route path='/profile' element={<Profilescreen/>}></Route>
        <Route path='/about' element={<Aboutus/>}></Route>
        <Route path='/contact' element={<Contactus/>}></Route>
      </Routes>

    </BrowserRouter>
    <Footer/>

    </div>
  );
}

export default App;
