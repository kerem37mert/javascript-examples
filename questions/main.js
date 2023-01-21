// let dizi = [2,5,8,11,15,17];
// Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan 
// elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)

let dizi = [2,5,8,11,15,17]
let yeniDizi = [];

for(var i=0; i<dizi.length; i++)
{
    if(dizi[i] > 10)
    {
        yeniDizi.push(dizi[i]*5);
    }
}

console.log(yeniDizi);

//#######################################################################################################



let dizi2 = [3,6,9,14,16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu 
// yazın.Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." 
// yoksa "5'ten büyük eleman mevcut değil." yazdır.

function myFunction (dizi2)
{
    // Kodunuzu buraya yazın.
    let mesaj = "";
    
    for(var j=0; j<dizi2.length; j++)
    {
        if(dizi2[j] > 5)
        {
            mesaj = "Beşten büyük bir eleman mevcut.";
            break;
        }
        else
        {
            mesaj = "5'ten büyük eleman mevcut değil."
        }
    }

    console.log(mesaj);
}

myFunction(dizi2);

//####################################################################

let dizi3 = [2,3,4];

// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren
//bir fonksiyon yazınız.

const myfun = (dz) => {
    
    let carpim = 1;

    for(var i=0; i<dz.length; i++)
    {
        carpim *= dz[i];
    }

    return carpim;

}

console.log(myfun(dizi3));