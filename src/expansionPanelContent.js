import React from 'react'
import QRCode from './qrcode.js'
import displayControllerSettings from './displayControllerSettings.js'
import displayControllerDetails from './displayControllerDetails.js'
import DisplayControllerProperties from './DisplayControllerProperties.js'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


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
                     
            <div  style={{ float: "left",paddingRight: "50px", minWidth:"400px"}} /*ClassName={clsx(classes.detailsColumn, classes.helper)}*/>
              {/*<Typography variant="caption">*/}
                {this.state.displayDetailsOrSetting===1?displayControllerSettings(this.props.controller):displayControllerDetails(this.props.controller)} 
              {/*</Typography>*/}
            </div>
            <div  style={{ float: "left",paddingRight: "50px",minWidth:"400px"}} /*className={classes.detailsColumn}*/>
                {this.state.displayDetailsOrSetting===1?<QRCode controller={this.props.controller}/>:<DisplayControllerProperties item={this.props.controller}/>} 
            </div>
            <div style={{float: "left"}} >
                <Button variant="contained" color="primary" onClick={this.handleClickDetailsOrSetting}>{this.state.displayDetailsOrSetting===0?"Settings  &  QrCode":"Details & Properties"}</Button>
            </div>

        </Paper>     
            
            
          
        
        
      
    );
  }
  }
  
  
  
  
  export default ExpansionPanelContent