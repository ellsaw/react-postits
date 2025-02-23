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
        <button onClick={deleteButtonClick} aria-label="Delete note">
          ×
        </button>
        <p>{content}</p>
      </div>
    </>
  );
}
