import React, {useState} from "react";

function CreateArea(props) {

const [note,setNote] = useState( {
    title: "",
    content: ""
}
);

function handleChange(event) {
   const {name,value} = event.target;

   setNote(preNote =>{
       return{
           ...preNote,
           [name]: value

       };
   })
}


function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
}


 

  return (
    <div>
      <form>
        <input   onChange={handleChange}name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
