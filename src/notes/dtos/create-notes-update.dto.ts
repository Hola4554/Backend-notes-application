import { IsOptional, IsString } from "class-validator";

export class UpdateNoteDto {
    @IsOptional()
    @IsString()
    _id: string;
    @IsOptional()
    @IsString()
    title: string;
    @IsOptional()
    @IsString()
    content: string;
    @IsOptional()
    @IsString()
    color: string;
    @IsString()
    @IsOptional()
    list: string;
}