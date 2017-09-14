const mongoose = require('mongoose');
module.exports = function(mongoUrl) {
  mongoose.Promise = global.Promise;
  mongoose.connect(mongoUrl);

  const Plate = mongoose.model('Plate', {
    reg_number: String
  });

  return {
    Plate
  };
}
