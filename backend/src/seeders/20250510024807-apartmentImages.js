module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ApartmentImages', [
      {
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/606153097.jpg?k=86f5bbf039183c92c755a5582a9daa3bdd0d6e7ddce11021106b313d3c74a757&o=&hp=1",
        apartmentId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://cdn.sanity.io/images/v48q37k7/production/d09208183125ab47493d5de2f8710b6faa27d7cc-3000x2000.jpg?auto=format&fit=max&q=90&w=1500",
        apartmentId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://www.lendlease.com/contentassets/302840d3bc9846579cb9f785ed8abb9a/luxury-interior-design.jpg",
        apartmentId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/547761545.jpg?k=ef8071da1c5e8c64c55a6a46841a6322e0ec0081d1a0b8e3aa4bd565a7e0960a&o=&hp=1",
        apartmentId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://draperandkramer.com/wp-content/uploads/2020/04/insights-what-does-a-renovated-apartment-mean-draperandkramer_20200408_header-image.png",
        apartmentId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://cdn.carmel-apartments.com/system/uploads/fae/image/asset/18810/three-bedroom-apartmnet-union-market-noho-washington-dc-luxury.jpeg",
        apartmentId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://media-cdn.tripadvisor.com/media/photo-s/2c/b0/b6/2b/apartment-hotels.jpg",
        apartmentId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://deluxe-apartments-by-the-railway-station-wroclaw.booked.net/data/Photos/OriginalPhoto/14166/1416659/1416659211/Deluxe-Apartments-By-The-Railway-Station-Wroclaw-Exterior.JPEG",
        apartmentId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://images.ctfassets.net/pg6xj64qk0kh/2r4QaBLvhQFH1mPGljSdR9/39b737d93854060282f6b4a9b9893202/camden-paces-apartments-buckhead-ga-terraces-living-room-with-den_1.jpg",
        apartmentId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp0oj-alrxho3vGwjiIocs5HYjNX434suh8TRrb8g7cmKGOz2vqLE5DAgB5vxdctwHDqo&usqp=CAU",
        apartmentId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://skyview-waterside-city-luxury-apartment.brighton-hotels-england.com/data/Imgs/OriginalPhoto/12726/1272685/1272685969/img-london-1.JPEG",
        apartmentId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://images.adsttc.com/media/images/5be3/3a40/08a5/e549/e300/0315/newsletter/42442.jpg?1541618191",
        apartmentId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuALZEzsfHMc19-6ouZ9tz7aYGvqsO8M0aw&s",
        apartmentId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://propertymngt.homeselect.es/pics/1885/detail/3/1707223457_A7405158.jpg",
        apartmentId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ApartmentImages', null, {});
  }
};
