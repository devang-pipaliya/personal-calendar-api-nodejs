import { model, Schema, Types } from 'mongoose';

const _schema = new Schema({

}, {
  timestamps: false,
});

export default model('Calendar', _schema);
