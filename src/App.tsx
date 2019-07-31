import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./Shared/Components/Layout";
import { heroesService } from "./Pages/Dashboard/HeroService";
import { IHero } from "./Pages/Dashboard/Dashboard";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

interface AppState {
  minimized: boolean;
  heroes: IHero[];
  loading: boolean;
}

const Dashboard = React.lazy(() => import("./Pages/Dashboard/Dashboard"));
const HeroStats = React.lazy(() => import("./Pages/HeroStats/HeroStats"));
const theme = createMuiTheme();

class App extends React.Component<{}, AppState> {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      minimized: false,
      heroes: [],
      loading: true
    };
  }

  componentDidMount() {
    heroesService.loadHeroStats().then(heroes =>
      this.setState({
        heroes,
        loading: false
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
    const { minimized, heroes, loading } = this.state;

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <MuiThemeProvider theme={theme}>
          <Layout setMinimized={this.handleToggle} loading={loading}>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Dashboard
                      minimized={minimized}
                      heroes={heroes}
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
          </Layout>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
