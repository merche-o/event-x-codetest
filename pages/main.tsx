import CryptoCard from './components/crypoCard'
import { CryptoData } from './model/cryptoData'
import { Grid } from '@material-ui/core';
import { UseStyles } from './styles/mainPageStyle';
import { Provider } from 'react-redux';
import store from './redux/store'


export default function Main() {
    var data  = ["btc-usd", "eth-usd"];
    const classes = UseStyles();

return(
    <Provider store={store}>

    <div>
    <h2 className={classes.title}>Cryptocurrency Realtime Price</h2>
    <Grid container spacing={0} alignContent="flex-start" alignItems="flex-start" direction="row">
    <Grid item md={3} className={classes.gridItgem}><CryptoCard data={data[0]}/></Grid>
    <Grid item md={3} className={classes.gridItgem}><CryptoCard data={data[1]}/></Grid>
    

       </Grid>
    
    </div>
    </Provider>

)
}