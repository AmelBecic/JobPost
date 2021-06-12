import React from 'react';
import classes from './MainPage.module.css'
import {Button} from 'antd'



const MainPage = () => {



    return (
            
      
        <div className={classes.wrapper}>
            <div className={classes.center}>
                <p className={classes.maintext}>What are you looking for?</p>
                <hr/>
                <div className={classes.buttons}>
                
                   <a href="/jobs"><Button className={classes.button}>Need a job</Button></a>
                    <Button className={classes.button}>Post a job</Button>
                </div>
            </div>
            
        </div>
        
       
        
    )



}


export default MainPage;