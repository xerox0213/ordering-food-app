import { useEffect } from 'react';
import ToastItem from './ToastItem';
import styles from './Toast.module.css';
import { useSelector, useDispatch } from 'react-redux';

const ActionMsgModalContainer = () => {
  const state = useSelector((state) => state.info);
  const dispatch = useDispatch();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch({
        type: 'info/deleteLastMessage',
        payload: '',
      });
    }, 1400);

    return () => clearTimeout(timeOut);
  });
  return (
    <div className={styles.container}>
      {state.map((msg) => (
        <ToastItem msg={msg} />
      ))}
    </div>
  );
};

export default ActionMsgModalContainer;
