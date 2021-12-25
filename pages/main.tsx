import CryptoCard from './components/crypoCard'
import { CryptoData } from './model/cryptoData'
import { Grid } from '@material-ui/core';
import { UseStyles } from './styles/mainPageStyle';

export default function Main() {
    var data : CryptoData = {base:"test", target:"test", price:"test", volume:"test", change: "-1"};
    const classes = UseStyles();

return(
    <div>
    <h2 className={classes.title}>Cryptocurrency Realtime Price</h2>
    <Grid container spacing={0} alignContent="flex-start" alignItems="flex-start" direction="row">
    <Grid item md={3} className={classes.gridItgem}><CryptoCard data={data}/></Grid>
    <Grid item md={3} className={classes.gridItgem}><CryptoCard data={data}/></Grid>
    <Grid item md={3} className={classes.gridItgem}><CryptoCard data={data}/></Grid>
    <Grid item md={3} className={classes.gridItgem}><CryptoCard data={data}/></Grid>

       </Grid>
    
    </div>
    

)
}