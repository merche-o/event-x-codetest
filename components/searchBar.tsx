import React, { Dispatch, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { createStyles, fade, useTheme, makeStyles, ThemeProvider, Theme } from '@mui/styles';
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../redux/type/global';
import { launchSearch } from '../redux/action/searchAction';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: '#1ea1f7'
    },
    title: {
      flexGrow: 1,
      display: 'none',
    },
    searchIcon: {
      height: '100%',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'right',
      justifyContent: 'right',
      color: "#1ea1f7",
      fontSize: "18px",
      fontFamily: "Helvetica-Bold"
    },
    inputRoot: {
      color: '#727272',
      backgroundColor: '#fffff'
    },
    inputInput: {
      padding: "1, 1, 1, 0",
      paddingLeft: '1em',
      width: '100%',
      },
    },
  ),
);

export default function SearchAppBar() {
  const classes = useStyles();
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
                return <InputBase placeholder=" Search coin" {...params.InputProps} {...rest} onChange={(text) => setSearchStr(text.target.value)} />;
              }}
            />

          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
