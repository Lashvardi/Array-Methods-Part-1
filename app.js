let englishFruits = [
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "pear",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "ugli fruit",
    "watermelon",
    "apple",
];

let numbersList = [1,500,1241,422,124,512,854,12,4,63]
let sortedNumbesrList = [1,500,1241,422,124,512,854,12,4,63]

let georgianFruits = [
    "ვაშლი",
    "ბანანი",
    "ალუბალი",
]

let allFruits = []



console.log(`ჩემს მასივში (Array)-ში არის ${ englishFruits.length} სიტყვა`);

console.log( englishFruits[5]);


// მასივების გაერთიანება!
// concat გააერთიანე
englishFruits = englishFruits.concat(georgianFruits);
console.log(englishFruits);
console.log("=================")
allFruits = englishFruits.concat(georgianFruits);
console.log(allFruits);


// ელემენტის ინდექსის გაგება
console.log(`ვაშლის ინდექსი არის ${allFruits.indexOf("ვაშლი")}`);





// შეიცავს თუ არა ჩვენი მასივი რაღაც ელემენტს!
console.log(allFruits.includes("ნესვი"));
console.log(allFruits.includes("ალუბალი"));


// ელემენტის წაშლა ბოლო ინდექსზე
allFruits.pop();

// ბოლო ინდექსზე დამატება
allFruits.push("საზამთრო");

allFruits.sort();
// მოატრიალებს ჩვენს მასივს
numbersList.reverse();
sortedNumbesrList.sort();

//პირველი ელემენტის წაშლა
allFruits.shift();

// პირველ ინდექსზე დამატება
allFruits.unshift("added From Massive")



let fruitsList = document.getElementById("fruits-list")
let numbersListHtml = document.getElementById("numbers-list")
let orderedListNumbers = document.getElementById("ordered-list")
// ყველა ელემენტთან მიმართება
allFruits.forEach((item) => {
    fruitsList.innerHTML += `<li>${item}</li>`
})

numbersList.forEach((num) =>{
    numbersListHtml.innerHTML += `<li>${num}</li>`
})

sortedNumbesrList.forEach((num) =>{
    orderedListNumbers.innerHTML += `<li>${num}</li>`
});

// for(let i =0; i < allFruits.length; i++){
//     fruitsList.innerHTML += `<li>${item}</li>`
// }


let number1 = 50;
let number2 = 5;
console.log("=========================MATH==========================");
console.log(`${number1} + ${number2} = ${number1 + number2}`);
console.log(`${number1} * ${number2} = ${number1 * number2}`);
console.log(`${number1} / ${number2} = ${number1 / number2}`);
console.log(`${number1} % ${number2} = ${number1 % number2}`);

console.log("=========================MATH==========================");
console.log(`${number1} += ${number2} = ${number1 += number2}`);
console.log(`${number1} / ${number2} = ${number1 / number2}`);
console.log(`${number1} -= ${number2} = ${number1 -= number2}`); // 50


console.log("=========================MATH==========================");
console.log(`${number1} < ${number2} = ${number1 < number2}`);
console.log(`${number1} > ${number2} = ${number1 > number2}`);
console.log(`${number1} <= ${number2} = ${number1 <= number2}`);
console.log(`${number1} >= ${number2} = ${number1 >= number2}`);
console.log("=========================MATH==========================");

let compareNumber = 50;
let compareString = "50";
console.log(`${compareNumber} == ${compareString} = ${compareNumber == compareString}`);
console.log(`${compareNumber} === ${compareString} = ${compareNumber === compareString}`);
console.log("=========================MATH==========================");

let myNumber = 50;
let myNumber2 = 75;
console.log(`${myNumber} != ${myNumber2} = ${myNumber != myNumber2}`);
console.log(`${myNumber} !== ${myNumber2} = ${myNumber !== myNumber2}`);
console.log("=========================MATH==========================");


// მათემატიკის ჩაშენებული ბიბლიოთეკა, რომელიც გვაძლევს
// საშუალებას ვემუშავოთ კომპლექსურ მათემატიკურ ფუნქციებს
console.log(Math.PI);
console.log(Math.E);
// ამრგვალებს მათემატიკური წესით
console.log(Math.round(4.5))
console.log(Math.round(4.4))


// ამრგვალებს უდაბლეს მთელ რიცხვთან
console.log(Math.floor(4.9))

// ამრგვალებს უდიდეს მთელ რიცხვთან
console.log(Math.ceil(4.1))

// ხარისხი
console.log(Math.pow(2,6))

// კვადრატული ფესვი
console.log(Math.sqrt(144))

// სინუსი
console.log(Math.sin(90))

// კოსინუსი
console.log(Math.cos(90))

// ტანგენსი
console.log(Math.tan(90))

// ნატურალური ლოგარითმი
console.log(Math.log(10))
// რიცხვის მოტრიალება
console.log(Math.abs(-100))

console.log(Math.random())

console.log(Math.round(Math.random() * 100))
console.log(Math.floor(Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 1000) + 1)


