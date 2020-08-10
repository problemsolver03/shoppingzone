import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose  } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './redux/reducers'
import Login from './components/Authentication/Login';
import Results from './components/ProductResults/Results'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
)

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
          <div className="App">
            <Router >
                <Switch>
                <Route component={Login} path="/" exact></Route>
                <Route component={Results} path="/results" exact></Route>
                </Switch>
              </Router>
            </div>
            </Provider>
        );
      }
  
}
export default App;
