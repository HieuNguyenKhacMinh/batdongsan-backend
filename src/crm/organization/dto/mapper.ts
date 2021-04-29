import { AddressMapper } from "src/master-data/address/dto/mapper";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { OrganizationEntity } from "src/database.module/entities";
import { OrganizationReqDto } from "./req-dto";
import { OrganizationResDto } from "./res-dto";
import { ProvinceCityMapper } from "src/master-data/city/dto/mapper";
import { DistrictMapper } from "src/master-data/district/dto/mapper";
import { WardsMapper } from "src/master-data/wards/dto/mapper";

export class OrganizationMapper implements IMapperFactory {
    mapReq(entity: OrganizationEntity, req: OrganizationReqDto) {
        if (!entity) entity = new OrganizationEntity();
        entity.domain = req.domain;
        entity.email = req.email;
        entity.name = req.name;
        entity.phoneNumber = req.phone_number;
        entity.description = req.description;
        entity.addressId = req.address_id;
        entity.address.homeNumber = req.home_number;
        return entity;
    }
    mapRes(res: OrganizationResDto, entity: OrganizationEntity) {
        if (!res) res = new OrganizationResDto();
        res.id = entity.id;
        res.phone_number = entity.phoneNumber;
        res.domain = entity.domain;
        res.email = entity.email;
        res.name = entity.name;
        res.description = entity.description;
        res.address_id = entity.addressId;
        res.address = entity.address ? new AddressMapper().mapRes(undefined, entity.address) : undefined;

        // address info
        res.home_number = entity.address ? entity.address.homeNumber : undefined;
        res.street = entity.address ? entity.address.street : undefined;
        res.wards_id = entity.address ? entity.address.wardsId : undefined;
        res.wards = entity.address?.wards ? new WardsMapper().mapRes(undefined, entity.address.wards) : undefined;
        res.district_id = entity.address ? entity.address.districtId : undefined;
        res.district = entity.address?.district ? new DistrictMapper().mapRes(undefined, entity.address.district) : undefined;
        res.city_id = entity.address ? entity.address.cityId : undefined;
        res.city = entity.address?.city ? new ProvinceCityMapper().mapRes(undefined, entity.address.city) : undefined;
        return res;
    }

}