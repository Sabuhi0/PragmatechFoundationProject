// User tərəfindən daxil 2 ədədin 30-70 arasında olmasını yoxlamaq. Rəqəmlərin hər ikisinin, yalnız birinin və ya heç birinin aralıqda olub-olmaması şərtlərini yoxlamaq və uyğun mesajı çıxarmaq.

function user() {
    let frist = prompt("1-100 arasinda olan eded daxil edin");
    let second = prompt("1-100 arasinda olan eded daxil edin");

    if (frist >= 30 && frist <= 70 && second >= 30 && second <= 70) {
        alert(frist + " " + second + " her ikisi uygundur")
    } else if (frist >= 30 && frist <= 70) {
        alert("Yalniz " + frist + " uygundur")
    } else if (second >= 30 && second <= 70) {
        alert("Yalniz " + second + " uygundur")
    } else {
        alert("Reqemler hek biri uygun deyil")
    }
}

user();