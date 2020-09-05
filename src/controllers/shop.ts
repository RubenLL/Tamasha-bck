import { Controller, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('api/shops')
export class ShopController {
  @Post('')
  public async create( req: Request, res: Response): Promise<void> {
      let code =this.generateCode(req.body.name)
      let Shop=req.body;
      Shop.internalCode =code;
    res.status(201).send({...Shop, id:'fakeID'});
  }
  private generateCode(name:String) :String{
      let parts = name.split(' ');
      let code:String
      code='';
      parts.forEach((part)=>{
        code+=part.substring(0,2);
      });
      return code+='01';
  }
}
