import React from 'react'
import QRCode from './qrcode.js'
import displayControllerSettings from './displayControllerSettings.js'
import displayControllerDetails from './displayControllerDetails.js'
import DisplayControllerProperties from './DisplayControllerProperties.js'
import Paper from '@material-ui/core/Paper';


class ExpansionPanelContent extends React.Component {
    constructor(props) {
        super(props);
        
        
        this.state = {
  
        };
    }
  
  
  
  
  
   render(){
  
   
  
    return (
  
        
        <Paper style={{ width: '100%', overflowX: 'auto',}} >        
                     
            <div  style={{ float: "left",paddingRight: "50px", minWidth:"400px"}} /*ClassName={clsx(classes.detailsColumn, classes.helper)}*/>
              {/*<Typography variant="caption">*/}
                {this.props.displayDetailsOrSetting===1?displayControllerSettings(this.props.controller):displayControllerDetails(this.props.controller)} 
              {/*</Typography>*/}
            </div>
            <div  style={{ float: "left",paddingRight: "50px",minWidth:"350px"}} /*className={classes.detailsColumn}*/>
                {this.props.displayDetailsOrSetting===1?<QRCode controller={this.props.controller}/>:<DisplayControllerProperties item={this.props.controller}/>} 
            </div>
            <div style={{float: "left"}} >
                <button onClick={this.props.handleClickDetailsOrSetting}>promjeni</button>
            </div>

        </Paper>     
            
            
          
        
        
      
    );
  }
  }
  
  
  
  
  export default ExpansionPanelContent