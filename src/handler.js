const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    
    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };
    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess){
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil ditambahkan',
            data: {
                noteId: id,
            },
        });
        response.code(201);
        return response;
    }
    if (!isSuccess){
        const response = h.response({
            status: 'fail',
            message: 'catatan gagal ditambahkan',
        });
        response.code(500);
        return response;
    }    
};

const getAllNotesHandler = () => ({
    status: 'Success',
    data: {
        notes,
    },
});

const getNoteByIdHandler = (request, h) => {
    const { id } = request.params;
    const note = notes.filter((n) => n.id === id)[0];
    if (note !== undefined){
        return {
            status: 'Success',
            data: { note },
        };
    }
    const response = h.response({
        status: 'failed',
        message: 'catatan tidak ditemukan',
    });
    response.code(404);
    return response;
};

const editNoteByIdHandler = (request, h) => {
    const { id } = request.params;
    const { title, tags, body } = request.payload;
    const updateAt = new Date().toISOString();
    const index = notes.findIndex((note) => note.id === id);
    if (index !== -1){
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updateAt,
        };
        const response = h.response({
            status: 'Success',
            message: 'Catatan berhasil diperbaharui',
        });
        response.code(200);
        return response;
    }
    if (index === -1){
        const response = h.response({
            status: 'failed',
            message: 'Catatan Gagal Diperbaharui',
        });
        response.code(404);
        return response;
    }
};

const deleteNoteByIdHandler = (request, h) => {
    const { id } = request.params;
    const index = notes.findIndex((note) => note.id === id);
    if (index >= 0){
        notes.splice(index, 1);
        const response = h.response({
            status: 'Success',
            message: 'Catatan Berhasil Dihapus',
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: 'Failed',
        message: 'Gagal Menghapus Catatan Karena Id tidak di temukan',
    });
    response.code(401);
    return response;
};

module.exports = { 
    addNoteHandler, 
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler,
};
