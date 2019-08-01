import React from "react";
import { IHero } from "../Dashboard/Dashboard";
import { Fab, Icon, Theme } from "@material-ui/core";
import { HeroLink } from "../Dashboard/HeroCard";
import { withStyles, CSSProperties, createStyles, withTheme } from "@material-ui/styles";

const styles = (theme: Theme) => createStyles({
  root: {
    position: "relative"
  } as CSSProperties,
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  } as CSSProperties
});

interface HeroStatsProps {
  match: any;
  hero: IHero;
  classes: any;
}

export class HeroStats extends React.Component<HeroStatsProps, {}> {
  private classes: any;
  constructor(props: HeroStatsProps) {
    super(props);
    this.classes = props.classes;
  }

  public render(): JSX.Element {
    return (
      <div>
        <img src={this.props.hero.imageUrl} alt={this.props.hero.name} />
        <span>Name: {this.props.hero.name}</span>
        <span>Attack: {this.props.hero.attack_type}</span>
        <HeroLink path="/" goBack>
          <Fab color="primary" aria-label="add" className={this.classes.fab}>
            <Icon>chevron_left</Icon>
          </Fab>
        </HeroLink>
      </div>
    );
  }
}

export default withTheme(withStyles(styles)(HeroStats));
