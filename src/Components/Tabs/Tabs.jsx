import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TabPanel from "../TabPanel/TabPanel";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ children,handleChange,value }) {

  return (
    <Box sx={{ width: "100%", }}>
      <Box >
        <Tabs
          TabIndicatorProps={{ style: { backgroundColor: "#017189" } }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{width:"100%"}}
        >
          <Tab
            sx={{ fontSize: 12, fontFamily: "Nunito Sans" }}
            label="Active(3)"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ fontSize: 12, fontFamily: "Nunito Sans" }}
            label="InActive (2)"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ fontSize: 12, fontFamily: "Nunito Sans" }}
            label="Closed (0)"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      {children}
    </Box>
  );
}
