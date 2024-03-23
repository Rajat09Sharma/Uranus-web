import { useEffect, useRef } from 'react';
import {createPortal} from "react-dom";
export default function Modal() {
    const dialog=useRef();
    const timer=useRef();
    function handleOpen(){
        timer.current =  setTimeout(() => {
             dialog.current.showModal();
         }, 10000);
     }
     useEffect(() => {
        handleOpen();
    }, [])
    function handleReset(){
        clearTimeout(timer.current);
    }
    return createPortal(
        <dialog ref={dialog} className='result-modal' onReset={handleReset}>
        <h2>Contact us</h2>
        <div className="contact-form">
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Massage</label>
        </div>
        <textarea type="text" onSubmit={handleReset} />
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    )
}
