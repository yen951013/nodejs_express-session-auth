import { User } from '../../database/models/index.model.js';

export default async (req, res) => {
  const user = await User.findById(req.session.userID);
  res.status(200).json(user);
};