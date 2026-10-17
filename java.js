var collapse1 = document.querySelectorAll(".collapse1");
var collapse2 = document.querySelectorAll(".collapse2");
var collapse3 = document.querySelectorAll(".collapse3");
var collapse4 = document.querySelectorAll(".collapse4");
var menu1 = document.getElementById("collapsehide1");
var menu2 = document.getElementById("collapsehide3");
var menu3 = document.getElementById("collapsehide5");
var menu4 = document.getElementById("collapsehide6");
var angle = 0;

var recomendados = document.querySelector("#b3b1");
var losmasvend = document.querySelector("#b3b2");

function checkViewportWidth() {
  var viewportWidth = window.innerWidth;
  
  if (viewportWidth >= 768) {
    menu1.style.display = 'flex';
    menu2.style.display = 'flex';
    menu3.style.display = 'flex';
    menu4.style.display = 'flex';
    
    document.getElementById("arrowup11").classList.remove("arr0wup");
    document.getElementById("arrowup12").classList.remove("arr0wup");
    document.getElementById("arrowup13").classList.remove("arr0wup");
    document.getElementById("arrowup14").classList.remove("arr0wup");
  } else {
    menu1.style.display = 'none';
    menu2.style.display = 'none';
    menu3.style.display = 'none';
    menu4.style.display = 'none';
  }
}

collapse1.forEach(function(element) {
  element.addEventListener("click", function() {
    if (menu1.style.display === "none" || menu1.style.display === "") {
      menu1.style.display = "flex";
      document.getElementById("arrowup11").classList.add("arr0wup");
      document.getElementById("arrowup11").classList.remove("arrowup")
    } else {
      menu1.style.display = "none";
      document.getElementById("arrowup11").classList.add("arrowup")
      document.getElementById("arrowup11").classList.remove("arr0wup")
    }
  });
});

collapse2.forEach(function(element) {
  element.addEventListener("click", function() {
    if (menu2.style.display === "none" || menu2.style.display === "") {
      menu2.style.display = "block";
      document.getElementById("arrowup12").classList.add("arr0wup");
      document.getElementById("arrowup12").classList.remove("arrowup")
    } else {
      menu2.style.display = "none";
      document.getElementById("arrowup12").classList.add("arrowup")
      document.getElementById("arrowup12").classList.remove("arr0wup")
    }
  });
});

collapse3.forEach(function(element) {
  element.addEventListener("click", function() {
    if (menu3.style.display === "none" || menu3.style.display === "") {
      menu3.style.display = "block";
      document.getElementById("arrowup13").classList.add("arr0wup");
      document.getElementById("arrowup13").classList.remove("arrowup")
    } else {
      menu3.style.display = "none";
      document.getElementById("arrowup13").classList.add("arrowup")
      document.getElementById("arrowup13").classList.remove("arr0wup")
    }
  });
});

collapse4.forEach(function(element) {
  element.addEventListener("click", function() {
    if (menu4.style.display === "none" || menu4.style.display === "") {
      menu4.style.display = "block";
      document.getElementById("arrowup14").classList.add("arr0wup");
      document.getElementById("arrowup14").classList.remove("arrowup")
    } else {
      menu4.style.display = "none";
      document.getElementById("arrowup14").classList.add("arrowup")
      document.getElementById("arrowup14").classList.remove("arr0wup")
    }
  });
});

recomendados.addEventListener("click", function() {
  if (document.getElementById("b3-cards-main").classList.contains("dispno")) {
    document.getElementById("b3-cards-main").classList.remove("dispno");
    document.getElementById("b3-cards-secondary").classList.add("dispno");
    document.getElementById("b3b21").classList.add("body-3-buttons-active");
    document.getElementById("b3b22").classList.remove("body-3-buttons-active");
  }
});

losmasvend.addEventListener("click", function() {
  if (document.getElementById("b3-cards-secondary").classList.contains("dispno")) {
    document.getElementById("b3-cards-main").classList.add("dispno");
    document.getElementById("b3-cards-secondary").classList.remove("dispno");
    document.getElementById("b3b21").classList.remove("body-3-buttons-active");
    document.getElementById("b3b22").classList.add("body-3-buttons-active");
  }
});

var recomendados1 = document.querySelector("#b3b3");
var losmasvend1 = document.querySelector("#b3b4");

