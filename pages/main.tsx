import CryptoCard from '../components/crypoCard'
import { Grid } from '@mui/material';
import { UseStyles } from '../react-styles/mainPageStyle';
import SearchAppBar from '../components/searchBar';
import { coinStringTable } from '../env/translationTable';
import { GlobalState } from '../redux/type/global';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Main() {
    var data  = Object.keys(coinStringTable);
    const classes = UseStyles();
    const searchData: string = useSelector(
        (state: GlobalState) => state.searchData.search.currentValue
      );
  
return(
    <div>
 <SearchAppBar
      />
  
    <h2 className={classes.title}>Cryptocurrency Realtime Price {searchData}</h2>
    <Grid container spacing={0} alignContent="flex-start" alignItems="flex-start" direction="row">
    
     { data.filter(x => x.includes(searchData.toLowerCase()) ).map((value, index) => {
          return <Grid item md={3} className={classes.gridItgem} key={index} > <CryptoCard data={value}/> </Grid>
    })}

       </Grid>
    
    </div>

)
}