// 22 October tasks;

// Task 1 Start;

// 1) 2 ededi tipində məlumatı parametr olaraq qəbul edib ededlərin hasilini return edən funksiya yazın;
/*let test = hasil(3, 5);

function hasil(a, b) {
    return a * b
}

console.log(test);*/

// Task 1 End;

// Task 2 Start;

// 2) 1 eded parametr qəbul edib daxil edilən dəyərin 1 artığını return elətdirən funksiya yazın;

/*let num = parm(5);

function parm(c) {
    return ++c
}

console.log(num);*/

// Task 2 End;

// Task 3 Start;

// 3) Daxil edilən 5 parametri array formasında return edən funksiya yazın;

/* let array = param(["Salam", "Bb", "JS", "C#", "PHP"]);

function param(param) {
    return param
}

console.log(array);*/

// Task 3 End;

// Task 4 Start;

/* 
   Verilən nums=[1,2,3,6,7,8,23,78,34,12];
   1) Ədədlərin cəmini tapan metod yazın;
   2) Ədədlərin böyükdən kiçiyə doğru sıralayın;
   3) Ədədlər arasında rəqəmlərinin cəmi ən böyük olan ədədi tapın;
*/

// 1st

let nums = [1, 2, 3, 6, 7, 8, 23, 78, 34, 12];

let sum = 0;

for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}

console.log(sum);

// 2st

let number = [1, 2, 3, 6, 7, 8, 23, 78, 34, 12];

number.sort(function(a, b) {
    return b - a;
})
console.log(number)