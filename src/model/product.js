import mongoose from "./index.js"

const validateEmail = (email)=>{
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
}

const productSchema = new mongoose.Schema({

    product:{
        type:String,
        required:[true, "product name is required"]
    },
    cost:{
        type: Number,
        required:[true, "product cost is required"]
    },
    availablity:{
        type: String,
        required:[true, "Availablity is required"]
    },
    image:{
        type:String,
        validate: {
            validator: function(value) {
              return /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(value);
            },
            message: 'Profile image URL must be a valid URL for jpg, jpeg, png, or gif'
          }
    }
},
{
    collections:"Shop_product",
    versionKey:false
})

const productModel = mongoose.model("product", productSchema)

export default productModel