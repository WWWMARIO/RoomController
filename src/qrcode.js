import React from 'react'
import Button from '@material-ui/core/Button';



class QRCode extends React.Component {

    constructor(props){
        super(props)

        this.state = {            
            qrUrl: ""         
          }    
   
    }

    onClickGenerateQRCode=()=>
    {       
        let qrLink= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+this.props.controller.name
        this.setState({
            qrUrl:qrLink
        })        
    }    

        
    render() {        

    return (
        <div>
            <Button variant="contained" color="primary" onClick={this.onClickGenerateQRCode}>Generate QR Code</Button><br></br>
            {this.state.qrUrl!==""?<img src={this.state.qrUrl} alt={"qr kod replacement"}></img>:""}
        </div>

    )
        
  }
}


export default QRCode