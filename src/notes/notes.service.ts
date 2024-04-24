import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Note } from "./schemas/notes.schema";
import { Model } from "mongoose";

@Injectable()
export class NotesService{
    constructor( @InjectModel(Note.name)private noteModel: Model<Note> ){}
}