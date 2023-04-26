import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { title } from 'process';
import { Products } from './model/products.model';
import { time } from 'console';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(
    @Body('productName') productName: string,
    @Body('sku') sku: string,
    @Body('condition') condition: string,
    @Body('cost') cost: string,
    @Body('date') date: string,
    @Body('time') time: string,
    @Body('image') image: string,
    @Body('approved') approved?: string,
    @Body('approve') approve?: string,

  )
    
    {
    const createId = await this.productsService.create(
      productName,
      sku,
      condition,
      cost,
      date,
      approved,
      time,
      image,
      approve
      );
    return {id: createId}
  }

  @Get()
  async getAllProducts() {
    const products = await this.productsService.getProducts();
    return products; 
  }

  @Get(':id')
getProduct(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

}
