export default function PostIt({ content, noteColor, coordX, coordY, mouseDown }) {
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
        <p>{content}</p>
      </div>
    </>
  );
}
