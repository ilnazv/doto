import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./Shared/Components/Layout";

const App: React.FC = () => {
  const Dashboard = React.lazy(() => import("./Pages/Dashboard/Dashboard"));
  const [minimized, setMinimized] = React.useState(false);

  return (
    <Layout setMinimized={() => setMinimized(!minimized)}>
      <Router basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Dashboard minimized={minimized} />}
            />
          </Switch>
        </Suspense>
      </Router>
    </Layout>
  );
};

export default App;
