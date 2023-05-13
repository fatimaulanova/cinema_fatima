import {useRef, useState, useEffect} from 'react';
import Modal from "../../modal/Modal";
import tmdbApi, {category} from "../../../config/config";

const TrailerModal = props => {
    const item = props.item
    const iframeRef = useRef(null)

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <>
            <Modal id={`modal_${item.id}`}
                   item={item}
                   active={props.active}
                   onClose={onClose}>
                <iframe ref={iframeRef} width='100%' height='500px' title='trailer' frameBorder="0" allowFullScreen></iframe>
            </Modal>
        </>
    );
};

export default TrailerModal;
