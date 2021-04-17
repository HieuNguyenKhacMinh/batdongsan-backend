import { AddressResDto } from "src/cms/address/dto/res-dto";

export class OrganizationResDto {
    id: string;
    name: string;
    description: string;
    phone_number: string;
    email: string;
    domain: string;
    address_id: string;
    address: AddressResDto;
}