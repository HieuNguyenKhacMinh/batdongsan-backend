export class MenuResDto {
    id: string;
    name: string;
    description: string;
    path: string;
    children: MenuResDto[]
}