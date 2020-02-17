const controller = require('../controller/users')

module.exports = function (app, rt) {

  rt.route('/v1/users')
    .post(controller.addUsers)
    .get(controller.listUsers)
    .put(controller.updateUsers)
    .delete(controller.deleteUsers)



  app.use('/api', rt)


}
