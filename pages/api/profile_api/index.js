import { db } from '@/firebase-config';
import { doc, getDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  const uid = req.cookies.token;
  const docRef = doc(db, 'user', uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const userData = docSnap.data();
    res.status(200).json(userData);
  } else {
  }
}
