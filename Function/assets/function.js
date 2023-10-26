// Tapşırıq 1
// Ilk öncə array içində gəzən və verilmiş ədədə uyğun indeksi tapdıqda isə onu qaytaran bir funksiya yazırıq
// -------------------------------------------
// function findIndex(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i;
//     }
//   }
//   alert("Array'də Belə Bir Ədəd Yoxdur!");
// }

// const arr =  [3,2,1,4,3,1,5,6,9,3,2,52,3,2]
// let num = parseInt(prompt("Ədədi Daxil Edin: "));
// console.log(findIndex(arr, num));
// Burada isə array və axtaracağımız ədəd üçün dəyişənlər əlavə edirik. Sonra isə yazdığımız funksiyanı axtaracağımız dəyişənləri qeyd etməklə birlikdə çıxışa veririk
// -------------------------------------------

// Tapşırıq 2
// -------------------------------------------
// function indexsayi(arr, num) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             count++;
//         }
//     }
//     return count;
// }

// const arr = [3, 2, 1, 4, 3, 1, 5, 6, 9, 3, 2, 52, 3, 2];
// let num = parseInt(prompt("Ədədi Daxil Edin: "));
// console.log(indexsayi(arr, num));
// Bu kodda indexsayı funksiyası array üzərində təkrarlanır və hər dəfə göstərilən nömrəni tapdıqda sayğacı artırır. Daha sonra hesabını qaytarır. Əgər nömrə arraydə tapılmazsa, o, 0 qaytaracaq. Əgər nömrə tapılarsa, baş verənlərin sayını qaytaracaq. 
// -------------------------------------------

// Tapşırıq 3 
// -------------------------------------------
// function withoutmaxmin(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== max && arr[i] !== min) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// const arr =  [3, 2, 1, 4, 3, 1, 5, 6, 9, 3, 2, 52, 3, 2];
// console.log(withoutmaxmin(arr));
//withoutmaxmin funskiyasında ilk öncə max və min dəyişənləri verib funksiya daxilində ən böyük və ən kiçik ədədləri tapırıq və onları ikinci for döngüsündə nəzəzərə alınmayacaq şəkildə qeyd edirik . Qalan bütün elemntlərin isə sum dəyişəni vasitəsilə cəmini tapırıq
// -------------------------------------------

// Tapşırıq 4
// -------------------------------------------
function funcLastDigit(n) {
    let str = '';
    let temp = n;
    let sonreqem;

    
    for (; temp > 0; temp = (temp - temp % 10) / 10) {
        let digit = temp % 10;
        if (temp < 10) {
            sonreqem = digit;
        }
        str = digit + str;
    }

   
    str = sonreqem + str;
    let yenieded = 0;
    for (let i = 0; i < str.length; i++) {
        yenieded = yenieded * 10 + (str[i] - '0');
    }

    return yenieded;
}

let n = prompt("Ədədi daxil edin:");
let result = funcsonreqem(n);
console.log(result);
// bu tam alinmayib . catdirsam duzeldecem

