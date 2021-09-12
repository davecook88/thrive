import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Menu } from "@material-ui/icons";
import Link from "next/link";
import { useSession, signOut } from "next-auth/client";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      fontFamily: theme.typography.fontFamily,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [session] = useSession();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            La Karencita
          </Typography>
          {session ? (
            <Button onClick={() => signOut()}>Logout</Button>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
