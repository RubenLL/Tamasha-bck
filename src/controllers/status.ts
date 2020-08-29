import { Controller, Get} from '@overnightjs/core';
import {Request,Response} from 'express';



@Controller('status')
export class StatusController {
    @Get('')
    public getServerStatus(_:Request,res:Response):void{
        res.send({data:'All Good!'});

    }

}