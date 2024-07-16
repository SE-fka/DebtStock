import mongoose from 'mongoose';

const debtStockSchema = new mongoose.Schema({
  country: String,
  data: [
    {
      year: Number,
      value: Number
    }
  ],
  totalValue: Number
}, 
{
  collection: 'debtStock'
  });

  debtStockSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export default mongoose.model('debtStock', debtStockSchema);

