'use strict';
module.exports = (sequelize, DataTypes) => {
  var GearList = sequelize.define('GearList', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  GearList.associate = function(models) {
    // associations can be defined here
  };
  return GearList;
};