recomendados1.addEventListener("click", function() {
  if (document.getElementById("list1forb3").classList.contains("dispno")) {
    document.getElementById("list1forb3").classList.remove("dispno");
    document.getElementById("list2forb3").classList.add("dispno");
    document.getElementById("b3b43").classList.add("body-3-buttons-active");
    document.getElementById("b3b44").classList.remove("body-3-buttons-active");
  }
});

losmasvend1.addEventListener("click", function() {
  if (document.getElementById("list2forb3").classList.contains("dispno")) {
    document.getElementById("list1forb3").classList.add("dispno");
    document.getElementById("list2forb3").classList.remove("dispno");
    document.getElementById("b3b43").classList.remove("body-3-buttons-active");
    document.getElementById("b3b44").classList.add("body-3-buttons-active");
  }
});

document.getElementById('messageb-3').addEventListener('mouseover', function() {
  document.querySelector('#mb1').classList.add('hovermb1');
});

document.getElementById('messageb-3').addEventListener('mouseout', function() {
  document.querySelector('#mb1').classList.remove('hovermb1');
});

document.getElementById('messageb-2').addEventListener('mouseover', function() {
  document.querySelector('#mb1').classList.add('hovermb1');
});

document.getElementById('messageb-2').addEventListener('mouseout', function() {
  document.querySelector('#mb1').classList.remove('hovermb1');
});

const buttons1 = document.getElementsByClassName('b4buttonfirst');
const buttons2 = document.getElementsByClassName('b4buttonsecond');
const buttons3 = document.getElementsByClassName('b4buttonthird');

for (const button of buttons1) {
  button.addEventListener('mouseover', function() {
    document.querySelector('#b4b1').classList.add('hoverformb42');
    document.querySelector('#b4b2').classList.add('hoverformb41');
  });

  button.addEventListener('mouseout', function() {
    document.querySelector('#b4b1').classList.remove('hoverformb42');
    document.querySelector('#b4b2').classList.remove('hoverformb41');
  });
}

for (const button of buttons2) {
  button.addEventListener('mouseover', function() {
    document.querySelector('#b4b3').classList.add('hoverformb42');
    document.querySelector('#b4b4').classList.add('hoverformb41');
  });

  button.addEventListener('mouseout', function() {
    document.querySelector('#b4b3').classList.remove('hoverformb42');
    document.querySelector('#b4b4').classList.remove('hoverformb41');
  });
}

for (const button of buttons3) {
  button.addEventListener('mouseover', function() {
    document.querySelector('#b4b5').classList.add('hoverformb42');
    document.querySelector('#b4b6').classList.add('hoverformb41');
  });

  button.addEventListener('mouseout', function() {
    document.querySelector('#b4b5').classList.remove('hoverformb42');
    document.querySelector('#b4b6').classList.remove('hoverformb41');
  });
}

let currentIndex = 0;
const slides = document.querySelectorAll('.slides');
const totalSlides = slides.length;

document.getElementById('buttonslider2').addEventListener('click', nextSlide);
document.getElementById('buttonslider1').addEventListener('click', previousSlide);

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = currentIndex * -100;

    document.getElementById('slider').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function previousSlide() {
    showSlide(currentIndex - 1);
}

showSlide(currentIndex);

const hoversub1 = document.getElementById('selectsubmenu1');
const greyselection1 = document.getElementById('greyselection1');
const hoversub2 = document.getElementById('selectsubmenu2');
const greyselection2 = document.getElementById('greyselection2');
const hoversub3 = document.getElementById('selectsubmenu3');
const greyselection3 = document.getElementById('greyselection3');
const hoversub4 = document.getElementById('selectsubmenu4');
const greyselection4 = document.getElementById('greyselection4');
const hoversub5 = document.getElementById('selectsubmenu5');
const greyselection5 = document.getElementById('greyselection5');

function showSubmenuWithDelay(button, submenu, delay = 150) {
    let openTimeout;

    button.addEventListener('mouseover', () => {
        openTimeout = setTimeout(() => {
            submenu.classList.remove('dispno');
        }, delay);
    });

    button.addEventListener('mouseout', () => {
        clearTimeout(openTimeout);
        setTimeout(() => {
            if (!button.matches(':hover') && !submenu.matches(':hover')) {
                submenu.classList.add('dispno');
            }
        }, 150); // Delay
    });

    submenu.addEventListener('mouseover', () => {
        submenu.classList.remove('dispno');
    });

    submenu.addEventListener('mouseout', () => {
        setTimeout(() => {
            if (!button.matches(':hover') && !submenu.matches(':hover')) {
                submenu.classList.add('dispno');
            }
        }, 100); // Delay
    });
}

