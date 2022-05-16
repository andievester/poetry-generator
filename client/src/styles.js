import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      container: {
        padding: '0'
      },
      poem: {
        width: '100%',
        margin: '10px 0'
      }
}));