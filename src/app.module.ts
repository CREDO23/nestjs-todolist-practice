import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://bakerathierry:stJ57y3coBd3lB1c@cluster0.mxkjdiv.mongodb.net/',
    ),
    TasksModule,
  ],
})
export class AppModule {}
