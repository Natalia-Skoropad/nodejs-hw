export const errorHandler = (err, req, res, next) => {
  console.error('Error Middleware:', err);

  const status = err.status || err.statusCode || 500;
  const isProd = process.env.NODE_ENV === 'production';

  res.status(status).json({
    message:
      status === 500 && isProd
        ? 'Something went wrong. Please try again later.'
        : err.message || 'Internal Server Error',
  });
};
