
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import {  ContactEntity } from "src/database.module/entities";
import { AddressMapper } from "src/master-data/address/dto/mapper";
import { ContactReqDto } from "./req-dto";
import { ContactResDto } from "./res-dto";

export class ContactMapper implements IMapperFactory {
    mapReq(entity: ContactEntity, req: ContactReqDto) {
        if (!entity) entity = new ContactEntity();
        entity.addressId = req.address_id;
        entity.contactAccount = req.contact_account;
        entity.contactDetails = req.contact_details;
        return entity;
    }
    mapRes(res:ContactResDto, entity: ContactEntity) {
        if (!res) res = new ContactResDto();
        res.id = entity.id;
        res.address_id = entity.addressId;
        res.address = entity.address? new AddressMapper().mapRes(undefined, entity.address): undefined;;
        res.contact_account = entity.contactAccount;
        res.contact_details = entity.contactDetails;
        return res;
    }

}