import { createStyles, makeStyles } from "@mui/styles";

export const UseStyles = makeStyles(
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