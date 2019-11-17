import React from 'react'
import Topbar from './topbar.js'
import Sidebar from './sidebar.js'
import Main from './main.js'





class ParentComponent extends React.Component {

    constructor(props){
        super(props)

        this.state = { 
                  
          }          
          
    
    }
    
    componentDidMount() {
        var roomStatusUrl="http://ae.hr/rooms_status.php"
        
       
        fetch(roomStatusUrl)
        .then(response => response.json())
        .then((responseJson) => {
                     
          this.setState({ rooms_status: responseJson })          
                  
        })
        .catch(console.log)        
      }   

        
    render() {
        

    return (
        <div>
            mario
            <Topbar/>
        {this.state.rooms_status?<Sidebar rooms_status={this.state.rooms_status}/>:null }  
        {this.state.rooms_status?<Main rooms_status={this.state.rooms_status}/>:null }
        </div>
    )
        
  }
}



export default ParentComponent