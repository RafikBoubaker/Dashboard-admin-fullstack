const mongoose = require ('mongoose')



const userSchema = new mongoose.Schema({
  name :{
type : String,
required : true
  },

  email :{
    type : String,
    required : true
      },

     password :{
        type : String,
        required : true
          },

          phone :{
            type : Number,
            required : true
              },

              address :{
                type : String,
                required : true
                  },
                
                  gender :{
                    type : String,
                    required : true
                      },

                      active :{
                        type : String,
                        required : true
                          },

                    

})

module.exports = mongoose.model('user',userSchema)