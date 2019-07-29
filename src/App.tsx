import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./Shared/Components/Layout";
import { heroesService } from "./Pages/Dashboard/HeroService";
import { IHero } from "./Pages/Dashboard/Dashboard";

interface AppState {
  minimized: boolean;
  heroes: IHero[];
}

class App extends React.Component<{}, AppState> {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      minimized: false,
      heroes: []
    };
  }

  componentDidMount() {
    heroesService.loadHeroStats().then(heroes =>
      this.setState({
        heroes
      })
    );
  }

  private handleToggle = () => {
    this.setState({
      minimized: !this.state.minimized
    });
  };

  private getHeroByName = (name: string): IHero => {
    return (
      this.state.heroes.find(x => x.name.includes(name)) || {
        attack_type: "undefined",
        iconUrl: "undefined",
        imageUrl: "undefined",
        name: "undefined"
      }
    );
  };

  public render() {
    const Dashboard = React.lazy(() => import("./Pages/Dashboard/Dashboard"));
    const HeroStats = React.lazy(() => import("./Pages/HeroStats/HeroStats"));
    return (
      <Layout setMinimized={this.handleToggle}>
        <Router basename={process.env.PUBLIC_URL}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Dashboard
                    minimized={this.state.minimized}
                    heroes={this.state.heroes}
                    key="dashboard"
                  />
                )}
              />
              <Route
                exact
                path="/hero/:id"
                render={props => (
                  <HeroStats
                    hero={this.getHeroByName(props.match.params.id)}
                    {...props}
                    key="herostats"
                  />
                )}
              />
            </Switch>
          </Suspense>
        </Router>
      </Layout>
    );
  }
}

export default App;
