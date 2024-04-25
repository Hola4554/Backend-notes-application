import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateNoteDto {
    @IsNotEmpty()
    @IsString()
    title: string;
    @IsString()
    content: string;
    @IsString()
    color: string;
    @IsString()
    list: string;
}