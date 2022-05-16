import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  cardContent: {
    height: '150px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
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
    padding: '0 30px 0 5px'
  },
});