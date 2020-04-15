import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import COMPONENTS from './components/componentMapper';

const DEFAULT_ROUTES = {
  about: {
    path: "/about",
    component: "AboutPage"
  },
}

function Routes({ routes: customRoutes }) {

  const routes = {...customRoutes, ...DEFAULT_ROUTES};

  return (
    <Router>
      <nav className='nav-bar'>
        <ul>
          <li>
            <NavLink to="/" activeClassName='active' exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName='active' exact>About</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        {
          Object.keys(routes).map((key) => {
            const route = routes[key];
            const Component = COMPONENTS[route.component];
            return (
              <Route 
                key={`route-${route.path}`}
                exact
                path={route.path}>
                  <Component />
              </Route>
            )
          })
        }
      </Switch>
    </Router>
  );
}

Routes.defaultProps = {
  routes: DEFAULT_ROUTES
}

export default Routes;
