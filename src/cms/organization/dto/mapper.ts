import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import {  OrganizationEntity } from "src/database.module/entities";
import { OrganizationReqDto } from "./req-dto";
import { OrganizationResDto } from "./res-dto";

export class OrganizationMapper implements IMapperFactory {
    mapReq(entity: OrganizationEntity, req: OrganizationReqDto) {
        if (!entity) entity = new OrganizationEntity();
        entity.domain = req.domain;
        entity.email = req.email;
        entity.name = req.name;
        entity.phoneNumber = req.phone_number;
        entity.description = req.description;
        entity.addressId = req.address_id;
        return entity;
    }
    mapRes(res:OrganizationResDto, entity: OrganizationEntity) {
        if (!res) res = new OrganizationResDto();
        res.id = entity.id;
        res.phone_number = entity.phoneNumber;
        res.domain = entity.domain;
        res.email= entity.email;
        res.name = entity.name;
        res.description = entity.description;
        res.address_id = entity.addressId;
        return res;
    }

}