import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Note } from "./schemas/notes.schema";
import { Model } from "mongoose";
import { CreateNoteDto } from "./dtos/create-notes.dto";
import { UpdateNoteDto } from "./dtos/create-notes-update.dto";

@Injectable()
export class NotesService{
    constructor( @InjectModel(Note.name)private noteModel: Model<Note> ){}

    async createNote ( note : CreateNoteDto ){
        const createdNote = new this.noteModel(note);
        createdNote.save();
    }

    async getAllNotes(){
        return this.noteModel.find().exec();
    }

    async updateNote( id:string, note : UpdateNoteDto ){
        return this.noteModel.findByIdAndUpdate( id, note, {
            new: true,
        }).exec();
        
    }

}