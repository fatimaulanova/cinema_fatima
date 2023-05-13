import {useState, useRef, useEffect} from 'react';
import './modal.scss';
const Modal = props => {
    const contentRef = useRef(null)
    const onClose = () => {
        contentRef.current.parentNode.classList.remove('active');
        if(props.onClose) props.onClose();
    }

    return (
        <div id={props.id} className={`modal ${props.active && 'active'}`} onClick={onClose}>
            <div ref={contentRef} className='modal__content' onClick={e => e.stopPropagation()}>
                <div className="modal__content__close" onClick={onClose}>
                    X
                </div>
            {props.children}
            </div>
        </div>
    );
};

export default Modal;
