exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "ASDFGHWERTYU12345",
          make: "Mercedes",
          model: "E180",
          milage: 125000,
          transmission: "auto",
          title_status: "clean",
        },
        {
          VIN: "ASDFGHWERTYU1A345",
          make: "BMW",
          model: "X5",
          milage: 75000,
          transmission: "manuel",
          title_status: "clean",
        },
        {
          VIN: "ASDFGHWERAAU12345",
          make: "Volkswagen",
          model: "Passat",
          milage: 42500,
          transmission: "DSG",
          title_status: "salvage",
        },
      ]);
    });
};
