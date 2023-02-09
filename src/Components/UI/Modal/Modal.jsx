import React from "react";
import PortalReactDOM from 'react-dom'
import s from './Modal.module.scss'

const Backdrop = (props) => {
    return (
        <div className={s.backdrop}></div>
    )
}

const ModalWindow = (props) => {
    return (
        <div className={s.modal}>
            <div>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return (
        <React.Fragment>
            {PortalReactDOM.createPortal(<Backdrop/>, portalElement)}
            {PortalReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
        </React.Fragment>
    );
};

export default Modal;