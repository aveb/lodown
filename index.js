'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection.
 * 
 * @return {Any datatype}: return depends on action passed into each function.
 * 
 * Usage:
 *  
 *   each(["a","b","c"], function(e,i,a){ console.log(e)});
 *     // -> logs "a" "b" "c" to the console
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/** 
* typeOf: designed to return datatype of given input as a string.
*   
* @param {Any datatype} value: The value to check data type.
* 
* @return {string}: A string describing datatype of value.
* 
* Usage:
*
*   typeOf(null) // -> "null"
*   typeOf("My name is Avery")  // -> "string"
*   typeOf([]) // -> "array"
*/
function typeOf(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    if (value instanceof Date) return 'date';
    return typeof value;
}

module.exports.typeOf = typeOf;

/** 
* first: designed to take an array and a number.  Returns an array of <number>
* elements, starting from the beginning of the inputted array.  Returns an
* empty array if input array isn't an array or if input number is negative.  If
* number is larger than the length of the input array, the return array will
* match the input array.
* 
* @param {Array} array: an array to modify.
* @param {number} number: a number to represent the number of elements from
* input array returned by the first function.
* 
* @return {Array}: an array with <number> elements, starting from beginning of
* array argument.
* 
* Usage
* 
*   first(false, 1) // -> []
*   first(["a", "b", "c"], null) // -> "a"
*   first(["a", "b", "c"], 1) // -> "a"
*   first(["a", "b", "c"], 2) // -> ["a", "b"]
*/
function first(array, number){
    if(!Array.isArray(array) || number < 0) return [];
    if(typeof number !== 'number' || number === 1) return array[0];
    if(number >= array.length) return array;
    return array.slice(0,number);
}
module.exports.first = first;

/**
* last: designed to take an array and a number and return an array with <number>
* elements.  Return array will be from the end of the input array.  Returns 
* empty array if input array is not an array or if input number is negative.
* Number argument greater than or equal to length of input array will return 
* same input array.
* 
* @param {Array} array: an array to modify.
* @param {number} number: a number to represent the number of elements from
* input array returned by the last function.
* 
* @return {Array}: an array with <number> elements taken from the beginning
* of the input array.
* 
* Usage:
*   last(true, 2) -> []
*   last(["a", "b", "c"], "a") // -> "c"
*   last(["a", "b", "c"], 1) // -> "c"
*   last(["a", "b", "c"], 2) // -> ["b", "c"]
*/
function last(array, number){
    if(!Array.isArray(array) || number < 0) return [];
    if(typeof number !== 'number' || number === 1) return array[array.length-1];
    if(number >= array.length) return array;
    return array.slice(-number);
}

module.exports.last = last;


/**
* indexOf: Takes an array and value.  returns index of value if found in the
* array.  Returns the first instance of value!  If value doesn't exist in array,
* returns -1.
* 
* @param {Array} array: an array to look for value in.
* 
* @param {Any datatype} value: target to attempt to find in input array.
*
* @return {number}: returns index of value if found in array argument. returns
* -1 if value not found.
* 
* Usage
*   indexOf(["a","b","c"], "c") // -> 2
*   indexOf(["a","b","c"], "d") // -> -1
*/
function indexOf(array, value){
    if(!Array.isArray(array)) return -1;
    for(let i = 0; i < array.length; i++){
        if(array[i] === value) return i;
    }
    return -1;
}

module.exports.indexOf = indexOf;

/**
* contains: Takes an array and a value, returns true if value is element in the
* array and false if it is not.
* 
* @param {Array} array: an array to search for value
* @param {Any datatype} value: value of any datatype to search for in input
* array.
* 
* @return {boolean}: returns true if 
* 
* Usage:
* 
*   contains([1,"two", 3.14], "two") // -> true
*   contains([1,"two", 3.14], 5) // -> false
*/

function contains(array, value){
    return(indexOf(array,value) !== -1 ? true : false);
}

module.exports.contains = contains;

/** 
* unique: takes an array and returns a new array with no duplicate elements.
* 
* @param {Array} array: an array from which all duplicates with be removed.
* 
* @return {Array}: returns array with all unique elements from array argument
* occurring once each.
* 
* Usage:
* 
*   unique([1,2,2,4,5,6,5,2]) // -> [1,2,4,5,6]
*/

function unique(array){
    let result = [];
    for(let element of array){
        if(indexOf(result, element) === -1) result.push(element);
    }
    return result;
}

module.exports.unique = unique;


/**
* filter: takes an array and a function and calls function for each element in
* the array.  Filter then returns an array of elements for which calling function
* argument returned true.
* 
* @param {Array} array: an array to be tested
* @param {Function} func: a function that returns true or false based on
* custom conditions unique to type of test desired.
* 
* @return {Array} array: returns an array for which all elements return true if
* passed into function argument as a parameter.
* 
* Usage:
* 
*   filter([1,2,3,4,5], function(x){return x%2 === 0}) // -> [2,4]
*/

function filter(array, func){
    let trueArray = [];
    each(array, function(e, i, c) {
        if(func(e, i, c) === true) trueArray.push(e);
    })
    return trueArray;
}

module.exports.filter = filter;

/** 
* reject: takes an array and a function, calling the function for each element
* in the array.  Returns an array of elements for which calling the function 
* argument returns false.
* 
* @param {Array} array: an array to be tested
* @param {Function} func: a function that returns true or false based on
* custom conditions unique to type of test desired.
* 
* @return {Array} array: returns an array for which all elements return false if
* passed into function argument as a parameter.
* 
* Usage:
* 
*   reject([1,2,3,4,5], function(e){return e%2 === 0}) // -> [1,3,5]
*/

