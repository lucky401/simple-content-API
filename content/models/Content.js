const { DataTypes } = require('sequelize');
const { db } = require('../../config');
const { cdn } = require('../../config');
const Content = db.define(
  'Content',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      get() {
        const image = this.getDataValue('image');
        return cdn.uploadDir + image;
      },
    },
  },
  {
    timestamps: true,
  },
);

module.exports = Content;
