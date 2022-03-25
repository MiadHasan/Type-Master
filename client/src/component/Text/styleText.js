import {makeStyles} from '@material-ui/core/styles'


export default makeStyles(() => ({
    Container: {
        borderRadius: '10px',
        fontStyle: 'inherit',
        backgroundColor: 'rgb(237, 237, 250)',
        padding: '20px',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '800px',
        width: '90%',
    },
    Quote: {
        fontSize: '26px',
        textAlign: 'justify',
        margin: '0 0 20px 0',
        fontStyle: 'inherit',
        fontFamily: 'sans-serif',
    },
    
    quoteInput: {
        backgroundColor: 'transparent',
        border: '2px solid rgb(179, 174, 176)',
        outline: 'none',
        resize: 'none',
        margin: 'auto',
        width: '100%',
        fontSize: '26px',
        fontStyle: 'inherit',
        fontFamily: 'sans-serif',
        height: '28px',
        '&:focus': {
            borderColor: 'black',
        },
    },
}))
