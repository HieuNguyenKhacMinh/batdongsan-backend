import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import {  AddressEntity } from "src/database.module/entities";
import { AddressReqDto } from "./req-dto";
import { AddressResDto } from "./res-dto";

export class AddressMapper implements IMapperFactory {
    mapReq(entity: AddressEntity, req: AddressReqDto) {
        if (!entity) entity = new AddressEntity();
        entity.homeNumber = req.home_number;
        entity.street = req.street;
        entity.cityId = req.city_id;
        entity.wardsId = req.wards_id;
        entity.districtId = req.district_id;
        return entity;
    }
    mapRes(res:AddressResDto, entity: AddressEntity) {
        if (!res) res = new AddressResDto();
        res.id = entity.id;
        res.home_number = entity.homeNumber;
        res.street = entity.street;
        res.wards_id = entity.wardsId;
        res.district_id = entity.districtId;
        res.city_id = entity.cityId;
        return res;
    }

}