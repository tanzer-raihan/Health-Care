
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/HomePage/Home';
import Footer from './Components/Footer/Footer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/About/About';
import Appointment from './Components/AppointMent/Appointment';
import Details from './Components/Details/Details';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">



      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>

            </Route>


            <Route path='/contact'>
              <About></About>

            </Route>
            <PrivateRoute path='/appointment'>
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path='/services/:sid'>
              <Details></Details>
            </PrivateRoute>
            <Route path='/signin'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>

            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
