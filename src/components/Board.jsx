import { useEffect, useState } from "react";
import PostIt from "./PostIt";

export default function Board(){
/*     const [postIts, setPostIts] = useState([]);

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'))
        setPostIts(notes);
    }) */


    return(
        <div className="board">
            <PostIt content={"Hej Hej hej"} noteColor={"yellow"}/>
        </div>
    )
}