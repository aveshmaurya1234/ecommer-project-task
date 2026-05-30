import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// Hash password before saving in database

userSchema.pre("save", async function () {
  // prevent re-hashing
  if (!this.isModified("password")) {
    return;
  };

  this.password = await bcrypt.hash(this.password, 10);
}); 


// Compare password method
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};


const UserModel = mongoose.model("User", userSchema);

export default UserModel;