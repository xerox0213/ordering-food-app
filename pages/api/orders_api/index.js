import { db } from '@/firebase-config';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';

export default async function handler(req, res) {
  try {
    const q = query(
      collection(db, 'orders'),
      where('uid', '==', uid, limit(1))
    );
    const querySnapshot = await getDocs(q);
    let orders;
    querySnapshot.forEach((doc) => {
      orders = doc.data().orders;
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(200).json({ code: 401, message: error.message });
  }
}

export async function getOrders(uid) {
  try {
    const q = query(
      collection(db, 'orders'),
      where('uid', '==', uid, limit(1))
    );
    const querySnapshot = await getDocs(q);
    let orders;
    querySnapshot.forEach((doc) => {
      orders = doc.data().orders;
    });
    return orders;
  } catch (error) {
    return new Promise.reject(new Error("Une erreur s'est produite"));
  }
}
