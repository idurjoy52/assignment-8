import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const DetailedPost = () => {
    //Styles
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
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

    const {postsId} = useParams();

    //Fetching Clicked Post
    const[detailedPost,setDetailedPost] = useState([]);
    useEffect(()=> {
        const postUrl = `https://jsonplaceholder.typicode.com/posts`;
        fetch(`${postUrl}/${postsId}`)
        .then(response => response.json())
        .then(data => setDetailedPost(data));
    },[]);
    const {title,body}=detailedPost;
    
    // Fetching Comments
    const [comments,setComments] = useState([]);
    useEffect(()=>{
        const commentsUrl= `https://jsonplaceholder.typicode.com/comments`;
        fetch(commentsUrl)
        .then(response=> response.json())
        .then(data => setComments(data));
    },[])
    //Filtering Comments of Corresponding Posts
    const postComments = comments.filter(comment=>comment.postId == postsId);

    return (
        <div  className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 style={{textAlign:'center'}}>Selcted Post:</h1>
                    <Paper className={classes.paper}>
                        <h1>Post Title: <small>{title}</small></h1>
                        <p>Main Post: <small>{body}</small></p>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <h1 style={{textAlign:'center'}}>Comments:</h1>
                        {
                            postComments.map(comment => <Comment key={comment.id} id={comment.id} comment={comment}></Comment>)
                        }
                </Grid>
            </Grid>
        </div>
    );
};

export default DetailedPost;