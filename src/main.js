import React from 'react'
import ControllerExpansionPanels from './ControllerExpansionPanels'




class Main extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
            
            displayDetailsOrSetting: 0,

        };
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
    

    renderItem(item) {
        
        const itemRows = [
			  
                <ControllerExpansionPanels controller={item} expandedRow={this.props.expandedRow} 
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