import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const displayControllerDetails= item =>
{
    return(
    <TableBody>
        <TableRow>
            <TableCell colSpan={3}><strong>Details:</strong></TableCell>
        </TableRow>
        <TableRow>
            <TableCell>id :</TableCell>
            <TableCell>{item.id}</TableCell>
        </TableRow>    
        
        <TableRow>
            <TableCell>name:</TableCell>
            <TableCell>{item.name}</TableCell>
        </TableRow>         
        <TableRow>
            <TableCell>address:</TableCell>
            <TableCell>{item.address}</TableCell>
        </TableRow>         
        <TableRow>
            <TableCell>object:</TableCell>
            <TableCell>{item.object}</TableCell>
        </TableRow>         
        <TableRow>
            <TableCell>subObject:</TableCell>
            <TableCell>{item.subObject}</TableCell>
        </TableRow>         
        <TableRow>
            <TableCell>zone:</TableCell>
            <TableCell>{item.zone}</TableCell>
        </TableRow>         
        <TableRow>
            <TableCell>subZone:</TableCell>
            <TableCell>{item.subZone}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>ipAddress:</TableCell>
            <TableCell>{item.ipAddress}</TableCell>
        </TableRow>         
        <TableRow>
            <TableCell>ipPort:</TableCell>
            <TableCell>{item.ipPort}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>LocalCommandHeatingCooling:</TableCell>
            <TableCell>{String(item.LocalCommandHeatingCooling)}</TableCell>
        </TableRow>         
        <TableRow>
            <TableCell>LocalCommandPanelBlocked:</TableCell>
            <TableCell>{String(item.LocalCommandPanelBlocked)}</TableCell>
        </TableRow> 
    </TableBody>   
    )
}


export default displayControllerDetails