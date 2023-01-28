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
    if (error.code === 'auth/email-already-in-use') {
      res.status(401).json({
        code: 401,
        error:
          "L'adresse email indiqué est déjà utilisée. Veuillez en saisir une autre ou vous connectez à votre compte.",
      });
    }
  }
}
