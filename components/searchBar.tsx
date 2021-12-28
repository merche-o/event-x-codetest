import React, { Dispatch, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import { createStyles, makeStyles } from '@mui/styles';
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../redux/type/global';
import { launchSearch } from '../redux/action/searchAction';
import { UseStyles } from '../react-styles/searchBarStyle';



export default function SearchAppBar() {
  const classes = UseStyles();
  const searchData: [string] = useSelector(
    (state: GlobalState) => state.searchData.search.history
  );
  const [searchStr, setSearchStr] = useState<string>("");
  const dispatch: Dispatch<any> = useDispatch();


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} >
        <Toolbar>
          <div>
            <Autocomplete
              id="combo-box-demo"
              options={searchData}
              onKeyPress={(event) => {
                if (event.key == 'Enter') {
                   dispatch(launchSearch(searchStr))
                }

              }}
              style={{ width: 300, backgroundColor: 'white' }}
              renderInput={(params) => {
                const { InputLabelProps, InputProps, ...rest } = params;
                params.inputProps = { 'aria-label': 'search' }
                params.InputProps.className = classes.inputRoot
                return <InputBase placeholder=" Search by codename (ex: btc, lsk)" {...params.InputProps} {...rest} onChange={(text) => setSearchStr(text.target.value)} />;
              }}
            />

          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
