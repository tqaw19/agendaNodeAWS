const mongoose = require('mongoose');
const { Schema } = mongoose;
const path = require('path');

const ImageSchema = new Schema({
    // title: { type: String},
    // description: { type:String},
    // filename: { type:String},
    // views: {type:Number, default: 0},
    // likes: {type: Number, default: 0},
    // timestamp: {type: Date, default: Date.now}
    nombres: {type: String},
    apellidos: {type: String},
    correo: {type: String},
    fecha_nac: {type: String},
    foto: {type: String}    
});

ImageSchema.virtual('uniqueId')
    .get(function () {
        return this.foto.replace(path.extname(this.foto), '')
    });

module.exports = mongoose.model('Image', ImageSchema);
