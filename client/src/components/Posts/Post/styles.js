import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  post: {
    background: '8EE4AF' ,
    height: '500px' ,
    marginLeft: '15px' ,
    width: '300px'

    
  } ,
  apply: {
    marginTop: '20px' ,
    marginBottom: '5px' ,
    background: 'green' ,
    alignContent: 'center',
    color: 'white'
  } ,
  applybtn: {
    color: 'white' ,
    textAlign: 'center'
  },
  salary: {
    fontWeight: 'bold'
  } ,
  footer: {
    display: 'flex' ,
    justifyContent: 'space-between' ,
    marginTop: '15px'
  } ,
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  image: {
    height: '100%' , 
    width: '200px' ,
  
    margin: 'auto'

  } ,
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    padding: '50px' ,
    backgroundColor: '8EE4AF', 
    background: '8EE4AF' , 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    position: 'relative',
    width: '300px'
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    height: '150px'
  },
 
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
