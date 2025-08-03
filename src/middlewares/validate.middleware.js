export function validate(schema, source = 'body') {
  return (req, res, next) => {
    const data = req[source];
    if (!data) {
      return res.status(400).json({ error: `無效的請求來源：${source}` });
    }

    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      const messages = error.details.map((err) => err.message);
      return res.status(400).json({ errors: messages });
    }

    next();
  };
}