//Assignment Day3 Dibimbing

//Farras Syam Aly

//deklarasi variable
let nilaiAngka = 73;

console.log("Nilai Angka : "+nilaiAngka);

//membuat percabangan dari nilaiAngka
if (nilaiAngka >= 85 && nilaiAngka <=100){
  console.log("Nilai Huruf : A");
} else if (nilaiAngka >=75 && nilaiAngka <=84){
  console.log("Nilai Huruf : B");
} else if (nilaiAngka >=60 && nilaiAngka <=74){
  console.log("Nilai Huruf : C");
  } else if (nilaiAngka >=0 && nilaiAngka <=59){
    console.log("Nilai Huruf : D");
} else {
  console.log("Nilai Tidak Sesuai.");
}

//menggunakan modulo(%) atau sisa bagi dari 73 dibagi 2, lalu hasilnya di bandingkan dengan 0
if (nilaiAngka % 2 == 0) {
  console.log("Bilangan Genap");
} else {
  console.log("Bilangan Ganjil");
}
