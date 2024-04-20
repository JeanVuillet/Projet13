import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { HomePage } from './Pages/HomePage/HomPage';
import { SignIn } from './Pages/SignIn/SingIn';
import { User } from './Pages/User/User';
import { Error } from './Pages/Error/Error';
import { MainNav } from './Components/MainNav/MainNav';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">

     <Router>
      <MainNav/>
      <Routes>
        <Route path='/'element={<HomePage/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/error' element={<Error/>}/>
      </Routes>
      <Footer/>
     </Router>
  
    </div>
  );
}

export default App;
