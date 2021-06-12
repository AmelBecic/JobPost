import React from 'react';
import { Card,  CardContent,  Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch } from 'react-redux';
import moment from 'moment';


import {  deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  

  return (
    <div className={classes.post}>
      
      <Card className={classes.card}>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      

      <hr/>
      
      <div>
        <p className="salary"><strong> $ {post.salary} /  hour</strong></p>
      </div>
      
     
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>

      
      
      <hr/>

      <div>
        <Typography variant="h6">{post.name}</Typography>
      </div>
      <div className={classes.footer}>
      <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )}
      </div>
      <div className={classes.apply}>
        <Button className={classes.applybtn}>Apply now</Button>
      </div>
    </Card>

    
    
    
    </div>


    
    
  );

};

export default Post;
