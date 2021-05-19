import { CommentMapper } from './../../comment/dto/mapper';
import { AddressMapper } from './../../../master-data/address/dto/mapper';
import { DistrictMapper } from 'src/master-data/district/dto/mapper';
import { ProvinceCityMapper } from "src/master-data/city/dto/mapper";
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { ProjectEntity } from "src/database.module/entities";
import { ProjectReqDto } from "./req-dto";
import { ProjectResDto } from "./res-dto";
import { EntityRepository } from "typeorm";
import { CountryMapper } from 'src/master-data/country/dto/mapper';
import { WardsMapper } from 'src/master-data/wards/dto/mapper';
import { ProjectTypeMapper } from 'src/master-data/project_type/dto/mapper';
import { ProductMapper } from 'src/cms/product/dto/mapper';
import { OrganizationMapper } from 'src/crm/organization/dto/mapper';
import { WishlistMapper } from 'src/cms/wishlist/dto/mapper';
import { FileMapper } from 'src/cms/file/dto/mapper';
import { UserMapper } from 'src/identity/user/dto/mapper';

export class ProjectMapper implements IMapperFactory {
    mapReq(entity: ProjectEntity, req: ProjectReqDto) {
        if (!entity) entity = new ProjectEntity();
        entity.name = req.name;
        entity.description = req.description;
        entity.cityId = req.city_id;
        entity.countryId = req.coutry_id;
        entity.districtId = req.district_id;
        entity.wardsId = req.wards_id;
        entity.addressId = req.address_id;
        entity.homeNumber = req.home_number;
        entity.overview = req.overview;
        entity.street = req.street;
        entity.totalArea = req.total_area;
        entity.projectTypeId = req.project_type_id;
        entity.distributionUnit = req.distribution_unit;
        entity.infrastructureLocation = req.infrastructure_location; // Vị trí mặt bằng
        entity.latitude = req.latitude;
        entity.longitude = req.longitude;
        entity.userId = req.user_id;
        // entity.organizationId = req.organization_id;
        entity.infrastructureDesign = req.infrastructure_design;
        return entity;
    }
    mapRes(res: ProjectResDto, entity: ProjectEntity) {
        if (!res) res = new ProjectResDto();
        res.id = entity.id;
        res.delete_flag = entity.deleteFlag;
        res.name = entity.name;
        res.description = entity.description;
        res.coutry_id = entity.countryId;
        res.country = entity.country ? new CountryMapper().mapRes(undefined, entity.country) : undefined;
        res.city_id = entity.cityId;
        res.city = entity.city ? new ProvinceCityMapper().mapRes(undefined, entity.city) : undefined;
        res.district_id = entity.districtId;
        res.district = entity.district ? new DistrictMapper().mapRes(undefined, entity.district) : undefined;
        res.wards_id = entity.wardsId;
        res.wards = entity.wards ? new WardsMapper().mapRes(undefined, entity.wards) : undefined;
        res.address_id = entity.addressId;
        res.address = entity.address ? new AddressMapper().mapRes(undefined, entity.address) : undefined;
        res.home_number = entity.homeNumber;
        res.overview = entity.overview;
        res.street = entity.street;
        res.total_area = entity.totalArea;
        res.project_type_id = entity.projectTypeId;
        res.projectType = entity.projectType ? new ProjectTypeMapper().mapRes(undefined, entity.projectType) : undefined;
        res.distribution_unit = entity.distributionUnit;
        res.infrastructure_location = entity.infrastructureLocation; // Vị trí mặt bằng
        res.latitude = entity.latitude;
        res.longitude = entity.longitude;
        res.organization_id = entity.organizationId;
        res.organization = entity.organization ? new OrganizationMapper().mapRes(undefined, entity.organization) : undefined;
        res.user_id = entity.userId;
        res.user = entity.user ? new UserMapper().mapRes(undefined, entity.user) : undefined;
        res.infrastructure_design = entity.infrastructureDesign;
        res.products = entity.products ? entity.products.map(p =>
            new ProductMapper().mapRes(undefined, p)) : undefined;
        res.comments = entity.comments ? entity.comments.map(comment =>
            new CommentMapper().mapRes(undefined, comment)
        ) : [];
        res.wishlists = entity.wishlists ? entity.wishlists.map(wishlist =>
            new WishlistMapper().mapRes(undefined, wishlist)
        ) : [];
        res.files = entity.files ? entity.files.map(f =>
            new FileMapper().mapRes(undefined, f)
        ) : [];
        return res;
    }

}