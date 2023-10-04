const TodoSchema = new.mongoose.schema({
    user_name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },

      createdAt: {
        type: Date,
        default: Date.now,
      },
      
      password: {
        type: String,
        required: true,
      },
  });

  module.exports = mongoose.model("Todo", TodoSchema);