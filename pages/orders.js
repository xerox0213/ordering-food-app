import { useState } from 'react';
import useFetch from '@/hooks/useFetch';
import LoaderPage from '@/components/LoaderPage/LoaderPage';
import OrderItem from '@/components/OrderComponents/OrderItem/OrderItem';
import OrderModal from '@/components/OrderComponents/OrderModal/OderModal';

const Orders = () => {
  const [visibiliyModal, setVisibilityModal] = useState(false);
  const [currentOrderData, setCurrentOrderData] = useState(null);
  const [data, isFetching, isError] = useFetch(
    ['orders'],
    'orders_api/getOrders'
  );

  if (isFetching) {
    return (
      <div className='section'>
        <LoaderPage />
      </div>
    );
  }

  if (isError) {
    return (
      <div className='section'>
        <h1>
          Wops, une erreur s'est produite il semblerait que vous n'êtes plus
          connecté.
        </h1>
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
