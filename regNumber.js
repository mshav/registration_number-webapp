module.exports = function(models) {
  const regNo = function(req, res) {
    models.Plate.find({}, function(err, result) {
      if (err) {
        return done(err)
      }

      res.render('regNo', {
        msg: result
      })
    })
  }
  // var regNumber=  "CA567789".match(/^CA/);
    // console.log(regNumber);
  const index = function(req, res, done) {
    var reg_number = req.body.name;

    models.Plate.findOne({
      reg_number: req.body.name
    }, function (err, duplicate) {
      if (err) {
        return done(err)
      }

      if (duplicate) {
        models.Plate.find({},function(err, allPlates) {
          if (err) {
            return done(err)
          }


          res.render('regNo', {msg:allPlates})

        })
      }
      console.log(reg_number);

      if (!duplicate) {
        models.Plate.create({
          reg_number: req.body.name


        }, function(err, result) {
          if (err) {
            return done(err)
          }

            models.Plate.find({},function(err, allPlates) {
              if (err) {
                return done(err)
              }


              res.render('regNo', {msg:allPlates})

            })

        });

      }
models.Plate.find({},function(err, result){
 if (err) {

  return done(err)
 }

})

    })


  };

const filterData = function(req, res){

var reg = req.body.location
console.log(reg);
models.Plate.find({reg_number : {$regex: reg } },function(err, result){

if(err){
  console.log(err);
}
else {
  res.render('regNo', {msg:result})
}
})
}






  return {
    regNo,
    index,
    filterData,



  }

}
