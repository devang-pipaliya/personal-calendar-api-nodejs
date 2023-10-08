import { model, Schema } from 'mongoose';

const _schema = new Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  password: { type: String, default: '' },

}, {
  timestamps: false,
});

export default model('User', _schema);
