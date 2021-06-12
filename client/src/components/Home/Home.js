import React, { useState, useEffect } from 'react';
import {  Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  
  return (
    <div>
      <Form currentId={currentId} setCurrentId={setCurrentId} />
     <hr/>
      <Grid container justify="space-between" alignItems="stretch" spacing={6}>
            <Grid item xs={12} sm={12} md={12}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            
          </Grid>
    </div>
    
  );
};

export default Home;
