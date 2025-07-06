import { User } from "../../database/models/index.js";
import bcrypt from 'bcrypt';

export default async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });
    if (!user)  return res.status(404).json({ message: '使用者名稱不存在' });
    
    const validPassword = await bcrypt.compare(req.body.password, user.passwordHash);
    if (!validPassword) {
      return res.status(401).json({ message: '密碼錯誤' });
    }
    
    req.session.userID = user._id;
    res.status(200).json({ message: '登入成功' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '伺服器錯誤' });
  }
}