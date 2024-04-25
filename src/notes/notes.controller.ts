import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { NotesService } from "./notes.service";
import { CreateNoteDto } from "./dtos/create-notes.dto";
import { UpdateNoteDto } from "./dtos/create-notes-update.dto";

@Controller('notes')
export class NotesController{
    constructor(
        private notesService : NotesService,
    ){    }

    @Post()
    async createNote( @Body( new ValidationPipe() ) createNoteDto: CreateNoteDto ){
        return this.notesService.createNote(createNoteDto);
    }

    @Get()
    async getAllNotes(){
        return this.notesService.getAllNotes();
    }

    @Put('update/:id')
    async updateNote ( @Param('id') id: string, @Body() note : UpdateNoteDto ) {
        return this.notesService.updateNote( id, note);
    }

    @Delete('/:id')
    async deleteNote ( @Param('id') id: string ){
        return this.notesService.deleteNote( id );
    }

}