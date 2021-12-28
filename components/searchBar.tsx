import React, { Dispatch } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import { useDispatch } from 'react-redux';
import { launchSearch } from '../redux/action/searchAction';
import { UseStyles } from '../react-styles/searchBarStyle';

export default function SearchAppBar() {
  const classes = UseStyles();
  const dispatch: Dispatch<any> = useDispatch();


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} >
        <Toolbar>
          <div>
          <InputBase placeholder="Search by codename (ex: btc, lsk)" className={classes.inputInput} style={{ width: 300, backgroundColor: 'white' }} onChange={(text) => {             console.log("inputTag change " +text.target.value)
                dispatch(launchSearch(text.target.value))}} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
