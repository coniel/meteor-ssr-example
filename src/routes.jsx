import { Link, Route, browserHistory } from 'react-router';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';

import { RaisedButton } from 'material-ui';
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';
import todoRoutes from 'TodoApp/client/routes';

const About = () => (
  <div>
    <h1>ABOUT</h1>
    <RaisedButton
      label='HOME'
      onTouchTap={() => browserHistory.push('/')}
    />
    <Link to='/privacy'>privacy</Link>
  </div>
);

const Privacy = () => (
  <div>
    <h1>PRIVACY</h1>
    <RaisedButton
      label='HOME'
      onTouchTap={(e) => {
        e.preventDefault();
        browserHistory.push('/')
      }}
    />
    <Link to='/about'>about</Link>
  </div>
);

const AppContainer = ({children}) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    {children}
  </MuiThemeProvider>
);

ReactRouterSSR.Run(
  <Route component={AppContainer}>
    {todoRoutes}
    <Route component={About} path='/about' />
    <Route component={Privacy} path='/privacy' />
  </Route>
);
