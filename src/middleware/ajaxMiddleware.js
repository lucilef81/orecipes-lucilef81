const ajaxMiddleware = (store) => (next) => (action) => {
  console.log('ajaxMiddleware', action);
  next(action);
};

export default ajaxMiddleware;
