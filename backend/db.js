const mongoose=require('mongoose');
const mongoURI="mongodb://0.0.0.0:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const connectToMongo=async()=>{
   try{

    mongoose.connect(mongoURI);

   
        console.log("connected to mongo successfully");

    }catch(error){
        console.log(error);

    }
};

module.exports=connectToMongo;
