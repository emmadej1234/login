/* object in javascript
object.property => it as a property associated with it
object.method => it as a method asociated with it
 */

const s = "Hello";
console.log(s.toUpperCase());
console.log(typeof s);

const s2= new String('hello');
console.log(typeof s2);

/* console.log(window);
window.alert(1); //since window is a absolute parent object there is basically in the dom or in the browser there is 
//basically nothing above window so anything with window you dont actually need to do window.

alert(1);

console.log(navigator.appVersion);//appversion which is a property is going to give you info about the system 
 */
//object literals

/* const book1 ={
    title :'book one',
    author:'john doe',
    year:'2013',
    getSummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book1.getSummary());

const book2 ={
    title :'book two',
    author:'john doe',
    year:'2016',
    getSummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book2.getSummary());

//if you want to see all the values of the object
console.log(Object.values(book2))
console.log(Object.keys(book2))

 */
//constructor
 /* function Book(title, author ,year){
    this.title = title;
    this.author = author;
    this.year = year; */

/* this.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}; */


/* function Age(james,john,mike){
    this.james= james;
    this.john= john;
    this.mike= mike;



 this.getJames = function(num){
        getyear = 2021 - `${james}` +num;
 
        const promise = new Promise((resolve,reject)=>{
             if (getyear = 4072){
                 resolve("correct");
             }else{
                 reject("rejected the promise");
             }
             
         });
      

         promise
         .then(value => {
             return correct;
         })
         .catch(err=>{
             console.error(err);
         })
        
        };



this.getJohn = function(){
    getyear = 2021 - `${john}`;
     return `james is given birth to in year ${getyear} `;
};


this.getMike = function(){
    getyear = 2021 - `${mike}`;
     return `james is given birth to in year ${getyear} `;
};
}
const age = new Age(26,30,40);
console.log(age.getJames(2077));
console.log(age.getJohn());
console.log(age.getMike());




 */


//initialize an object
/* const book1 = new Book('book one', 'john Doe','2013');
const book2 = new Book('Book Two', 'jane Doe', '2013');
 */
/* console.log(book1.getSummary());
console.log(book2.getSummary()); */






//prototypes

/* function Book(title, author ,year){
    this.title = title;
    this.author = author;
    this.year = year;



}
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

Book.prototype.getAge= function(){
    const years 
    = new Date().getFullYear()- this.year;
    return `${this.title} is ${years} years old`;
};
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
};

//initialize an object
const book1 = new Book('book one', 'john Doe','2013');
const book2 = new Book('Book Two', 'jane Doe', '2013');



console.log(book2.getAge());
book2.revise('2018');
console.log(book2);



//inheritance
function Book(title, author ,year){
    this.title = title;
    this.author = author;
    this.year = year;



}
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};


//magazine constructor
function magazine(title, author, year, month){
    Book.call(this, title,author,year)
    this.month=month;
}


//instantiate magazine object
const mag1 = new magazine('mag One', 'john Doe','2018','jan');

//inherit prototype 
console.log(mag1); */