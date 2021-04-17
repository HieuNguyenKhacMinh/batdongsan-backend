import { ProvinceCityMapper } from "src/cms/city/dto/mapper";
import { DistrictMapper } from "src/cms/district/dto/mapper";
import { WardsMapper } from "src/cms/wards/dto/mapper";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import {  ContactEntity } from "src/database.module/entities";
import { ContactReqDto } from "./req-dto";
import { ContactResDto } from "./res-dto";

export class ContactMapper implements IMapperFactory {
    mapReq(entity: ContactEntity, req: ContactReqDto) {
        if (!entity) entity = new ContactEntity();
        entity.address = req.contact_address;
        entity.contactAccount = req.contact_account;
        entity.contactDetails = req.contact_details;
        return entity;
    }
    mapRes(res:ContactResDto, entity: ContactEntity) {
        if (!res) res = new ContactResDto();
        res.id = entity.id;
        res.contact_address = entity.address;
        res.contact_account = entity.contactAccount;
        res.contact_details = entity.contactDetails;
        return res;
    }

}