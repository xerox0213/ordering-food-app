export default async function handler(req, res) {
  if (req.method === 'GET') {
    const token = req.cookies.token;
    if (token) {
      res.status(200).json({ status: 'authenticated' });
    } else {
      res.status(200).json({ status: 'unauthenticated' });
    }
  }
}
