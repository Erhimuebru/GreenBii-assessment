import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Products} from './model/products.model';
import { InjectModel } from '@nestjs/mongoose';
import { time } from 'console';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products') private productsModel:Model<Products>) 
    {}

 

  async create(productName: string, sku: string, condition: string, cost: string, approved:string, date:string, time:string, image:string, approve:string) {
    const newProduct = new this.productsModel({
      productName, 
      sku,
      condition,
      cost,
      approved,
      date,
      time,
      image,
      approve
    });
    const result = await newProduct.save()
    return result.id as string
  }


  async getProducts(){
    const products = await this.productsModel.find().exec()
    return products.map((prod)=>({
      id: prod.id,
      productName:prod.productName,
      sku:prod.sku, 
      condition:prod.condition, 
      cost:prod.cost, 
      approved:prod.approved, 
      date:prod.date,
      time:prod.time,
      image:prod.image,
      approve:prod.approve
    }));
  }

  async getSingleProduct(productId: string){
    const product = await this.findProduct(productId)
    return product;
  }
 
  private async findProduct(id: string): Promise<Products> {
    const product = await this.productsModel.findById(id)
    if(!product){
      throw new NotFoundException('Product not found')
    }
    return{
      id:product.id,
      productName:product.productName,
      sku:product.sku,
      condition:product.condition,
      cost:product.cost,
      approved:product.approved,
      date:product.date,
      time:product.time,
      image:product.image,
      approve:product.approve
    }
  }

 
}