showSubmenuWithDelay(hoversub1, greyselection1);
showSubmenuWithDelay(hoversub2, greyselection2);
showSubmenuWithDelay(hoversub3, greyselection3);
showSubmenuWithDelay(hoversub4, greyselection4);
showSubmenuWithDelay(hoversub5, greyselection5);

document.querySelectorAll('.shadowfocus').forEach(item => {
  item.addEventListener('click', () => {
      const shadow = document.getElementById('shadow');
      
      item.classList.add('highlight');
      
      shadow.style.display = 'block';
  });
});

document.getElementById('shadow').addEventListener('click', () => {
  const shadow = document.getElementById('shadow');
  shadow.style.display = 'none';
  document.querySelector('#resultadosdoexe').classList.add('dispno');
  document.querySelector('#exercisearea').classList.remove('resultadosdoexemoreandmore');

  document.querySelectorAll('.highlight').forEach(item => {
      item.classList.remove('highlight');
  });
});

document.querySelectorAll('.shadowfocus1').forEach(item => {
  item.addEventListener('click', () => {
      const shadow1 = document.getElementById('shadow1');
      
      item.classList.add('highlight1');
      
      shadow1.style.display = 'block';
  });
});

document.getElementById('shadow1').addEventListener('click', () => {
  const shadow1 = document.getElementById('shadow1');
  shadow1.style.display = 'none';
  document.querySelector('#actualsandwichmenu').classList.add('dispno');

  document.querySelectorAll('.highlight1').forEach(item => {
      item.classList.remove('highlight1');
      document.body.classList.remove("freezeov");
  });
});

document.getElementById('submitdets').addEventListener('click', function(event) {
  event.preventDefault();

  // Get the date value from the input field and create a Date object
  var dateValue = document.getElementById('data').value;
  var dateObj = new Date(dateValue);

  // Format the date in European format (day/month/year)
  var day = dateObj.getDate().toString().padStart(2, '0');
  var month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  var year = dateObj.getFullYear();
  var formattedDate = `${day}/${month}/${year}`;

  // Set the formatted date to the text content of dia1 and dia2
  document.getElementById('dia1').textContent = formattedDate;
  document.getElementById('dia2').textContent = formattedDate;

  var airportValue = document.getElementById('aeroporto').value.toLowerCase();
  if (airportValue === 'lisboa' || airportValue === 'lisbon') {
    document.getElementById('destino1').textContent = 'Lisboa';
    document.getElementById('destino2').textContent = 'Lisboa';
    document.getElementById('hora1').textContent = '10h05m';
    document.getElementById('hora2').textContent = '18h05m';
  } else {
    document.getElementById('destino1').textContent = document.getElementById('aeroporto').value;
    document.getElementById('destino2').textContent = document.getElementById('aeroporto').value;
    document.getElementById('hora1').textContent = '12h10m';
    document.getElementById('hora2').textContent = '20h10m';
  }

  if (document.getElementById('selectboxidaevinda').value === 'ida') {
    if (parseInt(day) % 2 === 0) {
      document.getElementById('vooida1').textContent = 'No Horário';
      document.getElementById('vooida2').textContent = 'No Horário';
    } else {
      document.getElementById('vooida1').textContent = 'Atrasado';
      document.getElementById('vooida2').textContent = 'Atrasado';
    }
  } 
  if (document.getElementById('selectboxidaevinda').value === 'regresso') {
    if (parseInt(month) % 2 === 0) {
      document.getElementById('vooida1').textContent = 'No Horário';
      document.getElementById('vooida2').textContent = 'No Horário';
    } else {
      document.getElementById('vooida1').textContent = 'Atrasado';
      document.getElementById('vooida2').textContent = 'Atrasado';
    }
  }

  document.querySelector('#resultadosdoexe').classList.remove('dispno');
  document.querySelector('#exercisearea').classList.add('resultadosdoexemoreandmore');
});

document.getElementById('sandwichbutt').addEventListener('click', function() {
  document.querySelector('#actualsandwichmenu').classList.remove('dispno');
  document.body.classList.add("freezeov");
  document.querySelector('#actualsandwichmenu').classList.add('unfreezeov');
})

