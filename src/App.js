import './App.css';
import { Routes, Route } from "react-router";

//pages
import Home from './pages/Home';
import About from './pages/About';
import Hotels from './pages/Hotels';
import CreateHotel from './pages/CreateHotel';
import DetailsHotel from './pages/DetailsHotel';

//pages => rutas error
import Error from './pages/Error';
import NotFound from './pages/NotFound';

//pages => rutas auth
import Signup from "./pages/Signup";
import Login from "./pages/Login";

//components
import Navbar from "./components/Navbar"

//Private routes
import IsPrivate from "./components/isPrivate"; 

function App() {
  return (
    <div className="App">
      <Navbar />
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Hotels' element={<Hotels />} />
        <Route path='/Hotels/create' element={<IsPrivate><CreateHotel /></IsPrivate>} />
        <Route path='/Hotels/:id' element={<IsPrivate><DetailsHotel /></IsPrivate>} />

        {/* auth FE routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* error FE routes */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>




    </div>
  );
}

export default App;
