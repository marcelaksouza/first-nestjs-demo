require('dotenv').config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
const URL = 
  process.env.DB_SERVER +
  '://' +
  process.env.DB_USER +
  ':' +
  process.env.DB_PASS +
  '@cluster0.kespz.mongodb.net/' +
  process.env.DB_NAME +
  '?retryWrites=true&w=majority';

const options: {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
} = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(URL, options)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
