var değişken = "ORDER";
function press(upperLimit = 49){
    

return Math.ceil(Math.random() * upperLimit)
} // BUNUN ADI "PARAMETRE'NİN KAPSAMI"

console.log(değişken)

press() //  aşağyıa fonksiyonun yerine yazabilmemiz için kısa değişkeni yazar üste 'return' yazarız.Bir fonk.da 1 tane return yazılır

var number1 = Math.ceil(Math.random() *49)
var number2 = press()
var number3 = press(1700)
var number4 = press()
var number5 = press()
var number6 = press()

console.log('client : ' + number1 +' ' + number2 +' ' + number3 +' ' + number4 +' ' + number5 +' ' + number6) 
// press parantezin içine sayı yazmazsak hep 49 altı say vercek. yazarsak sadece yazdığımız number değişecektir. buna 'Defolt Değer' denir

//bir tanesi değişsin istyiorsam (hepsi değil)fonsksiyonun başında olan press'in içine ,math.random'dan sonrakine üst limit belirtmeliyim (sayısal olrk)