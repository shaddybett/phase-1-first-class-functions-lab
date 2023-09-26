// Code your solution in this file!
function returnFirstTwoDrivers(arr){
    return arr.slice(0,2);
}
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers); //output: ["Antonia", "Nuru"]

function returnLastTwoDrivers(arr){
    return arr.slice(-2);
}
const lastTwoDrivers = returnLastTwoDrivers(drivers);
console.log(lastTwoDrivers); //output: ["Amari", "Mo"]

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
}
constFareMultiplier = createFareMultiplier(2);
function fareDoubler(fare) {
    return fare *2;
}
const fare = 10;
const doubleFare = fareDoubler(originalFare);

function fareTripler(fare){
    return fare *3
}
const originalFare = 12;
const tripledFare = fareTripler(originalFare)
function returnFirstTwoDrivers(arr){
    return arr.slice(0,2);
}

function selectDifferentDrivers(arrayOfDrivers,func) {
    return func(arrayOfDrivers);
}
