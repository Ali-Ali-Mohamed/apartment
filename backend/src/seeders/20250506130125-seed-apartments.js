module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Apartments', [
      {
        title: 'Modern Studio',
        description: 'A nice modern studio.',
        price: 800,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '2 Bedroom Apartment',
        description: 'Spacious apartment with 2 bedrooms.',
        price: 1200,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Apartments', null, {});
  }
};
