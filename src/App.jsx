import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './assets/scss/global.scss';
import { AppHeader } from './cmps/AppHeader';
import { ContactList } from './cmps/ContactList';
import { Charts } from './pages/Charts';
import { Home } from './pages/Home';
// import './pages/MisterBitCoinApp';
import { MisterBitCoinApp } from './pages/MisterBitCoinApp';
import { ContactEdit } from './pages/ContactEdit'
import { ContactDetails } from './pages/ContactDetails'
import { Signup } from './pages/Signup'

function App() {

  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main className="main-container">
          <Switch>
            <Route path='/contact/edit/:id?' component={ContactEdit} />
            <Route path='/contact/:id' component={ContactDetails} />
            <Route path='/statistics' component={Charts} />
            <Route path='/Signup' component={Signup} />
            <Route path='/contacts' component={MisterBitCoinApp} />
            <Route path='/' component={Home} />
            {/* <MisterBitCoinApp /> */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
