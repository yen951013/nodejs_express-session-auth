import mongoose from 'mongoose';
import 'dotenv/config';

export async function connectDB() {
  try {
    // 在等待 MongoDB 連線時不斷輸出進度訊息
    let counter = 0;
    const interval = setInterval(() => {
      counter++;
      console.log(`⏳ Connecting to MongoDB... (${counter}s)`);
    }, 1000);

    // 監聽 MongoDB 的 Event
    mongoose.connection.on('connected', () => {
      clearInterval(interval);
      console.log('✅ [Event] MongoDB connected successfully');
    });
    mongoose.connection.on('error', err => {
      clearInterval(interval);
      console.error('❌ MongoDB connection error:', err);
      process.exit(0);
    });
    mongoose.connection.on('reconnected', () => console.log('🔄 [Event] MongoDB reconnected'));
    mongoose.connection.on('close', () => console.log('🔒 [Event] MongoDB connection closed'));
    
    // 連接 MongoDB
    await mongoose.connect(process.env.MONGODB_URI);

    // 處理 Ctrl+C 時正常關閉
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      process.exit(0);
    });
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
}