import React from 'react'
import Topbar from './topbar.js'
import Sidebar from './sidebar.js'
import Main from './main.js'





class ParentComponent extends React.Component {

    constructor(props){
        super(props)

        this.state = { 
          expandedRow : ""
                  
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

      handleRowClick=(rowId)=> {        
        
        if (rowId==="home")
        {
          this.setState({expandedRow : ""})
        }
        
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

        
    render() {
        

    return (
        <div>
            mario
            <Topbar/>
        {this.state.rooms_status?<Sidebar rooms_status={this.state.rooms_status} handleRowClick={this.handleRowClick} />:null }  
        {this.state.rooms_status?<Main rooms_status={this.state.rooms_status} handleRowClick={this.handleRowClick} expandedRow={this.state.expandedRow}/>:null }
        </div>
    )
        
  }
}



export default ParentComponent