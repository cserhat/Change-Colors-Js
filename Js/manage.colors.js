window.onload = () => {

    /* On simplifie le nom de l'objet document */
    let arrierplan = document.getElementById('arrierplan');
    setInterval(()=>{
        let color = arrierplan.value;
        document.body.style.backgroundColor = color;
        window.localStorage.setItem('color_arrierplan', color);
        window.localStorage.getItem('color_arrierplan');
        }, 200);

    let encarts = document.getElementById('encarts');
    setInterval(()=>{
        let color = encarts.value;
        document.getElementById('jumbo').style.setProperty('background-color', color, 'important');
        document.getElementById('page-footer').style.setProperty('background-color', color, 'important');
        window.localStorage.setItem('color_encarts', color);
    }, 200);


    let titres = document.getElementById('titres');
    var titrecolor = document.getElementsByTagName("h1");
    var titrecolorh2 = document.getElementsByTagName("h2");
    var titrecolorh3 = document.getElementsByTagName("h3");
    var titrecolorh4 = document.getElementsByTagName("h4");
    var titrecolorh5 = document.getElementsByTagName("h5");
    setInterval(()=>{
        let color = titres.value;
        for (var i=0, max=titrecolor.length; i < max; i++) {
            let color = titres.value;
            titrecolor[i].style.color = color;
            titrecolorh2[i].style.color = color;
            titrecolorh3[i].style.color = color;
            titrecolorh4[i].style.color = color;
            titrecolorh5[i].style.color = color;
            window.localStorage.setItem('color_titre', color);
        }
    }, 200);


    let text = document.getElementById('text');
    var textcolor = document.getElementsByTagName("li");
    setInterval(()=>{
    for (var i=0, max=textcolor.length; i < max; i++) {
    let color = text.value;
    textcolor[i].style.color = color;
    window.localStorage.setItem('color_text', color);
    }
}, 200);
}

function aller_au_top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function remetre_a_zero() {
    document.getElementById("remetre_a_zero").reset();
  }


