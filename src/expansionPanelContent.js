import React from 'react'
import QRCode from './qrcode.js'
import displaySettings from './displaySettings.js'
import displayDetails from './displayDetails.js'
import DisplayProperties from './DisplayProperties.js'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';


class ExpansionPanelContent extends React.Component {
    constructor(props) {
        super(props);
        
        
        this.state = {
            displayDetailsOrSetting: 0,
  
        };
    }

    handleClickDetailsOrSetting=()=> {            
        
        if (this.state.displayDetailsOrSetting===0)
        {
            this.setState({displayDetailsOrSetting:1})            
        }
        else
        {
            this.setState({displayDetailsOrSetting:0})
        }
        
    }  
  
  
  
   render(){ 
    return (
  
        
        <Paper style={{ width: '100%', overflowX: 'auto',}} > 
            <div  > 
                <Button variant="contained" color="primary" onClick={this.handleClickDetailsOrSetting} startIcon={<SettingsIcon />}> {this.state.displayDetailsOrSetting===0?"Settings  &  QrCode":"Details & Properties"}</Button>
            </div>
                     
            <div  style={{ float: "left",paddingRight: "50px", minWidth:"400px"}} >             
                {this.state.displayDetailsOrSetting===1?displaySettings(this.props.controller):displayDetails(this.props.controller)}              
            </div>

            <div  style={{ float: "left"}} >
                {this.state.displayDetailsOrSetting===1?<QRCode controller={this.props.controller}/>:<DisplayProperties item={this.props.controller}/>} 
            </div>
        </Paper>     
            
            
          
        
        
      
    );
  }
  }
  
  
  
  
  export default ExpansionPanelContent