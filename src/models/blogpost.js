'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BlogPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BlogPost.init({
    title: {
      type:DataTypes.STRING,
      allowNull:false
    },
    content: {
      type:DataTypes.STRING,
      allowNull:false
    },
    imageUrl: {
      type:DataTypes.STRING,
      allowNull:false
    },
    author: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'BlogPost',
  });
  return BlogPost;
};