// Code your solution in this file!
const returnFirstTwoDrivers = function (driversArray){
    return driversArray.slice(0,2);
};

const returnLastTwoDrivers = function (driversArray){
    return driversArray.slice(2,4);
};

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];
const firstTwoDrivers = selectingDrivers[0](driversArray);
const lastTwoDrivers = selectingDrivers[selectingDrivers.length - 1](driversArray);

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

function fareDoubler(){
    const fareDoubler = createFareMultiplier(2);
    const fare = 10;
    const doubledFare = fareDoubler(fare);
    return doubledFare;
}

function fareTripler(){
    const fareTripler = createFareMultiplier(3);
    const fare = 12;
    const tripledFare = fareTripler(fare);
    return tripledFare;
}

function selectDifferentDrivers(arrayOfDrivers, selectFunction) {
    if (selectFunction === returnFirstTwoDrivers) {
      return arrayOfDrivers.slice(0, 2);
    } else if (selectFunction === returnLastTwoDrivers) {
      return arrayOfDrivers.slice(-2);
    }
  }