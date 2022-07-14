

//B1

function yesterday() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var n;
    if (day <= 0 && day > 31) {
        n = "Không xác định được";
    }
    else {
        switch (month) {
            case 1:
                if (day == 1) {
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
                if (day > 30) {
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
                if (day == 1) {
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
    if (day <= 0 && day > 31) {
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
               if (day == 31) {
                    n = 1 + "/" + ++month + "/" + year;
                }
                else {
                    n = ++day + "/" + month + "/" + year;
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
               if (day == 31) {
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

function cvNumString(number){
    switch (number) {
        case 1:
            return " Một ";

        case 2:
            return " Hai ";

        case 3:
            return " Ba ";

        case 4:
            return " Bốn ";

        case 5:
            return " Năm ";

        case 6:
            return " Sáu ";

        case 7:
            return " Bảy ";

        case 8:
            return " Tám ";

        case 9:
            return " Chín ";
    
        default:
            return "";
    }
}
function readNumber(hundred,ten,unit){
    number = Number(document.getElementById("number").value);
    var hundred = Math.floor(number /100);
    var ten = Math.floor(number % 100/10);
    var unit = Math.floor(number % 10);
    read = "";  
    if(number > 99 && number < 1000){
        if(ten == 0){
            read = cvNumString(hundred)+ " Trăm" + cvNumString(ten) + " Lẽ" + cvNumString(unit);
        }else{
            read = cvNumString(hundred)+ " Trăm" + cvNumString(ten) + " Mươi" + cvNumString(unit);
        }
        
    }else{
        read = "Không xác định được";
    }
    document.getElementById("textb3").innerHTML = read;
}
document.getElementById("readNumber").onclick = readNumber;

//B4

function findStudent(){
    var nameSv1 = document.getElementById("text1").value;
    var xSv1 = Number(document.getElementById("x1").value);
    var ySv1 = Number(document.getElementById("y1").value);
    var nameSv2 = document.getElementById("text2").value;
    var xSv2 = Number(document.getElementById("x2").value);
    var ySv2 = Number(document.getElementById("y2").value);
    var nameSv3 = document.getElementById("text3").value;
    var xSv3 = Number(document.getElementById("x3").value);
    var ySv3 = Number(document.getElementById("y3").value);

    var xSchool = Number(document.getElementById("x0").value);
    var ySchool = Number(document.getElementById("y0").value);

    var kcsv1 = Math.sqrt((xSv1-xSchool)*(xSv1-xSchool)+(ySv1-ySchool)*(ySv1-ySchool));
    var kcsv2 = Math.sqrt((xSv2-xSchool)*(xSv2-xSchool)+(ySv2-ySchool)*(ySv2-ySchool));
    var kcsv3 = Math.sqrt((xSv3-xSchool)*(xSv3-xSchool)+(ySv3-ySchool)*(ySv3-ySchool));

   var max;
   if(kcsv1 > kcsv2 && kcsv1 > kcsv3){
        max = "Sinh viên ra trường nhất: " + nameSv1;
   }
   else if(kcsv2 > kcsv1 && kcsv2 > kcsv3){
        max = "Sinh viên ra trường nhất: " + nameSv2;
   }
   else{
        max = "Sinh viên ra trường nhất: " + nameSv3;
   }
   document.getElementById("textb4").innerHTML = max;

}
document.getElementById("findMax").onclick = findStudent;