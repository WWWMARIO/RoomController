import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelContent from './expansionPanelContent'
import Grid from '@material-ui/core/Grid';


class ControllerExpansionPanels extends React.Component {
  constructor(props) {
      super(props);     
      
      this.state = {
      };
  }

 render(){ 

  return (

      
      <ExpansionPanel     id={"row-"+this.props.controller.id} expanded={this.props.expandedRow === this.props.controller.id} >

        <ExpansionPanelSummary style={{backgroundColor: "lightblue"}} onClick={()=>this.props.handleRowClick(this.props.controller.id)}
          expandIcon={<ExpandMoreIcon/> }
          aria-controls="panel1bh-content"
                >
          <div style={{flexGrow: "1"}}>            
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={4}>           
                  Zone {this.props.controller.zone}
              </Grid>
              <Grid item xs={4}>
                  {this.props.controller.name}
              </Grid>
              <Grid item xs={4}>           
                  Address {this.props.controller.address}            
              </Grid>
            </Grid>
          </div>          
        </ExpansionPanelSummary>

        <ExpansionPanelDetails style={{minHeight:"500px"}}>
          <ExpansionPanelContent displayDetailsOrSetting={this.props.displayDetailsOrSetting} 
          handleClickDetailsOrSetting={this.props.handleClickDetailsOrSetting} controller={this.props.controller}/>
        </ExpansionPanelDetails>        
        
      </ExpansionPanel>   
      
    
  );
}
}

export default ControllerExpansionPanels