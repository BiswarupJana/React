import React,{useImperativeHandle, useRef} from "react";


const ConfirmationModal = ({ isOpen, onClose }, ref) => {

    const closeRef=useRef();
    const denyRef=useRef();
    const confirmRef =useRef();

    useImperativeHandle(ref,()=>{
        return {
            focusCloseBtn: ()=>closeRef.current.focus(),
            focusDenyBtn: ()=>denyRef.current.focus(),
            focusConfirmBtn: ()=>confirmRef.current.focus(),
        }
    },[])
     
    
    if (!isOpen) return null

    return (
        <div className="modal" ref={ref}>
            <button className="close-btn" onClick={onClose}>
                &times;
            </button>

            <div className="modal-header">
                <h1>Title</h1>
            </div>
            <div className="modal-body">Do you confirm?</div>
            <div className="modal-footer">
                <button className="confirm-btn" ref={confirmRef} onClick={onClose}>
                    yes
                </button>
                <button className="deny-btn" ref={closeRef} onClick={onClose}>
                    No
                </button>
            </div>
        </div>
    )
};


export default React.forwardRef(ConfirmationModal);