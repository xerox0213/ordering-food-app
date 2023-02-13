import { db } from '@/firebase-config';
import { doc, getDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  try {
    const uid = req.cookies.token;
    // Vérifie que l'utilisateur est authentifié
    if (!uid) {
      throw new Error("L'utilisateur n'est pas connecté");
    }
    // Partie Firebase
    const docRef = doc(db, 'user', uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const userData = docSnap.data();
      res.status(200).json(userData);
    } else {
      throw new Error("Document n'existe pas");
    }
  } catch (error) {
    res.status(401).json({ code: 401, message: error.message });
  }
}
