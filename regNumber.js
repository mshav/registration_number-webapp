module.exports = function(models) {
  plateList = [];
  plateList2 = [];
  const regNo = function(req, res) {
    models.Plate.find({}, function(err, result) {
      if (err) {
        return done(err)
      }
      console.log(result)
      res.render('regNo', {
        msg: result
      })
    })
  }

  const regNo1 = function(req, res, done) {
    var name = req.body.name;
    var regMsg = '';


    models.Plate.create({
      reg_number: name
    }, function(err, result) {
      if (err) {
        return done(err)
      }


      result.save(function(err, result) {
        models.Plate.find({

          reg_number: name

        }, function(err, result) {

          if (err) {

            return done(err)
          }

          if (name == name) {

           plateList.push(name)
           for (var i = 0; i < plateList.length; i++) {
           for (var j = 0; j < plateList2.length; j++) {
          if (plateList[i] == plateList2 && i != j){

            return done(plateList2)
          }
           }
           }

           return done(plateList2)


          }

          console.log(plateList2);
          res.render('regNo', {
            msg: plateList.result
          });
        })
      })
    });
  }

  return {
    regNo,
    regNo1
  }

}
