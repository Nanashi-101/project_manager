import { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { closeModal } from '../redux/modalSlice';
import { updateTodo } from '../redux/todoSlice';
import toast from 'react-hot-toast';


// type EditTodoModalProps = {
//     open: boolean

// }


const EditTodoModal = () => {
    const modalState = useSelector((state: RootState) => state.modalState.modal);
    const [todo, setTodo] = useState<string>("");
    const [text, setText] = useState<string>("");
    const dispatch = useDispatch();

    const handleUpdateTask = () => {
        if (!todo || !text) return toast.error("Please fill all the fields");

        dispatch(updateTodo({
            id: modalState.id,
            task: todo,
            text: text,
            completed: false
        }));

        toast.success("Task updated successfully");

        setTodo("");
        setText("");

        dispatch(closeModal());
    }
    return (
        <div className={`fixed inset-0 flex items-center justify-center transition-colors backdrop-blur-sm ${modalState.isOpen ? 'block bg-black/20' : 'hidden'}`}>
            <div className="flex flex-col gap-5 w-full items-center justify-center">
                <div className="flex flex-col relative w-[20rem]">
                    <input type="text" className="placeholder:font-semibold text border border-black px-5 py-3 rounded-[0.225rem] w-full" value={todo} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setTodo(e.target.value);
                    }} id="task" placeholder={modalState.task} />
                </div>
                <div className="flex flex-col relative w-[20rem] h-[10rem]">
                    <textarea className="placeholder:font-semibold text border border-black px-5 py-3 rounded-[0.225rem] w-full h-full" value={text} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                        setText(e.target.value);
                    }} id="time" placeholder={modalState.text} />
                </div>
                <div className="flex gap-5">
                    <button className='group p-3 bg-white rounded-full hover:scale-105 hover:bg-green-600 transition-all' onClick={handleUpdateTask}><FaCheck size={30} className='group-hover:text-white group-hover:scale-105 transition-all' /></button>
                    <button className='group p-3 bg-white rounded-full hover:scale-105 hover:bg-red-600 transition-all' onClick={() => dispatch(closeModal())}><IoMdClose size={30} className='group-hover:text-white group-hover:scale-105 transition-all' /></button>
                </div>
            </div>
        </div>
    )
}


export default EditTodoModal
