const person = {
    name: "Pat",
    location: "St. Louis",
    age: 33,
    hobbies: ["working", "partying", "sleeping"],
    pets: [
      {
        type: "dog",
        name: "Jack",
        age: 10,
        breed: "Pit mix",
        rescue: true,
        goodBoy: true,
        bark: function bigBark() {
          return "Ruff";
        },
      },
      {
        type: "dog",
        name: "Gilbert",
        age: 2,
        breed: "Mini Aussie",
        rescue: true,
        goodBoy: true,
        bark: function littleBark() {
          return "Yap, yap, yap";
        },
      },
    ],
    party: function throwParty() {
      return "Dance, dance, dance!";
    },
  };