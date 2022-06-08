import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
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
import IsPrivate from "../src/components/Autorization/IsPrivate"
import IsAdmin from '../src/components/Autorization/IsAdmin'
import BookingDetails from './pages/Hotel/BookingDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/hotels/create' element={<IsPrivate><CreateHotel /></IsPrivate>} />
        <Route path='/hotels/:id' element={<IsPrivate><DetailsHotel /></IsPrivate>} />
        <Route path='/profile' element={<IsPrivate><UserPerfil /></IsPrivate>} />
        <Route path='/booking/:id/details' element={<IsPrivate><IsAdmin><BookingDetails /></IsAdmin></IsPrivate>} />

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
