import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Posts from '../Posts/Posts';



const Home = () => {
    //Styles
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
    }));
    const classes = useStyles();

    //Fetching Posts
    const[posts,setPosts] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(res=>res.json())
        .then(data => setPosts(data));
    },[])

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 style={{textAlign:'center',borderBottom:'1px solid gray'}}>Posts</h1>
                    <h2 style={{textAlign:'center'}}>Number of Posts: {posts.length}</h2>
                    {
                        posts.map(post=><Posts key={post.id} post={post}></Posts>)
                    }
                    
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;

