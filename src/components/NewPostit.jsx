import { useState } from "react"

export default function NewPostIt({visible}){

    if(!visible) return;

    const [postItColor, setColor] = useState("yellow")

    const [form, setForm] = useState({
        content: "",
        color: "yellow"
    })

    const colors = [
        "yellow",
        "pink",
        "blue",
        "green"
    ]


    const handleForm = {
        submit(event){
            event.preventDefault();

            console.log(form);

            return;
        },
        change(event, type){
            setForm({...form, [type]: event.target.value})

            if(type === "color") setColor(event.target.value);
        }
    }
    return(
        <>
            <div className='add-postit-overlay'>
                <form style={{backgroundColor: `var(--${postItColor})`}} onSubmit={(event) => handleForm.submit(event)}>
                    <textarea name="postItContent" id="postItContent" onChange={(event) => handleForm.change(event, "content")}></textarea>
                    <div className="form-controls">
                        <fieldset className="radio-container">
                            {colors.map((color) => (
                                <input key={`${color}Radio`} type="radio" name="colorPicker" value={color} checked={form.color === color} style={{backgroundColor: `var(--${color})`}} onChange={(event) => handleForm.change(event, "color")}/>
                            ))}
                        </fieldset>
                        <button type="submit">Place Note</button>
                    </div>
                </form>
            </div>
        </>

    )
}