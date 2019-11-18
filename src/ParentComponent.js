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
        var roomStatusUrl="https://ae.hr/rooms_status.php"
        
       
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
          window.scrollTo(0, 0)
        }
        
        
        if (rowId!==this.state.expandedRow)
        {
            this.setState({expandedRow : rowId},()  =>{
              if (rowId!=="home")
              {
                var node = document.getElementById("row-"+rowId)
                var yourHeight = 80;
                
                node.scrollIntoView(true);               
                var scrolledY = window.scrollY;

                if(scrolledY){
                  window.scroll(0, scrolledY - yourHeight);
                }
                
                
                


              }

            } )
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
            
            <Topbar/>
        {this.state.rooms_status?<Sidebar  expandedRow={this.state.expandedRow} rooms_status={this.state.rooms_status} handleRowClick={this.handleRowClick} />:null }  
        {this.state.rooms_status?<Main rooms_status={this.state.rooms_status} handleRowClick={this.handleRowClick} expandedRow={this.state.expandedRow}/>:null }
        </div>
    )
        
  }
}



export default ParentComponent