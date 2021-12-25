import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid, Paper } from '@material-ui/core';
import { CryptoData } from '../model/cryptoData';

interface CryptoDataProps {
    data: CryptoData;
}

export default function cryptoCard(props: CryptoDataProps) {
    const { data } = props;
    return (
        <Paper variant="outlined" square>
            <Grid container spacing={0} alignContent="center" alignItems="center">
                <Grid item xs>
                    <h2>{data.base}</h2> 
                </Grid>
                <Grid item xs={7} container direction="row">
                    <Grid item xs={12} >{props.data.change}</Grid>
                    <Grid item xs={12} >{props.data.change}</Grid>
                    <Grid item xs={12} >{props.data.change}</Grid>
                    <Grid item xs={12} >{props.data.change}</Grid>

                </Grid>
            </Grid>
        </Paper>)
}