import ModalOrder from '@/components/ModalOrder/ModalOrder';
import OrderItem from '@/components/OrderItem/OrderItem';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const Orders = () => {
  const [visibiliyModal, setVisibilityModal] = useState(false);
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
            <OrderItem setVisibilityModal={setVisibilityModal} />
          </div>
          {visibiliyModal && (
            <ModalOrder setVisibilityModal={setVisibilityModal} />
          )}
        </>
      )}
    </div>
  );
};

export default Orders;
