let billionaire1 = Number(prompt("ENTER #1 BILLIONAIRE NETWORTH IN USD 💰"));
let billionaire2 = Number(prompt("ENTER #2 BILLIONAIRE NETWORTH IN USD 💰"));
let billionaire3 = Number(prompt("ENTER #3 BILLIONAIRE NETWORTH IN USD 💰"));
let billionaire4 = Number(prompt("ENTER #4 BILLIONAIRE NETWORTH IN USD 💰"));
let billionaire5 = Number(prompt("ENTER #5 BILLIONAIRE NETWORTH IN USD 💰"));
let billionaire6 = Number(prompt("ENTER #6 BILLIONAIRE NETWORTH IN USD 💰"));
let billionaire7 = Number(prompt("ENTER #7 BILLIONAIRE NETWORTH IN USD 💰"));
let billionaire8 = Number(prompt("ENTER #8 BILLIONAIRE NETWORTH IN USD 💰"));
let billionaire9 = Number(prompt("ENTER #9 BILLIONAIRE NETWORTH IN USD 💰"));
let billionaire10 = Number(prompt("ENTER #10 BILLIONAIRE NETWORTH IN USD 💰"));

let totalNetworthInDollar = (billionaire1 + billionaire2 + billionaire3 + billionaire4 + billionaire5 + billionaire6 + billionaire7 + billionaire8 + billionaire9 + billionaire10);
alert(`TOTAL NETWORTH IN USD 💰
${totalNetworthInDollar} 💲`);

let dollarToNaira = Number(prompt("VALUE OF USD💲 IN NAIRA"));
let totalNetworthInNaira = (totalNetworthInDollar * dollarToNaira);
alert(`TOTAL NETWORTH IN NAIRA 💵
${totalNetworthInNaira} #`);

let totalPopulationAbove18 = Number(prompt("TOTAL POPULATION ABOVE 18 🧑‍🤝‍🧑"));
let sharePerPersonAbove18InUsd = (totalNetworthInDollar / totalPopulationAbove18);
alert(`SHARE PER PERSON ABOVE 18 IN USD 💰
${sharePerPersonAbove18InUsd}💲`);

let sharePerPersonAbove18InNaira = (totalNetworthInNaira / totalPopulationAbove18);
alert(`SHARE PER PERSON ABOVE 18 IN NAIRA 💵
${sharePerPersonAbove18InNaira} #`);