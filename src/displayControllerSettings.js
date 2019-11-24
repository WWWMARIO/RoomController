import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
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

                <TableBody>
                    <TableRow>
                        <TableCell colSpan={3}><strong>Settings:</strong></TableCell>
                    </TableRow> 
                     {settingsRows}
                </TableBody> 
                 
    )
}

export default displayControllerSettings