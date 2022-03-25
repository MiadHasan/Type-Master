import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    boxSizing: 'border-box',
    alignItems: 'center',
    padding: '5px',
    textDecoration: 'none',
    color: '#E5C052',
    '&:hover': {
      color: '#7FE7EC',
    },
  }
}));