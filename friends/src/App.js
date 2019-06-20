import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Router lassName="App">

      <div className='friend-list-container'>
      <Container className='container' maxWidth="md">

              <Link to="/login">Login</Link> 
              <br></br>

              <Link to="/protected">Protected Page</Link>

          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={Friends} />
        </Container>
        </div>
    </Router>
  );
}

export default App;
