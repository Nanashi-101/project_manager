import { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

// type EditTodoModalProps = {
//     open: boolean

// }


const EditTodoModal = () => {
    const open = useSelector((state: RootState) => state.modalState.modal.isOpen);
    const [todo, setTodo] = useState<string>("");
    const [text, setText] = useState<string>("");
    return (
        <div className={`fixed inset-0 flex items-center justify-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}>
            <div className="flex flex-col gap-5 w-full items-center justify-center">
                <div className="flex flex-col relative w-[20rem]">
                    <input type="text" className="peer placeholder-transparent text border border-black px-5 py-3 rounded-[0.225rem] w-full" value={todo} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setTodo(e.target.value);
                    }} id="task" placeholder="Enter your task" />
                    <label htmlFor="task" className="absolute left-[1.5rem] top-[.75rem] text-[1.07rem] hidden peer-placeholder-shown:block peer-placeholder-shown:text-gray-500/70 peer-placeholder-shown:font-bold ">Enter your task</label>
                </div>
                <div className="flex flex-col relative w-[20rem] h-[10rem]">
                    <textarea className="peer placeholder-transparent text border border-black px-5 py-3 rounded-[0.225rem] w-full h-full" value={text} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                        setText(e.target.value);
                    }} id="time" placeholder="Enter your task" />
                    <label htmlFor="time" className="absolute left-[1.5rem] top-[.75rem] text-[1.07rem] hidden peer-placeholder-shown:block peer-placeholder-shown:text-gray-500/70 peer-placeholder-shown:font-bold ">Enter your text</label>
                </div>
            </div>
        </div>
    )
}


export default EditTodoModal
