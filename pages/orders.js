import ModalOrder from '@/components/ModalOrder/ModalOrder';
import OrderItem from '@/components/OrderItem/OrderItem';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const Orders = () => {
  const [visibiliyModal, setVisibilityModal] = useState(false);
  const [currentOrderData, setCurrentOrderData] = useState(null);
  const { isFetching, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () => fetch('/api/orders_api/getOrders').then((res) => res.json()),
  });

  if (isFetching) {
    return (
      <div className='sectionWithoutCheckout'>
        <h1>Loading ...</h1>
      </div>
    );
  }
  return (
    <div className='sectionWithoutCheckout'>
      {data.length === 0 ? (
        <h1>Vous n'avez encore jamais fait de commande</h1>
      ) : (
        <>
          <h1>Vos commandes</h1>
          <div className='ordersContainer'>
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
            <ModalOrder
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
