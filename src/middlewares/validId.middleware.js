import mongoose from 'mongoose'
const { Types } = mongoose;

export const validId = (req, res, next) => {
    const {id} = req.params;
    if (!Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: 'Id inválido!' });
    }
    next();
  };
