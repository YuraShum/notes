import { useEffect, useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) ||[]);
  const [filterNotes, setFilterNotes] = useState('')


  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  function deletingNote(id){
    let newNote = []
    for(let i = 0; i < notes.length; i++){
      if(id !== notes[i].id){
        newNote.push(notes[i])
      }
    }
    setNotes(newNote)
  }

  function inputTextarea(id, value){
    let updateNoteText = [];
    for(let i = 0; i < notes.length; i++){
      const currentNoteText = notes[i]
      if(id === currentNoteText.id){
        updateNoteText.push({
          ...currentNoteText,
          text: `${value}`
        })
      }else{
        updateNoteText.push({
          ...currentNoteText,
      })
      }
    }
    setNotes(updateNoteText)
  }

  function inputTitle(id, value){
    let updateNoteTitle = [];
    for(let i = 0; i < notes.length; i++){
      const currentNoteTitle = notes[i]
      if(id === currentNoteTitle.id){
        updateNoteTitle.push({
          ...currentNoteTitle,
          title: `${value}`
        })
      }else{
        updateNoteTitle.push({
          ...currentNoteTitle,
      })
      }
    }
    setNotes(updateNoteTitle)
  }
  
  function editText(id){
    let newEditNote = []
    for(let i = 0; i < notes.length; i++){
      const currentNote =  notes[i];
      if(id === currentNote.id && currentNote.edit === false){
        newEditNote.push({
          ...currentNote,
          edit: true
        })
      }
      else if(id === currentNote.id && currentNote.edit === true){
        newEditNote.push({
          ...currentNote,
          edit: false
        })
      }else{
        newEditNote.push({
          ...currentNote
        })
      }
    }
    setNotes(newEditNote)
  }


  const elem = notes.filter(obj => {
    const titleText = obj.title;
    return(titleText.toLowerCase().includes(filterNotes.toLowerCase()))
  }).map((obj, index) => {
    return(
      <Note 
        key ={index}
        number = {index + 1}
        id = {obj.id}
        timeCreated = {obj.time}
        deletingNote = {deletingNote}
        inputTextarea = {inputTextarea}
        inputTitle = {inputTitle}
        editText = {editText}
        title = {obj.title}
        isEdit = {obj.edit}
        text = {obj.text}/>
    )
  })

  
  return (
    <div className="App">
      <Header 
        setNotes = {setNotes}
        filterNotes = {filterNotes}
        setFilterNotes = {setFilterNotes}
        ></Header>
      <div className="content">
        {notes.length > 0 && elem}
      </div>
    </div>
  );
}

export default App;



