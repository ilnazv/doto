import React from "react";
import { heroesService } from "./HeroService";
import { Grid, withStyles } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import { Hero } from "./HeroCard";

export interface IHero {
  name: string;
  imageUrl: string;
  iconUrl: string;
  attack_type: string;
}

interface DashboardState {
  heroes: IHero[];
}

interface DashboardProps {
  classes: any;
  minimized: boolean;
}

const gradColor0 = "#495591";
const gradColor1 = "#1e254c";

const styles = () => ({
  dashboard: {
    padding: 20,
    position: "relative"
  } as CSSProperties,

  dashboardBackground: {
    background: `radial-gradient(ellipse at 0% 0%, ${gradColor0} 0%, ${gradColor1} 100%)`,
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  } as CSSProperties
});

export class Dashboard extends React.Component<DashboardProps, DashboardState> {
  private classes: any;

  constructor(props: DashboardProps) {
    super(props);
    this.state = {
      heroes: []
    };
    this.classes = props.classes;
  }

  componentDidMount() {
    heroesService.loadHeroStats().then(heroes =>
      this.setState({
        heroes
      })
    );
  }

  public render(): JSX.Element {
    return (
      <>
        <div className={this.classes.dashboardBackground} />
        <div className={this.classes.dashboard}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            {this.state.heroes.map(x => (
              <Grid key={x.name} item>
                <Hero hero={x} minimized={this.props.minimized} />
              </Grid>
            ))}
          </Grid>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Dashboard);
