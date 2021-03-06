
import React from 'react';
// import './Parameter.css';
import MobileTearSheet from './MobileTearSheet.js'; 

import List, {ListItem, 
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List'; 
import Subheader from 'material-ui/Subheader'; 
import Divider from 'material-ui/Divider'; 
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle'; 

class CheckboxInteractivity extends React.Component{
  state = { 
    checked : false,
  }
  
  updateCheck(name) {
    this.setState((oldState) => {
    return {
      checked : !old.State.checked,
    }; 
      sendParemeter({name: d})
  });
    onCheck={this.updateCheck("AWSCheckBox")}
}

render () {
  return (
const Parameter = () => (
  <div id="main">
    <MobileTearSheet>
    <List>
      primaryText="Parameters"
     />
     </List>
     <Divider />
     <List>
      <Subheader>Sensors</Subheader>
      <ListItem
        primaryText= "IR Sensor" rightToggle={<Toggle/>}
        checked={this.state.checked}
        onCheck={this.updateCheck.bind(this)}
        />
     </List>
     <Divider />
     <List>
      <Subheader>Cloud</Subheader>
      <ListItem PrimaryText="ComCloud" rightToggle={<Toggle/>}
      checked={this.state.checked}
      onCheck={this.updateCheck.bind(this)}
      secondaryText="Allow communication to the Cloud" 
      />
      
      <ListItem primaryText="AWS" leftCheckbox={<Checkbox/>} 
      checked={this.state.checked}
      onCheck={this.updateCheck.bind(this)}
      />
      <ListItem primaryText="Azure" leftCheckbox={<Checkbox/>} 
      checked={this.state.checked}
      onCheck={this.updateCheck.bind(this)}
      />
     </List>
    <MobileTearSheet>
    </div>
    );
    );
}

export default Parameter;