document.getElementById('selectables1').addEventListener('click', function() {
  document.querySelector('#selectables').classList.add('dispno')
  document.querySelector('#optionsreservar').classList.remove('dispno')
})

document.getElementById('optionsreservar1').addEventListener('click', function() {
  document.querySelector('#selectables').classList.remove('dispno')
  document.querySelector('#optionsreservar').classList.add('dispno')
})

document.getElementById('optionsreservar2').addEventListener('click', function() {
  document.querySelector('#optionsreservar').classList.add('dispno')
  document.querySelector('#suboptionsreservarbuscar').classList.remove('dispno')
})

document.getElementById('optionsreservar3').addEventListener('click', function() {
  document.querySelector('#optionsreservar').classList.add('dispno')
  document.querySelector('#suboptionsreservarofertas').classList.remove('dispno')
})

document.getElementById('optionsreservar4').addEventListener('click', function() {
  document.querySelector('#optionsreservar').classList.add('dispno')
  document.querySelector('#suboptionsreservardestinos').classList.remove('dispno')
})

document.getElementById('optionsreservar5').addEventListener('click', function() {
  document.querySelector('#optionsreservar').classList.add('dispno')
  document.querySelector('#suboptionsreservarclasesytarifas').classList.remove('dispno')
})

document.getElementById('gotoptions1').addEventListener('click', function() {
  document.querySelector('#optionsreservar').classList.remove('dispno')
  document.querySelector('#suboptionsreservarbuscar').classList.add('dispno')
})

document.getElementById('gotoptions2').addEventListener('click', function() {
  document.querySelector('#optionsreservar').classList.remove('dispno')
  document.querySelector('#suboptionsreservarofertas').classList.add('dispno')
})

document.getElementById('gotoptions3').addEventListener('click', function() {
  document.querySelector('#optionsreservar').classList.remove('dispno')
  document.querySelector('#suboptionsreservardestinos').classList.add('dispno')
})

document.getElementById('gotoptions4').addEventListener('click', function() {
  document.querySelector('#optionsreservar').classList.remove('dispno')
  document.querySelector('#suboptionsreservarclasesytarifas').classList.add('dispno')
})

document.getElementById('selectables2').addEventListener('click', function() {
  document.querySelector('#selectables').classList.add('dispno')
  document.querySelector('#optionsgestionar').classList.remove('dispno')
})

document.getElementById('optionsgestionar1').addEventListener('click', function() {
  document.querySelector('#selectables').classList.remove('dispno')
  document.querySelector('#optionsgestionar').classList.add('dispno')
})

document.getElementById('optionsgestionar2').addEventListener('click', function() {
  document.querySelector('#optionsgestionar').classList.add('dispno')
  document.querySelector('#suboptionsgestionartusreservas').classList.remove('dispno')
})

document.getElementById('optionsgestionar3').addEventListener('click', function() {
  document.querySelector('#optionsgestionar').classList.add('dispno')
  document.querySelector('#suboptionsgestionarcheckinembarque').classList.remove('dispno')
})

document.getElementById('optionsgestionar4').addEventListener('click', function() {
  document.querySelector('#optionsgestionar').classList.add('dispno')
  document.querySelector('#suboptionsgestionarestadosynoticias').classList.remove('dispno')
})

document.getElementById('gotoptions5').addEventListener('click', function() {
  document.querySelector('#optionsgestionar').classList.remove('dispno')
  document.querySelector('#suboptionsgestionartusreservas').classList.add('dispno')
})

document.getElementById('gotoptions6').addEventListener('click', function() {
  document.querySelector('#optionsgestionar').classList.remove('dispno')
  document.querySelector('#suboptionsgestionarcheckinembarque').classList.add('dispno')
})

document.getElementById('gotoptions7').addEventListener('click', function() {
  document.querySelector('#optionsgestionar').classList.remove('dispno')
  document.querySelector('#suboptionsgestionarestadosynoticias').classList.add('dispno')
})

document.getElementById('selectables3').addEventListener('click', function() {
  document.querySelector('#selectables').classList.add('dispno')
  document.querySelector('#optionspreparaelviaje').classList.remove('dispno')
})

document.getElementById('optionspreparaelviaje1').addEventListener('click', function() {
  document.querySelector('#selectables').classList.remove('dispno')
  document.querySelector('#optionspreparaelviaje').classList.add('dispno')
})

