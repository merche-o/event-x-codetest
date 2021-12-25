import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid, Paper } from '@material-ui/core';
import { CryptoData } from '../model/cryptoData';
import { UseStyles } from '../styles/cryptoCardStyle'
interface CryptoDataProps {
    data: CryptoData;
}

export default function cryptoCard(props: CryptoDataProps) {
    const classes = UseStyles();
    return (
        <Paper variant="outlined" >
            <Grid container spacing={0} className={classes.gridContainer} alignContent="flex-start" alignItems="flex-start" direction="row">
               <Grid container className={classes.gridBottom}>
                <Grid item xs={12}  className={classes.coinName}>{props.data.base}</Grid>
                <Grid item xs={12}  className={classes.coinValue}>${props.data.price}</Grid>
                </Grid>
                <Grid item xs={6}  className={classes.coinChangeLabel}>volume:</Grid>
                <Grid item xs={6} className={classes.coinChangeLabel}>change:</Grid>
                <Grid item xs={6} className={classes.coinChangeValue}>{props.data.volume}</Grid>
                <Grid item xs={6} className={classes.coinChangeLabel} style={{color: parseInt(props.data.change) < 0 ? "#B22222" : "#32CD32"}}>{props.data.change}</Grid>
            </Grid>
        </Paper>)
}