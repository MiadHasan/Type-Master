import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    margin: 'auto',
    marginTop: '20px',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: theme.palette.grey[200],
  },
  cardContent: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: '175px'
  }
}));