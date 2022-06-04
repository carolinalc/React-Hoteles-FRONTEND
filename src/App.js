import './App.css';
import { Routes, Route } from "react-router";

//pages
import Home from './pages/Home';
import About from './pages/About';
import Hotels from './pages/Hotel/Hotels';
import CreateHotel from './pages/Hotel/CreateHotel';
import DetailsHotel from './pages/Hotel/DetailsHotel';
import UserPerfil from './pages/auth/UserPerfil';

//pages => rutas error
import Error from './pages/Error/Error';
import NotFound from './pages/Error/NotFound';

//pages => rutas auth
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";

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
        <Route path='/Profile' element={<IsPrivate><UserPerfil /></IsPrivate>} />

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
