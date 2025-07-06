export default async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('伺服器錯誤');
    } else {
      res.status(200).send('Logged out successfully');
    }
  });
};