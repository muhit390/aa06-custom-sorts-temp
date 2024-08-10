function ageSort(users) {
    // Your code here
    users.sort((a, b) => a.age - b.age);

    let sortedFirstNames = users.map(user => user.firstName);

    return sortedFirstNames;

}

function oddEvenSort(arr) {
    // Your code here
    let odd = [];
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i])
        }
    }
    odd.sort((a, b) => a - b);
    even.sort((a, b) => a - b);


    return [...odd, ...even];

}

function validAnagrams(s, t) {
    // Your code here

    if (s.length !== t.length) return false;

    let count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
}

function reverseBaseSort(arr) {

    return arr.sort((a, b) => {
        let lenA = a.toString().length;
        let lenB = b.toString().length;

        if (lenA === lenB) {
            return a - b; // ascending order within the same base length
        }

        return lenB - lenA; // descending order of base lengths
    });

}

function frequencySort(arr) {
    // Your code here
}

// const users = [{
//         id: 1,
//         firstName: 'John',
//         lastName: 'Doe',
//         age: 30,
//         occupation: 'Software Engineer',
//         friends: [2, 3, 4]
//     },
//     {
//         id: 2,
//         firstName: 'Jane',
//         lastName: 'Doe',
//         age: 25,
//         occupation: 'Data Scientist',
//         friends: [1, 4]
//     },
//     {
//         id: 3,
//         firstName: 'Mary',
//         lastName: 'Smith',
//         age: 32,
//         occupation: 'UX Designer',
//         friends: [2, 4]
//     },
//     {
//         id: 4,
//         firstName: 'James',
//         lastName: 'Johnson',
//         age: 55,
//         occupation: 'CTO',
//         friends: [1, 2, 3]
//     }
// ];

// console.log(ageSort(users));


const arr1 = [5, 4, 7, 2, 9, 8, 1, 6, 3];
const arr2 = [5, 8, 13, 6, 22, 14, 9];

console.log(oddEvenSort(arr1)); // => [1, 3, 5, 7, 9, 2, 4, 6, 8]
console.log(oddEvenSort(arr2)); // => [5, 9, 13, 6, 8, 14, 22]

module.exports = [
    oddEvenSort,
    validAnagrams,
    reverseBaseSort,
    frequencySort,
    ageSort,
];