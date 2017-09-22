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
  var regNumber=  "CA567789".match(/^CA/);
    console.log(regNumber);
  const index = function(req, res, done) {
    var reg_number = req.body.name;
    const display = " ";

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


const filterdata = function(req, res, done){

var placeData = {

  location :req.body.location

}
if (!placeData || !placeData){

  req.flash("error" ,"Please select a location");
  res.render(reg_number);
}else{

models.Plate.find({}, function(err, thePlate){

var loc = "";

if (err){

  return done(err)
}
if (placeData.locatio == 'Cape Town'){


  loc = "CA"
}

 if (placeData.location == 'Bellville') {

loc = "CY"

}
 if (placeData.location == 'Paarl') {

loc = "CJ"

}

function mbu (input){

  return input.reg_number.startsWith(loc);

}

var v = thePlate.filter(mbu);


display = v;

var data = {
    reg_num: display
}

res.render('regNo', {msg:data});
})

}

}



  return {
    regNo,
    index,
    filterdata
  }

}