function reject(array, func){
    const trueArray = filter(array, func);
    let falseArray = [];
    for(let item of array){
        if(!contains(trueArray, item)) falseArray.push(item);
    }
    return falseArray;
}

module.exports.reject = reject;

/** 
* partition: takes an array and function, calling function with each element of
* array.  Returns an array with two sub-arrays, one with all elements that
* returned true and one with all elements that returned false when called as an
* argument with the function.
* 
* @param {Array} array: an array to be filtered
* @param {Function} func: a function that returns true or false based on
* custom conditions unique to type of test desired.
* 
* @return {Array}: returns an array with two sub-arrays.  First contains elements
* that return true when called with function argument, and the second contains
* elements that return false when called in function.
* 
* Usage:
* 
*   partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); // -> [[2,4],[1,3,5]]
* }
*/

function partition(array, func){
    let truthy = [];
    let falsy = [];
    for(let i = 0; i < array.length; i++){
        (func(array[i], i, array)) ? truthy.push(array[i]) : falsy.push(array[i]);
    }
    return [truthy, falsy] ;
}

module.exports.partition = partition;


/** 
* map: takes a collection (array or object) and calls a funtion for each element
* or value in the collection.  Saves result of callback to an array and returns
* results array after all elements or values have been passed into callback
* function
* 
* @param {Array or Object} collection: an array or object over which to iterate.
* @param {Function} func: a function that will be called for each element or 
* value in collection parameter.
* 
* @result {Array}: returns an array with all results from calling function 
* argument with each element or value.
* 
* Usage:
* 
*   map([1,2,3,4], function(e){return e * 2}) // -> [2,4,6,8]
*/
function map(collection,func){
    let result = [];
    each(collection, function(e,i,c){
        result.push(func(e,i,c));
    })
    return result;
}

module.exports.map = map;

/**
* pluck: takes an array of objects and a property (a string), and
* returns an array containing the value of given property for each object in 
* array argument.
* 
* @param {Array} array: each element of this array should be an object.
* @param {String} property: the property to look for in each object in array
* argument.
* 
* @return {Array}: returns array of elements representing all values found in
* array parameter that have the given property.
* 
* Usage:
* 
*   pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
function pluck(array, property) {
    return map(array, function(e){
        if(e[property]) return e[property];
    })
}

module.exports.pluck = pluck;

/** 
* every: takes a collection (array or object) and a function, and calls the 
* function for each element or value.  If every return value is true, true is
* returned otherwise false is returned
* 
* @param {Array or Object} collection: array or object to be iterated over.
* @param {Function} func: function to call for each element or value in 
* collection parameter.
* 
* @result {Boolean}: returns true if result of function parameter call for
* each element/value returns true, else returns false.
* 
* Usage:
* 
*   every([2,4,6], function(e){return e % 2 === 0}) // -> true
*   every([1,2,3], function(e){return e % 2 === 0}) // -> false
*/

function every(collection, func){
    if(typeof func !== 'function' ){
        if(contains(collection, false)) return false;
        return true;
    }
    let results = [];
    each(collection, function(e,i,c) {
        results.push(func(e,i,c));
    })
    if(contains(results, false)) return false;
    return true;
}

module.exports.every = every;

/** 
* some: takes a collection (array or object) and a function.  Calls function for
* each element/value in collection and returns true if at least one function call
* returns true.  Else returns false.
* 
* @param {Array or Object} collection: array or object to be iterated over.
* @param {Function} func: function to call for each element or value in 
* collection parameter.
* 
* @result {Boolean}: returns true if result of function parameter call for
* at least one element/value returns true, else returns false.
* 
* Usage:
*   some([1,3,5], function(e){return e % 2 === 0}) // -> false
*   some([1,2,3], function(e){return e % 2 === 0}) // -> true
*/
function some(collection, func){
    if(typeof func !== 'function' ){
        if(contains(collection, true)) return true;
        return false;
    }
    let results = [];
    each(collection, function(e,i,c) {
        results.push(func(e,i,c));
    })
    if(contains(results, true)) return true;
    return false;
}

module.exports.some = some;

/**
* reduce: takes an array, function and seed.  Calls function for each element in
* array with 3 arguments: result of previous function call, current element, and
* index of element.  Ultimately returns result of last function call as a single
* value.
* 
* @param {Array} array: an array to iterate over.
* @param {function} Function: has parameters 
* (previousValue, currentValue, currentIndex) and performs an action currentValue.
* @param {Number} seed: will be the previousValue for the first call of the 
* function parameter.  If omitted, will default to 0.
* 
* @return {Number}: returns a single value resulting from the function call of 
* the last element in the array parameter.
* 
* Usage
*   reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
function reduce(array, func, seed){
    let results = [];
    if(typeOf(seed) !== 'number'){
        var previous = array[0];
        var i = 1;
    } else {
        var previous = seed;
        var i = 0;
    }
    for (i; i < array.length; i++){
      let current = array[i];
      let result = func(previous, current, i)
      results.push(result);
      previous = result;
    }
    return results[results.length-1];
}

module.exports.reduce = reduce;

/** 
* extend: takes a first object and then addition objects and returns first
* object with all properties from addition objects copied in.
* 
* @param {Object} obj: object to store all of the properties from addition object
* parameters
* @params {Objects} ...args: Undetermined number of objects to copy properties
* from.
* 
* @return {Object}: returns object with properties of all objects.
* 
* Usage:
*   var data = {a:"one"};
*   extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

function extend (obj, ...args) {
    for (let object of args) {
        for (let property in object) {
            obj[property] = object[property];
        }
    }
    return obj
}

module.exports.extend = extend;