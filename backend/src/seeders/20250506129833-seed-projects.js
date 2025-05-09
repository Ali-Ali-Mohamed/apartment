module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Projects', [
      {
        name: 'Project A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Project B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Project C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Project D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Project E',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Project F',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Project G',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Project H',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
