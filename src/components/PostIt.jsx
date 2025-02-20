export default function PostIt({content, noteColor}){
    
    function moveIt(){

    }
    return(
        <>
            <div className="postit" style={{backgroundColor: `var(--${noteColor})`}}>
                <p>{content}</p>
            </div>
        </>
    );
}