////////////// Primitives
// let name : string = "Admin"
// //name = name.toFixed(2)
// console.log(name.toLocaleLowerCase())

// let n1 : number = 10;
// let n2: number = n1 + 10;
// console.log(`The result is : ${n2}`);

// let bool1 : boolean = false;

// bool1? console.log("true"): console.log("false");
 

// const books = ['1984', 'Brave New World', 'Fahrenheit 451'];


// let book: string | undefined = '1984';

// let isInList: boolean =  books.some(b => b===book)
// if(isInList)
//     book.toUpperCase()
// console.log(book?.length);

////////////// Union
// let orderStatus :'processing' | 'shipped' | 'delivereded' = 'processing';

// orderStatus = "shipped";
// console.log(orderStatus);

// let discount: number |string = 20
// discount = '20%'

////////////// Arrays
// let  temperatures : (number|string) []= [10,22,24]

// temperatures.push('or')
// console.table(temperatures)


////////////// Object
// type bike = {
//     brand: string, year: number
// } 
// let bike1 : bike ={
//     brand: 'Giant',
//     year: 2010
//     //bike.year = '2020'
// }

////////////// Functions

//const names : string[] = ["A", "B", "C", "D"];
    /*
    function isNameInList(name: string): boolean {
    return names.includes(name);
    } 
    */
    // let isInList : boolean = false;
    // isInList = names.some(name => name==="A")

//const isInList = (name : string) : boolean => names.indexOf(name) !== -1;
//console.log(isInList("F"));

// const sum = (message: string, ...numbers: number[]) : string => {

//     const doubled = numbers.map(n => n*2);
//     const total = doubled.reduce((prev, current) => prev + current,0);
//     return `${message}: ${total}`

// }

// console.log(
//  sum("The sum of the doubled of the numbers is", 10,20,2,56))

// const processInput  = (input: string| number) => {
//     console.log(typeof input === "number"?  input*2: input.toUpperCase())
// }

// processInput("Amine");
// processInput(16.8);

const processData  = (input: string | number, config : {reverse: boolean}) => {

    if(typeof(input) === "number"){
        return input*input
    }

    if(typeof(input) === "string" && config.reverse){
        let inputReverse: string[]= [];
        for(let i = input.length - 1; i >= 0; i--){
            inputReverse.push(input[i])

        }
        return   
    }
    if(typeof input === "string") 
        return input.toUpperCase()
    
}
