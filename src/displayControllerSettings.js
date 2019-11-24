import React from 'react'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const displayControllerSettings= item =>
{         
        
       
        const settingsRows =item.settings.map((row,index) => {
           
            return (
             
                
                <TableRow key={index}>                
                    <TableCell>{row.Id}</TableCell>
                    <TableCell>{row.settingName}</TableCell>
                    <TableCell>{row.settingValue}</TableCell>
                </TableRow>
             
            
        )})
        
        return (

                <Table size="small">
                    <TableRow>
                        <TableCell colSpan={3}><strong>Settings:</strong></TableCell>
                    </TableRow> 
                     {settingsRows}
                </Table> 
                 
    )
}

export default displayControllerSettings