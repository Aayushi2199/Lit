// App.js
import { Routes, Route } from 'react-router-dom';
import NavBar from "./component/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Login from './pages/login';
 
const App = () => {
   return (
      <>
      {/* <NavBar /> */}
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="*" element={<NoMatch />} /> */}
         </Routes>
      </>
   );
};
 
export default App;