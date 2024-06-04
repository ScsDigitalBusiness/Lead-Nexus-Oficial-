const mongoose = require ("mongoose"); 

const PhotoSchema=  mongoose.Schema({ 
    _id_profile: {type:String, required:true}, 
    originalname : {type:String, required:true}, 
    filename: {type:String,required:true}, 
});
const PhotoModel = mongoose.model('Photos',PhotoSchema); 


class PhotoProfile {
    constructor(file) {
        this.file = file; 
        this.errors = []; 
        this.uploaded = null; 
    }  
    async create() { 
        try {
            this.uploaded = PhotoModel.create(this.file); 
        }catch(e){
            throw new Error(e); 
        }
    } 
    async getUserPhoto(id) {
        try {
          const photo = PhotoModel.findOne({_id_profile: id});   
          console.log(photo); 
          return photo; 
        }catch(e) {
            throw new Error(e); 
        }
    }

} 
exports.PhotoProfile = PhotoProfile; 