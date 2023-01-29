import CardMenu from '@/components/CardMenu/CardMenu';
import CheckoutContainer from '@/components/Checkout/CheckoutContainer/CheckoutContainer';
import Filter from '@/components/Filter/Filter';

const Menu = () => {
  // Rendu
  return (
    <>
      <div className='grid'>
        <div className='filterContainer'>
          <Filter text='Pizza' />
          <Filter text='Burger' />
          <Filter text='Sushi' />
          <Filter text='Boissons' />
        </div>
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
      </div>
      <CheckoutContainer />
    </>
  );
};


export default Menu;
