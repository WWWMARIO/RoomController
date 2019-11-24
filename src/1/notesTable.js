import React from 'react'




const NotesTableHead= () =>
{
    return(        
    <thead>
        <tr>
            <td>done?</td>
            <td>Note content</td>
            <td>Delete</td>
        </tr>
    </thead>
    
    )
}

const NotesTableBody = props => {
  const rows = props.rememberedNotes.map((row, index) => {
    return (
      <tr key={index}>
        <td><input type="checkbox" onChange={() => props.changeCheck(index)} checked={row.isChecked}/*{row.isChecked?"checked":""}*//>{row.isChecked} </td>
        {row.isChecked?(<td><strike>{row.note}</strike></td>):(<td>{row.note}</td>)}
        <td><button onClick={()=>props.deleteNote(index)}>Delete </button></td>    
        
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
  
}



class NotesTable extends React.Component {

    /*constructor(props){
        super(props)

      
    } */
   

    render() {
      

    return (
    <div>
        <label>Enter note:</label>
        

        <table>
          <NotesTableHead />  
          <NotesTableBody rememberedNotes={this.props.rememberedNotes } deleteNote={this.props.deleteNote} changeCheck={this.props.changeCheck}/>
          
          
        </table>

    </div>
    )
        
  }
}



export default NotesTable