import cookie from 'cookie';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const uid = req.cookies.token;
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', uid, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 0,
          sameSite: 'strict',
          path: '/',
        })
      );
      res.status(200).json({ code: 200 });
    } catch (error) {
      res.status(500).json({ code: 500, message: error.message });
    }
  } else {
    return;
  }
}
