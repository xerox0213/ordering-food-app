import { useEffect, useRef } from 'react';
import styles from './Toast.module.css';

const ActionMsgModalItem = ({ msg }) => {
  const ref = useRef();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      ref.current.classList.remove(styles.active);
      ref.current.classList.add(styles.bye);
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  });

  return (
    <div ref={ref} className={`${styles.msg} ${styles.active}`}>
      {msg}
    </div>
  );
};

export default ActionMsgModalItem;
