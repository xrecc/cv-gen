import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
      fontWeight: "normal",
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
      fontWeight: "bold",
    },
  ],
});
export const styles = {
  style1: StyleSheet.create({
    image: {
      width: "150px",
      height: "150px",
    },
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
      fontFamily: "Roboto",
      fontSize: 14,
      width: "100%",
      height: "100%",
      fontWeight: "normal",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      textAlign: "center",
      // width: 200,
      // "@media max-width: 400": {
      //   width: 300,
      // },
      // "@media orientation: landscape": {
      //   width: 400,
      //   height: 300,
      // },
    },
    info: {
      fontSize: 16,
      fontFamily: "Roboto",
      color: "black",
      fontWeight: "bold",
    },
    clause: {
      fontSize: 12,
      fontFamily: "Roboto",
      fontWeight: "normal",
      color: "grey",
    },
  }),
  style2: StyleSheet.create({
    image: {
      width: "150px",
      height: "150px",
    },
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
      fontFamily: "Roboto",
      fontSize: 25,
      width: "100%",
      height: "100%",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      textAlign: "left",
      // width: 200,
      // "@media max-width: 400": {
      //   width: 300,
      // },
      // "@media orientation: landscape": {
      //   width: 400,
      //   height: 300,
      // },
    },
  }),
  style3: StyleSheet.create({
    image: {
      width: "150px",
      height: "150px",
    },
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
      fontFamily: "Roboto",
      fontSize: 25,
      width: "100%",
      height: "100%",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      textAlign: "right",
      // width: 200,
      // "@media max-width: 400": {
      //   width: 300,
      // },
      // "@media orientation: landscape": {
      //   width: 400,
      //   height: 300,
      // },
    },
  }),
  style4: StyleSheet.create({
    image: {
      width: "300px",
      height: "300px",
    },
    page: {
      flexDirection: "row",
      backgroundColor: "red",
      fontFamily: "Roboto",
      fontSize: 25,
      width: "100%",
      height: "100%",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      textAlign: "center",
      // width: 200,
      // "@media max-width: 400": {
      //   width: 300,
      // },
      // "@media orientation: landscape": {
      //   width: 400,
      //   height: 300,
      // },
    },
  }),
};
