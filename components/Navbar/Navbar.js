import Link from 'next/link';
import styles from './Navbar.module.css';
import { IoMdRestaurant } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { FiPackage } from 'react-icons/fi';
import { MdOutlineLogout } from 'react-icons/md';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const { asPath, push } = useRouter();
  const dispatch = useDispatch();
  let lockedBtn = false;

  useEffect(() => {
    fetch('/api/user_api/getStatus')
      .then((res) => {
        return res.json();
      })
      .then(({ status }) => {
        if (status === 'authenticated') {
          setisAuthenticated(true);
        } else {
          setisAuthenticated(false);
        }
      });
  }, []);

  return (
    <nav className={styles.navbar}>
      <Link
        className={asPath.includes('/menu') ? styles.active : undefined}
        href='/menu'
      >
        <IoMdRestaurant />
        Menu
      </Link>
      <Link
        className={asPath.includes('/order') ? styles.active : undefined}
        href='/orders'
      >
        <FiPackage />
        Orders
      </Link>
      <Link
        className={asPath.includes('/profile') ? styles.active : undefined}
        href='/profile'
      >
        <CgProfile />
        Profil
      </Link>
      {isAuthenticated && (
        <button
          onClick={async () => {
            if (!lockedBtn) {
              lockedBtn = true;
              try {
                const request = await fetch('/api/user_api/log-out', {
                  method: 'POST',
                });
                const response = await request.json();
                if (response.code === 401) {
                  throw new Error(response.message);
                }
                dispatch({ type: 'info/addMessage', payload: 'Déconnecté ❌' });
                dispatch({ type: 'cart/clearCart', payload: [] });
                push('/sign-in');
              } catch (error) {
                lockedBtn = false;
                dispatch({
                  type: 'info/addMessage',
                  payload: error.message,
                });
              }
            } else {
              return;
            }
          }}
        >
          <MdOutlineLogout />
          Log Out
        </button>
      )}
    </nav>
  );
};

export default Navbar;
