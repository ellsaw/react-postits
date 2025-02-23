import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function PostIt({ content, noteColor, coordX, coordY, mouseDown, deleteButtonClick }) {
  return (
    <>
      <div
        className="postit"
        style={{
          backgroundColor: `var(--${noteColor})`,
          left: `${coordX}`,
          top: `${coordY}`,
        }}
        onMouseDown={mouseDown}
      >
        <button onClick={deleteButtonClick}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <p>{content}</p>
      </div>
    </>
  );
}
