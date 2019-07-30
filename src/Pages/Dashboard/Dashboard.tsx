import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import { HeroCard } from "./HeroCard";

export interface IHero {
  name: string;
  imageUrl: string;
  iconUrl: string;
  attack_type: string;
}

interface DashboardProps {
  classes: any;
  minimized: boolean;
  heroes: IHero[];
}

const styles = () => ({
  dashboard: {
    padding: 20,
    position: "relative"
  } as CSSProperties
});

export class Dashboard extends React.Component<DashboardProps, {}> {
  private classes: any;

  constructor(props: DashboardProps) {
    super(props);
    this.classes = props.classes;
  }

  public render(): JSX.Element {
    return (
      <>
        <div className={this.classes.dashboard}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            {this.props.heroes.map(x => (
              <Grid key={x.name} item>
                <HeroCard hero={x} minimized={this.props.minimized} />
              </Grid>
            ))}
          </Grid>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Dashboard);
