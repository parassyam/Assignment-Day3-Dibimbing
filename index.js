//Assignment Day3 Dibimbing

//deklarasi variable
let nilaiAngka = 73;

console.log("Nilai Angka : "+nilaiAngka);

//membuat percabangan dari nilaiAngka
if (nilaiAngka >= 85){
  console.log("Nilai Huruf : A");
} else if (nilaiAngka >=75){
  console.log("Nilai Huruf : B");
} else if (nilaiAngka >=60){
  console.log("Nilai Huruf : C");
} else {
  console.log("Nilai Huruf : D");
}

//menggunakan modulo(%) atau sisa bagi dari 73 dibagi 2, lalu hasilnya di bandingkan dengan 0
if (nilaiAngka % 2 == 0) {
  console.log("Bilangan Genap");
} else {
  console.log("Bilangan Ganjil");
}

