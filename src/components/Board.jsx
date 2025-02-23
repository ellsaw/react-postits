import { useEffect, useState } from "react";
import PostIt from "./PostIt";

export default function Board({ reRenderOn }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("notes")));
  }, [reRenderOn]);

  useEffect(() => {
    if(notes) localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function mouseHandler(postItEvent, id) {
    const targetElement = postItEvent.target.closest(".postit");

    const headerHeight = document.querySelector('header').clientHeight;

    const prevCoord = {
      x: parseInt(targetElement.style.left),
      y: parseInt(targetElement.style.top),
    };

    const initialMouse = {
      x: postItEvent.clientX,
      y: postItEvent.clientY,
    };

    const moveHandler = (moveEvent) => {
      const mouse = {
        x: moveEvent.clientX - initialMouse.x,
        y: moveEvent.clientY - initialMouse.y,
      };

      if (prevCoord.x + mouse.x < 0) {
        targetElement.style.left = "0px";
      } else if ((prevCoord.x + mouse.x) >= (window.innerWidth - targetElement.clientWidth)){
        targetElement.style.left = `${window.innerWidth - targetElement.clientWidth}px`;
      } else {
        targetElement.style.left = `${prevCoord.x + mouse.x}px`;
      }
      
      if (prevCoord.y + mouse.y < 0) {
        targetElement.style.top = "0px";
      }else if ((prevCoord.y + mouse.y) >= ((window.innerHeight - headerHeight) - targetElement.clientHeight)){
        targetElement.style.top = `${(window.innerHeight - headerHeight) - targetElement.clientHeight}px`;
      } else {
        targetElement.style.top = `${prevCoord.y + mouse.y}px`;
      }
    };

    const upHandler = () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseup", upHandler);

      setNotes((n) =>
        n.map((note) =>
          note.id === id
            ? {
                ...note,
                x: targetElement.style.left,
                y: targetElement.style.top,
              }
            : note
        )
      );
    };

    window.addEventListener("mousemove", moveHandler);

    window.addEventListener("mouseup", upHandler);
  }


  function deleteNote(id){
    if(!confirm("Are you sure you want to delete this note?\nThis cannot be undone!")){
        return;
    }

    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <div className="board">
      {notes &&
      notes.map((note) => (
        <PostIt
          key={note.id}
          content={note.content}
          noteColor={note.color}
          coordX={note.x}
          coordY={note.y}
          mouseDown={(event) => mouseHandler(event, note.id)}
          deleteButtonClick={() => deleteNote(note.id)}
        />
      ))}
    </div>
  );
}
