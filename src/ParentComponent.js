import React from 'react'
//import Topbar from './topbar.js'
//import Sidebar from './sidebar.js'
//import Main from './main.js'
import rooms_status2 from './rooms_status2'
import Template from './template'







class ParentComponent extends React.Component {

    constructor(props){
        super(props)

        this.state = { 
          expandedRow : ""
                  
          }          
          
    
    }
    
    componentDidMount() {
        /*var roomStatusUrl="https://ae.hr/rooms_status.php"
        
       
        fetch(roomStatusUrl)
        .then(response => response.json())
        .then((responseJson) => {*/
                     
          /*this.setState({ rooms_status: responseJson })   */       
          this.setState({ rooms_status: rooms_status2 })       
        /*})
        .catch(console.log)*/        
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
        //this.setState({displayDetailsOrSetting : 0})
        
    } 
      
     
    handleRowLinkClick=(rowId)=> {
      if (rowId==="home")
      {
        this.setState({expandedRow : ""})
        window.scrollTo(0, 0)
      }
      
      if (rowId!==this.state.expandedRow) {
        
        if (this.state.expandedRow==="")
        {
          setTimeout(() => 
        {{        

          if (rowId!=="home")
          {
            var node = document.getElementById("row-"+rowId)
            var yourHeight = 75;
            
            node.scrollIntoView(true);               
            var scrolledY = window.scrollY;

            if(scrolledY){
              window.scrollTo({
                top: scrolledY - yourHeight,
                left: 0,
                behavior: 'smooth'
              });
            }
          }

        }}, 0);        
        
        
        setTimeout(() => 
        {{
          if (rowId!=="home")
          {
            this.setState({expandedRow : rowId})
          }
          /*else if (rowId!=="")
          {
            this.setState({expandedRow : ""})
          }*/

        }}, 500)

        }


        else{
        
        this.setState({expandedRow : ""})

        setTimeout(() => 
        {{        

          if (rowId!=="home")
          {
            var node = document.getElementById("row-"+rowId)
            var yourHeight = 75;
            
            node.scrollIntoView(true);               
            var scrolledY = window.scrollY;

            if(scrolledY){
              window.scrollTo({
                top: scrolledY - yourHeight,
                left: 0,
                behavior: 'smooth'
              });
            }
          }

        }}, 500);        
        
        
        setTimeout(() => 
        {{
          if (rowId!=="home")
          {
            this.setState({expandedRow : rowId})
          }
          /*else if (rowId!=="")
          {
            this.setState({expandedRow : ""})
          }*/

        }}, 1000)};
    }

    else
      {
          this.setState({expandedRow : ""})
      }  
    
    
    
    
    
    
    
    
    
    /*handleRowLinkClick=(rowId)=> {
        if (rowId==="home")
        {
          this.setState({expandedRow : ""})
          window.scrollTo(0, 0)
        }
        
        if (rowId!==this.state.expandedRow) {
          //this.setState({expandedRow : rowId})

          setTimeout(() => 
          {{
            if (rowId!=="home")
            {
              var node = document.getElementById("row-"+rowId)
              var yourHeight = 80;
              
              node.scrollIntoView(true);               
              var scrolledY = window.scrollY;

              if(scrolledY){
                window.scrollTo({
                  top: scrolledY - yourHeight,
                  left: 0,
                  behavior: 'smooth'
                });
              }
            }

          }}, 1000);
      }

      else
        {
            this.setState({expandedRow : ""})
        }*/


        
      
      
      
      
      
      /*if (rowId!==this.state.expandedRow)
        {
            this.setState({expandedRow : rowId}/*,()  =>{
              if (rowId!=="home")
              {
                var node = document.getElementById("row-"+rowId)
                var yourHeight = 80;
                
                node.scrollIntoView(true);               
                var scrolledY = window.scrollY;

                if(scrolledY){
                  window.scrollTo(0, scrolledY - yourHeight);
                }
                
                
                


              }

            } )
        }
        else
        {
            this.setState({expandedRow : ""})
        }
        //this.setState({displayDetailsOrSetting : 0})*/
        
    }

        
    render() {
        

    return (
      <div>
        {this.state.rooms_status?
        <Template rooms_status={this.state.rooms_status} handleRowLinkClick={this.handleRowLinkClick}
        handleRowClick={this.handleRowClick} expandedRow={this.state.expandedRow}
        />:null }
      </div>
        
        /*<div>
            
          <Topbar/>
        {this.state.rooms_status?<Sidebar  expandedRow={this.state.expandedRow} rooms_status={this.state.rooms_status} handleRowLinkClick={this.handleRowLinkClick} />:null }  
        {this.state.rooms_status?<Main rooms_status={this.state.rooms_status} handleRowClick={this.handleRowClick} expandedRow={this.state.expandedRow}/>:null }
        </div>}*/
    )
        
  }
}



export default ParentComponent