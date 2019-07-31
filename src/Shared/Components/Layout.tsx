import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Theme,
  createStyles,
  Icon,
  LinearProgress,
  Grid
} from "@material-ui/core";

const drawerWidth = 240;
const gradColor0 = "#495591";
const gradColor1 = "#1e254c";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {},

    background: {
      top: 0,
      left: 0,
      height: "calc(100% + 56px)", //56px - mobile browser address bar size
      width: "100%",
      position: "fixed",
      background: `radial-gradient(ellipse at 0% 0%, ${gradColor0} 0%, ${gradColor1} 100%)`,
      zIndex: -1
    },
    contentHeader: {
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: drawerWidth
    }
  })
);

export const Layout = (
  props: React.PropsWithChildren<{ setMinimized: () => void; loading: boolean }>
) => {
  const classes = useStyles();
  const { setMinimized, loading } = props;

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
          >
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="minimize toggle"
                edge="end"
                onClick={setMinimized}
              >
                <Icon>photo_size_select_large</Icon>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <div className={classes.background} />
        <div className={classes.contentHeader} />
        {loading && <LinearProgress />}
        <div className={classes.content}>{props.children}</div>
      </main>
    </>
  );
};
