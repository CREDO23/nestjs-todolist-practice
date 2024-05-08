import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';

@Schema()
export class Task {
  @Prop()
  id: string;
  @Prop()
  title: string;

  @Prop()
  body: string;

  @Prop()
  done: boolean;
}

export type TaskDocument = HydratedDocument<Task>;
export const TaskSchema = SchemaFactory.createForClass(Task);
export type TaskModel = Model<Task>;
