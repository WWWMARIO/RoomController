import React from 'react'
import rooms_status from './rooms_status.json';




class QRCode extends React.Component {

    constructor(props){
        super(props)

        this.state = {            
            qrUrl: ""         
          }    
   
    }

    onClickGenerateQRCode=()=>
    {       
        let qrLink= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+this.props.item.name
        this.setState({
            qrUrl:qrLink
        })        
    }    

        
    render() {        

    return (
        <div>
            <button onClick={this.onClickGenerateQRCode}>Generate QR Code</button><br></br>
            {this.state.qrUrl!==""?<img src={this.state.qrUrl}></img>:""}
        </div>

    )
        
  }
}




const controllerDetails= item =>
{
    return(
    <tbody>
        <tr>
            <td colSpan={3}><strong>Details:</strong></td>
        </tr>
        <tr>
            <td>id :</td>
            <td>{item.id}</td>
        </tr>    
        
        <tr>
            <td>name:</td>
            <td>{item.name}</td>
        </tr>         
        <tr>
            <td>address:</td>
            <td>{item.address}</td>
        </tr>         
        <tr>
            <td>object:</td>
            <td>{item.object}</td>
        </tr>         
        <tr>
            <td>subObject:</td>
            <td>{item.subObject}</td>
        </tr>         
        <tr>
            <td>zone:</td>
            <td>{item.zone}</td>
        </tr>         
        <tr>
            <td>subZone:</td>
            <td>{item.subZone}</td>
        </tr>
        <tr>
            <td>ipAddress:</td>
            <td>{item.ipAddress}</td>
        </tr>         
        <tr>
            <td>ipPort:</td>
            <td>{item.ipPort}</td>
        </tr>
        <tr>
            <td>LocalCommandHeatingCooling:</td>
            <td>{String(item.LocalCommandHeatingCooling)}</td>
        </tr>         
        <tr>
            <td>LocalCommandPanelBlocked:</td>
            <td>{String(item.LocalCommandPanelBlocked)}</td>
        </tr> 
    </tbody>   
    )
}



class ControllerProperties extends React.Component {

    constructor(props){
        super(props)


        this.state = {       
            CurrentTempFromLocalStorage:JSON.parse(localStorage.getItem("currentTempLocal"))
          }    
   
    }

    changeCurrentTempFromLocalStorage=event=>
    
    {        
        let CurrentTempFromLocalStorage=JSON.parse(localStorage.getItem("currentTempLocal"))
           
        if (event.target.value==='+')
        {
            CurrentTempFromLocalStorage[this.props.item.id]=Number(CurrentTempFromLocalStorage[this.props.item.id])+1
        }            
        if (event.target.value==='-')
        {
            CurrentTempFromLocalStorage[this.props.item.id]=Number(CurrentTempFromLocalStorage[this.props.item.id])-1
        }
        localStorage.setItem("currentTempLocal",JSON.stringify(CurrentTempFromLocalStorage))
       
        this.setState ({
            CurrentTempFromLocalStorage:CurrentTempFromLocalStorage
        })
        
    
    }


    render(){
    
        return(
                
    <tbody>
        <tr>
            <td colSpan={3}><strong>Details:</strong></td>
        </tr>
        <tr>
            <td>Set temperature:</td>
            <td>{this.state.CurrentTempFromLocalStorage[this.props.item.id]}
                <button value="+" onClick={this.changeCurrentTempFromLocalStorage}>+</button>
                <button value="-" onClick={this.changeCurrentTempFromLocalStorage}>-</button>
            </td>
        </tr>
        <tr>
            <td>Current temperature:</td>
            <td>{this.props.item.properties[8].Value}</td>
        </tr>          
        <tr>
            <td>{this.props.item.properties[24].Value==="1"?<p>DND</p>:<p></p>}</td>            
        </tr>
        <tr>
            <td>{this.props.item.properties[38].Value==="1"?<p>Occupied</p>:<p></p>} </td>            
        </tr>        
              

    </tbody>    
    )
    }
}


const controllerSettings= item =>
{         
        
       
        const settingsRows =item.settings.map((row,index) => {
           
            return (
             
                
                <tr key={index}>                
                    <td>{row.Id}</td>
                    <td>{row.settingName}</td>
                    <td>{row.settingValue}</td>
                </tr>
             
            
        )})
        
        return (

                 <tbody>
                     <tr>
                        <td colSpan={3}><strong>Settings:</strong></td>
                    </tr> 
                     {settingsRows}</tbody> 
                 
    )
}



class ParentComponent extends React.Component {
    constructor() {
        super();
        
        this.state = {
            rooms_status : rooms_status,
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
                            {controllerDetails(item)}   
                        </div>
                        <div style={{float: "left"}}> 
                            <ControllerProperties item={item}/>
                        </div>
                </td>        
            </tr>
                
        )
    else
    return(<tr>
                <td colSpan={3}>
                    <div style={{float: "left"} }>{controllerSettings(item)}</div>
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
        
        this.state.rooms_status.controllers.forEach(item => {
            const perItemRows = this.renderItem(item);
            allItemRows = allItemRows.concat(perItemRows);
        });
        
        return (
			     <tbody>{allItemRows}</tbody>
        );
    }
}



const TableHead= () =>
{
    return(        
    <thead>
        <tr>
            <td style={{width:"33.33%"}}>Test</td>
            <td style={{width:"33.33%"}}>Name</td>
            <td style={{width:"33.33%"}}>Address</td>
        </tr>
    </thead>
    
    )
}






/*class ControllerListTable extends React.Component {


    


    constructor(props){
        super(props)

    //varijabla za json dobiven sa web stranice
    //const ControllerListFromAPI=getControllerListFromRoomStatus();

        
        const roomsStatus=rooms_status;
        console.log(roomsStatus.controllers);

        this.state = {
            roomsStatus :rooms_status            
        }

        
    }

    render() {
        
    //funkcija za dobivanje jsona sa web stranice
    function getControllerListFromRoomStatus() {
        return fetch('http://ae.hr/rooms_status.json')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log  (responseJson.movies)
            return responseJson.movies;
        })
        .catch((error) => {
            console.error(error);
        });
        }

    return(
    <tbody>
        <button onClick={()=>this.props.getControllerListFromRoomStatus()}></button>      
        
    </tbody>

    )

    }
}*/







class Form extends React.Component {

    constructor(props){
        super(props)

        this.state = {          
          }    
   
    }
        
    render() {
        

    return (
    <table>
        <TableHead/>
        <ParentComponent controllerSettings={controllerSettings}/>

        {/*<ControllerListTable getControllerListFromRoomStatus={getControllerListFromRoomStatus}/> */}       
        
    </table>
    )
        
  }
}



export default Form