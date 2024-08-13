//object contains another object
const danzu = {
    owner: "dhanush gopi",
    since: 2022,
    solutions: {
        service: ["Brand Design", "UX Design", "Web Development"],
        price: [3500, 6500, 12000],
    },
    greet() {
        return `${this.owner} owns the DANZU since ${this.since} and service are ${this.solutions.service}`
    },
    get countOfService() {
        return `the length of the service is ${this.solutions.service.length}`
    }
}

console.log(danzu.greet());
console.log(danzu.solutions.service[2]);

//object mergeing with existing

const danzuAcademic = {
    ug: "B.Sc CS",
    pg: "MCA"
}

Object.assign(danzu, danzuAcademic);

console.log(danzu.pg);

//object cloning with existing

const dansu = Object.assign({}, danzu);

danzu.owner = "DhanushGopi"
dansu.owner = "DHANUSH GOPI"

console.log(danzu);
console.log(dansu);

// mereging the object using spread operatot (...)

const dhanush = { ...danzu, ...danzuAcademic }

console.log(dhanush)


// to delete an particular key in an object

delete danzu.since;

console.log(danzu)


// a function to return a object
function myfullname(fname, lname) {
    return {
        fname: fname,
        lname: lname,
    }
}

console.log(myfullname("dhanush", 'gopi'));

//a function to return a object but it's optimized by property utilizer
// if the key and pair has the same name then it can have only the key.
function myname(fname, lname) {
    return {
        fname,
        lname,
    }
}

console.log(myname("dhanush", 'gopi'));

// using an get accesor instead of an method
// get accesor to return the statements as the property.
console.log(danzu.countOfService)

// inserting an property in an object
danzu.solutions.product = ["Valluverse", "Bio-Data", "Happy&co", "Coffee and Cocoa"];
console.log(danzu.solutions);