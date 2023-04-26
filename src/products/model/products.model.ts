import * as mongoose from 'mongoose'

export const ProductsSchema = new mongoose.Schema({
  productName:{type:String, require:true}, 
  sku:{type:String, require:true},
  condition:{type:String, require:true},
  cost:{type:String, require:true},
  approved:{type:String},
  date:{type:String, require:true},
  time:{type:String, require:true},
  image:{type:String, require:true},
  approve:{type:String}

})

export interface Products {
    
         id: string;
         productName: string;
         sku: string;
         condition: string;
         cost: string;
         date: string;
         time: string
         approved?: string;
         image: string;
         approve?:string
    
}