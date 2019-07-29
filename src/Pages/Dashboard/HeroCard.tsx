import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Theme,
  createStyles,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  ButtonBase
} from "@material-ui/core";
import { IHero } from "./Dashboard";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      width: "150px",
      backgroundColor: "#ffffff14"
    },

    cardMedia: {
      height: 0,
      paddingTop: "56.25%"
    },

    cardTitle: {
      fontSize: 12
    },

    cardSubheader: {
      fontSize: 10
    }
  })
);

export function HeroCard(props: {
  hero: IHero;
  minimized: boolean;
}): JSX.Element {
  const classes = useStyles();

  return (
    <HeroLink id={props.hero.name}>
      <Card className={classes.hero} raised={true} square={true}>
        <CardHeader
          avatar={
            props.minimized ? <Avatar src={props.hero.iconUrl} /> : undefined
          }
          title={props.hero.name}
          titleTypographyProps={{
            className: classes.cardTitle
          }}
          subheader={props.hero.attack_type}
          subheaderTypographyProps={{
            className: classes.cardSubheader
          }}
        />
        {!props.minimized && (
          <CardMedia
            className={classes.cardMedia}
            image={props.hero.imageUrl}
          />
        )}
      </Card>
    </HeroLink>
  );
}

const HeroLink = withRouter((props: any) => (
  <ButtonBase onClick={() => props.history.push(`/hero/${props.id}`)}>
    {props.children}
  </ButtonBase>
));
