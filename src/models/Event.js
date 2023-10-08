import { model, Schema, Types } from 'mongoose';
const EVENT_St = {
  'ACCEPT': 'ACCEPT',
  'REJECT': 'REJECT',
  'TANTIVY': 'TANTIVY',
};
const USER_TYPE={
  'OWNER': 'OWNER',
  'ATTENDEE': 'ATTENDEE',
};
const _schema = new Schema({
  title: { type: String, default: '' },
  scheduled_date: { type: String, default: '' },
  status: { type: String, default: '' },
  duration: { type: Number, default: 0 },
  participant: [{
    email: { type: String, default: '' },
    existing: { type: Types.Object },
    event_statue: { type: String, enum: Object.values(EVENT_St) },
    userType: { type: String, enum: Object.values(USER_TYPE) },
  }],
}, {
  timestamps: false,
});

export default model('Event', _schema);
