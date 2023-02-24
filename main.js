window.addEventListener("load", () =>
{
    const tartalomElemEz = document.querySelectorAll(".tart");
    const etelek =
        [
            "Chilis bab",
            "Paprikás krumpli",
            "Rántott hús",
            "Hortobágyi húsos palacsinta",
            "Krumpli főzelék",
            (
                [][
                    (!![]+[])[!+[]+!+[]+!+[]]+
                    ([][[]]+[])[+!+[]]+
                    (!![]+[])[+[]]+
                    (!![]+[])[+!+[]]+
                    ([![]]+[][[]])[+!+[]+[+[]]]+
                    (!![]+[])[!+[]+!+[]+!+[]]+
                    (![]+[])[!+[]+!+[]+!+[]]
                ]()+[]
            )[!+[]+!+[]]+
            (![]+[])[+!+[]]+
            ([][[]]+[])[+!+[]]+
            (![]+[])[+!+[]]+
            ([][[]]+[])[+!+[]]+
            (![]+[])[+!+[]]
        ];
    tartalomElemEz[0].innerHTML = HTML_ul(HTML_li_tobb(etelek));
    const kepek =
        [
            "Chilis_bab.jpeg",
            "Hortobagyi_husos_palacsinta.jpg",
            "Krumplifozelek.jpeg",
            "Paprikas_krumpli.jpg",
            "Rantott_hus.jpeg"
        ];
    document.querySelector("#kepek").innerHTML = HTML_img_tobb("kepek", kepek);
});

function HTML_p(tartalom)
{
    return `<p>${tartalom}</p>`
}

function HTML_ul(tartalom)
{
    return `<ul>${tartalom}</ul>`
}

function HTML_li(tartalom)
{
    return `<li>${tartalom}</li>`
}

function HTML_img(mappa, tartalom, alt)
{
    return `<img src="${mappa}/${tartalom}" alt="${alt}">`
}

function HTML_li_tobb(tartalmak)
{
    let tartalom = "";
    for (let i = 0; i < tartalmak.length; i++)
    {
        tartalom += HTML_li(tartalmak[i]);
    }
    return tartalom;
}

function HTML_img_tobb(mappa, tartalmak)
{
    let tartalom = "";
    for (let i = 0; i < tartalmak.length; i++)
    {
        tartalom += HTML_img(mappa, tartalmak[i], tartalmak[i]);
    }
    return tartalom;
}