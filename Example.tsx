import React from 'react';
import { useModal } from './ModalProvider';

export default function Example() {
  const { open } = useModal();
  return <button onClick={() => open({ title: '4444444' })}>show modal</button>;
}
