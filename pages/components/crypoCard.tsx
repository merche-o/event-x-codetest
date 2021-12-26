import React, { useState, useEffect, Dispatch } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { CryptoData } from '../model/cryptoData';
import { UseStyles } from '../styles/cryptoCardStyle'
import { GlobalState } from '../redux/type/global';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptos } from '../redux/action/cryptoAction';
import { coinStringTable } from '../env/translationTable';

interface CryptoDataProps {
    data: string;
}

export default function CryptoCard(props: CryptoDataProps) {
    const classes = UseStyles();
    const dispatch: Dispatch<any> = useDispatch();

    const data : CryptoData[] | undefined = useSelector((state: GlobalState) => state.cryptoDataState.data)

    useEffect(() => {
        dispatch(getCryptos(props.data))
    }, [data, dispatch, props.data])
    return (
        
        <Paper variant="outlined" >
                    { data  != undefined && data.find(x => x.base === coinStringTable[props.data][0]) &&
            <Grid container spacing={0} className={classes.gridContainer} alignContent="flex-start" alignItems="flex-start" direction="row">
               <Grid container className={classes.gridBottom}>
                <Grid item xs={12}  className={classes.coinName}>{data.find(x => x.base === coinStringTable[props.data][0]).base}</Grid>
                <Grid item xs={12}  className={classes.coinValue}>${data.find(x => x.base === coinStringTable[props.data][0]).price}</Grid>
                </Grid>
                <Grid item xs={6}  className={classes.coinChangeLabel}>volume:</Grid>
                <Grid item xs={6} className={classes.coinChangeLabel}>change:</Grid>
                <Grid item xs={6} className={classes.coinChangeValue}>{data.find(x => x.base ===  coinStringTable[props.data][0]).volume}</Grid>
                <Grid item xs={6} className={classes.coinChangeLabel} style={{color: parseInt(data.find(x => x.base ===  coinStringTable[props.data][0]).change) < 0 ? "#B22222" : "#32CD32"}}>{data.find(x => x.base ===  coinStringTable[props.data][0]).change}</Grid>
            </Grid>
        }
        </Paper>
        )
}