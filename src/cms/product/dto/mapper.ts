import { CommentMapper } from 'src/cms/comment/dto/mapper';
import { CountryMapper } from 'src/master-data/country/dto/mapper';
import { Req } from "@nestjs/common";
import { emit } from "process";
import { AddressMapper } from "src/master-data/address/dto/mapper";
import { BalconydirectionMapper } from "src/master-data/balcony-direction/dto/mapper";
import { ProvinceCityMapper } from "src/master-data/city/dto/mapper";
import { DistrictMapper } from "src/master-data/district/dto/mapper";
import { FormalityMapper } from "src/master-data/formality/dto/mapper";
import { HouseDirestionMapper } from "src/master-data/house_direstion/dto/mapper";
import { ProductTypeMapper } from "src/master-data/product_type/dto/mapper";
import { ProductUnitMapper } from "src/master-data/product_unit/dto/mapper";
import { ProjectMapper } from "src/cms/project/dto/mapper";
import { WardsMapper } from "src/master-data/wards/dto/mapper";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { ProductEntity } from "src/database.module/entities";
import { ProductReqDto } from "./req-dto";
import { ProductResDto } from "./res-dto";
import { reverse } from 'dns';
import { OrganizationMapper } from 'src/crm/organization/dto/mapper';
import { WishlistMapper } from 'src/cms/wishlist/dto/mapper';
import { FileMapper } from 'src/cms/file/dto/mapper';

export class ProductMapper implements IMapperFactory {
    mapReq(entity: ProductEntity, req: ProductReqDto) {
        if (!entity) entity = new ProductEntity();
        entity.id = req.id;
        entity.subTitle = req.sub_title;
        entity.title = req.title;
        entity.description = req.description;
        entity.price = req.price;
        entity.projectId = req.project_id;
        entity.cityId = req.city_id;
        entity.formalityId = req.formality_id;
        entity.productTypeId = req.product_type;
        entity.productUnitId = req.product_unit_id;
        entity.subDescription = req.sub_description;
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
        entity.countryId = req.country_id;
        entity.noOfFloors = req.no_of_floor;
        entity.juridical = req.juridical;
        entity.contactName = req.contact_name;
        entity.phoneNumber = req.phone_number;
        entity.email = req.email;
        entity.homeNumber = req.home_number;
        entity.street = req.street;
        entity.isBuyHire = req.is_buy_hire;
        entity.organizationId = req.organization_id;
        return entity;
    }
    mapRes(res: ProductResDto, entity: ProductEntity) {
        if (!res) res = new ProductResDto();
        res.id = entity.id;
        res.sub_title = entity.subTitle;
        res.title = entity.title;
        res.sub_description = entity.subDescription;
        res.description = entity.description;
        res.price = entity.price;
        res.formality_id = entity.formalityId;
        res.formality = entity.formality ? new FormalityMapper().mapRes(undefined, entity.formality) : undefined;
        res.house_direstion_id = entity.houseDirestionId;
        res.house_direstion = entity.houseDirestion ? new HouseDirestionMapper().mapRes(undefined, entity.houseDirestion) : undefined;
        res.product_unit_id = entity.productUnitId;
        res.product_unit = entity.productUnitType ? new ProductUnitMapper().mapRes(undefined, entity.productUnitType) : undefined;
        res.project_id = entity.projectId;
        res.project = entity.project ? new ProjectMapper().mapRes(undefined, entity.project) : undefined;
        res.wards_id = entity.wardsId;
        res.wards = entity.wards ? new WardsMapper().mapRes(undefined, entity.wards) : undefined;
        res.address_id = entity.addressId;
        res.address = entity.address ? new AddressMapper().mapRes(undefined, entity.address) : undefined;
        res.balcony_direction_id = entity.balconyDirectionId;
        res.balcony_direstion = entity.balconyDirection ? new BalconydirectionMapper().mapRes(undefined, entity.balconyDirection) : undefined;
        res.city_id = entity.cityId;
        res.city = entity.city ? new ProvinceCityMapper().mapRes(undefined, entity.city) : undefined;
        res.house_direstion_id = entity.houseDirestionId;
        res.house_direstion = entity.houseDirestion ? new HouseDirestionMapper().mapRes(undefined, entity.houseDirestion) : undefined;
        res.product_type_id = entity.productTypeId;
        res.product_type = entity.productType ? new ProductTypeMapper().mapRes(undefined, entity.productType) : undefined;
        res.entry_width = entity.entryWidth;
        res.facade = entity.facade;
        res.no_of_bedroom = entity.noOfBedroom;
        res.no_of_toilet = entity.noOfToilet;
        res.acreage = entity.acreage;
        res.country_id = entity.countryId;
        res.country = entity.country ? new CountryMapper().mapRes(undefined, entity.country) : undefined;
        res.district_id = entity.districtId;
        res.district = entity.district ? new DistrictMapper().mapRes(undefined, entity.district) : undefined;
        res.juridical = entity.juridical;
        res.no_of_floor = entity.noOfFloors;
        res.email = entity.email;
        res.phone_number = entity.phoneNumber;
        res.contact_name = entity.contactName;
        res.street = entity.street;
        res.home_number = entity.homeNumber;
        res.is_buy_hire = entity.isBuyHire;
        res.organization_id = entity.organizationId;
        res.wishlists = entity.wishlists ? entity.wishlists.map(wishlist =>
            new WishlistMapper().mapRes(undefined, wishlist)
        ) : [];
        res.organization = entity.organization ? new OrganizationMapper().mapRes(undefined, entity.organization) : undefined;
        res.comments = entity.comments ? entity.comments.map(comment =>
            new CommentMapper().mapRes(undefined, comment)
        ) : [];
        res.files = entity.files ? entity.files.map(f =>
            new FileMapper().mapRes(undefined, f)
        ) : [];
        return res;
    }

}