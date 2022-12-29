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
        color: 'transparent',
        backgroundImage: 'linear-gradient(to right, #553c9a 45%, #ee4b2b)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        fontFamily: 'Verdana',
        paddingBottom: '0.25rem',
      },
      container: {
        padding: '0',
      },
      poem: {
        width: '100%',
      },
}));