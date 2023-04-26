import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsModule } from './products/products.module';



@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://erhimuebru:dftS6ew21jiATWHi@cluster0.lye52ec.mongodb.net/products"
    ),
    ProductsModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
