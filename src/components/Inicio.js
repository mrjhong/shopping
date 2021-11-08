import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Productos from './Productos';
import Servicios from './Servicios';
import Grid from '@mui/material/Grid';
import SlideProduct from '../carousel/SlideProduct';


const styles = {
  paperContainer: {
    background:''
    }
  };
function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div  style={styles.paperContainer}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Inicio() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} marginTop="5rem"  style={styles.paperContainer}>
      <Grid>
        <SlideProduct />
      </Grid>
      
        
      <Box>
        
        <Tabs value={value}
          onChange={handleChange}
          centered
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
            
        >
          <Tab label="Productos" {...a11yProps(0)} />
          <Tab label="Servicios" {...a11yProps(1)} />
          
        </Tabs>
       
      </Box>
      
      <TabPanel value={value} index={0}>
        <Productos/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Servicios/>
      </TabPanel>

    </Box>
  );
}
