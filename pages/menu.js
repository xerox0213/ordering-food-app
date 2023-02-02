import CardMenu from '@/components/CardMenu/CardMenu';
import CheckoutContainer from '@/components/Checkout/CheckoutContainer/CheckoutContainer';
import Filter from '@/components/Filter/Filter';
import getFoodData from './api/getData';

const Menu = ({ foodData }) => {
  // Rendu
  return (
    <>
      <div className='grid'>
        <div className='filterContainer'>
          <Filter text='Burger' type='burger' />
          <Filter text='Pizza' type='pizza' />
          <Filter text='Sandwiches' type='sandwich' />
          <Filter text='Dessert' type='cake' />
        </div>
        {foodData.map((data) => (
          <CardMenu key={data.id} data={data} />
        ))}
      </div>
      <CheckoutContainer />
    </>
  );
};

export default Menu;

export async function getServerSideProps({ req, res }) {
  const foodData = getFoodData();
  return {
    props: {
      foodData,
    },
  };
}
