import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#edeaf7',
    borderRadius: '15px',
  },
  form: {
    fontFamily: 'Verdana',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonSubmit: {
    fontFamily: 'Verdana',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#553c9a',
  },
  moodOptions: {
    fontFamily: 'Verdana',
    marginTop: 10,
    marginBottom: 10,
  },
  questions: {
    fontFamily: 'Verdana',
    fontStyle: 'italic'
  },
}));