import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase-config';
export default async function handler(req, res) {
  try {
    const { email, password } = req.body;
    await signInWithEmailAndPassword(auth, email, password);
    res.status(200).json({ code: 200 });
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      res
        .status(401)
        .json({ code: 401, message: "L'email ne correspond à aucun compte." });
    } else if (error.code === 'auth/wrong-password') {
      res.status(401).json({
        code: 401,
        message: 'Le mot de passe est invalide. Vérifiez votre mot de passe.',
      });
    } else {
      res.status(401).json(error);
    }
  }
}
