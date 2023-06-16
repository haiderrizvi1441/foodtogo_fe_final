import *as React from 'react';
import {useState, useEffect} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Admincenter() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  //FOOD INVETORY
  useEffect(()=>{
    getMyfoods();
},[]);
// Enable when corss origin allows

const [myfoods, setMyfoods] = useState([]);

const getMyfoods = async() =>{
    const  api = await fetch("http://localhost:9054/api/foods");
    const data = await api.json();
    setMyfoods(data);
}

  function createFoodCard(food){
    return(
      <div>
        <h3>{food.food_name}</h3>
        <p>{food.food_price}</p>
      </div>
    )
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Total Orders" {...a11yProps(0)} />
          <Tab label="Total Users" {...a11yProps(1)} />
          <Tab label="Foods Inventory" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        Total Orders Here
      </TabPanel>
      <TabPanel value={value} index={1}>
        Total Users
      </TabPanel>
      <TabPanel value={value} index={2}>
        {myfoods.map(createFoodCard)}
      </TabPanel>
    </Box>
  );
}
