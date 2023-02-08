import InfoItem from './InfoItem';
import { useEffect } from 'react';
import styles from './InfoModal.module.css';
import { useSelector, useDispatch } from 'react-redux';

const InfoContainer = () => {
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

export default InfoContainer;
