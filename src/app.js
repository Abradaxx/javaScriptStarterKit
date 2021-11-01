console.log("Merhaba kodlama.io")

//bu requesttir aslında back entten istenir bu deger

let dolarBugun=9.30
//saf js type güvenli değil
// sen Double bi değişken tanımladıgın değişkenin tipini heme sonraki bi satırda değiştirebilirsin
let dolarDun=9.20
dolarDun="Ankara"   
{
    let dolarDun=9.10
    /*
   // Burası farklı bir dünya farkındaysan 9.20 yazılacak bloklar kendine özgü oluyor gibi
    //let i burada var ile değiştirirsek patlarız tarayıcadan bakabilirsin var global değişken gibi ve tarayıcadan bak 9.10 çıkıcak

    */
}



console.log(dolarDun)//burada görüldüğü üzere yukardan aşapı okumalı oldugu için dolarDun tanımsızken ne oluca
//undefined olucak js asla hata vermez kendisi buna tanımlanmamış bir şey der 

//var key ini artık let ile değiştirelim artık var ı kullanmıyoruz 

const euroDun=11.2//Euro Dun is read only if you are create const you can not change value 
//euroDun=11 bunu yazdık mı hata verir
console.log(euroDun)
//Array oluşturduk 
//Değişken tanımlamada camelCasing yapıyoru
//PascalCasing var

let konutKredileri=["Konut Kredisi",
                    "Emlak Konut Kredisi",
                    "Kamu Konut Kredisi"
                    ]//tek tırnak çift tırnak farketmez
                   
console.log(konutKredileri)
//array içine her tipten veri tanımlayabilirsiniz yani 12, metin, array(like as phyton)                    
//CTRL+K CTRL+C yaparak oto comment yapabiliriz
console.log("<ul>")
for(let i=0;i<konutKredileri.length;i++){
console.log("<li>"+konutKredileri[i]+"</li>")// </li> amacımız li yi burada kapatmak o yüzden / koyuyoruz yoksa li açık kalır
}
console.log("</ul")
console.log("Deneme")



