import React from 'react'


class AirQualityInfo extends React.Component {

    constructor(props){
        super(props)       
            
        this.state = {
          }
    }  
    
    componentDidMount() {
        var country="HR"
        var location="HR0005A"
        
        var openAqURL="https://api.openaq.org/v1/latest?&country="+country+"&location="+location
        //console.log(openAqURL)


        fetch(openAqURL)
        .then(response => response.json())
        .then((responseJson) => {
            
          this.setState({ airQualityRijeka: responseJson.results[0] })         
          this.displayAirQualityData()
        })
        .catch(console.log)  
                
      }


    displayAirQualityData=()=>
    { 

        const airQualityRijekaParameters =this.state.airQualityRijeka.measurements.map((parameter,index) => {
           
            return ( 

                <p style={{display : 'inline-block',padding:"0 1em" }} >
                    {parameter.parameter.toUpperCase()} : {parameter.value}{parameter.unit}
                </p>              
        )})

        return (airQualityRijekaParameters)
    } 
  
    render(){
    
        return(
                
    <div >
    Air quality in Rijeka, latest measurements:{<br/>} {this.state.airQualityRijeka && this.displayAirQualityData()}
         
         
    </div>
    )
    }
  }  


  export default AirQualityInfo