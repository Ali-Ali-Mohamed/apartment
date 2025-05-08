module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Apartments', [
      {
        title: "Modern Studio",
        description: "A nice modern studio.",
        price: 800,
        bedrooms: 5,
        bathrooms: 2,
        square_feet: 150,
        has_parking: true,
        has_elevator: false,
        has_balcony: true,
        address: "Address 1",
        lat: 1.4356456,
        lng: 1.8755674,
        projectId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "2 Bedroom Apartment",
        description: "Spacious apartment with 2 bedrooms.",
        price: 100,
        bedrooms: 2,
        bathrooms: 1,
        square_feet: 150,
        has_parking: true,
        has_elevator: false,
        has_balcony: true,
        address: "Address 2",
        lat: 1.4356456,
        lng: 1.8755674,
        projectId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Apartments', null, {});
  }
};
