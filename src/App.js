import './App.css';
import {Route, Link, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-signup/sign-in-and-signup.component';

import useToken from './token/useToken';


function App() {
  
  const { token, removeToken, setToken } = useToken();
  return (
    <div>
         <Header token={token} removeToken={removeToken}/> 
        
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route  path='/shop' component={ShopPage}/>
            <Route path='/signIn' >
              <SignInAndSignUpPage token={token} setToken={setToken}/>
            </Route>
          </Switch>
        
    </div>
  );
}

export default App;
