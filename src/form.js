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








class Sidebar extends React.Component {

    constructor(props){
        super(props)       

        
        this.state = {       
           
            
          }    
   
    }  

    componentDidMount() {
        var today=new Date();
        var apiKey="8a467e39a9ae7875410a03765fbab59fbd7ed3e8"
        var country="hr"
        var year=today.getFullYear()
        var nextYear=Number(today.getFullYear()+1)
        var calendarificURL="https://calendarific.com/api/v2/holidays?&api_key="+apiKey+"&country="+country+"&year="+year


        fetch(calendarificURL)
        .then(response => response.json())
        .then((responseJson) => {
            
          this.setState({ holidayListJsonThisYear: responseJson.response.holidays })
          this.getNextHoliday()
        })
        .catch(console.log)

        var calendarificURLNextYear="https://calendarific.com/api/v2/holidays?&api_key="+apiKey+"&country="+country+"&year="+nextYear

        fetch(calendarificURLNextYear)
        .then(response => response.json())
        .then((responseJson) => {
          this.setState({ holidayListJsonNextYear: responseJson.response.holidays })
          this.getNextHoliday()
        })
        .catch(console.log)

        

                
      }

      




      

      
      
    getNextHoliday=()=>{
        var today=new Date()
        
        const thisYearHolidays=this.state.holidayListJsonThisYear
        

        
        for (let i=0;i<thisYearHolidays.length;i++)
        {
            if  (thisYearHolidays[i].type[0]==="National holiday" || thisYearHolidays[i].type[0]==="Observance")
            {
                let currentHoliday=new Date(thisYearHolidays[i].date.datetime.year,thisYearHolidays[i].date.datetime.month-1,thisYearHolidays[i].date.datetime.day)
                
                if (today<currentHoliday )
                {        
                        this.setState({
                            nextHoliday:thisYearHolidays[i]
                             
                        }) 
                        //console.log(thisYearHolidays[i])  
                        return thisYearHolidays[i]
                        break
                }
            } 
        }
              
        let lastHolidayIndex=Number(thisYearHolidays.length-1)       
        
        let lastHoliday=thisYearHolidays[lastHolidayIndex]
        
        let lastHolidayDate=new Date(lastHoliday.date.datetime.year,lastHoliday.date.datetime.month-1,lastHoliday.date.datetime.day)
        const nextYearHolidays=this.state.holidayListJsonNextYear
        if (today>=lastHolidayDate)
        {
            this.setState({
                            nextHoliday:nextYearHolidays[0]
                        })
            console.log(thisYearHolidays[0] )            
            return thisYearHolidays[0]             
        }
         
       


    }
       
    render(){
    
        return(
                
    <div className="sidenav">
         {/*<button onClick={()=>this.getHolidaysListFromCalendarific()}>dohvati</button> 
         <button onClick={()=>this.getNextHoliday()}>dohvati</button>*/}
         <div>The next Croatian holiday is :</div>
         { this.state.nextHoliday &&
                <div>{this.state.nextHoliday.name} {this.state.nextHoliday.date.iso}</div> 
            }
         
         
    </div>
    )
    }
  }    


  class Topbar extends React.Component {

    constructor(props){
        super(props)       
            
        this.state = {
          }
    }  
    
    componentDidMount() {
        var country="HR"
        var location="HR0005A"
        
        var openAqURL="https://api.openaq.org/v1/latest?&country="+country+"&location="+location
        console.log(openAqURL)


        fetch(openAqURL)
        .then(response => response.json())
        .then((responseJson) => {
            
          this.setState({ airQualityRijeka: responseJson.results[0] })         
          this.displayAirQualityData()
        })
        .catch(console.log)  
                
      }


    displayAirQualityData=()=>
    {
        

        /*for(let i=0;i<this.state.airQualityRijeka.measurements.length;i++)
        {

            <dl>
                <dt>{this.state.airQualityRijeka.measurements[i].parameter}</dt>
                <dd></dd>

            </dl>

        }*/

        const airQualityRijekaParameters =this.state.airQualityRijeka.measurements.map((parameter,index) => {
           
            return (   
                
                
               /* <dl style={{display : 'inline-block'}} >
                    <dt>{parameter.parameter.toUpperCase()}</dt>
                    <dt>{parameter.value}{parameter.unit}</dt>
                padding-left:5em
                </dl>*/

                <p style={{display : 'inline-block',padding:"0 1em" }} >
                    {parameter.parameter.toUpperCase()} : {parameter.value}{parameter.unit}



                </p>


                
                /*<tr key={index}>                
                    <td>{row.Id}</td>
                    <td>{row.settingName}</td>
                    <td>{row.settingValue}</td>
                </tr>*/
             
            
        )})



        /*let so2Quantity=this.state.airQualityRijeka.measurements[0].value
        console.log(so2Quantity+" so2")
        let no2Quantity=this.state.airQualityRijeka.measurements[1].value
        console.log(no2Quantity+" no2")*/

        return (airQualityRijekaParameters)


    }  




  
    render(){
    
        return(
                
    <div className="topbar">
         Air quality in Rijeka, latest measurements {this.state.airQualityRijeka && this.displayAirQualityData()}
         
         
    </div>
    )
    }
  }  









class Form extends React.Component {

    constructor(props){
        super(props)

        this.state = {          
          }    


          

    


   
    }

    /*componentDidMount(){
        const ControllerListFromAPI=getControllerListFromRoomStatus();        
        //const roomsStatus=
        //console.log(roomsStatus.controllers);

        this.state = {
            roomsStatus :ControllerListFromAPI            
        }


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


    }*/



      

    








        
    render() {
        

    return (
        <div>
            <Topbar/>
            <Sidebar/>  
    
            <table className="main">
                
                <TableHead/>
                <ParentComponent controllerSettings={controllerSettings}/>

                {/*<ControllerListTable getControllerListFromRoomStatus={getControllerListFromRoomStatus}/> */}       
                
            </table>
        </div>
    )
        
  }
}



export default Form