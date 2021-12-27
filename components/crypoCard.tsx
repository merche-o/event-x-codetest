import React, { useState, useEffect, Dispatch } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { CryptoData } from '../model/cryptoData';
import { UseStyles } from '../react-styles/cryptoCardStyle'
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

    const data : CryptoData | undefined = useSelector((state: GlobalState) => state.cryptoDataState.data).find(x => x.base === coinStringTable[props.data][0])

    useEffect(() => {
        dispatch(getCryptos(props.data))
        const timer = setInterval(
       () =>  dispatch(getCryptos(props.data)), 30000)
    }, [data, dispatch, props.data])
    return (
        
        <Paper variant="outlined" >
                    { data  != undefined &&
            <Grid container spacing={0} className={classes.gridContainer} alignContent="flex-start" alignItems="flex-start" direction="row">
               <Grid container className={classes.gridBottom}>
                <Grid item xs={12}  className={classes.coinName}> {data.base}</Grid>
                <Grid item xs={12}  className={classes.coinValue}>${data.price}</Grid>
                </Grid>
                <Grid item xs={6}  className={classes.coinChangeLabel}>volume:</Grid>
                <Grid item xs={6} className={classes.coinChangeLabel}>change:</Grid>
                <Grid item xs={6} className={classes.coinChangeValue}>{data.volume}</Grid>
                <Grid item xs={6} className={classes.coinChangeLabel} style={{color: parseInt(data.change) < 0 ? "#B22222" : "#32CD32"}}>{data.change}</Grid>
            </Grid>
        }
        </Paper>
        )
}