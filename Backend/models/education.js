
import mongoose from 'mongoose';

const educationExpenditureSchema = new mongoose.Schema({
  country: String,
  data: [
    {
      year: Number,
      value: Number
    }
  ]
}, 
{
  collection: 'educationExpenditure'
  });

  educationExpenditureSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});


export default mongoose.model('educationExpenditure', educationExpenditureSchema);