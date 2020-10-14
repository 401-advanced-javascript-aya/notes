'use strict';
const noteDB = require('./model/notes-collection.js');

class Notes {
  constructor(input) {
    this.data = input;
  }

  async execute() {
    if (this.data.text) {
      await this.save(this.data.text, this.data.category);
    }
    if (this.data.listAll) {
      await this.listAll();
    };
    if (this.data.delete) {
      await this.delete(this.data.delete);
    };
    if (this.data.clearing) {
      await this.clearNotes(this.data.clearing);
    };
    process.exit();
  }
  
  valid() {
    return ((this.data.text && typeof this.data.text != "boolean") || this.data.delete  || this.data.listAll || this.data.clearing) && this.data.methods != undefined;
  }


  help() {
    console.log(
      `Error: check your input
      example: 'node notes.js -a/--add <note> -c <category><optional> --list --delete <ID> --clear <Category>'
      instead of -a/--add you can use the following:
      --list to list all notes
      --delete to delete the notebased on ID
      --clear to delete notes in the specified category or all notes if left empty`
     
    );
  }
  


  async save(text, category) {
    let templateNote = {
      Text: `${text}`,
      Category: `${category}`
    };
  
    let noteItem = await new NotesDB(templateNote).save();
    console.log('note saved: ', text);
    return noteItem
  }

  async listAll() {
    let listItems = await NotesDB.find();
    listItems.forEach(note => {
      console.log(`${note.Text} Category: ${note.Category}   ID: ${note._id}`)
    })
  }

  async delete(id) {
    let deleteItem = await NotesDB.findByIdAndDelete(id);
    console.log(`Deleted Note ${deleteItem}`);
  }

  async clearNotes(category) {
    await NotesDB.deleteMany(category);
    console.log(`Deleted Notes ${category.category ? "in Category " + category.category : "All"}`);
    await this.listAll();
  }
}




module.exports = Notes;