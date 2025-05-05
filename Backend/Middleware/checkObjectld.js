const checkObjectId = (req, res, next) => {
    if (!Number.isInteger(Number(req.params.id))) {
      res.status(404);
      throw new Error(`Invalid ID: ${req.params.id}`);
    }
    next();
  };
  
  export default checkObjectId;