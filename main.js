// module.exports = function(models) {
//
//   const index = function(req, res, done) {
//     var reg_number = req.body.name;
//
//     models.Plate.findOne({
//       reg_number: req.body.name
//     }, function(err, duplicate) {
//       if (err) {
//         return done(err)
//       }
//       //  console.log(Plate);
//       if (duplicate) {
//         console.log(duplicate);
//         models.Plate.find({}, function(err, allPlates) {
//           if (err) {
//             return done(err)
//           }
//           // console.log(allPlates);
//
//
//           res.render('regNo', {
//             msg: allPlates
//           })
//
//         })
//       }
//
//       if (!duplicate) {
//         models.Plate.create({
//           reg_number: req.body.name
//         }, function(err, result) {
//           if (err) {
//             return done(err)
//           }
//
//           models.Plate.find({}, function(err, allPlates) {
//             if (err) {
//               return done(err)
//             }
//
//
//
//           })
//
//         });
//
//       }
//
//
//
//
//     })
//
//
//   }
//
//   return {
//     index
//   }
// }
