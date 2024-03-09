// Part One
/*You are going to need coordinates throughout your application. You know that coordinates always take two points: a latitude and a longitude.
The coordinates for Timbuktu are 16.7666Â° N, 3.0026Â° W. You also know that a positive latitude is North and negative is South, and that a positive longitude is West and negative is East.
When coding with coordinates, how do you think you would want to work with them in JavaScript?
Create an example of the coordinates for Timbuktu written typed as the following:

An array
A tuple
An enum
An object with lat and long properties
An interface
An alias*/

//Array
const timbuktuCoordinatesArray: [number, number] = [16.7666, -3.0026]
console.log(timbuktuCoordinatesArray)

//Tuple
type CoordinatesTuple =[latitude: number, longitude: number]
const timbuktuCoordinatesTuple: CoordinatesTuple = [16.7666, -3.0026]

//enum
enum Direction{
    North = "N",
    South = "S",
    East = "E",
    West = "W"
}

type CoordinatesEnum = {
    latitude: number,
    longitude: number,
    latDirection: Direction,
    longDirection: Direction
};

const timbuktuCoordinatesEnum: CoordinatesEnum = {
    latitude: 16.7666,
    longitude: 3.0026,
    latDirection: Direction.North,
    longDirection: Direction.West
};

//An object with lat and long properties
type CoordinatesObject = {
    lat: number,
    long: number
};

const timbuktuCoordinatesObject : CoordinatesObject = {
    lat:  16.7666,
    long: -3.0026
};

//interface

interface CoordinatesInterface {
    latitude: number,
    longitude: number
}

const timbuktuCoordinatesInterface: CoordinatesInterface = {
    latitude: 16.7666,
    longitude: -3.0026
}

//alias
type CoordinatesAlias = {
    latitude: number,
    longitude: number
}

const timbuktuCoordinatesAlias: CoordinatesAlias = {
    latitude: 16.7666,
    longitude: -3.0026,
}


// Part Two
// You're creating a project management application and constantly need to work with the days of the week. 
// Given this function, write a structure that will allow you to run the following function as is to determime whether the day is a weekday or weekend.
enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
 function myDay (scheduled: Days): void {
    scheduled <= 5 ? console.log("weekday") : console.log("weekend")
}

myDay(Days.Monday)
myDay(Days.Sunday)

// Part Three 
// You're building an application that pulls in country data as objects and then you work with this object repeatedly throughout your application. Create and type two country objects that include the name, capital, and population. Additionally, create a function that takes in a country as an argument. Try typing the objects explicitly, as well as typing them with an interface and an alias. Then pass them into the function.

//Step 1: Create and type two country objects that include the name, capital, and population. 
const country1: {name:string, capital:string, population:number} = {
    name: "Mexico",
    capital: "Mexico City",
    population: 122210000
};

const country2: {name:string, capital:string, population:number} = {
    name: "United States",
    capital: "Washington D.C.",
    population: 324200000
};

//Step 2: Create a function that takes in a country as an argument. Typing the objects explicitly
function countryInfo(country: {name: string, capital: string, population: number}) {
    console.log(`The country ${country.name} has the capital ${country.capital} and the population is ${country.population}`);
}
countryInfo(country1);
countryInfo(country2);

//Typing the objects with an interface
interface CountryInterface {
    name: string,
    capital: string,
    population: number
}

const countryInterface1: CountryInterface = {
    name: "Mexico",
    capital: "Mexico City",
    population: 122210000
};

const countryInterface2: CountryInterface = {
    name: "United States",
    capital: "Washington D.C.",
    population: 324200000
};

function countryInfoInterface(country: CountryInterface) {
    console.log(`The country ${country.name} has the capital ${country.capital} and the population is ${country.population}`);
}
countryInfoInterface(countryInterface1);
countryInfoInterface(countryInterface2);

//Typing the objects with as alias
type CountryAlias = {
    name: string,
    capital: string,
    population: number
}

const countryAlias1: CountryAlias = {
    name: "Mexico",
    capital: "Mexico City",
    population: 122210000
};

const countryAlias2: CountryAlias = {
    name: "United States",
    capital: "Washington D.C.",
    population: 324200000
};

function countryInfoAlias(country: CountryAlias) {
    console.log(`The country ${country.name} has the capital ${country.capital} and the population is ${country.population}`);
}
countryInfoAlias(countryAlias1);
countryInfoAlias(countryAlias2);

//Bonus: Write a TypeScript class for application users. Create a subclass for application Administrators. All users should be able to read content.

// Administrators should also be able to edit content.

// You can make the classes very general without full functionality. Then create at least one instance of an application user and an administrator.

class User { //general class
    constructor(public username: string) {} //constructor
    readContent(): void { //allows user to read content
        console.log(`User ${this.username} is reading content`);
    }
}


class Administrator extends User { //subclass - inherits from the class User
    constructor(username: string) { //constructor
        super(username); 
    }
    
    editContent(): void { //allows administrator to edit content
        console.log(`Administrator ${this.username} is editing content`);
    }
}

//create at least one instance of an application user and an administrator
const user = new User("John"); //create an instance of the class User
user.readContent(); 
const admin = new Administrator("Jane"); 
admin.readContent();
admin.editContent();