import React from 'react';
import './App.css';
import { Button, Container,List,Paper,ListItemIcon,ListItem,ListItemText} from '@material-ui/core';
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
  appbar:{
    marginBottom:"30px"
  },
  paper: {
    textAlign: 'center',
    border :"1px solid #0278ae",
    borderRadius:"20px",
    color: theme.palette.text.secondary,
    height:"100%",
    boxShadow: "0px 0px 10px rgba(0,0,0,.2)",
    padding:"20px 0px",
    marginTop:"10px",
    [theme.breakpoints.between('sm', 'md')]:{
      marginBottom:"3px",
      height:"100%", 
    },
    [theme.breakpoints.down(960)]:{
      marginBottom:"1px",
      height:"auto",
     
    },
  
  },
  button_icon:{
    color:"green",
    minWidth:"40",
    paddingLeft:"20px"
  },
  text_item_list:{
    color:"#000",
    padding:"2px",
    fontWeight:"900",
    fontFamily: "'Ubuntu', 'sans-serif'",
    
    
  },
  container:{
    padding: "0px 80px",
    [theme.breakpoints.down(957)]:{
      padding: "0px 140px",
    },[theme.breakpoints.down(850)]:{
      padding: "0px 50px",
    }
  },
  button:{
    backgroundColor:"#0278ae",
    color:"#fff",
    fontWeight:"bold",
    margin:"20px",
    border: "none",
   padding:"10px 20px",
   borderRadius:"5px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "19px",
   
    cursor: "pointer",
  }
  
}));
function App() {
  const classess = useStyles()
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
    <Grid container   spacing={5}  >
        <Grid item md={4} xs={12} spacing={4} >
        
          <Paper className={classess.paper} >
          <button   className={classess.button} >
                  Get Started
          </button>
            <List>
            <ListItem>
                  <ListItemIcon>
                  <CheckCircleOutlineIcon className={classess.button_icon} />
                  </ListItemIcon>
                  <ListItemText className={classess.text_item_list}
                    primary="All time UP cpu"
                   
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon className={classess.button_icon} />
                  </ListItemIcon>
                  <ListItemText className={classess.text_item_list}
                    primary="8 GB RAM, 500 GB Hard disk"
                   
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon className={classess.button_icon} />
                  </ListItemIcon>
                  <ListItemText className={classess.text_item_list}
                    primary="Use the Kubernetes Horizontal Pod Autoscaler to add instances of your application services as needed to meet demand "
                   
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon className={classess.button_icon} />
                  </ListItemIcon>
                  <ListItemText className={classess.text_item_list}
                    primary="fully managed my sql"
                   
                  />
                </ListItem>
            </List>
            </Paper>
        </Grid>
        <Grid item md={4} xs={12} spacing={4}>
        <Paper className={classess.paper} >
        <button   className={classess.button} >
                  Get Started
          </button>
            <List>
            <ListItem>
                  <ListItemIcon>
                  <CheckCircleOutlineIcon className={classess.button_icon} />
                  </ListItemIcon>
                  <ListItemText className={classess.text_item_list}
                    primary="All time UP cpu"
                   
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon className={classess.button_icon} />
                  </ListItemIcon>
                  <ListItemText className={classess.text_item_list}
                    primary="8 GB RAM, 500 GB Hard disk"
                   
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon className={classess.button_icon} />
                  </ListItemIcon>
                  <ListItemText className={classess.text_item_list}
                    primary="Use the Kubernetes Horizontal Pod Autoscaler to add instances of your application services as needed to meet demand"
                   
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon className={classess.button_icon} />
                  </ListItemIcon>
                  <ListItemText className={classess.text_item_list}
                    primary="fully managed my sql"
                   
                  />
                </ListItem>
            </List>
            </Paper>
        </Grid>
        <Grid item md={4} xs={12} spacing={4}>
        <Paper className={classess.paper} >
        <button   className={classess.button} >
                  Get Started
          </button>
            <List>
            <ListItem>
                  <ListItemIcon>
                  <CheckCircleOutlineIcon className={classess.button_icon} />
                  </ListItemIcon>
                  <ListItemText className={classess.text_item_list}
                    primary="All time UP cpu"
                   
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon className={classess.button_icon} />
                  </ListItemIcon>
                  <ListItemText className={classess.text_item_list}
                    primary="8 GB RAM, 500 GB Hard disk"
                   
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon className={classess.button_icon} />
                  </ListItemIcon>
                  <ListItemText className={classess.text_item_list}
                    primary="Use the Kubernetes Horizontal Pod Autoscaler to add instances of your application services as needed to meet demand"
                   
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon className={classess.button_icon} />
                  </ListItemIcon>
                  <ListItemText className={classess.text_item_list}
                    primary="fully managed my sql"
                   
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon className={classess.button_icon} />
                  </ListItemIcon>
                  <ListItemText className={classess.text_item_list}
                    primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                   
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon className={classess.button_icon} />
                  </ListItemIcon>
                  <ListItemText className={classess.text_item_list}
                    primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                   
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon className={classess.button_icon} />
                  </ListItemIcon>
                  <ListItemText className={classess.text_item_list}
                    primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                   
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon className={classess.button_icon} />
                  </ListItemIcon>
                  <ListItemText className={classess.text_item_list}
                    primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                   
                  />
                </ListItem>
            </List>
            </Paper>
        </Grid>
    </Grid>
    
    </Container>
        
      </React.Fragment>
  );
}


export default App;
