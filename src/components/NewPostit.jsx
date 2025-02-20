import { useState} from "react"

export default function NewPostIt({visible, setVisible}){


    if(!visible) return null;

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

    function close(){
        setVisible(false);
    }


    const handleForm = {
        submit(event){
            event.preventDefault();

            console.log(form);

            setVisible(false)
        },
        change(event, type){
            setForm({...form, [type]: event.target.value})

            if(type === "color") setColor(event.target.value);
        }
    }
    return(
        <>
                <form className="add-postit-form" style={{backgroundColor: `var(--${postItColor})`}} onSubmit={(event) => handleForm.submit(event)}>
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
            <div className="add-postit-overlay" onClick={close}></div>
        </>
    )
}