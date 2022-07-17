import React, { createContext, useContext, useState } from 'react';
import Modal, { Props } from './Modal';

interface OpenProps extends Omit<Props, 'visible' | 'onClose'> {}

export const ModalContext = createContext(null);

const ModalProvider = (props) => {
  const [visible, setVisile] = useState<boolean>(false);
  const [config, setConfig] = useState<OpenProps>({});
  const open = (config?: {}) => {
    setVisile(true);
    setConfig({ ...config });
  };
  const close = () => setVisile(false);
  return (
    <ModalContext.Provider value={{ open, close }}>
      <Modal visible={visible} onClose={close} {...config} />
      {props.children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};

export default ModalProvider;
