import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Theme,
  createStyles,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  Typography,
  ButtonBase
} from "@material-ui/core";
import { IHero } from "./Dashboard";

const baseApiUrl = "https://api.opendota.com";
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

export function Hero(props: { hero: IHero; minimized: boolean }): JSX.Element {
  const imageFullUrl = baseApiUrl + props.hero.imageUrl;
  const iconFullUrl = baseApiUrl + props.hero.iconUrl;
  const classes = useStyles();

  return (
    <ButtonBase>
      <Card className={classes.hero} raised={true} square={true}>
        <CardHeader
          avatar={
            props.minimized ? <Avatar src={iconFullUrl} /> : undefined
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
        {!props.minimized && <CardMedia className={classes.cardMedia} image={imageFullUrl} />}
      </Card>
    </ButtonBase>
  );
}
