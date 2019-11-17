import React from 'react'


class DisplayControllerProperties extends React.Component {

    constructor(props){
        super(props)


        this.state = {       
            CurrentTempFromLocalStorage:JSON.parse(localStorage.getItem("currentTemperatureLocal"))
          }    
   
    }

    changeCurrentTempFromLocalStorage=event=>
    
    {        
        let CurrentTempFromLocalStorage=JSON.parse(localStorage.getItem("currentTemperatureLocal"))
           
        if (event.target.value==='+')
        {
            CurrentTempFromLocalStorage[this.props.item.id]=Number(CurrentTempFromLocalStorage[this.props.item.id])+1
        }            
        if (event.target.value==='-')
        {
            CurrentTempFromLocalStorage[this.props.item.id]=Number(CurrentTempFromLocalStorage[this.props.item.id])-1
        }
        localStorage.setItem("currentTemperatureLocal",JSON.stringify(CurrentTempFromLocalStorage))
       
        this.setState ({
            CurrentTempFromLocalStorage:CurrentTempFromLocalStorage
        })
        
    
    }


    render(){
    
        return(
                
    <tbody>
        <tr>
            <td colSpan={3}><strong>Properties:</strong></td>
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


export default DisplayControllerProperties