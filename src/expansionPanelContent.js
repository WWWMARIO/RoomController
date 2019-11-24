import React from 'react'
import QRCode from './qrcode.js'
import displayControllerSettings from './displayControllerSettings.js'
import displayControllerDetails from './displayControllerDetails.js'
import DisplayControllerProperties from './DisplayControllerProperties.js'


class ExpansionPanelContent extends React.Component {
    constructor(props) {
        super(props);
        
        
        this.state = {
  
        };
    }
  
  
  
  
  
   render(){
  
   
  
    return (
  
        
        <div >        
                     
            <tr  style={{ float: "left",paddingRight: "50px", minWidth:"400px"}} /*ClassName={clsx(classes.detailsColumn, classes.helper)}*/>
              {/*<Typography variant="caption">*/}
                {this.props.displayDetailsOrSetting===1?displayControllerSettings(this.props.controller):displayControllerDetails(this.props.controller)} 
              {/*</Typography>*/}
            </tr>
            <div  style={{ float: "left",paddingRight: "50px"}} /*className={classes.detailsColumn}*/>
                {this.props.displayDetailsOrSetting===1?<QRCode controller={this.props.controller}/>:<DisplayControllerProperties item={this.props.controller}/>} 
            </div>
            <div style={{float: "left"}} >
                <button onClick={this.props.handleClickDetailsOrSetting}>promjeni</button>
            </div>

        </div>     
            
            
          
        
        
      
    );
  }
  }
  
  
  
  
  export default ExpansionPanelContent