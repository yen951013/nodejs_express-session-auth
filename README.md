# 📄 專案簡介
這是一個使用 Express.js 和 express-session 建立的認證模板，示範如何實現用戶註冊、登入、登出、Session 管理與用戶資料查詢。
本專案適合作為中小型專案的起始模板，或學習 Session 認證的參考範例。

# 🌟 功能特色
* 新用戶註冊並自動登入
* 用戶登入與登出（Session 儲存）
* 列出所有用戶（需登入）
* 查詢當前登入用戶資料
* 刪除所有用戶（需登入）
* 資料庫使用 MongoDB (Mongoose)

# ⚙️ 安裝
1. 安裝依賴：
```shell
npm install
```
2. 啟動 MongoDB（請先安裝 MongoDB）
3. 啟動伺服器：
```
npm run serve   // 直接啟動伺服器
npm run dev     // 使用 nodemon 啟動伺服器
```
4. 預設埠口：http://localhost:3000

# 🛣️ API 路由
| Method | Path               | Description                   | Controller                          |
|--------|--------------------|-------------------------------|-------------------------------------|
| POST   | /api/auth/register | 新用戶註冊 (創建session)      | `auth/register.js`                  |
| POST   | /api/auth/login    | 用戶登入 (創建session)        | `auth/login.js`                     |
| POST   | /api/auth/logout   | 用戶登出 (刪除當前session)    | `auth/logout.js`                    |
| GET    | /api/users         | 列出所有用戶資料 (需要登入)   | `users/getUsers.js`                 |
| GET    | /api/users/me      | 列出當前用戶資料 (需要登入)   | `users/getMe.js`                    |
| DELETE | /api/users         | 刪除所有用戶 (需要登入)       | `users/deleteUsers.js`              |

# 🧩 技術棧
* Node.js
* Express.js
* express-session
* MongoDB
* Mongoose
* bcrypt (密碼雜湊)

# 🗂️ 專案目錄結構
```text
├── README.md            ← 專案說明文件
├── package-lock.json    ← npm 安裝依賴的鎖定檔案
├── package.json         ← npm 專案的基本設定檔
├── src                  ← 主要程式碼目錄
│   ├── controllers         ← 控制器目錄，負責處理請求內容與回應邏輯
│   │   ├── auth               ← 認證相關的控制器
│   │   │   ├── login.js          ← 處理使用者登入請求，驗證帳號密碼
│   │   │   ├── logout.js         ← 處理使用者登出動作，清除 session
│   │   │   └── register.js       ← 處理新使用者註冊流程，成功時立即自動登入帳號
│   │   └── users              ← 一般使用者功能的控制器
│   │       ├── deleteUsers.js    ← 處理刪除使用者的請求
│   │       ├── getMe.js          ← 回傳當前登入使用者的資料
│   │       └── getUsers.js       ← 回傳所有使用者清單
│   ├── database            ← 與資料庫相關的設定與模型
│   │   ├── connect.js         ← 建立與資料庫的連線設定
│   │   └── models             ← 定義資料庫模型（Schema）
│   │       ├── index.js          ← 匯出所有模型，作為統一入口
│   │       └── user.js           ← 定義 User 模型（例如 Mongoose schema）
│   ├── main.js             ← 專案的進入點，啟動伺服器並載入路由
│   └── routes              ← 定義 API 路由
│       ├── api                ← API 路由群組
│       │   ├── authRoutes.js     ← 認證相關的路由設定，對應 auth controller
│       │   └── usersRoutes.js    ← 使用者相關的路由設定，對應 users controller
│       └── index.js           ← 總路由入口，整合各個子路由
└── test                 ← 測試相關資源
    └── auth.http           ← 用於測試 API 請求的範例（用 REST Client 插件執行）
```


# 🪪 授權
MIT License

# 📌 未來規劃
* 更安全的 cookie
* 新增 middleware 資料夾
* 請求資料的認證
* 使用 dotenv 套件保護 secret
* 寫 API docs
