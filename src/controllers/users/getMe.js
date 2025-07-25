import { User } from '../../database/models/index.js';

export default async (req, res) => {
  if (!req.session.userID) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const users = await User.findById(req.session.userID);
  res.json(users);
};