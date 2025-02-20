import PostIt from "./PostIt";

export default function Board(){

    return(
        <div className="board">
            <PostIt content={"Hej Hej hej"} noteColor={"yellow"}/>
        </div>
    )
}