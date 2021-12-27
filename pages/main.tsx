import CryptoCard from '../components/crypoCard'
import { Grid } from '@material-ui/core';
import { UseStyles } from '../react-styles/mainPageStyle';
import { Provider } from 'react-redux';
import store from '../redux/store'


export default function Main() {
    var data  = ["btc-usd", "eth-usd", "ltc-usd"];
    const classes = UseStyles();

return(
    <Provider store={store}>

    <div>
    <h2 className={classes.title}>Cryptocurrency Realtime Price</h2>
    <Grid container spacing={0} alignContent="flex-start" alignItems="flex-start" direction="row">
     { data.map((value, index) => {
          return <Grid item md={3} className={classes.gridItgem} key={index} ><CryptoCard data={value}/></Grid>
    })}

       </Grid>
    
    </div>
    </Provider>

)
}