import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const UseStyles = makeStyles((theme: Theme) =>
createStyles({
  gridContainer: {
    padding: "15px",
  },
  gridBottom:{
      paddingBottom: "10px"
  },
  coinName: {
    color: "black",
    fontSize: "20px",
    fontWeight: "bold",
  },
  coinValue: {
    color: "goldenrod",
    fontSize: "14px",
    fontWeight: 500,
  },
  coinChangeLabel:{
      color: "gray",
      fontSize: "11px",
      fontWeight: "bold",
  },
  coinChangeValue:{
      color: "gray",
      fontSize: "11px",
  }
})
);