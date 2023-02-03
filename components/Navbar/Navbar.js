import Link from 'next/link';
import styles from './Navbar.module.css';
import { IoMdRestaurant } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { FiPackage } from 'react-icons/fi';
import { MdOutlineLogout } from 'react-icons/md';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { asPath } = useRouter();
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
      <Link href='/'>
        <MdOutlineLogout />
        Log Out
      </Link>
    </nav>
  );
};

export default Navbar;
