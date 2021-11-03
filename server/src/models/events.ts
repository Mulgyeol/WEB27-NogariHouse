import { Schema, Document, model } from 'mongoose';
import { IEventChatUser } from '@interfaces/index';

interface IEventsTypesModel extends Document{
  date : Date,
  users: Array<IEventChatUser>,
  title: string,
  description: string,
}

const eventsSchema = new Schema({
  date: { type: Date, required: true },
  users: { type: [Object], required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
});

export default model<IEventsTypesModel>('events', eventsSchema);
