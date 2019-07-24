import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  const Dashboard = React.lazy(() => import('./Pages/Dashboard/Dashboard'));
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
