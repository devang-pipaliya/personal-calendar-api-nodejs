import { model, Schema, Types } from 'mongoose';
import { enums } from Constants;

const _schema = new Schema({
  // calendarType: { type: String, enum: Object.values(enums.CALENDAR_TYPE) },
  calendarType: { type: String, enum: Object.values(enums.CALENDAR_TYPE), default: enums.FILE_MODULES.DEFAULT },
  calendarId: { type: String, default: '' },
  calendarEmail: { type: String, default: '' },
  userId: { type: Schema.Types.ObjectId, ref: models.USER },

}, {
  timestamps: false,
});

export default model('Calendar', _schema);
