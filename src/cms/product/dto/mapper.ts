import { Req } from "@nestjs/common";
import { emit } from "process";
import { AddressModule } from "src/cms/address/address.module";
import { AddressMapper } from "src/cms/address/dto/mapper";
import { BalconydirectionMapper } from "src/cms/balcony-direction/dto/mapper";
import { ProvinceCityMapper } from "src/cms/city/dto/mapper";
import { DistrictMapper } from "src/cms/district/dto/mapper";
import { FormalityMapper } from "src/cms/formality/dto/mapper";
import { HouseDirestionMapper } from "src/cms/house_direstion/dto/mapper";
import { ProductTypeMapper } from "src/cms/product_type/dto/mapper";
import { ProductUnitMapper } from "src/cms/product_unit/dto/mapper";
import { ProjectMapper } from "src/cms/project/dto/mapper";
import { WardsMapper } from "src/cms/wards/dto/mapper";
import { WardsResDto } from "src/cms/wards/dto/res-dto";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { ProductEntity } from "src/database.module/entities";
import { ProductReqDto } from "./req-dto";
import { ProductResDto } from "./res-dto";

export class ProductMapper implements IMapperFactory {
    mapReq(entity: ProductEntity, req: ProductReqDto) {
        if (!entity) entity = new ProductEntity();
        entity.id = req.id;
        entity.sub_title = req.sub_title;
        entity.title = req.title;
        entity.description = req.description;
        entity.price = req.price;
        entity.projectId = req.project_id;
        entity.cityId = req.city_id;
        entity.formalityId = req.formality_id;
        entity.productTypeId = req.product_type;
        entity.productUnitId = req.product_unit_id;
        entity.sub_description = req.sub_description;
        entity.wardsId = req.wards_id;
        entity.addressId = req.address_id;
        entity.houseDirestionId = req.house_direstion_id;
        entity.balconyDirectionId = req.balcony_direction_id;
        entity.acreage = req.acreage;
        entity.entryWidth = req.entry_width;
        entity.facade = req.facade;
        entity.noOfToilet = req.no_of_toilet;
        entity.noOfBedroom = req.no_of_bedroom;
        entity.districtId = req.district_id;
        return entity;
    }
    mapRes(res: ProductResDto, entity: ProductEntity) {
        if (!res) res = new ProductResDto();
        res.id = entity.id;
        res.sub_title = entity.sub_title;
        res.title = entity.title;
        res.description = entity.description;
        res.price = entity.price;
        res.formality_id = res.formality_id;
        res.formality = entity.formality? new FormalityMapper().mapRes(undefined, entity.formality): undefined;
        res.house_direstion_id = entity.houseDirestionId;
        res.house_direstion = entity.houseDirestion? new HouseDirestionMapper().mapRes(undefined, entity.houseDirestion): undefined;
        res.product_unit_id = entity.productUnitId;
        res.product_unit = entity.productUnitType? new ProductUnitMapper().mapRes(undefined, entity.productUnitType): undefined;
        res.project_id = entity.projectId;
        res.project = entity.project? new ProjectMapper().mapRes(undefined, entity.project): undefined;
        res.wards_id = entity.wardsId;
        res.wards = entity.wards? new WardsMapper().mapRes(undefined, entity.wards): undefined;
        res.address_id = entity.addressId;
        res.address = entity.address? new AddressMapper().mapRes(undefined, entity.address): undefined;
        res.balcony_direction_id = entity.balconyDirectionId;
        res.balcony_direstion = entity.balconyDirection? new BalconydirectionMapper().mapRes(undefined, entity.balconyDirection): undefined;
        res.city_id = entity.cityId;
        res.city = entity.city? new ProvinceCityMapper().mapRes(undefined, entity.city): undefined;
        res.house_direstion_id = entity.houseDirestionId;
        res.house_direstion = entity.houseDirestion? new HouseDirestionMapper().mapRes(undefined, entity.houseDirestion): undefined;
        res.product_type_id = entity.productTypeId;
        res.product_type = entity.productType? new ProductTypeMapper().mapRes(undefined, entity.productType): undefined;
        res.entry_width = entity.entryWidth;
        res.facade = entity.facade;
        res.no_of_bedroom = entity.noOfBedroom;
        res.no_of_toilet = entity.noOfToilet;
        res.acreage = entity.acreage;
        res.district_id = entity.districtId;
        res.district = entity.district? new DistrictMapper().mapRes(undefined, entity.district): undefined;
        return res;
    }

}