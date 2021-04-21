import { AddressResDto } from "src/master-data/address/dto/res-dto";



export class ContactResDto {
    id: string;
    contact_account: string;
    address_id : string ;
    address: AddressResDto;
    contact_details: string;

}