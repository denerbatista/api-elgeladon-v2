import mongoose from 'mongoose'
const { Types } = mongoose;

export const validId = (req, res, next) => {
    const idParam = req.params.id;
    if (!Types.ObjectId.isValid(idParam)) {
      return res.status(400).send({ message: 'Id inválido!' });
    }
    next();
  };
