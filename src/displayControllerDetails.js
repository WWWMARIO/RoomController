import React from 'react'

const displayControllerDetails= item =>
{
    return(
    <tbody>
        <tr>
            <td colSpan={3}><strong>Details:</strong></td>
        </tr>
        <tr>
            <td>id :</td>
            <td>{item.id}</td>
        </tr>    
        
        <tr>
            <td>name:</td>
            <td>{item.name}</td>
        </tr>         
        <tr>
            <td>address:</td>
            <td>{item.address}</td>
        </tr>         
        <tr>
            <td>object:</td>
            <td>{item.object}</td>
        </tr>         
        <tr>
            <td>subObject:</td>
            <td>{item.subObject}</td>
        </tr>         
        <tr>
            <td>zone:</td>
            <td>{item.zone}</td>
        </tr>         
        <tr>
            <td>subZone:</td>
            <td>{item.subZone}</td>
        </tr>
        <tr>
            <td>ipAddress:</td>
            <td>{item.ipAddress}</td>
        </tr>         
        <tr>
            <td>ipPort:</td>
            <td>{item.ipPort}</td>
        </tr>
        <tr>
            <td>LocalCommandHeatingCooling:</td>
            <td>{String(item.LocalCommandHeatingCooling)}</td>
        </tr>         
        <tr>
            <td>LocalCommandPanelBlocked:</td>
            <td>{String(item.LocalCommandPanelBlocked)}</td>
        </tr> 
    </tbody>   
    )
}


export default displayControllerDetails