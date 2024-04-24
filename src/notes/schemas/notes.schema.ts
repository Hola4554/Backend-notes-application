import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Note {
    @Prop({required:true})
    name:string;
    @Prop()
    content:string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);