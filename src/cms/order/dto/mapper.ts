import { UserMapper } from 'src/identity/user/dto/mapper';
import { OrderEntity } from './../../../database.module/entities/order.entity';
import { IMapperFactory } from "src/common/interfaces/mapper.interface";
import { OrderReqDto } from "./req-dto";
import { OrderResDto } from "./res-dto";
import { ProductMapper } from 'src/cms/product/dto/mapper';

export class OrderMapper implements IMapperFactory {
    mapReq(entity: OrderEntity, req: OrderReqDto) {
        if (!entity) entity = new OrderEntity();
        entity.ngayBan = req.ngayBan;
        entity.thanhTien = req.thanhTien;
        entity.giaTien = req.giaTien;
        entity.vat = req.vat;
        entity.userId = req.user_id;
        entity.productId = req.product_id;
        return entity;
    }
    mapRes(res: OrderResDto, entity: OrderEntity) {
        if (!res) res = new OrderResDto();
        res.id = entity.id;
        res.ngayBan = entity.ngayBan;
        res.thanhTien = entity.thanhTien;
        res.vat = entity.vat;
        res.user_id = entity.userId;
        res.user = entity.user? new UserMapper().mapRes(undefined, entity.user): undefined;
        res.product_id = entity.productId;
        res.product = entity.product? new ProductMapper().mapRes(undefined, entity.product): undefined;
        return res;
    }

}