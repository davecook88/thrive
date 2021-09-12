import mongoose from "mongoose";

/* UserSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema<User.Model>({
  name: {
    type: String,
    maxlength: [20, "Name cannot be more than 60 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
  },
  isAdmin: {
    type: Boolean,
  },
});
const UserModel =
  (mongoose.models?.User as mongoose.Model<User.Model, {}, {}>) ||
  mongoose.model<User.Model>("User", UserSchema);
export default UserModel;
