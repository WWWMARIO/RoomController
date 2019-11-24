import React from 'react'
import ControllerExpansionPanels from './ControllerExpansionPanels'


class Main extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {

        };
    }     

    renderItem(item) {
        
        const itemRows = [			  
                <ControllerExpansionPanels controller={item} expandedRow={this.props.expandedRow} 
                handleRowClick={this.props.handleRowClick} handleClickDetailsOrSetting={this.handleClickDetailsOrSetting}/> 
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