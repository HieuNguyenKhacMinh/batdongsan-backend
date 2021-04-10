import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import {  AddressEntity } from "src/database.module/entities";
import { AddressReqDto } from "./req-dto";
import { AddressResDto } from "./res-dto";

export class AddressMapper implements IMapperFactory {
    mapReq(entity: AddressEntity, req: AddressReqDto) {
        if (!entity) entity = new AddressEntity();
        entity.homeNumber = req.homenumbe;
        entity.street = req.street;
        entity.description = req.description;
        return entity;
    }
    mapRes(res:AddressResDto, entity: AddressEntity) {
        if (!res) res = new AddressResDto();
        res.homenumber = entity.homeNumber;
        res.description = entity.description;
        res.stress = entity.street;
        return res;
    }

}