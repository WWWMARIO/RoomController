import React from 'react'
import Form from './form'
import rooms_status from './rooms_status.json';





class App extends React.Component {

  constructor() {
    super();
    
    if ((JSON.parse(localStorage.getItem("currentTempLocal"))) ===null )
      {
        
        let currentTempByRoomIdLocal={}

        rooms_status.controllers.forEach(element => {
          let controllerId=element.id
          let controllerTemp=element.properties[7].Value
          currentTempByRoomIdLocal[controllerId]=controllerTemp

        })

        localStorage.setItem("currentTempLocal", JSON.stringify(currentTempByRoomIdLocal));
      }
}
    

    render() {

    return (
    <div>

      
      <Form/> 
    </div>   
    )
        
  }
}


  export default App