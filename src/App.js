import './App.css';
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import Home from  './Pages/Home Page/Home'


let App = () => {
  return (
    <div className="App">
     <Login />
     <SignUp />
     <Home />
     </div>
  );
}

export default App;
