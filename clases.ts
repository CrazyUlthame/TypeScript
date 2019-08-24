class Person{
    private name: string;
    protected age:number;
    protected constructor(theName: string, theAge: number){
        this.name= theName;
        this.age = theAge;
    }
    introduceSelf(){
        console.log("Hi, i am " + this.name + "!");
    }
}

class Friend extends Person{
    yearsKnown: number;
    constructor(name: string,age: number, yearsKnown: number){
        super(name, age);
        this.yearsKnown = yearsKnown;
    }
    timeKnown(){
        console.log("We have been friends for " + this.yearsKnown + " years")
    }
    friendSince(){
        let firstAge = this.age - this.yearsKnown;
        console.log(`We have been friends since I was ${firstAge} years old`)
    }
}

let personA = new Friend("Sally", 18, 8);

personA.friendSince();



