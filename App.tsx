import * as React from 'react';
import './style.css';
import Modal from './Modal';
import ModalProvider from './ModalProvider';
import Example from './Example';

export default function App() {
  // console.log(Example);
  return (
    <React.Fragment>
      <ModalProvider><Example /></ModalProvider>
    </React.Fragment>
  );
}
