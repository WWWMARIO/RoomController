import React from 'react'
import QRCode from './qrcode.js'
import displayControllerSettings from './displayControllerSettings.js'
import displayControllerDetails from './displayControllerDetails.js'
import DisplayControllerProperties from './DisplayControllerProperties.js'
import ControlledExpansionPanels from './ControlledExpansionPanels'




class Main extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
            
            displayDetailsOrSetting: 0,

        };
    }

    /*componentDidMount() {  

        

        if ((JSON.parse(localStorage.getItem("currentTemperatureLocal"))) ===null )
    {
      
      let currentTempByRoomIdLocal={}

      this.props.rooms_status.controllers.forEach(element => {
        let controllerId=element.id
        let controllerTemp=element.properties[7].Value
        currentTempByRoomIdLocal[controllerId]=controllerTemp

      })

      localStorage.setItem("currentTemperatureLocal", JSON.stringify(currentTempByRoomIdLocal));
    }  
            
      }*/
      /*componentDidMount() {        
        

        if ((JSON.parse(localStorage.getItem("currentTemperatureLocal"))) ===null )
    {
      
      let currentTempByRoomIdLocal={}

      this.props.rooms_status.controllers.forEach(element => {
        let controllerId=element.id
        let controllerTemp=element.properties[7].Value
        currentTempByRoomIdLocal[controllerId]=controllerTemp

      })

      localStorage.setItem("currentTemperatureLocal", JSON.stringify(currentTempByRoomIdLocal));
    }  
            
      }*/



   
        
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

    /*displayDetailsAndPropertiesOrSettings=item=>{

     if (this.state.displayDetailsOrSetting===0)
        return(
            <tr  key={"row-expanded-" + item.id}>
                <td colSpan={3}>
                        <div style={{float: "left",marginRight:"100px"}} >
                            {displayControllerDetails(item)}   
                        </div>
                        <div style={{float: "left"}}> 
                            <DisplayControllerProperties item={item}/>
                        </div>
                </td>        
            </tr>
                
        )
    else
    return(<tr>
                <td colSpan={3}>
                    <div style={{float: "left", marginRight:"100px"} }>{displayControllerSettings(item)}</div>
                    <div style={{float: "left"}}><QRCode item={item}/></div>
                </td>
            </tr>)

    
    
    }*/

    
    /*renderItem(item) {
        
        const itemRows = [
			<tr id={"row-"+item.id}  key={"row-data-" + item.id} style={{backgroundColor: "lightblue"}}>
			    <td   ><button   onClick={() => this.props.handleRowClick(item.id)}>{item.zone}</button></td>
			    <td >{item.name}</td>
			    <td>{item.address}{this.props.expandedRow===item.id?<button onClick={()=>{this.handleClickDetailsOrSetting()}}>
                    {this.state.displayDetailsOrSetting===0?"Settings":"Details"}</button>:""}
                </td>	
                
                
                		
			</tr>
        ];
        
        if(this.props.expandedRow===item.id) {
            itemRows.push(                
                this.displayDetailsAndPropertiesOrSettings(item) 
                               
            );
        }
        
        
        return itemRows;    
    }*/

    renderItem(item) {
        
        const itemRows = [
			  
                <ControlledExpansionPanels controller={item} expandedRow={this.props.expandedRow} 
                handleRowClick={this.props.handleRowClick} displayDetailsOrSetting={this.state.displayDetailsOrSetting}
                handleClickDetailsOrSetting={this.handleClickDetailsOrSetting}/>    
            
        ];       
        
        
        
        return itemRows;    
    }




    
    render() {
        let allItemRows = [];
        
        this.props.rooms_status.controllers.forEach(item => {
            const perItemRows = this.renderItem(item);
            allItemRows = allItemRows.concat(perItemRows);
        });
        
        return (         
                <div style={{paddingBottom:"650px"}}>
                
			        {allItemRows}
                 
                </div>
        );
    }
}




export default Main