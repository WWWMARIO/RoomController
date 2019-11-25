import React from 'react'
import Layout from './Layout'

class ParentComponent extends React.Component {

    constructor(props){
        super(props)        
      
        this.state = { 
          expandedRow : "",        
                  
          } 
    }

    
    componentDidMount() {
        var roomStatusUrl="https://ae.hr/rooms_status.php"
        
       
        fetch(roomStatusUrl)
        .then(response => response.json())
        .then((responseJson) => {
                     
          this.setState({ rooms_status: responseJson },()=>
          {
            {
              if ((JSON.parse(localStorage.getItem("currentTemperatureLocal"))) ===null )
                {
                  
                  let currentTempByRoomIdLocal={}
              
                  this.state.rooms_status.controllers.forEach(element => {
                    let controllerId=element.id
                    let controllerTemp=element.properties[7].Value
                    currentTempByRoomIdLocal[controllerId]=controllerTemp
              
                  })
              
                  localStorage.setItem("currentTemperatureLocal", JSON.stringify(currentTempByRoomIdLocal));
                  this.setState({localTempUpdated : true})
                }  
                  
            }
          })       
              
        })
        .catch(console.log)  
      }         
      
      
      handleRowClick=(rowId)=> {
        if (rowId==="home")
        {
          this.setState({expandedRow : ""})
          window.scrollTo(0, 0)
        }
        
        if (rowId!==this.state.expandedRow) {
          this.setState({expandedRow : rowId})                    
      }       
        else
        {
            this.setState({expandedRow : ""})
        }
        
    } 
      
     
       
    handleRowLinkClick=(rowId)=> {
      if (rowId==="home")
      {
        this.setState({expandedRow : ""})
        window.scrollTo(0, 0)
      }


      else if (rowId===this.state.expandedRow)
      {
        this.setState({expandedRow : ""})
      }      
      
        
      else if (this.state.expandedRow==="")
        {              
            var node = document.getElementById("row-"+rowId)
            var topBarHeight = 75;
            
            node.scrollIntoView(true);               
            var scrolledY = window.scrollY;

            if(scrolledY){
                window.scrollTo({
                top: scrolledY - topBarHeight,
                left: 0,
                behavior: 'smooth'
              });
            }            
            setTimeout(() => 
            {{              
                this.setState({expandedRow : rowId})                       

            }}, 500)
        }


      else{
      
          this.setState({expandedRow : ""})

          setTimeout(() => 
          {{
              var node = document.getElementById("row-"+rowId)
              var topBarHeight = 75;
              
              node.scrollIntoView(true);               
              var scrolledY = window.scrollY;

              if(scrolledY){
                window.scrollTo({                  
                  top: scrolledY - topBarHeight,
                  left: 0,
                  behavior: 'smooth'
                });
              }
          }}, 500);        
          
          
          setTimeout(() => 
          {{
              this.setState({expandedRow : rowId})
          }}, 1000)};        
        
    }

        
    render() {
        

    return (
      <div>
        {this.state.rooms_status?
        <Layout rooms_status={this.state.rooms_status} handleRowLinkClick={this.handleRowLinkClick}
        handleRowClick={this.handleRowClick} expandedRow={this.state.expandedRow}
        />:null }
      </div>       
        
    )
        
  }
}



export default ParentComponent