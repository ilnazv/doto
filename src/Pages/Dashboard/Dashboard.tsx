import React from "react";
import { heroesService } from "./HeroService";
import css from './Dashboard.module.scss';

const baseApiUrl = "https://api.opendota.com";

export interface IHero {
    name: string;
    imageUrl: string;
}

interface DashboardProps {
    heroes: IHero[];
}

export default class Dashboard extends React.Component<{}, DashboardProps> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            heroes: []
        }
    }

    componentDidMount() {
        heroesService.loadHeroStats().then(heroes => this.setState({
            heroes
        }));
    }

    public render(): JSX.Element {
        return (
            <div className={css.dashboard}>
                {this.state.heroes.map(x => <Hero hero={x}></Hero>)}
            </div>
        );
    }
}

function Hero(props: { hero: IHero }) {
    return <div className={css.hero}>
        <span>{props.hero.name}</span>
        <img src={baseApiUrl + props.hero.imageUrl} alt={props.hero.name} />
    </div>;
}