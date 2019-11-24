import React from 'react'
//import ReactDOM from 'react-dom'
import Form from './form'
import NotesTable from "./notesTable.js"



class App extends React.Component {


  constructor(props){
    super(props)

    if ((JSON.parse(localStorage.getItem("notesStorage"))) ===null )
      {
        localStorage.setItem("notesStorage", "[]");
      }

    var notesFromStorage=JSON.parse(localStorage.getItem("notesStorage"));

    this.state = {   
      
      rememberedNotes:notesFromStorage

      } 
    }

    

    updateNotestoLocalStorage=()=>{
      let notesStorage=this.state.rememberedNotes;      
      localStorage.setItem("notesStorage", JSON.stringify(notesStorage));
    }


    saveNote= newNote=>{      

      this.setState({ 
          rememberedNotes: [...this.state.rememberedNotes,newNote] 
        },()  =>{this.updateNotestoLocalStorage()}       
      
      )       
    }  

    changeCheck=index=>{

      let tempNotes=this.state.rememberedNotes;
      
      if (tempNotes[index].isChecked===0)
      {        
        tempNotes[index].isChecked=1
      }
      else
      {        
        tempNotes[index].isChecked=0
      }

      this.setState({
        rememberedNotes:tempNotes
      },()  =>{this.updateNotestoLocalStorage()} )

    }      
      

    deleteNote=indexOfNoteToDel=>{
     
      this.setState({

        rememberedNotes : this.state.rememberedNotes.filter(function(value, index, arr){

          return index !== indexOfNoteToDel})      
              
        },()  =>{this.updateNotestoLocalStorage()         
        } 
        )
    }   

    render() {
     

    return (
      <div>
    <Form saveNote={this.saveNote}/>, 
    <NotesTable rememberedNotes={this.state.rememberedNotes} deleteNote={this.deleteNote} changeCheck={this.changeCheck} />
    </div>
     
    )
        
  }
}


  export default App