// * მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 1. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
//  * 1) კომენტარები
//  * 2) ცვლადები
//  * 3) მონაცემთა ტიპები
//  * 4) ოპერატორები და არითმეტიკა




// 1 კომენტარები


// კომენტარები გაფუჭდა თქვენი დავალებაა
// არასწორად დაწერილი კომენტარი ჩაასწოროთ
// და ასევე გამოიყენოთ თქვენი კოდის აღსაწერად






// 2 ცვლადები


// მსურს ჩემი Spotify ლისტის განახლება
// ამაში კი თქვენი დახმარება მჭირდება
// აღწერეთ თქვენი საყვარელი მომღერლის
// (სახელი, გვარი, ასაკი, დაბადების წელი, დაბადების ადგილი,)
// გაითვალისწინეთ რომ ამისთვის უნდა
// გამოიყენოთ მხოლოდ (const, let)
// (ნებისმიერი პიროვნების ჩაწერა შეგიძლიათ)

// >>>> კოდი დაწერეთ აქ


let varname = 'Klaus Meine';
let number = 40;
const birtdate = 1960;
const birtadress = 'America';


console.log(varname);
console.log(number);
console.log(birtdate);
console.log(birtadress);




//


// დროა დავიწყოთ მზადება ჩვენს მომავალ პროექტზე.
// ჩვენი დავალეებაა მოვიფიქროთ რაიმე პროდუქტთა სია
// რომელსაც გამოვიყენებთ მომავალში.

//   წიგნების მაღაზიის მაგალითი:

// const BookName = "ვეფხისტყაოსანი";
// const AuthrName = "შოთა რუსთაველი";
// const CreateDate = "13 საუკუნე";
// let ProductQuant = 124;
// * /

// / / >>>> კოდი დაწერეთ აქ


const water = "ბორჯომი";
const adress = " სამცხეჯავახეთი";
const CreateDate = "21-ე საუკუნე";
let ProductQuant = 89388;


console.log(water);
console.log(adress);
console.log(CreateDate);
console.log(ProductQuant);

//



// 3 მონაცემთა ტიპები

// აქ რაღაც შეცდომაა თქვენი დავალებაა ცვლადის გამოცხადების
// დროს გაასწოროთ შეცდომა;




const age = 1;
const hisName = 'bob';
const isHigh = true;
const dateOfBirth = 1995;




// ეს კოდი ამოწმებს თქვენ მიერ მითითებულ ტიპებს

// თქვენი მიზანია დააბრუნოთ პირველი 4 frue

console.log(typeof age === 'number');
console.log(typeof hisName === "string");
console.log(typeof isHigh === "boolean");
console.log(typeof dateOfBirth === "number")



// / აქ უნდა გაიგოთ თქვენი პროდუქტის სიის ტიპი

// მაგ: console.log(typeof age)

console.log(typeof hisName);
console.log(typeof dateOfBirth);



// ოპერატორები არითმეტიკა

// let num = 5;

// გამოიყენეთ ყველა ვარიანტი რომლითაც შეგვიძლია ამ ციფრის გაზრდა

// >>> კოდი დაწერეთ აქ
let num = 5;
let num2 = 6;

//

// console.log(num)




console.log(5 * 6);
console.log(5 + 6);

console.log(5 ** 6);

console.log(5 * (6 * 5));


// სცადეთ შეკრიბოთ განსხვავებული ტიპის მქონე
// მნიშვნელობები და გაიგოთ შეკრებილი მონაცემების ტიპი

// >>> კოდი დაწერეთ აქ

console.log(num);
console.log(num2);

console.log(num + num2);
console.log(num * num2);
console.log(num ** num2);
console.log(num + (num * num2));
//