import { User } from "../../database/models/index.model.js";
import bcrypt from 'bcrypt';

export default async (req, res) => {
  try {
    const existingUser = await User.findOne({ userName: req.body.userName });
    if (existingUser) {
      return res.status(409).json({ message: '使用者名稱已被使用' });
    }

    const existingEmail = await User.findOne({ email: req.body.email });
    if (existingEmail) {
      return res.status(409).json({ message: 'Email 已被使用' });
    }

    const passwordHash = await bcrypt.hash(req.body.password, 11);
    await User.create({
      userName: req.body.userName,
      email: req.body.email,
      passwordHash,
    });
    req.session.userID = user._id;
    res.status(201).send('成功創建 User');
  } catch (err) {
    console.error(err);
    res.status(500).send('伺服器錯誤');
  }
}