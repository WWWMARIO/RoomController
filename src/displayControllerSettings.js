import React from 'react'


const displayControllerSettings= item =>
{         
        
       
        const settingsRows =item.settings.map((row,index) => {
           
            return (
             
                
                <tr key={index}>                
                    <td>{row.Id}</td>
                    <td>{row.settingName}</td>
                    <td>{row.settingValue}</td>
                </tr>
             
            
        )})
        
        return (

                <tbody>
                    <tr>
                        <td colSpan={3}><strong>Settings:</strong></td>
                    </tr> 
                     {settingsRows}
                </tbody> 
                 
    )
}

export default displayControllerSettings