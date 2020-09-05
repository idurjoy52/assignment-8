import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const Comment = (props) => {
    //Styles
    const useStyles = makeStyles((theme) => ({
        large: {
          width: theme.spacing(7),
          height: theme.spacing(7),
          marginTop:theme.spacing(3)
        },
        root: {
            flexGrow: 1,
        },
        paper: {
            margin: theme.spacing(1),
            padding: theme.spacing(2),
            textAlign: 'left',
            color: '#dcdde1',
            background: '#130f40',
            border: '1px solid black'
        },
    }));
    const classes = useStyles();

    const {name,email,body}=props.comment;
    const propicId = props.id;

    //Fetching Photos
    const[proPics,setProPics]=useState([]);
    useEffect(()=>{
        const picUrl=`https://jsonplaceholder.typicode.com/photos`;
        fetch(`${picUrl}/${propicId}`)
        .then(response => response.json())
        .then(data =>setProPics(data));
    },[])
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item xs ={3} sm={2}>
                        <Avatar src={proPics.thumbnailUrl} alt="ProPic"  className={classes.large}/>
                    </Grid>
                    <Grid item xs={9} sm={10}>
                        <h2>Name: <small>{name}</small></h2>
                        <h3>Email Address: <small>{email}</small></h3>
                        <p>Comment: <small>{body}</small></p>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Comment;