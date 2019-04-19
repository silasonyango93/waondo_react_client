import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.jsx";



import AdminLogin from '../system_modules/system_admin/AdminLogin.jsx';
import TermIterationsConfig from '../system_modules/system_admin/TermIterationsConfig.jsx';
import ActualTermsRegistration from '../system_modules/system_admin/ActualTermsRegistration.jsx';
import WeekIterationsConfig from '../system_modules/system_admin/WeekIterationsConfig.jsx';
import ActualWeeksRegistration from '../system_modules/system_admin/ActualWeeksRegistration.jsx';


class App extends Component {
  render() {
	  const hist = createBrowserHistory();
    return (
        <Router history={hist}>
    <Switch>
        
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
		
		<Route path="/admin_login" component={AdminLogin} />
		<Redirect from="/" to="/admin_login" />
		
		<Route path="/term_iterations_config" component={TermIterationsConfig} />
		<Route path="/actual_term_registration" component={ActualTermsRegistration} />
		<Route path="/week_iterations_config" component={WeekIterationsConfig} />
		<Route path="/actual_weeks_registration" component={ActualWeeksRegistration} />
		
	
    </Switch>
  </Router>
    );
  }
}

export default App;