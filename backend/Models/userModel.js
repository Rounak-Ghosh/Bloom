import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
      {
            username : {
                  type: String,
                  required: true
            },
            password : {
                  type: String,
                  required: true
            },
            fullname : {
                  type: String,
                  required: true
            },
            isAdmin : {
                  type: Boolean,
                  default: false
            },
            isPaid : {
                  type: Boolean,
                  default: false
            },
            profilePicture: String,
            coverPicture: String,
            about: String,
            livesin: String,
            worksAt: String,
            followers: [],
            following: []
      },
      {
            timestamps: true
      }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;