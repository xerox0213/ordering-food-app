import Link from 'next/link';
import styles from './Navbar.module.css';
import { IoMdRestaurant } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { FiPackage } from 'react-icons/fi';
import { MdOutlineLogout } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href='/menu'>
        <IoMdRestaurant />
        Menu
      </Link>
      <Link href='/order'>
        <FiPackage />
        Orders
      </Link>
      <Link href='/profile'>
        <CgProfile />
        Profil
      </Link>
      <Link href='/profile'>
        <MdOutlineLogout />
        Log Out
      </Link>
    </nav>
  );
};

export default Navbar;
