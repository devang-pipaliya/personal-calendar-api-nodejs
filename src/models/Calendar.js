import { model, Schema, Types } from 'mongoose';
CALENDAR_TYPE = {
  'GOOGLE': 'Google',
  'MICROSOFT': 'Microsoft',
};
const _schema = new Schema({
  calendarType: { type: String, enum: Object.values(CALENDAR_TYPE) },
  calendarId: { type: String, default: '' },
  calendarEmail: { type: String, default: '' },
  userId: { type: Schema.Types.ObjectId, ref: models.USER },

}, {
  timestamps: false,
});

export default model('Calendar', _schema);
