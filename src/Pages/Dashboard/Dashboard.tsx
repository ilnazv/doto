import React from "react";
import { heroesService } from "./HeroService";
import css from "./Dashboard.module.scss";
import { Card, Grid, Avatar, CardHeader, CardMedia } from "@material-ui/core";

const baseApiUrl = "https://api.opendota.com";

export interface IHero {
  name: string;
  imageUrl: string;
  iconUrl: string;
  attack_type: string;
}

interface DashboardProps {
  heroes: IHero[];
}

export default class Dashboard extends React.Component<{}, DashboardProps> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
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

  public render(): JSX.Element {
    return (
      <>
        <div className={css.dashboard__background} />
        <div className={css.dashboard}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            {this.state.heroes.map(x => (
              <Grid key={x.name} item>
                <Hero hero={x} />
              </Grid>
            ))}
          </Grid>
        </div>
      </>
    );
  }
}

function Hero(props: { hero: IHero }) {
  const imageFullUrl = baseApiUrl + props.hero.imageUrl;
  const iconFullUrl = baseApiUrl + props.hero.iconUrl;
  return (
    <Card className={css.hero}>
      <CardHeader
        avatar={<Avatar src={iconFullUrl} />}
        title={props.hero.name}
        subheader={props.hero.attack_type}
      />
      <CardMedia className={css.cardMedia} image={imageFullUrl} />
    </Card>
  );
}
