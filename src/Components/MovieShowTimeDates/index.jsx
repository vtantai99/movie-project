// import React from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`scrollable-auto-tabpanel-${index}`}
//       aria-labelledby={`scrollable-auto-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `scrollable-auto-tab-${index}`,
//     "aria-controls": `scrollable-auto-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   app: {
//     boxShadow: "none",
//     backgroundColor: "#fff",
//   },
//   tabs: {
//     boxShadow: "none",
//     padding: "20px",
//     margin: "0",
//   },
//   root: {
//     flexGrow: 1,
//     width: "100%",
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export default function MovieShowTimeDates() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar className={classes.app} position="static" color="default">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           variant="scrollable"
//           scrollButtons="auto"
//           aria-label="scrollable auto tabs example"
//           className={classes.tabs}
//         >
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//           <Tab label="Item Four" {...a11yProps(3)} />
//           <Tab label="Item Five" {...a11yProps(4)} />
//           <Tab label="Item Six" {...a11yProps(5)} />
//           <Tab label="Item Seven" {...a11yProps(6)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         Item Four
//       </TabPanel>
//       <TabPanel value={value} index={4}>
//         Item Five
//       </TabPanel>
//       <TabPanel value={value} index={5}>
//         Item Six
//       </TabPanel>
//       <TabPanel value={value} index={6}>
//         Item Seven
//       </TabPanel>
//     </div>
//   );
// }

import React from "react";
import "./index.scss";

const MovieShowTimeDates = () => {
  const renderDates = () => {
    const currentDate = new Date();
    const dates = [currentDate];
    for (let i = 0; i < 10; i++) {
      const newDate = new Date();
      newDate.setDate(currentDate.getDate() + i + 1);
      dates.push(newDate);
    }
    return dates.map((el) => (
      <div className="singleDate">
        <span className="weekDay">{formatWeekDate(el.getDay())}</span>
        <span className="date">{el.getDate()}</span>
      </div>
    ));
  };

  const formatWeekDate = (weekDate) => {
    switch (weekDate) {
      case 0:
        return "Chu nhat";
      case 1:
        return "Thu hai";
      case 2:
        return "Thu ba";
      case 3:
        return "Thu tu";
      case 4:
        return "Thu nam";
      case 5:
        return "Thu sau";
      case 6:
        return "Thu bay";
    }
  };

  return <div className="movieShowTimesDates">{renderDates()}</div>;
};

export default MovieShowTimeDates;
