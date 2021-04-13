import { Req } from "@nestjs/common";
import { emit } from "process";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { ProductEntity } from "src/database.module/entities";
import { ProductReqDto } from "./req-dto";
import { ProductResDto } from "./res-dto";

export class ProductMapper implements IMapperFactory {
    mapReq(entity: ProductEntity, req: ProductResDto) {
        if (!entity) entity = new ProductEntity();
        entity.id = req.id;
        entity.sub_title = req.sub_title;
        entity.title = req.title;
        entity.description = req.description;
        entity.price = req.price;
        entity.files = req.files;
        entity.videos = req.videos;
        entity.projectId = req.project_id;
        entity.cityId = req.city_id;
        entity.formalityId = req.formality_id;
        entity.productTypeId = req.product_type;
        entity.productUnitId = req.product_unit_id;
        entity.sub_description = req.sub_description;
        entity.wardsId = req.ward_id;
        entity.addressId = req.address_id;
        entity.houseDirestionId = req.house_direstion_id;
        entity.acreage = req.acreage;
        entity.entryWidth = req.entry_width;
        entity.facade = req.facade;
        entity.noOfToilet = req.no_of_toilet;
        entity.noOfBedroom = req.no_of_bedroom;
        return entity;
    }
    mapRes(res: ProductResDto, entity: ProductEntity) {
        if (!res) res = new ProductResDto();
        res.id = entity.id;
        res.sub_title = entity.sub_title;
        res.title = entity.title;
        res.description = entity.description;
        res.price = entity.price;
        res.files = entity.files;
        res.videos = entity.videos;
        res.formality_id = res.formality_id;
        res.house_direstion_id = entity.houseDirestionId;
        res.product_unit_id = entity.productUnitId;
        res.project_id = entity.projectId;
        res.ward_id = entity.wardsId;
        res.address_id = entity.addressId;
        res.balcony_direction_id = entity.balconyDirectionId;
        res.city_id = entity.cityId;
        res.entry_width = entity.entryWidth;
        res.facade = entity.facade;
        res.no_of_bedroom = entity.noOfBedroom;
        res.no_of_toilet = entity.noOfToilet;
        res.acreage = entity.acreage;
        return res;
    }

}