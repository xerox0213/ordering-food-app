import { auth, db } from '@/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

export default async function handler(req, res) {
  try {
    const { email, password, firstname, name, address, city, zip } = req.body;

    const currentUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const uid = currentUser.user.uid;
    await setDoc(doc(db, 'user', uid), {
      email,
      firstname,
      name,
      address,
      city,
      zip,
    });
    res.status(200).json({ code: 200 });
  } catch (error) {
    res.status(405).json(error);
  }
}
