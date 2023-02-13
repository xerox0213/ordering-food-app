import cookie from 'cookie';
import { auth } from '@/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default async function handler(req, res) {
  try {
    const { email, password } = req.body;
    const currentUser = await signInWithEmailAndPassword(auth, email, password);
    const uid = currentUser.user.uid;
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', uid, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 60 * 60,
        sameSite: 'strict',
        path: '/',
      })
    );
    res.status(200).json({ code: 200 });
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      res.status(401).json({ code: 401, message: 'Email invalide ❌' });
    } else if (error.code === 'auth/wrong-password') {
      res.status(401).json({
        code: 401,
        message: 'Vérifier votre mot de passe ❌ ',
      });
    } else {
      res.status(401).json({
        code: 401,
        message:
          "Une erreur s'est produite, réessayer dans quelques minutes ❌",
      });
    }
  }
}
