function addToCart(quantity,productName="elma")//burada product undefined yani aşağıda boş yazsak undefined çıkar 
{
    console.log(productName+"tane"+quantity+"---->Sepete eklendi")

}
addToCart("Elma")
addToCart("Yumurta")
addToCart("Karpuz")
addToCart()
let dolarDun=9.50
let sayHello=()=>{//()=>{}demek sen bir fonksiyonsun demek kanka
    console.log("Hello world")

}
sayHello()
let sayHello2=function name(params) {//böyle de fonksiyon oluşturabiliriz
    console.log("Hello World2")

}
sayHello2();
//22.10
function addToCart2(productName,quantity,unitPrice) {

    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)
//parametre yerlerini karıştırabilirim ve uzatmak yerine obje oluşturacağım
let product1={productName:"Elma",unitPrice:10,quantity:5}
function addToCart3(product) {
    console.log("Ürün:"+product.productName)
    console.log("Adet:"+product.quantity)
    console.log("Fiyat:"+product.unitPrice)
}

addToCart3(product1)
let product2={productName:"Elma",unitPrice:10,quantity:5}// referans tip ve bu objedir
/*şimdi geldik burada objeler refarans tiptir product 2 diye bişi tanımladım
stack               heap
101product2----->101 pn elma, unit price10 , quantity 5
102produc3--->102 pn elma, unit price 10 , quantity 5
product2=product3 yani 101 ise 102 oldu bro
product2 ini referans numarası product 3 ün referans numarasıdır
yani bellekteki veri toplulugunu product 2 ve product 3 tutuyor şu an çünkü adresini 102 yaptık
mesala burayı
product2.productName="Karpuz" 102 nin product name i karpuz diye okuyabiliriz

*/
let product3={productName:"Elma",unitPrice:10,quantity:5}
product2=product3
product2.productName="Karpuz"
console.log(product3.productName)
let sayi1=10//sayısal bir deger tanımlandıgı zaman stackde gerçekleşir bellek adresi 101 diyelim
/*sayi 2 yi tanımladın zaman 20 atamışsın diyelim değer tiplerde atama yaptıgın zaman direk deger atıyorsun ve bitiyor
deger tipleri böyle okuyoruz; sayi1 in degeri eşittir 10. sayi1 ile olan bağıntın direk kopuyor sonra
*/
let sayi2=20
sayi2=sayi1
sayi2=100
console.log(sayi1)
///////////////////////////////////////////////
function addToCart4(products) {//buradaki products ile aşağıdaki products farklıdır.
    console.log(products)
    }

let products=[//böylece arrayler içinde objede oluşturabilirsin
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]
addToCart4(products)
function add(...numbers) {//rest denir 
    //buna eger rest operotru dışında parametre varsa başa yaz yoksa encapsule oldugundan dolayu girilen parametleri kapsar

   let total=0

    for(let i=0;i<numbers.length;i++){
        total=total+numbers[i]

    }
    console.log(total)

    
}
add(20,30)
//Spread
let numbers=[30,10,500,600,120]
console.log(Math.max(...numbers))//...ile koyarsam köşeli parantez gidicektir split demek ayır demek zaten buna spread denir.
////////////////////////////
let [icAnadolu,marmara]=["İç anadolu","Marmara","Karadeniz"]
console.log(icAnadolu)//undefined
//[] içine alalım
console.log(icAnadolu)//degeri İç Anadolu Çıktı
console.log(marmara)//degeri Marmara çıktı
//yukarda yaptgımız olayı bide içine obje koyarak yapalım
//destructing in js
let [icAnadolu,marmara,karadeniz]=[
    {name:"İç anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"}

]
console.log(icAnadolu.population)
console.log(icAnadolu.name)
//şimdi bunun içine array ve destruct için bir tane daha değişken ekleylim
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]=[
    {name:"İç anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"}
    [
        ["Ankara","Konya"]
        ["İstanbul","Bursa"]
        ["Antalya","İzmir"]
    ]
   
]
//şimdi objeninde elamanlarını değişkenlere atamak istiyorum
//altta bir örnek vereyim

let product5={productName:"Elma",unitPrice:10,quantity:5}
console.log(product5)//dersek direk[ ] dahil basacak
let newProductName, newUnitPrice, newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}
={productName:"Elma",unitPrice:10,quantity:5})
