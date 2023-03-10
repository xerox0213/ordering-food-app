import { db } from '@/firebase-config';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';

export default async function handler(req, res) {
  try {
    const uid = req.cookies.token;
    // Vérifie que l'utilisateur est authentifié
    if (!uid) {
      throw new Error("L'utilisateur n'est pas connecté");
    }
    // Partie Firebase
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
