  module.exports = function(models) {
  const regNo = function(req, res) {
    res.render('regNo')
  }

  const regNo1 = function(req, res, done) {
    var name = req.body.name;
    var regMsg = '';

     models.Plate.create({
       reg_number: name
     }, function (err) {
       if (err) {
         return done(err)
       }
       models.Plate.find({}, function (err, result) {
         if (err) {

         }
         

         console.log(result);
         res.render('regNo', {
           msg: result
         });

       })
     })
  }

  return {
    regNo,
    regNo1
  }

}
