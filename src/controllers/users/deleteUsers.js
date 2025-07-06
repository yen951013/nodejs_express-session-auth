import { User } from "../../database/models/index.js";

export default async (req, res) => {
  if (!req.session.userID) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  await User.deleteMany();
  res.status(200).send('All users deleted');
};