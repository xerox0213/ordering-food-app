import { useState } from 'react';
import { getOrders } from './api/orders_api';
import OrderItem from '@/components/OrderComponents/OrderItem/OrderItem';
import OrderModal from '@/components/OrderComponents/OrderModal/OderModal';

const Orders = ({ orders: data, error: isError }) => {
  const [visibiliyModal, setVisibilityModal] = useState(false);
  const [currentOrderData, setCurrentOrderData] = useState(null);

  if (isError) {
    return (
      <div className='section'>
        <h1>Wops il semblerait qu'il y a eu une erreur</h1>
      </div>
    );
  }

  return (
    <div className='section'>
      {data.length === 0 ? (
        <h1>Vous n'avez encore jamais passé de commande pour le moment</h1>
      ) : (
        <>
          <h1>Mes commandes :</h1>
          <div>
            {data.map((orderData) => {
              return (
                <OrderItem
                  orderData={orderData}
                  setCurrentOrderData={setCurrentOrderData}
                  setVisibilityModal={setVisibilityModal}
                />
              );
            })}
          </div>
          {visibiliyModal && (
            <OrderModal
              currentOrderData={currentOrderData}
              setVisibilityModal={setVisibilityModal}
              setCurrentOrderData={setCurrentOrderData}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Orders;

export async function getServerSideProps(context) {
  const token = context.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
      },
    };
  }

  try {
    const orders = await getOrders(token);
    return {
      props: {
        orders,
        error: false,
      },
    };
  } catch (error) {
    return {
      props: {
        orders: [],
        error: true,
      },
    };
  }
}
