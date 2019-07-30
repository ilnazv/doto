import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  makeStyles,
  Theme,
  createStyles,
  Icon,
  LinearProgress,
  Grid
} from "@material-ui/core";
import { Inbox, Mail } from "@material-ui/icons";
import clsx from "clsx";
import { HeroLink } from "../../Pages/Dashboard/HeroCard";

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

    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      top: theme.mixins.toolbar.minHeight,
      [theme.breakpoints.up("sm")]: {
        top: theme.spacing(8)
      }
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
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const classes = useStyles();
  const { setMinimized, loading } = props;

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <HeroLink path="/">
                <Icon>dashboard</Icon>
              </HeroLink>
            </Grid>
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
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={openDrawer}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <Divider />
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <Inbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <Inbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <div
          className={clsx(classes.content, {
            [classes.contentShift]: openDrawer
          })}
        >
          {props.children}
        </div>
      </main>
    </>
  );
};
