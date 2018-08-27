import React from 'react';
import { Provider } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import store from './store/';
import logo from './logo.svg';
import routes from './config/routes'; 

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DocumentTitle title="micazza">
          <Router>
            <div className="App">
              <main>
                <Switch>
                    {routes.private.map((route: any) =>
                      <Route 
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        component={route.component} 
                        roles={route.roles} />
                    )}
                    {routes.public.map((route: any) =>
                      <Route 
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        component={route.component} />
                    )}
                  </Switch>
              </main>
            </div>
          </Router>
        </DocumentTitle>
      </Provider>
    );
  }
}

export default App;
