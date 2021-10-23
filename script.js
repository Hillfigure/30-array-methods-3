const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ]

    // 1.

    const heroNames = superheroes.map(item => item.name);
    console.log("A list of all heroes: ", heroNames);

    // 2.

    const heroLight = superheroes.filter(item => item.weight < 190);
    console.log("Heroes under 190 pnds: ", heroLight);

    // 3.

    const search200pndsHero = function(array) {
        return array.filter(item => item.weight == 200)
        .map((names) => names.name);
    }

    console.log("200 pound heroes: ", search200pndsHero(superheroes));

    // 4.

    const onlyUnique = function(value, index, self) {
        return self.indexOf(value) === index;
    }

    const appearances = superheroes.map(item => item.first_appearance)
        .filter(onlyUnique);

    console.log("List of first appearances: ", appearances);

    // 5.

    const publisher = function(array, publ) {
        return array.filter(item => item.publisher === publ)
        .map((item) => item.name);
    }
    
    console.log("DC Comics Heroes: ", publisher(superheroes, "DC Comics"));
    console.log("Marvel Heroes: ", publisher(superheroes, "Marvel Comics"));

    // 6. & .7

    const totalPublisherWeight = function(array, publ){
        return array.filter(item => item.weight !== "unknown" && item.publisher === publ)
        .reduce((total, item) => {
            return parseInt(item.weight) + total;
        }, 0)
    }

    console.log("DC Comics total weight: ", totalPublisherWeight(superheroes, "DC Comics"));
    console.log("Marvel Comics total weight: ", totalPublisherWeight(superheroes, "Marvel Comics"));

    // 8.

    const highestWeight = function(array){
        return array.filter(item => item.weight !== "unknown")
        .reduce((max, item) => {
            return Math.max(max, parseInt(item.weight))
        }, 0)
    }

    console.log("This is the heaviest hero: ", highestWeight(superheroes));