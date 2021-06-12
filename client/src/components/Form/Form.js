import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import {
  Spinner, Modal, ModalHeader, ModalBody
} from 'reactstrap';
import { Container } from 'reactstrap';
import {  Form, FormGroup, Label, Input, Table} from 'reactstrap';

import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';

const JobForm = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', salary: 0 , location: '' , selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const [toggle, setToggle] = useState(() => {return false});

  const changeToggle = () => {
    setToggle(prevState => { return !prevState });
  }

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }

  return (
    <div>
      

    <button className={classes.button} onClick={changeToggle}>Add job</button>

    <Modal isOpen={toggle} toggle={changeToggle}  className="">
        <ModalHeader >ADD JOB</ModalHeader>
        <ModalBody>
        <br></br>
        <Form id="register" method="post" onSubmit={handleSubmit}>
    <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name"  placeholder="Enter your name" required/>
      </FormGroup>
      <FormGroup>
        <Label for="name">Job title</Label>
        <Input onChange={(e) => setPostData({ ...postData, title: e.target.value })} type="text" name="name" id="name"  placeholder="Enter your name" required/>
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input onChange={(e) => setPostData({ ...postData, message: e.target.value })} type="textarea" name="description" id="description"  placeholder="Enter your job description" required/>
      </FormGroup>
      <FormGroup>
        <Label for="tags">Skills</Label>
        <Input onChange={(e) => setPostData({ ...postData, tags: e.target.value })} type="text" name="name" id="name"  placeholder="Enter your name" required/>
      </FormGroup>
       <FormGroup>
        <Label for="salary">Salary</Label>
        <Input onChange={(e) => setPostData({ ...postData, salary: e.target.value })} type="number" name="salary" id="salary"  placeholder="Enter your salary" required/>
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input onChange={(e) => setPostData({ ...postData, location: e.target.value })} type="text" name="location" id="location" placeholder="Enter your salary" required/>
      </FormGroup>

      <FormGroup>
      <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
      </FormGroup>
      
      <Button type="submit" className='button_login bg-success' onClick={changeToggle}>Submit</Button>
    </Form>
        </ModalBody>
      </Modal>

    </div>
    
  );
};

export default JobForm;
