import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Note {
    @Prop({required:true})
    title:string;
    @Prop()
    content:string;
    @Prop()
    color:string;
    @Prop()
    list:string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);