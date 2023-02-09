import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import OrderItem from '@/components/OrderComponents/OrderItem/OrderItem';
import OrderModal from '@/components/OrderComponents/OrderModal/OderModal';
import LoaderPage from '@/components/LoaderPage/LoaderPage';

const Orders = () => {
  const [visibiliyModal, setVisibilityModal] = useState(false);
  const [currentOrderData, setCurrentOrderData] = useState(null);
  const { isFetching, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () => fetch('/api/orders_api/getOrders').then((res) => res.json()),
  });

  if (isFetching) {
    return (
      <div className='section'>
        <LoaderPage />
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
