import React from 'react'
import QRCode from './qrcode.js'
import displayControllerSettings from './displayControllerSettings.js'
import displayControllerDetails from './displayControllerDetails.js'
import DisplayControllerProperties from './DisplayControllerProperties.js'


const TableHead= () =>
{
    return(        
    <thead>
        <tr>
            <td style={{width:"33.33%"}}>Zone</td>
            <td style={{width:"33.33%"}}>Name</td>
            <td style={{width:"33.33%"}}>Address</td>
        </tr>
    </thead>
    
    )
}






class Main extends React.Component {
    constructor() {
        super();
        
        this.state = {
            
            expandedRow : "",
            displayDetailsOrSetting: 0,

        };
    }



    

    handleRowClick(rowId) {
        
        if (rowId!==this.state.expandedRow)
        {
            this.setState({expandedRow : rowId})
        }
        else
        {
            this.setState({expandedRow : ""})
        }
        this.setState({displayDetailsOrSetting : 0})
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

    displayDetailsAndPropertiesOrSettings=item=>{

     if (this.state.displayDetailsOrSetting===0)
        return(
            <tr  key={"row-expanded-" + item.id}>
                <td colSpan={3}>
                        <div style={{float: "left"}} >
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
                    <div style={{float: "left"} }>{displayControllerSettings(item)}</div>
                    <div style={{float: "left"}}><QRCode item={item}/></div>
                </td>
            </tr>)

    
    
    }

    
    renderItem(item) {
        
        const itemRows = [
			<tr  key={"row-data-" + item.id} style={{backgroundColor: "lightblue"}}>
			    <td><button onClick={() => this.handleRowClick(item.id)}>{item.zone}</button></td>
			    <td>{item.name}</td>
			    <td>{item.address}{this.state.expandedRow===item.id?<button onClick={()=>{this.handleClickDetailsOrSetting()}}>
                    {this.state.displayDetailsOrSetting===0?"Settings":"Details"}</button>:""}
                </td>	
                
                
                		
			</tr>
        ];
        
        if(this.state.expandedRow===item.id) {
            itemRows.push(                
                this.displayDetailsAndPropertiesOrSettings(item) 
                               
            );
        }
        
        
        return itemRows;    
    }
    
    render() {
        let allItemRows = [];
        
        this.props.rooms_status.controllers.forEach(item => {
            const perItemRows = this.renderItem(item);
            allItemRows = allItemRows.concat(perItemRows);
        });
        
        return (         
                <table className="main">

                    {TableHead()} 
			        <tbody>{allItemRows}</tbody>
                 
                </table>
        );
    }
}




export default Main