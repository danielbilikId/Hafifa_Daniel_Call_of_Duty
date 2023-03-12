import mongoose from './mongoConnect';

const SoldierSchema = new mongoose.Schema({
  _id: { type: String },
  name: { type: String },
  rank: { type: String },
  limitations: { type: Array },
  duties: { type: Array, default: [] },
});

const Soldier = mongoose.model('Soldier', SoldierSchema);

export default Soldier;
