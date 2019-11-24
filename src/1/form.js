import React from 'react'
//import ReactDOM from 'react-dom'


class Form extends React.Component {

  constructor(props){
    super(props)
        this.initialState = {
          isChecked : 0,
          note: ''        
      }  
  
      this.state = this.initialState
    }  

    handleEvent= event=>{            
    
      this.setState({
        note : event.target.value        
      })
    }

    onSaveNote = () => {
      this.props.saveNote(this.state)
      this.setState(this.initialState)
    }

    

    handleKeydown = event => {
      if (event.key === 'Enter') {
        this.onSaveNote(event);
      }
    }    
   

    render() {

    return (
    <div>
        <label>Enter note:</label>
        <input type="text" value={this.state.note} onChange={this.handleEvent} onKeyDown={this.handleKeydown}></input>   
        <button onClick={this.onSaveNote} >Save note</button>

        

    </div>
    )
        
  }
}



export default Form