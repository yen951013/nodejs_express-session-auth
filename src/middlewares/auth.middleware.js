import { User } from '../database/models/user.model.js';

export const isAuthenticated = async (req, res, next) => {
  if (!req.session.userID) {
    return res.status(401).json({ message: '未登入或 Session 失效' });
  }
  
  try {
    const user = await User.findById(req.session.userID);
    if (!user) {
      req.session.destroy(() => {
        return res.status(401).json({ message: '登入帳號已不存在，session 已清除' });
      });
    }

    req.user = user;
    next();

  } catch (err) {
    console.error('驗證登入時發生錯誤:', err);
    return res.status(500).json({ message: '伺服器錯誤' });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: '你沒有管理員權限' });
  }
  next();
};