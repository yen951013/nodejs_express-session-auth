import { User } from "../../database/models/index.model.js";

export default async (req, res) => {
  await User.deleteMany();
  req.session.destroy(() => {
    res.status(200).send('All users deleted and session cleared');
  });
};