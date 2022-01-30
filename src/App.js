import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-signup/sign-in-and-signup.component';
import Writer from './pages/writer/writer.component';


import useToken from './token/useToken';
import Subscription from './components/subscription/subscription.component';
import DodajRacun from './pages/dodaj-racun/dodaj-racun.component';
import MojeKnjige from './pages/moje-knjige/moje-knjige.component';
import Read from './pages/read/read.component';


function App() {

  const { token, removeToken, setToken } = useToken();
  return (
    <div>
      <Header token={token} removeToken={removeToken} />

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/oAutoru' component={Writer} />
        <Route path='/eknji' component={ShopPage} />
        <Route path='/dodajRacun' component={DodajRacun} />

        {
          !token && token !== "" && token !== undefined ?
            null : (
              <Route path='/mojeKnjige' component={MojeKnjige} />
            )
        }
        
        <Route path='/signIn'>
          <SignInAndSignUpPage token={token} setToken={setToken} />
        </Route>


        <Route path='/pretplata/:knjigaId' component={Subscription} />
        <Route path='/citajKnjigu/:knjigaId' component={Read} />



      </Switch>

    </div>
  );
}

export default App;
