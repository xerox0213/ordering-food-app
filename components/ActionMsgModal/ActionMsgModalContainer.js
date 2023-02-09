import { useEffect } from 'react';
import InfoItem from './ActionMsgModalItem';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ActionMsgModal.module.css';

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
        <InfoItem msg={msg} />
      ))}
    </div>
  );
};

export default ActionMsgModalContainer;
