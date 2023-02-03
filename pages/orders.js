import ModalOrder from '@/components/ModalOrder/ModalOrder';
import OrderItem from '@/components/OrderItem/OrderItem';
import { useState } from 'react';
const Orders = () => {
  const [visibiliyModal, setVisibilityModal] = useState(false);
  return (
    <div className='sectionWithoutCheckout'>
      <h1>Vos commandes</h1>
      <div className='ordersContainer'>
        <OrderItem setVisibilityModal={setVisibilityModal} />
      </div>
      {visibiliyModal && <ModalOrder setVisibilityModal={setVisibilityModal} />}
    </div>
  );
};

export default Orders;
