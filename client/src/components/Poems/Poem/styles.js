import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  cardHeader: {
    height: '150px',
    backgroundColor: '#ee4b2b',
    backgroundBlendMode: 'darken',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    backgroundColor: '#fdedea',
  },
  poemTitle: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  poemTitle2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  poemLines: {
    display: 'flex',
    whiteSpace: 'pre-wrap',
    margin: '20px',
    padding: '0 30px 0 5px',
    color: 'black'
  },
  font: {
    fontFamily: 'Verdana',
    color: 'black'
  },
  titleFont: {
    fontFamily: 'Verdana'
  },
});