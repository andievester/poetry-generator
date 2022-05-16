import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonSubmit: {
    marginTop: 20,
    marginBottom: 10,
  },
  moodOptions: {
    marginTop: 10,
    marginBottm: 10,
  },
  questions: {
    marginTop: 20,
    marginBottm: 20,
  }
}));