let wiseWordsArray = [
    `დედიკო მყავს სტუდენტი
    მამა - არქიტექტორი,
    ბებო - თვალის ექიმი,
    ბაბუა კი - ლექტორი.
    მიყვარს ბევრი ძილი და
    უფრო ბევრი თამაში.
    ჯერჯერობით ვერვინ მჯობს
    ტირილსა და ჭამაში.
    სახლი მიდგას ვერაზე,
    ნომერი აქვს წაშლილი,
    თუ დაგჭირდეთ, იკითხეთ:
    ლევან მაჭარაშვილი.`,
    `
    დღეს სულ მოწყენილი ვარ,
    ხასიათი წამიხდა,
    იცით, ჩემი თოჯინა
    ძლიერ ავად გამიხდა.
    ხმას არ იღებს სრულებით,
    არც საჭმელი არ უნდა,
    კუ ექიმთან გაიქცა,
    რა ვქნა, რომ არ დაბრუნდა?
    ყოველ წუთში ოთახში
    ნუ შემოხვალ, ბებია,
    მოერიდე ავადმყოფს,
    იქნებ გადამდებია.
    ღმერთო, ნეტავ საშიში
    არაფერი არ იყოს!
    აქ ნუ მოსწევ პაპიროსს,
    გარეთ გადი, მამიკო!
    `,
    `
    რა ყვავილს ვგავარ, თუ იცით?
    კარგად შემხედეთ, აბა...
    ცისფერი ქუდი მახურავს,
    მაცვია ლურჯი კაბა.
    ბაღში ვარ, ხელით მატარებს
    ჩვენი მებაღე ძია,
    თავზე პეპელა მაზის და
    იცით?
    მე ია მქვია.
    `
];

let quoteContainer = document.getElementById("quote-container");

let randomIndex = Math.floor(Math.random() * wiseWordsArray.length)
quoteContainer.innerHTML = wiseWordsArray[randomIndex];



let myAutoProducts = [
    {
        productName: "Mercedes Benz",
        productDescription: "მერსედეს ბენზინი",
        productState: "ახალი",
        productOwnerPhoneNumber: "555 55 55 55",
        productImage: "https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=24XB&client=byo&paint=P0300&fabric=FKUSW&sa=S01ED,S02TF,S0302,S03AT,S03MB,S0420,S0459,S04AT,S04NW,S05A4,S05AC,S05AS,S05DM,S06AC,S06AK,S0775,S07HW,S09T5&quality=70&bkgnd=transparent&resp=png&angle=60&w=10000&h=10000&x=0&y=0",
        productOwner: "გიორგი გიორგაძე",
        productCategories:[
            "მანქანა",
            "მერსედესი",
        ],
        productAlt: "Mercedes Benz"
    },
    {
        productName: "BWW",
        productDescription: "მერსედეს ბენზინი",
        productState: "ახალი",
        productOwnerPhoneNumber: "555 55 55 55",
        productImage: "https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=24XB&client=byo&paint=P0300&fabric=FKUSW&sa=S01ED,S02TF,S0302,S03AT,S03MB,S0420,S0459,S04AT,S04NW,S05A4,S05AC,S05AS,S05DM,S06AC,S06AK,S0775,S07HW,S09T5&quality=70&bkgnd=transparent&resp=png&angle=60&w=10000&h=10000&x=0&y=0",
        productOwner: "გიორგი გიორგაძე",
        productCategories:[
            "მანქანა",
            "მერსედესი",
        ],
        productAlt: "Mercedes Benz"
    },
    {
        productName: "Mercedes Benz",
        productDescription: "მერსედეს ბენზინი",
        productState: "ახალი",
        productOwnerPhoneNumber: "555 55 55 55",
        productImage: "https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=24XB&client=byo&paint=P0300&fabric=FKUSW&sa=S01ED,S02TF,S0302,S03AT,S03MB,S0420,S0459,S04AT,S04NW,S05A4,S05AC,S05AS,S05DM,S06AC,S06AK,S0775,S07HW,S09T5&quality=70&bkgnd=transparent&resp=png&angle=60&w=10000&h=10000&x=0&y=0",
        productOwner: "გიორგი გიორგაძე",
        productCategories:[
            "მანქანა",
            "მერსედესი",
        ],
        productAlt: "Mercedes Benz"
    },
]



let cardContainer = document.getElementById("card-container");

myAutoProducts.forEach((item) =>{
    cardContainer.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${item.productImage}" class="card-img-top" alt="${item.productAlt}">
  <div class="card-body">
    <h5 class="card-title">${item.productName}</h5>
    <p class="card-text">${item.productDescription}</p>
    <p class="card-text">${item.productCategories}</p>
    <a href="#" class="btn btn-primary">${item.productOwnerPhoneNumber}</a>
  </div>
</div>`
})

let tableContainer = document.getElementById("table-container");

myAutoProducts.forEach((item) =>{
    tableContainer.innerHTML += `

    <tr>
    <td>${item.productName}</td>
    <td>${item.productDescription}</td>
    <td>${item.productState}</td>
    <td>${item.productCategories}</td>
    <td>${item.productOwner}</td>
    </tr>
    `
});


