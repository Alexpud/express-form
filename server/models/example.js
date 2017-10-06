'use strict';
module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define('Example', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Example;
};