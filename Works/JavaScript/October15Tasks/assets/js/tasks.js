// 15 October tasks;

// Task 1;

// Verilən 4 rəqəmli ədədin rəqəmlərinin cəmini tapan proqram yazın (Nümunə : let a=1298 Nəticə : 1+2+9+8=20)

/*let number = "1234";
let answer = 0;
for (let i = 0; i < number.length; i++) {
    // ...
}*/

/*let b = "222";
let sum = 0;
while (b) {
    sum += b % 10;
    b = Math.floor(b / 10);
}
console.log(sum);*/

// Task 2;

// Verilən ədədin rəqəmləri arasında olan tək rəqəmləri ekranda göstərən proqram yazın (Nümunə : let a=1298 Nəticə : 1,9)

/*let number = "1298";
for (let i = 0; i < number.length; i += 2) {
    console.log(number[i]);
}*/

// Task 3;

// Prompt metodundan istifadə ederək istifadəçinin adını daxil etməsini istəyin. Daxil edilən adı 10 dəfə ekrana yazdıran proqram yazın

/*function box() {
    let admin;
    admin = prompt("Zehmet olmasa adiniz daxil edesiz");
    for (let i = 0; i <= 10; i++) {
        document.write(admin + " " + i + "<br>");
        console.log(admin);
    }
}
box();*/

/*let admin;
admin = prompt("Zehmet olmasa adiniz daxil edesiz");
for (let i = 0; i < 10; i++) {
    // document.write(admin + " " + i + "<br>");
    console.log(admin);
}*/


// Task 4;

/* Prompt metodu vasitəsi ilə istifadəçinin yaşını daxil etməsini istəyin. */

/* İstifadəçinin yaşı 30-dan kiçikdirsə istifadəçinin yaşının kvadratını ekrana çap edin */

/*function test() {
    let age;
    age = prompt("Zehmet olmasa yashinizi daxil edesiz");
    if (age <= 30) {
        alert(age);
    }
}
test();*/

// Task 5;

/* Yaş 0-dan kiçik vəya 100-dən böyükdürsə ekrana "Düzgün məlumat daxil etməmisiniz" yazdırın */

/*function test() {
    let age;
    age = prompt("Zehmet olmasa yashinizi daxil edesiz");
    if (age < 0 || age > 100) {
        alert("Düzgün məlumat daxil etməmisiniz");
    }
}
// test();*/