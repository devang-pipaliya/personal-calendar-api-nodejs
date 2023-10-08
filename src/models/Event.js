import { model, Schema, Types } from 'mongoose';
import { enums } from Constants;

const _schema = new Schema({
  title: { type: String, default: '' },
  scheduled_date: { type: String, default: '' },
  status: { type: String, default: '' },
  duration: { type: Number, default: 0 },
  participant: [{
    email: { type: String, default: '' },
    existing: { type: Types.Object },
    // event_statue: { type: String, enum: Object.values(enums.EVENT_St) },
    eventStatus: { type: String, enum: Object.values(enums.EVENT_St), default: enums.FILE_MODULES.DEFAULT },
    // userType: { type: String, enum: Object.values(enums.USER_TYPE) },
    userType: { type: String, enum: Object.values(enums.USER_TYPE), default: enums.FILE_MODULES.DEFAULT },
  }],
}, {
  timestamps: false,
});

export default model('Event', _schema);
