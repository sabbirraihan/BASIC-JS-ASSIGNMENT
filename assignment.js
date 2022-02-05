
// PROBLEM-1: ana to vori

function anaToVori(anas) {

    if (anas <= 0) {
        return "Please add a positive valu"
    }

    else {

        var vori = anas / 16;
        return vori;

    }
}

var totalAna = 160;
var vori = anaToVori(totalAna);
console.log(vori);



// PROBLEM-2:panda cost

function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {

    const perSingara = 7;
    const perSomucha = 10;
    const perJilapi = 15;

    const singaraCost = singaraQuantity * perSingara;
    const somuchaCost = somuchaQuantity * perSomucha;
    const jilapiCost = jilapiQuantity * perJilapi;

    const totalCost = singaraCost + somuchaCost + jilapiCost;
    return totalCost;
}

const snackBill = pandaCost(3, 4, 2)
console.log(snackBill);



// PROBLEM-3:picnic budget

function picnicBudget(persons) {

    if (persons <= 0) {
        return "Please inter a positive valu"
    }

    const perPerson1To100 = 5000;
    const perPerson101TO200 = 4000;
    const perPerson201ToUnlimited = 3000;

    if (persons <= 100) {
        const totalMoney = persons * perPerson1To100;
        return totalMoney;
    }

    else if (persons <= 200) {
        const first1To100PersonsTotal = 100 * perPerson1To100;
        const restPersons = persons - 100;
        const second101To200PersonsTotal = restPersons * perPerson101TO200;
        const totalMoney = first1To100PersonsTotal + second101To200PersonsTotal;
        return totalMoney;

    }

    else {
        const first1To100PersonsTotal = 100 * perPerson1To100;
        const second101To200PersonsTotal = 100 * perPerson101TO200;
        const restPersons = persons - 200;
        const thard201ToUnlimitedPersonsTotal = restPersons * perPerson201ToUnlimited;
        const totalMoney = first1To100PersonsTotal + second101To200PersonsTotal + thard201ToUnlimitedPersonsTotal;
        return totalMoney;
    }
}

const money = picnicBudget(250);
console.log(money);



// PROBLEM-4:odd friend name

function oddFriend(friends) {

    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length % 2 == 1) {
            return friends[i];
        }
    }
}

const friends = ['Sabbir', 'Tamima', 'Raihan', 'Nahid', 'Abir'];
const oddFriendName = oddFriend(friends);
console.log(oddFriendName);