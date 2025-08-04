import Joi from 'joi';

export const registerSchema = Joi.object({
  userName: Joi.string().trim()
    .min(5).max(15)
    .pattern(/^[a-zA-Z0-9_.]+$/)
    .required()
    .messages({
      'string.base': 'userName 必須是文字',
      'string.empty': 'userName 不可為空',
      'string.min': 'userName 最少 {#limit} 個字',
      'string.max': 'userName 最多 {#limit} 個字',
      'string.pattern.base': 'userName 格式錯誤',
      'any.required': '請輸入 userName',
    }),
  
  email: Joi.string().trim()
    .email()
    .required()
    .messages({
      'string.base': 'email 必須是文字',
      'string.empty': 'email 不可為空',
      'string.email': 'email 格式錯誤',
      'any.required': '請輸入 email',
    }),
  
  password: Joi.string().trim()
    .min(8).max(32)
    .required()
    .messages({
      'string.base': 'password 必須是文字',
      'string.empty': 'password 不可為空',
      'string.min': 'password 最少 {#limit} 個字',
      'string.max': 'password 最多 {#limit} 個字',
      'any.required': '請輸入 password',
    }),
  
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': '確認密碼需與密碼相同',
      'any.required': '請輸入確認密碼',
    }),
});

export const loginSchema = Joi.object({
  userName: Joi.string().trim()
    .min(5).max(15)
    .pattern(/^[a-zA-Z0-9_.]+$/)
    .messages({
      'string.base': 'userName 必須是文字',
      'string.empty': 'userName 不可為空',
      'string.min': 'userName 最少 {#limit} 個字',
      'string.max': 'userName 最多 {#limit} 個字',
      'string.pattern.base': 'userName 格式錯誤',
    }),
  
  email: Joi.string().trim()
    .email()
    .messages({
      'string.base': 'email 必須是文字',
      'string.empty': 'email 不可為空',
      'string.email': 'email 格式錯誤',
    }),
  
  password: Joi.string().trim()
    .min(8).max(32)
    .required()
    .messages({
      'string.base': 'password 必須是文字',
      'string.empty': 'password 不可為空',
      'string.min': 'password 最少 {#limit} 個字',
      'string.max': 'password 最多 {#limit} 個字',
      'any.required': '請輸入 password',
    }),
}).or('userName', 'email');