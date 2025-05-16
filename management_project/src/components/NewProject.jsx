import Input from "./Input.jsx";
import {useRef} from "react";
import Modal from "./Model.jsx";

export default function NewProject({onAdd, onCalcel}) {
    const modal = useRef();
    const title = useRef();
    const description = useRef()
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "") {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        })
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-stone-500 my-4">Invalid input</h2>
                <p className="text-stone-400 mb-4">Oops ... looks like you forgot to enter a value</p>
                <p className="text-stone-400 mb-4">Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                    </li>
                    <li>
                        <button
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handleSave}>Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input ref={title} label="Title"/>
                    <Input ref={description} label="Description" textarea/>
                    <Input ref={dueDate} label="Due Date" type="date"/>
                </div>
            </div>
        </>
    )
}
