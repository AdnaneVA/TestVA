import React from 'react';
import './Parameters.css';
import MobileTearSheet from '../../MobileTearSheet';
import {List, ListItem} from 'material-ui/List'; 
import Subheader from 'material-ui/Subheader'; 
import Divider from 'material-ui/Divider'; 
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle'; 


const Parameters = () => (
  <div>
    <MobileTearSheet>
    <List>
      primaryText="Parameters"
     />
     </List>
     <Divider />
     <List>
      <Subheader>Sensors</Subheader>
      <ListItem
        primaryText= "IR Sensor" rightToggle={<Toggle/>} />
     </List>
     <Divider />
     <List>
      <Subheader>Cloud</Subheader>
      <ListItem PrimaryText="ComCloud" rightToggle={<Toggle/>}
      secondaryText="Allow communication to the Cloud" />
      
      <ListItem primaryText="AWS" leftCheckbox={<Checkbox/>} />
      <ListItem primaryText="Azure" leftCheckbox={<Checkbox/>} />
     </List>
    <MobileTearSheet>
    </div>
); 

export default Parameters;
      
