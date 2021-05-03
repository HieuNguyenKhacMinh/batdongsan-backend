import { UserMapper } from 'src/identity/user/dto/mapper';
import { WardsMapper } from 'src/master-data/wards/dto/mapper';
import { DistrictMapper } from 'src/master-data/district/dto/mapper';
import { DistrictResDto } from 'src/master-data/district/dto/res-dto';
import { emit } from 'process';

import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import {  ContactEntity } from "src/database.module/entities";
import { AddressMapper } from "src/master-data/address/dto/mapper";
import { ProvinceCityMapper } from 'src/master-data/city/dto/mapper';
import { CountryMapper } from 'src/master-data/country/dto/mapper';
import { ContactReqDto } from "./req-dto";
import { ContactResDto } from "./res-dto";
import { WardsResDto } from 'src/master-data/wards/dto/res-dto';

export class ContactMapper implements IMapperFactory {
    mapReq(entity: ContactEntity, req: ContactReqDto) {
        if (!entity) entity = new ContactEntity();
        entity.addressId = req.address_id;
        entity.contactAccount = req.contact_account;
        entity.contactDetails = req.contact_details;
        entity.name = req.name;
        entity.email = req.email;
        entity.countryId = req.country_id;
        entity.cityId = req.city_id;
        entity.districtId = req.district_id;
        entity.wardsId = req.wards_id;
        entity.userId = req.user_id;
        return entity;
    }
    mapRes(res:ContactResDto, entity: ContactEntity) {
        if (!res) res = new ContactResDto();
        res.id = entity.id;
        res.address_id = entity.addressId;
        res.address = entity.address? new AddressMapper().mapRes(undefined, entity.address): undefined;
        res.contact_account = entity.contactAccount;
        res.contact_details = entity.contactDetails;
        res.phone_number = entity.phoneNumber;
        res.name = entity.name;
        res.email = entity.email;
        res.country_id = entity.countryId;
        res.country = entity.country ? new CountryMapper().mapRes(undefined, entity.country): undefined;
        res.city_id = entity.cityId;
        res.city = entity.city ? new ProvinceCityMapper().mapRes(undefined, entity.city): undefined;
        res.district_id = entity.districtId;
        res.district = entity.district ? new DistrictMapper().mapRes(undefined, entity.district): undefined;
        res.wards_id = entity.wardsId;
        res.wards = entity.wards ? new WardsMapper().mapRes(undefined, entity.wards): undefined;
         res.user_id = entity.userId;
        res.user = entity.user ? new UserMapper().mapRes(undefined, entity.user): undefined;
        return res;
    }

}