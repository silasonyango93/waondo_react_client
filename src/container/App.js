import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.jsx";



import AdminLogin from '../system_modules/system_admin/AdminLogin.jsx';


class App extends Component {
  render() {
	  const hist = createBrowserHistory();
    return (
        <Router history={hist}>
    <Switch>
        
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
		
		<Route path="/admin_login" component={AdminLogin} />
		<Redirect from="/" to="/admin_login" />
		
	
    </Switch>
  </Router>
    );
  }
}

export default App;