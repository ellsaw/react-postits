import { useEffect, useState } from "react";
import PostIt from "./PostIt";

export default function Board({ reRenderOn }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("notes")));
  }, [reRenderOn]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function mouseHandler(postItEvent, id) {
    const prevCoord = {
      x: parseInt(postItEvent.target.style.left),
      y: parseInt(postItEvent.target.style.top),
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
        postItEvent.target.style.left = "0px";
      } else {
        postItEvent.target.style.left = `${prevCoord.x + mouse.x}px`;
      }

      if (prevCoord.y + mouse.y < 0) {
        postItEvent.target.style.top = "0px";
      } else {
        postItEvent.target.style.top = `${prevCoord.y + mouse.y}px`;
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
                x: postItEvent.target.style.left,
                y: postItEvent.target.style.top,
              }
            : note
        )
      );
    };

    window.addEventListener("mousemove", moveHandler);

    window.addEventListener("mouseup", upHandler);
  }

  return (
    <div className="board">
      {notes.map((note) => (
        <PostIt
          key={note.id}
          content={note.content}
          noteColor={note.color}
          coordX={note.x}
          coordY={note.y}
          mouseDown={(event) => mouseHandler(event, note.id)}
        />
      ))}
    </div>
  );
}
