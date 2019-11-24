import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';


function displayZoneList(props)
{

    const zoneList =props.rooms_status.controllers.map((controller) => {
           
        return (

            
                <ListItem alignItems="center" button key={controller.id} onClick={() => props.handleRowLinkClick(controller.id)} style={props.expandedRow===controller.id?{background:"lightblue"}:{background:"white"}}>
                    <ListItemText  primary={controller.zone}/>
                    
                </ListItem>  
    )})

    zoneList.unshift(<ListItem button key={"home"} onClick={() => props.handleRowLinkClick("home")}>
                        <ListItemIcon><HomeIcon /> </ListItemIcon>    
                        <ListItemText >Home</ListItemText>            
                    </ListItem>
                    )    

    return (<List display="flex">                   
        {zoneList}
        </List>)

}

       
export default displayZoneList


{/*<List>
          {['Inbox', 'Starred', 'Send email', 'Drafts','Inbox', 'Starred', 'Send email', 'Drafts','Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </List>*/}

   

  