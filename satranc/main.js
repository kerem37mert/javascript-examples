function darkbox(location)
{
    let darkbox = document.createElement("div");
    darkbox.classList.add("dark");
    darkbox.setAttribute("id",location);
    darkbox.innerHTML = konum;
    document.getElementById("box").appendChild(darkbox);
}  

function lightbox(location)
{
    let lightbox = document.createElement("div");
    lightbox.classList.add("light");
    lightbox.setAttribute("id",location);
    lightbox.innerHTML = konum;
    document.getElementById("box").appendChild(lightbox);
}  



// Satranc Tahtası Oluşturma
let harfler = ["a","b","c","d","e","f","g","h"];
let konum = "";

for(var i=1; i<=8; i++)
{
    for(var j=1; j<=8; j++)
    {
        konum = harfler[j-1] + (9-i.toString());

        if((i+j)%2 == 0)
        {
            lightbox(konum);
        }
        else
        {
            darkbox(konum);
        }
    }
}