document.getElementById('optionspreparaelviaje2').addEventListener('click', function() {
  document.querySelector('#optionspreparaelviaje').classList.add('dispno')
  document.querySelector('#suboptionspreparaelviajeequipaje').classList.remove('dispno')
})

document.getElementById('optionspreparaelviaje3').addEventListener('click', function() {
  document.querySelector('#optionspreparaelviaje').classList.add('dispno')
  document.querySelector('#suboptionspreparaelviajeinformacionutil').classList.remove('dispno')
})

document.getElementById('optionspreparaelviaje4').addEventListener('click', function() {
  document.querySelector('#optionspreparaelviaje').classList.add('dispno')
  document.querySelector('#suboptionspreparaelviajeaeropuertos').classList.remove('dispno')
})

document.getElementById('gotoptions8').addEventListener('click', function() {
  document.querySelector('#optionspreparaelviaje').classList.remove('dispno')
  document.querySelector('#suboptionspreparaelviajeequipaje').classList.add('dispno')
})

document.getElementById('gotoptions9').addEventListener('click', function() {
  document.querySelector('#optionspreparaelviaje').classList.remove('dispno')
  document.querySelector('#suboptionspreparaelviajeinformacionutil').classList.add('dispno')
})

document.getElementById('gotoptions10').addEventListener('click', function() {
  document.querySelector('#optionspreparaelviaje').classList.remove('dispno')
  document.querySelector('#suboptionspreparaelviajeaeropuertos').classList.add('dispno')
})

document.getElementById('selectables4').addEventListener('click', function() {
  document.querySelector('#selectables').classList.add('dispno')
  document.querySelector('#optionsexperienciaiberia').classList.remove('dispno')
})

document.getElementById('optionsexperienciaiberia1').addEventListener('click', function() {
  document.querySelector('#selectables').classList.remove('dispno')
  document.querySelector('#optionsexperienciaiberia').classList.add('dispno')
})

document.getElementById('optionsexperienciaiberia2').addEventListener('click', function() {
  document.querySelector('#optionsexperienciaiberia').classList.add('dispno')
  document.querySelector('#suboptionsexperienciaiberiatiendasonline').classList.remove('dispno')
})

document.getElementById('optionsexperienciaiberia3').addEventListener('click', function() {
  document.querySelector('#optionsexperienciaiberia').classList.add('dispno')
  document.querySelector('#suboptionsexperienciaiberiaserviciosiberia').classList.remove('dispno')
})

document.getElementById('optionsexperienciaiberia4').addEventListener('click', function() {
  document.querySelector('#optionsexperienciaiberia').classList.add('dispno')
  document.querySelector('#suboptionsexperienciaiberiaventajasiberia').classList.remove('dispno')
})

document.getElementById('optionsexperienciaiberia5').addEventListener('click', function() {
  document.querySelector('#optionsexperienciaiberia').classList.add('dispno')
  document.querySelector('#suboptionsexperienciaiberiaflota').classList.remove('dispno')
})

document.getElementById('gotoptions11').addEventListener('click', function() {
  document.querySelector('#optionsexperienciaiberia').classList.remove('dispno')
  document.querySelector('#suboptionsexperienciaiberiatiendasonline').classList.add('dispno')
})

document.getElementById('gotoptions12').addEventListener('click', function() {
  document.querySelector('#optionsexperienciaiberia').classList.remove('dispno')
  document.querySelector('#suboptionsexperienciaiberiaserviciosiberia').classList.add('dispno')
})

document.getElementById('gotoptions13').addEventListener('click', function() {
  document.querySelector('#optionsexperienciaiberia').classList.remove('dispno')
  document.querySelector('#suboptionsexperienciaiberiaventajasiberia').classList.add('dispno')
})

document.getElementById('gotoptions14').addEventListener('click', function() {
  document.querySelector('#optionsexperienciaiberia').classList.remove('dispno')
  document.querySelector('#suboptionsexperienciaiberiaflota').classList.add('dispno')
})

document.getElementById('selectables5').addEventListener('click', function() {
  document.querySelector('#selectables').classList.add('dispno')
  document.querySelector('#optioniberiaplus').classList.remove('dispno')
})

document.getElementById('optioniberiaplus1').addEventListener('click', function() {
  document.querySelector('#selectables').classList.remove('dispno')
  document.querySelector('#optioniberiaplus').classList.add('dispno')
})

