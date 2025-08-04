import { User } from '../../database/models/index.model.js';

export default async (req, res) => {
  const users = await User.find();
  res.json(users);
};