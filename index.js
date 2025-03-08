// Returns the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Returns the last two drivers from an array
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// An array that contains the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Returns a function that multiplies a fare by a given number
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// Uses createFareMultiplier to double fares
const fareDoubler = createFareMultiplier(2);

// Uses createFareMultiplier to triple fares
const fareTripler = createFareMultiplier(3);

// Allows selecting different drivers using a function argument
const selectDifferentDrivers = function(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers);
};
