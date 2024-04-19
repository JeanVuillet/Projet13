import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage/HomPage';
import { SignIn } from './Pages/SignIn/SingIn';
import { User } from './Pages/User/User';
import { Error } from './Pages/Error/Error';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/'element={<HomePage/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/error' element={<Error/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
