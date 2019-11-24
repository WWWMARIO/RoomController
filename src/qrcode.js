import React from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




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
            <button style={{fontSize: "15px",padding: "5px "}} onClick={this.onClickGenerateQRCode}><Typography>GENERATE QR CODE</Typography></button><br></br>
            {this.state.qrUrl!==""?<img src={this.state.qrUrl} alt={"qr kod replacement"}></img>:""}
        </div>

    )
        
  }
}


export default QRCode