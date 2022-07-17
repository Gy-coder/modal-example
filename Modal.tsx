import React, { Fragment, useContext } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';
import { ModalContext } from './ModalProvider';

export interface Props {
  visible: boolean;
  onClose: Function;
  title?: string;
}

const Modal: React.FC<Props> = (props) => {
  const { visible, onClose, title = 'this is title' } = props;
  console.log(useContext(ModalContext));
  const html = () => {
    return (
      visible && (
        <Fragment>
          <div className="mask" />
          <section>
            <header>{title}</header>
            <main>
              123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123
            </main>
            <footer>
              <button onClick={onClose}>关闭</button>
            </footer>
          </section>
        </Fragment>
      )
    );
  };
  return ReactDOM.createPortal(html(), document.body);
};

export default Modal;
