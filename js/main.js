

//B1

function yesterday() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var n;
    if (day <= 0) {
        n = "Không xác định được";
    }
    else {
        switch (month) {
            case 1:
                if (day > 31) {
                    n = "Không xác định được";
                }
                else if (day == 1) {
                    n = 31 + "/" + 12 + "/" + --year;
                }
                else {
                    n = --day + "/" + month + "/" + year;
                }
                break
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                if (day > 30) {
                    n = "Không xác định được";
                }
                else if (day == 1) {
                    n = 30 + "/" + --month + "/" + year;
                }
                else {
                    n = --day + "/" + month + "/" + year;
                }
                break;

            case 2:
            case 4:
            case 6:
            case 9:
            case 11:
                if (day > 31) {
                    n = "Không xác định được";
                }
                else if (day == 1) {
                    n = 31 + "/" + --month + "/" + year;
                }
                else {
                    n = --day + "/" + month + "/" + year;
                }
                break
            case 3:
                if (day > 28) {
                    n = "Không xác định được";
                }
                else if (day == 1) {
                    n = 28 + "/" + --month + "/" + year;
                }
                else {
                    n = --day + "/" + month + "/" + year;
                }

                break
            default:
                n = "Ko xác định được";
                break;
        }
    }
    document.getElementById("textb1").innerHTML = n;
}
document.getElementById("add").onclick = yesterday;

function tomorrowDays() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var n;
    if (day <= 0) {
        n = "Không xác định được";
    }
    else {
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
                if (day > 31) {
                    n = "ko xác định được";
                    console.log("a")
                }
                else if (day == 31) {
                    n = 1 + "/" + ++month + "/" + year;
                    console.log("b")
                }
                else {
                    n = ++day + "/" + month + "/" + year;
                    console.log("c")
                }
                console.log(4)
                break

            case 2:
                if (day >= 29) {
                    n = "ko xác định được";
                }
                else if (day == 28) {
                    n = 1 + "/" + ++month + "/" + year;
                }
                else {
                    n = ++day + "/" + month + "/" + year;
                }
                console.log(3)
                break
            case 4:
            case 6:
            case 9:
            case 11:
                if (day > 30) {
                    n = "Không xác định được";
                }
                else if (day == 30) {
                    n = 1 + "/" + ++month + "/" + year;
                }
                else {
                    n = ++day + "/" + month + "/" + year;
                }
                console.log(2)
                break
            case 12:
                if (day > 31) {
                    n = "Không xác định được";
                }
                else if (day == 31) {
                    n = 1 + "/" + 1 + "/" + ++year;
                }
                else {
                    n = ++day + "/" + month + "/" + year;
                }
                console.log(1)
                break;
            default:
                n = "Ko xác định được";
                break;
        }

    }
    document.getElementById("textb1").innerHTML = n;
}

document.getElementById("less").onclick = tomorrowDays;

// b2


function findDay() {
    var month = parseInt(document.getElementById("month2").value);
    var year = parseInt(document.getElementById("year2").value);
    var day;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = "Tháng " + month + " Năm " + year + "có 31 Ngày";
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            day = "Tháng " + month + " Năm " + year + "có 30 Ngày";

        case 2:
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 == 0)) {
                day = "Tháng " + month + " Năm " + year + " có 29 Ngày";
            }
            else {
                day = "Tháng " + month + " Năm " + year + " có 28 Ngày";
            }
        default:
            break;
    }
    document.getElementById("textb2").innerHTML = day;
}
document.getElementById("findDay").onclick = findDay;

//B3

function readNumber() {
    var number = Number(document.getElementById("number").value);
    var read;
    var readN;
    var readC;
    var readDV;
    var hundred;
    var ten;
    var unit;


    if (number > 99 && number < 1000) {
        hundred = Math.floor(number /100);
        ten = Math.floor(number % 100/10);
        unit = Math.floor(number % 10);
        switch (hundred) {
            case 1:
               readN= "Một Trăm "
                break;
            case 2:
                readN= "Hai Trăm "
                break;
            case 3:
                readN= "Ba Trăm "
                break;
            case 4:
                readN= "Bốn Trăm "
                break;
            case 5:
                readN= "Năm Trăm "
                break;
            case 6:
                readN= "Sáu Trăm "
                break;
            case 7:
                readN= "Bảy Trăm "
                break;
            case 8:
                readN= "Tám Trăm "
                break;
            case 9:
                readN= "Chín Trăm "
                break;

            default:
                readN = "Sai"
                break;
        }
        switch (ten) {
            case 0:
                readC = "Lẽ"
                break;
            case 1:
               readC= "Một Mươi"
                break;
            case 2:
                readC= "Hai Mươi"
                break;
            case 3:
                readC= "Ba Mươi"
                break;
            case 4:
                readC= "Bốn Mươi"
                break;
            case 5:
                readC= "Năm Mươi"
                break;
            case 6:
                readC= "Sáu Mươi"
                break;
            case 7:
                readC= "Bảy Mươi"
                break;
            case 8:
                readC="Tám Mươi"
                break;
            case 9:
                readC= "Chín Mươi"
                break;

            default:
                readC = "Sai"
                break;
        }
        switch (unit) {
            case 0: 
                readDV = ""
                break;
            case 1:
               readDV = " Một"
                break;
            case 2:
                readDV = " Hai"
                break;
            case 3:
                readDV = " Ba"
                break;
            case 4:
                readDV = " Bốn"
                break;
            case 5:
                readDV = " Năm"
                break;
            case 6:
                readDV = " Sáu"
                break;
            case 7:
                readDV = " Bảy"
                break;
            case 8:
                readDV =" Tám"
                break;
            case 9:
                readDV = " Chín"
                break;
            default:
                readDV = "Sai"
                break;
        }
        read = readN + readC  + readDV;

    } else {
        read = "Nhập sai số vui lòng nhập lại";
    }
    document.getElementById("textb3").innerHTML = read;
}
document.getElementById("readNumber").onclick = readNumber;




//B4