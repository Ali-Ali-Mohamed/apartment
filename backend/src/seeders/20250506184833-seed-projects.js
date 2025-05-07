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
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
