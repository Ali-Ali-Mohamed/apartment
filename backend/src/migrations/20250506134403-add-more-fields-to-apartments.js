'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.addColumn('Apartments', 'bedrooms', {
        type: Sequelize.INTEGER,
        allowNull: true
      }),
      queryInterface.addColumn('Apartments', 'bathrooms', {
        type: Sequelize.INTEGER,
        allowNull: true
      }),
      queryInterface.addColumn('Apartments', 'square_feet', {
        type: Sequelize.FLOAT,
        allowNull: true
      }),
      queryInterface.addColumn('Apartments', 'has_parking', {
        type: Sequelize.BOOLEAN,
        allowNull: true
      }),
      queryInterface.addColumn('Apartments', 'has_elevator', {
        type: Sequelize.BOOLEAN,
        allowNull: true
      }),
      queryInterface.addColumn('Apartments', 'has_balcony', {
        type: Sequelize.BOOLEAN,
        allowNull: true
      }),
      queryInterface.addColumn('Apartments', 'address', {
        type: Sequelize.STRING,
        allowNull: true
      }),
      queryInterface.addColumn('Apartments', 'lat', {
        type: Sequelize.FLOAT,
        allowNull: true
      }),
      queryInterface.addColumn('Apartments', 'lng', {
        type: Sequelize.FLOAT,
        allowNull: true
      })
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.removeColumn('Apartments', 'bedrooms'),
      queryInterface.removeColumn('Apartments', 'bathrooms'),
      queryInterface.removeColumn('Apartments', 'square_feet'),
      queryInterface.removeColumn('Apartments', 'has_parking'),
      queryInterface.removeColumn('Apartments', 'has_elevator'),
      queryInterface.removeColumn('Apartments', 'has_balcony'),
      queryInterface.removeColumn('Apartments', 'address'),
      queryInterface.removeColumn('Apartments', 'lat'),
      queryInterface.removeColumn('Apartments', 'lng')
    ]);
  }
};
