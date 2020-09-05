import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    const{title,body,id} = props.post;

    //Styles
    const useStyles = makeStyles((theme) => ({
        paper: {
            margin: theme.spacing(1),
            padding: theme.spacing(2),
            textAlign: 'left',
            color: '#dcdde1',
            background: '#353b48',
            border: '1px solid black'
        },
    }));
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper}>
                <h1>Post Title: <small>{title}</small></h1>
                <p>Main Post: <small>{body}</small></p>
                <Link to={'/post/'+id}><Button variant="contained" color="primary">See Details</Button></Link>
            </Paper>
        </div>
    );
};

export default Posts;