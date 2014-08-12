

module.exports = function (app) {

  console.log('initialize data ...');
  app.models().forEach(function (Model) {
    console.log('exist model: %s', Model.modelName);
  });
  var Role = app.models.Role;
  var Employee = app.models.Employee;
  var RoleMapping = app.models.RoleMapping;

  Role.create({
    name: 'admin'
  }, function (err, role) {
    Employee.create({
      email: 'admin@example.com',
      username: 'admin',
      password: 'admin'
    }, function (err, user) {
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: user.id
      });
    });
  });

};
