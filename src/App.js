import React from 'react';
import './App.css';
import { Button, Container, List, Paper, ListItemIcon, ListItem, ListItemText } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    marginBottom: "30px"
  },
  paper: {
    textAlign: 'center',
    border: "1px solid #0278ae",
    borderRadius: "20px",
    color: theme.palette.text.secondary,
    height: "100%",
    boxShadow: "0px 0px 10px rgba(0,0,0,.2)",
    padding: "20px 0px",
    marginTop: "10px",
    [theme.breakpoints.between('sm', 'md')]: {
      marginBottom: "3px",
      height: "100%",
    },
    [theme.breakpoints.down(960)]: {
      marginBottom: "1px",
      height: "auto",
    },
  },
  button_icon: {
    color: "green",
    minWidth: "40",
    paddingLeft: "20px"
  },
  text_item_list: {
    color: "#000",
    padding: "2px",
    fontWeight: "900",
    fontfamily: "'Ubuntu', 'sans-serif'",
  },
  container: {
    padding: "0px 80px",
    [theme.breakpoints.down(957)]: {
      padding: "0px 140px",
    }, [theme.breakpoints.down(850)]: {
      padding: "0px 50px",
    }
  },
  button: {
    backgroundColor: "#0278ae",
    color: "#fff",
    fontWeight: "bold",
    margin: "20px",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "19px",
    cursor: "pointer",
  }

}));
function App() {
  const classess = useStyles()
  const [arr1, setarr1] = React.useState([
    { id: 0, title: "All time UP cpu" },
    { id: 1, title: "8 GB RAM, 500 GB Hard disk" },
    { id: 2, title: "Use the Kubernetes Horizontal Pod Autoscaler to add instances of your application services as needed to meet demand " },
    { id: 3, title: "fully managed my sql" },]);
  const [arr2, setarr2] = React.useState([
    { id: 0, title: "All time UP cpu" },
    { id: 1, title: "8 GB RAM, 500 GB Hard disk" },
    { id: 2, title: "Use the Kubernetes Horizontal Pod Autoscaler to add instances of your application services as needed to meet demand " },
    { id: 3, title: "fully managed my sql" },]);
  const [arr3, setarr3] = React.useState([
    { id: 0, title: "All time UP cpu" },
    { id: 1, title: "8 GB RAM, 500 GB Hard disk" },
    { id: 2, title: "Use the Kubernetes Horizontal Pod Autoscaler to add instances of your application services as needed to meet demand " },
    { id: 3, title: "fully managed my sql" },
    { id: 4, title: "All time UP cpu" },
    { id: 5, title: "8 GB RAM, 500 GB Hard disk" },
    { id: 6, title: "Use the Kubernetes Horizontal Pod Autoscaler to add instances of your application services as needed to meet demand " },
    { id: 7, title: "fully managed my sql" },]);
  return (
    <React.Fragment>
      <AppBar position="static" className={classess.appbar}>
        <Toolbar>
          <IconButton edge="start" className={classess.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classess.title}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classess.container} >
        <Grid container spacing={5}  >
          <Grid item md={4} xs={12} spacing={4} >

            <Paper className={classess.paper} >
              <button className={classess.button} >
                Get Started
          </button>
              <List>
                {
                  arr1.map((item, id) => {
                    return <ListItem key={id}>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon className={classess.button_icon} />
                      </ListItemIcon>
                      <ListItemText className={classess.text_item_list}
                        primary={item.title}
                      />
                    </ListItem>
                  })
                }
              </List>
            </Paper>
          </Grid>
          <Grid item md={4} xs={12} spacing={4}>
            <Paper className={classess.paper} >
              <button className={classess.button} >
                Get Started
          </button>
              <List>
                {
                  arr2.map((item, id) => {
                    return <ListItem key={id}>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon className={classess.button_icon} />
                      </ListItemIcon>
                      <ListItemText className={classess.text_item_list}
                        primary={item.title}
                      />
                    </ListItem>
                  })
                }
              </List>
            </Paper>
          </Grid>
          <Grid item md={4} xs={12} spacing={4}>
            <Paper className={classess.paper} >
              <button className={classess.button} >
                Get Started
          </button>
              <List>
                {
                  arr3.map((item, id) => {
                    return <ListItem key={id}>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon className={classess.button_icon} />
                      </ListItemIcon>
                      <ListItemText className={classess.text_item_list}
                        primary={item.title} />
                    </ListItem>
                  })
                }
              </List>
            </Paper>
          </Grid>
        </Grid>

      </Container>

    </React.Fragment>
  );
}


export default App;