document.getElementById('optioniberiaplus2').addEventListener('click', function() {
  document.querySelector('#optioniberiaplus').classList.add('dispno')
  document.querySelector('#suboptioniberiaplusdescubreiberiaplus').classList.remove('dispno')
})

document.getElementById('optioniberiaplus3').addEventListener('click', function() {
  document.querySelector('#optioniberiaplus').classList.add('dispno')
  document.querySelector('#suboptioniberiaplusganaavios').classList.remove('dispno')
})

document.getElementById('optioniberiaplus4').addEventListener('click', function() {
  document.querySelector('#optioniberiaplus').classList.add('dispno')
  document.querySelector('#suboptioniberiapluscanjeaavios').classList.remove('dispno')
})

document.getElementById('optioniberiaplus5').addEventListener('click', function() {
  document.querySelector('#optioniberiaplus').classList.add('dispno')
  document.querySelector('#suboptioniberiaplusnivelesiberiaplus').classList.remove('dispno')
})

document.getElementById('gotoptions15').addEventListener('click', function() {
  document.querySelector('#optioniberiaplus').classList.remove('dispno')
  document.querySelector('#suboptioniberiaplusdescubreiberiaplus').classList.add('dispno')
})

document.getElementById('gotoptions16').addEventListener('click', function() {
  document.querySelector('#optioniberiaplus').classList.remove('dispno')
  document.querySelector('#suboptioniberiaplusganaavios').classList.add('dispno')
})

document.getElementById('gotoptions17').addEventListener('click', function() {
  document.querySelector('#optioniberiaplus').classList.remove('dispno')
  document.querySelector('#suboptioniberiapluscanjeaavios').classList.add('dispno')
})

document.getElementById('gotoptions18').addEventListener('click', function() {
  document.querySelector('#optioniberiaplus').classList.remove('dispno')
  document.querySelector('#suboptioniberiaplusnivelesiberiaplus').classList.add('dispno')
})



document.getElementById('submitdets1').addEventListener('click', function(event) {
  event.preventDefault();

  // Get the date value from the input field and create a Date object
  var dateValue = document.getElementById('data1').value;
  var dateObj = new Date(dateValue);

  // Format the date in European format (day/month/year)
  var day = dateObj.getDate().toString().padStart(2, '0');
  var month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  var year = dateObj.getFullYear();
  var formattedDate = `${day}/${month}/${year}`;

  // Set the formatted date to the text content of dia1 and dia2
  document.getElementById('dia1').textContent = formattedDate;
  document.getElementById('dia2').textContent = formattedDate;

  var airportValue = document.getElementById('aeroporto').value.toLowerCase();
  if (airportValue === 'lisboa' || airportValue === 'lisbon') {
    document.getElementById('destino1').textContent = 'Lisboa';
    document.getElementById('destino2').textContent = 'Lisboa';
    document.getElementById('hora1').textContent = '10h05m';
    document.getElementById('hora2').textContent = '18h05m';
  } else {
    document.getElementById('destino1').textContent = document.getElementById('aeroporto').value;
    document.getElementById('destino2').textContent = document.getElementById('aeroporto').value;
    document.getElementById('hora1').textContent = '12h10m';
    document.getElementById('hora2').textContent = '20h10m';
  }

  if (document.getElementById('selectboxidaevinda').value === 'ida') {
    if (parseInt(day) % 2 === 0) {
      document.getElementById('vooida1').textContent = 'No Horário';
      document.getElementById('vooida2').textContent = 'No Horário';
    } else {
      document.getElementById('vooida1').textContent = 'Atrasado';
      document.getElementById('vooida2').textContent = 'Atrasado';
    }
  } 
  if (document.getElementById('selectboxidaevinda').value === 'regresso') {
    if (parseInt(month) % 2 === 0) {
      document.getElementById('vooida1').textContent = 'No Horário';
      document.getElementById('vooida2').textContent = 'No Horário';
    } else {
      document.getElementById('vooida1').textContent = 'Atrasado';
      document.getElementById('vooida2').textContent = 'Atrasado';
    }
  }

  document.querySelector('#resultadosdoexe').classList.remove('dispno');
  document.querySelector('#exercisearea').classList.add('resultadosdoexemoreandmore');
});

checkViewportWidth();

window.addEventListener('resize', function() {
  checkViewportWidth();
});