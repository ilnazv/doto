import React from "react";
import { IHero } from "../Dashboard/Dashboard";

export default class HeroStats extends React.Component<
  { match: any; hero: IHero },
  {}
> {
  public render(): JSX.Element {
    return (
      <div>
        <img src={this.props.hero.imageUrl} alt={this.props.hero.name} />
        <span>Name: {this.props.hero.name}</span>
        <span>Attack: {this.props.hero.attack_type}</span>
      </div>
    );
  }
}
