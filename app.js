document.addEventListener("DOMContentLoaded", function() {
    // const loadQuestions = document.querySelectorAll("#load-question");
    var changeAccordingly = document.getElementById("frontgeo200")
    var firstQuestion = document.getElementById("first-question")

    // var updateScoreT1 = document.getElementById("updateScoreT1")
    // var updateScoreT2 = document.getElementById("updateScoreT2")

    var flipCard = document.querySelectorAll("#flipCard")




    const storage = {
    g200: document.getElementById("g200"),
    g400: document.getElementById("g400"),
    g600: document.getElementById("g600"),
    g800: document.getElementById("g800"),
    g1000: document.getElementById("g1000"),
    d200: document.getElementById("d200"),
    d400: document.getElementById("d400"),
    d600: document.getElementById("d600"),
    d800: document.getElementById("d800"),
    d1000: document.getElementById("d1000"),
    a200: document.getElementById("a200"),
    a400: document.getElementById("a400"),
    a600: document.getElementById("a600"),
    a800: document.getElementById("a800"),
    a1000: document.getElementById("a1000"),
    m200: document.getElementById("m200"),
    m400: document.getElementById("m400"),
    m600: document.getElementById("m600"),
    m800: document.getElementById("m800"),
    m1000: document.getElementById("m1000"),
    dz200: document.getElementById("dz200"),
    dz400: document.getElementById("dz400"),
    dz600: document.getElementById("dz600"),
    dz800: document.getElementById("dz800"),
    dz1000: document.getElementById("dz1000"),
    c200: document.getElementById("c200"),
    c400: document.getElementById("c400"),
    c600: document.getElementById("c600"),
    c800: document.getElementById("c800"),
    c1000: document.getElementById("c1000")
}

    g200.addEventListener("click", geo200)
    g400.addEventListener("click", geo400)
    g600.addEventListener("click", geo600)
    g800.addEventListener("click", geo800)
    g1000.addEventListener("click", geo1000)
    d200.addEventListener("click", song200)
    d400.addEventListener("click", song400)
    d600.addEventListener("click", song600)
    d800.addEventListener("click", song800)
    d1000.addEventListener("click", song1000)
    a200.addEventListener("click", act200)
    a400.addEventListener("click", act400)
    a600.addEventListener("click", act600)
    a800.addEventListener("click", act800)
    a1000.addEventListener("click", act1000)
    m200.addEventListener("click", musicians200)
    m400.addEventListener("click", musicians400)
    m600.addEventListener("click", musicians600)
    m800.addEventListener("click", musicians800)
    m1000.addEventListener("click", musicians1000)
    dz200.addEventListener("click", animals200)
    dz400.addEventListener("click", animals400)
    dz600.addEventListener("click", animals600)
    dz800.addEventListener("click", animals800)
    dz1000.addEventListener("click", animals1000)
    c200.addEventListener("click", people200)
    c400.addEventListener("click", people400)
    c600.addEventListener("click", people600)
    c800.addEventListener("click", people800)
    c1000.addEventListener("click", people1000)


    function geo200() {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = 9999;
  
        let content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexDirection = "column";
        content.style.justifyContent = "center";
        content.style.alignItems = "center";
        content.style.backgroundColor = "#111159";
        content.style.border = "2px solid #AA24FF";
        content.style.borderRadius = "12px";
        content.style.color = "#FCB46A";
        content.style.fontWeight = "800";
        content.style.padding = "34px";
        content.innerHTML = 
        "Kura ir vec??k?? pils??ta Latvij???<br><br><button id='answer' value='Ludza'>Ludza</button><button id='answer' value='Valmiera'>Valmiera</button><button id='answer' value='C??sis'>C??sis</button>";
        const answerInput = content.querySelectorAll("#answer");

        answerInput.forEach(answer => {
            answer.addEventListener("click", function() {
                var add200 = 200
                if (answer.value === firstQuestion.value) {
                    content.style.backgroundColor = "green";
                    content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 200 punktu.<br><br>";
                    changeAccordingly.style.backgroundColor = "green";
                    changeAccordingly.style.fontSize = "40px"
                    // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add200);
                } else if (answer.value !== firstQuestion.value) {
                    content.innerHTML = 
                    "J??s atbild??j??t nepareizi!<br><br>";
                    content.style.backgroundColor = "red"
                    changeAccordingly.style.backgroundColor = "red";
                }
                    const closeButton = document.createElement("button");
                    closeButton.style.width = "150px"
                    closeButton.style.border = "2px solid gold"
                    closeButton.style.backgroundColor = "#AA24FF"
                    closeButton.style.color = "gold"
                    closeButton.style.cursor = "pointer"
                    closeButton.innerHTML = "Turpin??t";
                    closeButton.addEventListener("click", function() {
                    overlay.style.display = "none";
                });
                    content.appendChild(closeButton);
                });
            });
            overlay.appendChild(content);
            document.body.appendChild(overlay)
        }
    });

    function song200() {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = 9999;
  
        let content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexDirection = "column";
        content.style.justifyContent = "center";
        content.style.alignItems = "center";
        content.style.backgroundColor = "#111159";
        content.style.border = "2px solid #AA24FF";
        content.style.borderRadius = "12px";
        content.style.color = "#FCB46A";
        content.style.fontWeight = "800";
        content.style.padding = "34px";
        content.innerHTML = 
        "K?? Sauc Latvijas Himnas Autoru?<br><br><button id='answer' value='Kalni???? Imants'>Kalni???? Imants</button><button id='answer' value='Kalni???? Alfr??ds'>Kalni???? Alfr??ds</button><button id='answer' value='Bauma??u K??rlis'>Bauma??u K??rlis</button>";
        const answerInput = content.querySelectorAll("#answer");

        answerInput.forEach(answer => {
            answer.addEventListener("click", function() {
                var add200 = 200
                var secondQuestion = document.getElementById("second-question")
                var changeAccordingly = document.getElementById("frontd200")
                if (answer.value === secondQuestion.value) {
                    content.style.backgroundColor = "green";
                    content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 200 punktu.<br><br>";
                    changeAccordingly.style.backgroundColor = "green";
                    changeAccordingly.style.fontSize = "40px"
                    // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add200);
                } else if (answer.value !== secondQuestion.value) {
                    content.innerHTML = 
                    "J??s atbild??j??t nepareizi!<br><br>";
                    content.style.backgroundColor = "red"
                    changeAccordingly.style.backgroundColor = "red";
                }
                    const closeButton = document.createElement("button");
                    closeButton.style.width = "150px"
                    closeButton.style.border = "2px solid gold"
                    closeButton.style.backgroundColor = "#AA24FF"
                    closeButton.style.color = "gold"
                    closeButton.style.cursor = "pointer"
                    closeButton.innerHTML = "Turpin??t";
                    closeButton.addEventListener("click", function() {
                    overlay.style.display = "none";
                });
                    content.appendChild(closeButton);
                });
            });
            overlay.appendChild(content);
            document.body.appendChild(overlay)
        }

    function act200 () {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = 9999;
  
        let content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexDirection = "column";
        content.style.justifyContent = "center";
        content.style.alignItems = "center";
        content.style.backgroundColor = "#111159";
        content.style.border = "2px solid #AA24FF";
        content.style.borderRadius = "12px";
        content.style.color = "#FCB46A";
        content.style.fontWeight = "800";
        content.style.padding = "34px";
        content.innerHTML = 
        "Galven??s Lomas Atveidot??js Film?? Tit??niks?<br><br><button id='answer' value='Steven Seagal'>Steven Seagal</button><button id='answer' value='Leonardo Di Kaprio'>Leonardo Di Kaprio</button><button id='answer' value='Rowan Atkinson'>Rowan Atkinson</button>";
        const answerInput = content.querySelectorAll("#answer");

        answerInput.forEach(answer => {
            answer.addEventListener("click", function() {
                var add200 = 200
                var thirdQuestion = document.getElementById("third-question")
                var changeAccordingly = document.getElementById("fronta200")
                if (answer.value === thirdQuestion.value) {
                    content.style.backgroundColor = "green";
                    content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 200 punktu.<br><br>";
                    changeAccordingly.style.backgroundColor = "green";
                    changeAccordingly.style.fontSize = "40px"
                    // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add200);
                } else if (answer.value !== thirdQuestion.value) {
                    content.innerHTML = 
                    "J??s atbild??j??t nepareizi!<br><br>";
                    content.style.backgroundColor = "red"
                    changeAccordingly.style.backgroundColor = "red";
                }
                    const closeButton = document.createElement("button");
                    closeButton.style.width = "150px"
                    closeButton.style.border = "2px solid gold"
                    closeButton.style.backgroundColor = "#AA24FF"
                    closeButton.style.color = "gold"
                    closeButton.style.cursor = "pointer"
                    closeButton.innerHTML = "Turpin??t";
                    closeButton.addEventListener("click", function() {
                    overlay.style.display = "none";
                });
                    content.appendChild(closeButton);
                });
            });
            overlay.appendChild(content);
            document.body.appendChild(overlay)
        }

    function musicians200 () {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = 9999;
  
        let content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexDirection = "column";
        content.style.justifyContent = "center";
        content.style.alignItems = "center";
        content.style.backgroundColor = "#111159";
        content.style.border = "2px solid #AA24FF";
        content.style.borderRadius = "12px";
        content.style.color = "#FCB46A";
        content.style.fontWeight = "800";
        content.style.padding = "34px";
        content.innerHTML = 
        "K??du Instrumentu Sp??l?? ??it??rists?<br><br><button id='answer' value='Klavieres'>Klavieres</button><button id='answer' value='Bungas'>Bungas</button><button id='answer' value='??it??ru'>??it??ru</button>";
        const answerInput = content.querySelectorAll("#answer");

        answerInput.forEach(answer => {
            answer.addEventListener("click", function() {
                var add200 = 200
                var forthQuestion = document.getElementById("forth-question")
                var changeAccordingly = document.getElementById("musician200")
                if (answer.value === forthQuestion.value) {
                    content.style.backgroundColor = "green";
                    content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 200 punktu.<br><br>";
                    changeAccordingly.style.backgroundColor = "green";
                    changeAccordingly.style.fontSize = "40px"
                    // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add200);
                } else if (answer.value !== forthQuestion.value) {
                    content.innerHTML = 
                    "J??s atbild??j??t nepareizi!<br><br>";
                    content.style.backgroundColor = "red"
                    changeAccordingly.style.backgroundColor = "red";
                }
                    const closeButton = document.createElement("button");
                    closeButton.style.width = "150px"
                    closeButton.style.border = "2px solid gold"
                    closeButton.style.backgroundColor = "#AA24FF"
                    closeButton.style.color = "gold"
                    closeButton.style.cursor = "pointer"
                    closeButton.innerHTML = "Turpin??t";
                    closeButton.addEventListener("click", function() {
                    overlay.style.display = "none";
                });
                    content.appendChild(closeButton);
                });
            });
            overlay.appendChild(content);
            document.body.appendChild(overlay)
        }

    function animals200 () {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = 9999;
  
        let content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexDirection = "column";
        content.style.justifyContent = "center";
        content.style.alignItems = "center";
        content.style.backgroundColor = "#111159";
        content.style.border = "2px solid #AA24FF";
        content.style.borderRadius = "12px";
        content.style.color = "#FCB46A";
        content.style.fontWeight = "800";
        content.style.padding = "34px";
        content.innerHTML = 
        "Kuram Dz??vniekam Ir gar?? kakls un Plankumi?<br><br><button id='answer' value='??irafe'>??irafe</button><button id='answer' value='Zebra'>Zebra</button><button id='answer' value='Z??lonis'>Z??lonis</button>";
        const answerInput = content.querySelectorAll("#answer");

        answerInput.forEach(answer => {
            answer.addEventListener("click", function() {
                var add200 = 200
                var fifthQuestion = document.getElementById("fifth-question")
                var changeAccordingly = document.getElementById("animal200")
                if (answer.value === fifthQuestion.value) {
                    content.style.backgroundColor = "green";
                    content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 200 punktu.<br><br>";
                    changeAccordingly.style.backgroundColor = "green";
                    changeAccordingly.style.fontSize = "40px"
                    // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add200);
                } else if (answer.value !== fifthQuestion.value) {
                    content.innerHTML = 
                    "J??s atbild??j??t nepareizi!<br><br>";
                    content.style.backgroundColor = "red"
                    changeAccordingly.style.backgroundColor = "red";
                }
                    const closeButton = document.createElement("button");
                    closeButton.style.width = "150px"
                    closeButton.style.border = "2px solid gold"
                    closeButton.style.backgroundColor = "#AA24FF"
                    closeButton.style.color = "gold"
                    closeButton.style.cursor = "pointer"
                    closeButton.innerHTML = "Turpin??t";
                    closeButton.addEventListener("click", function() {
                    overlay.style.display = "none";
                });
                    content.appendChild(closeButton);
                });
            });
            overlay.appendChild(content);
            document.body.appendChild(overlay)
        }

    function people200 ()  {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = 9999;
  
        let content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexDirection = "column";
        content.style.justifyContent = "center";
        content.style.alignItems = "center";
        content.style.backgroundColor = "#111159";
        content.style.border = "2px solid #AA24FF";
        content.style.borderRadius = "12px";
        content.style.color = "#FCB46A";
        content.style.fontWeight = "800";
        content.style.padding = "34px";
        content.innerHTML = 
        "Kura ??erme??a Da??a Tiek Izmantota O??ai?<br><br><button id='answer' value='Deguns'>Deguns</button><button id='answer' value='Ausis'>Ausis</button><button id='answer' value='K??jas'>K??jas</button>";
        const answerInput = content.querySelectorAll("#answer");

        answerInput.forEach(answer => {
            answer.addEventListener("click", function() {
                var add200 = 200
                var sixthQuestion = document.getElementById("sixth-question")
                var changeAccordingly = document.getElementById("peopl200")
                if (answer.value === sixthQuestion.value) {
                    content.style.backgroundColor = "green";
                    content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 200 punktu.<br><br>";
                    changeAccordingly.style.backgroundColor = "green";
                    changeAccordingly.style.fontSize = "40px"
                    // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add200);
                } else if (answer.value !== sixthQuestion.value) {
                    content.innerHTML = 
                    "J??s atbild??j??t nepareizi!<br><br>";
                    content.style.backgroundColor = "red"
                    changeAccordingly.style.backgroundColor = "red";
                }
                    const closeButton = document.createElement("button");
                    closeButton.style.width = "150px"
                    closeButton.style.border = "2px solid gold"
                    closeButton.style.backgroundColor = "#AA24FF"
                    closeButton.style.color = "gold"
                    closeButton.style.cursor = "pointer"
                    closeButton.innerHTML = "Turpin??t";
                    closeButton.addEventListener("click", function() {
                    overlay.style.display = "none";
                });
                    content.appendChild(closeButton);
                });
            });
            overlay.appendChild(content);
            document.body.appendChild(overlay)
        }

    function geo400() {
            console.log("test");
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = 9999;
      
            let content = document.createElement("div");
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.alignItems = "center";
            content.style.backgroundColor = "#111159";
            content.style.border = "2px solid #AA24FF";
            content.style.borderRadius = "12px";
            content.style.color = "#FCB46A";
            content.style.fontWeight = "800";
            content.style.padding = "34px";
            content.innerHTML = 
            "Kur?? Ir Liel??kais Kontinents?<br><br><button id='answer' value='??frika'>??frika</button><button id='answer' value='??zija'>??zija</button><button id='answer' value='Austr??lija'>Austr??lija</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add400 = 400
                    var secondQuestion = document.getElementById("seventh-question")
                    var changeAccordingly = document.getElementById("frontgeo400")
                    if (answer.value === secondQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 400 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add400);
                    } else if (answer.value !== secondQuestion.value) {
                        content.innerHTML = 
                        "J??s atbild??j??t nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpin??t";
                        closeButton.addEventListener("click", function() {
                        overlay.style.display = "none";
                    });
                        content.appendChild(closeButton);
                    });
                });
                overlay.appendChild(content);
                document.body.appendChild(overlay)
        }

    function song400() {
                const overlay = document.createElement("div");
                overlay.style.position = "fixed";
                overlay.style.top = 0;
                overlay.style.left = 0;
                overlay.style.width = "100%";
                overlay.style.height = "100%";
                overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
                overlay.style.display = "flex";
                overlay.style.justifyContent = "center";
                overlay.style.alignItems = "center";
                overlay.style.zIndex = 9999;
          
                let content = document.createElement("div");
                content.style.display = "flex";
                content.style.flexDirection = "column";
                content.style.justifyContent = "center";
                content.style.alignItems = "center";
                content.style.backgroundColor = "#111159";
                content.style.border = "2px solid #AA24FF";
                content.style.borderRadius = "12px";
                content.style.color = "#FCB46A";
                content.style.fontWeight = "800";
                content.style.padding = "34px";
                content.innerHTML = 
                "Popul??r??kais M??zikas Novirziens Pasaul???<br><br><button id='answer' value='Roks'>Roks</button><button id='answer' value='Hip-Hop/Rap'>Hip-Hop/Rap</button><button id='answer' value='Pop'>Pop</button>";
                const answerInput = content.querySelectorAll("#answer");
        
                answerInput.forEach(answer => {
                    answer.addEventListener("click", function() {
                        var add400 = 400
                        var eithQuestion = document.getElementById("eith-question")
                        var changeAccordingly = document.getElementById("frontd400")
                        if (answer.value === eithQuestion.value) {
                            content.style.backgroundColor = "green";
                            content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 400 punktu.<br><br>";
                            changeAccordingly.style.backgroundColor = "green";
                            changeAccordingly.style.fontSize = "40px"
                            // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add400);
                        } else if (answer.value !== eithQuestion.value) {
                            content.innerHTML = 
                            "J??s atbild??j??t nepareizi!<br><br>";
                            content.style.backgroundColor = "red"
                            changeAccordingly.style.backgroundColor = "red";
                        }
                            const closeButton = document.createElement("button");
                            closeButton.style.width = "150px"
                            closeButton.style.border = "2px solid gold"
                            closeButton.style.backgroundColor = "#AA24FF"
                            closeButton.style.color = "gold"
                            closeButton.style.cursor = "pointer"
                            closeButton.innerHTML = "Turpin??t";
                            closeButton.addEventListener("click", function() {
                            overlay.style.display = "none";
                        });
                            content.appendChild(closeButton);
                        });
                    });
                    overlay.appendChild(content);
                    document.body.appendChild(overlay)
        }

    function act400 () {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = 9999;
      
            let content = document.createElement("div");
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.alignItems = "center";
            content.style.backgroundColor = "#111159";
            content.style.border = "2px solid #AA24FF";
            content.style.borderRadius = "12px";
            content.style.color = "#FCB46A";
            content.style.fontWeight = "800";
            content.style.padding = "34px";
            content.innerHTML = 
            "Kur?? Ieguva Lab??k?? Aktiera Tituli 2022 Gad???<br><br><button id='answer' value='Anthony Hopkins'>Anthony Hopkins</button><button id='answer' value='Gary Oldman'>Gary Oldman</button><button id='answer' value='Tom Hanks'>Tom Hanks</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add400 = 400
                    var ninthQuestion = document.getElementById("ninth-question")
                    var changeAccordingly = document.getElementById("fronta400")
                    if (answer.value === ninthQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 400 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add400);
                    } else if (answer.value !== ninthQuestion.value) {
                        content.innerHTML = 
                        "J??s atbild??j??t nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpin??t";
                        closeButton.addEventListener("click", function() {
                        overlay.style.display = "none";
                    });
                        content.appendChild(closeButton);
                    });
                });
                overlay.appendChild(content);
                document.body.appendChild(overlay)
        }


    function musicians400 () {
                const overlay = document.createElement("div");
                overlay.style.position = "fixed";
                overlay.style.top = 0;
                overlay.style.left = 0;
                overlay.style.width = "100%";
                overlay.style.height = "100%";
                overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
                overlay.style.display = "flex";
                overlay.style.justifyContent = "center";
                overlay.style.alignItems = "center";
                overlay.style.zIndex = 9999;
          
                let content = document.createElement("div");
                content.style.display = "flex";
                content.style.flexDirection = "column";
                content.style.justifyContent = "center";
                content.style.alignItems = "center";
                content.style.backgroundColor = "#111159";
                content.style.border = "2px solid #AA24FF";
                content.style.borderRadius = "12px";
                content.style.color = "#FCB46A";
                content.style.fontWeight = "800";
                content.style.padding = "34px";
                content.innerHTML = 
                "Kura M??ksliniece Ir Zin??ma K?? 'Queen Of Pop?'<br><br><button id='answer' value='Madonna'>Madonna</button><button id='answer' value='Mariah Carey'>Mariah Carey</button><button id='answer' value='Whitney Houston'>Whitney Houston</button>";
                const answerInput = content.querySelectorAll("#answer");
        
                answerInput.forEach(answer => {
                    answer.addEventListener("click", function() {
                        var add400 = 400
                        var tenthQuestion = document.getElementById("tenth-question")
                        var changeAccordingly = document.getElementById("musician400")
                        if (answer.value === tenthQuestion.value) {
                            content.style.backgroundColor = "green";
                            content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 400 punktu.<br><br>";
                            changeAccordingly.style.backgroundColor = "green";
                            changeAccordingly.style.fontSize = "40px"
                            // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add400);
                        } else if (answer.value !== tenthQuestion.value) {
                            content.innerHTML = 
                            "J??s atbild??j??t nepareizi!<br><br>";
                            content.style.backgroundColor = "red"
                            changeAccordingly.style.backgroundColor = "red";
                        }
                            const closeButton = document.createElement("button");
                            closeButton.style.width = "150px"
                            closeButton.style.border = "2px solid gold"
                            closeButton.style.backgroundColor = "#AA24FF"
                            closeButton.style.color = "gold"
                            closeButton.style.cursor = "pointer"
                            closeButton.innerHTML = "Turpin??t";
                            closeButton.addEventListener("click", function() {
                            overlay.style.display = "none";
                        });
                            content.appendChild(closeButton);
                        });
                    });
                    overlay.appendChild(content);
                    document.body.appendChild(overlay)
        }

    function animals400 () {
                    const overlay = document.createElement("div");
                    overlay.style.position = "fixed";
                    overlay.style.top = 0;
                    overlay.style.left = 0;
                    overlay.style.width = "100%";
                    overlay.style.height = "100%";
                    overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
                    overlay.style.display = "flex";
                    overlay.style.justifyContent = "center";
                    overlay.style.alignItems = "center";
                    overlay.style.zIndex = 9999;
              
                    let content = document.createElement("div");
                    content.style.display = "flex";
                    content.style.flexDirection = "column";
                    content.style.justifyContent = "center";
                    content.style.alignItems = "center";
                    content.style.backgroundColor = "#111159";
                    content.style.border = "2px solid #AA24FF";
                    content.style.borderRadius = "12px";
                    content.style.color = "#FCB46A";
                    content.style.fontWeight = "800";
                    content.style.padding = "34px";
                    content.innerHTML = 
                    "Liel??kais Z??d??t??js Uz Zemes?<br><br><button id='answer' value='N??lzirgs'>N??lszirgs</button><button id='answer' value='Grizlij L??cis'>Grizlij L??cis</button><button id='answer' value='??frikas Z??lonis'>??frikas Z??lonis</button>";
                    const answerInput = content.querySelectorAll("#answer");
            
                    answerInput.forEach(answer => {
                        answer.addEventListener("click", function() {
                            var add400 = 400
                            var eleventhQuestion = document.getElementById("eleventh-question")
                            var changeAccordingly = document.getElementById("animal400")
                            if (answer.value === eleventhQuestion.value) {
                                content.style.backgroundColor = "green";
                                content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 400 punktu.<br><br>";
                                changeAccordingly.style.backgroundColor = "green";
                                changeAccordingly.style.fontSize = "40px"
                                // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add400);
                            } else if (answer.value !== eleventhQuestion.value) {
                                content.innerHTML = 
                                "J??s atbild??j??t nepareizi!<br><br>";
                                content.style.backgroundColor = "red"
                                changeAccordingly.style.backgroundColor = "red";
                            }
                                const closeButton = document.createElement("button");
                                closeButton.style.width = "150px"
                                closeButton.style.border = "2px solid gold"
                                closeButton.style.backgroundColor = "#AA24FF"
                                closeButton.style.color = "gold"
                                closeButton.style.cursor = "pointer"
                                closeButton.innerHTML = "Turpin??t";
                                closeButton.addEventListener("click", function() {
                                overlay.style.display = "none";
                            });
                                content.appendChild(closeButton);
                            });
                        });
                        overlay.appendChild(content);
                        document.body.appendChild(overlay)
        }

    function people400 ()  {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = 9999;
      
            let content = document.createElement("div");
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.alignItems = "center";
            content.style.backgroundColor = "#111159";
            content.style.border = "2px solid #AA24FF";
            content.style.borderRadius = "12px";
            content.style.color = "#FCB46A";
            content.style.fontWeight = "800";
            content.style.padding = "34px";
            content.innerHTML = 
            "Kur?? Ir Liel??kais Org??ns Cilv??ka ??ermen???<br><br><button id='answer' value='Aknas'>Aknas</button><button id='answer' value='Plau??as'>Plau??as</button><button id='answer' value='??da'>??da</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add400 = 400
                    var twelvethQuestion = document.getElementById("twelveth-question")
                    var changeAccordingly = document.getElementById("peopl400")
                    if (answer.value === twelvethQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 400 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add400);
                    } else if (answer.value !== twelvethQuestion.value) {
                        content.innerHTML = 
                        "J??s atbild??j??t nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpin??t";
                        closeButton.addEventListener("click", function() {
                        overlay.style.display = "none";
                    });
                        content.appendChild(closeButton);
                    });
                });
                overlay.appendChild(content);
                document.body.appendChild(overlay)
        }

    function geo600() {
            console.log("test");
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = 9999;
      
            let content = document.createElement("div");
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.alignItems = "center";
            content.style.backgroundColor = "#111159";
            content.style.border = "2px solid #AA24FF";
            content.style.borderRadius = "12px";
            content.style.color = "#FCB46A";
            content.style.fontWeight = "800";
            content.style.padding = "34px";
            content.innerHTML = 
            "Kura Ir Francijas Galvas Pils??ta?<br><br><button id='answer' value='Par??ze'>Par??ze</button><button id='answer' value='Berl??ne'>Berl??ne</button><button id='answer' value='Madride'>Madride</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add600 = 600
                    var trnthQuestion = document.getElementById("trnth-question")
                    var changeAccordingly = document.getElementById("frontgeo600")
                    if (answer.value === trnthQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 600 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add600);
                    } else if (answer.value !== trnthQuestion.value) {
                        content.innerHTML = 
                        "J??s atbild??j??t nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpin??t";
                        closeButton.addEventListener("click", function() {
                        overlay.style.display = "none";
                    });
                        content.appendChild(closeButton);
                    });
                });
                overlay.appendChild(content);
                document.body.appendChild(overlay)
        }

    function song600() {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = 9999;
      
            let content = document.createElement("div");
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.alignItems = "center";
            content.style.backgroundColor = "#111159";
            content.style.border = "2px solid #AA24FF";
            content.style.borderRadius = "12px";
            content.style.color = "#FCB46A";
            content.style.fontWeight = "800";
            content.style.padding = "34px";
            content.innerHTML = 
            "Kur?? No ??iem Singliem Ir Visp??rdot??kais Singls Jebkad?<br><br><button id='answer' value='Ed Sheeran - Shape of You'>Ed Sheeran - Shape of You</button><button id='answer' value='Queen - Bohemian Rhapsody'>Queen - Bohemian Rhapsody</button><button id='answer' value='Michael Jackson - Billie Jean'>Michael Jackson - Billie Jean</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add600 = 600
                    var frtnthQuestion = document.getElementById("frtnth-question")
                    var changeAccordingly = document.getElementById("frontd600")
                    if (answer.value === frtnthQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 600 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add600);
                    } else if (answer.value !== frtnthQuestion.value) {
                        content.innerHTML = 
                        "J??s atbild??j??t nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpin??t";
                        closeButton.addEventListener("click", function() {
                        overlay.style.display = "none";
                    });
                        content.appendChild(closeButton);
                    });
                });
                overlay.appendChild(content);
                document.body.appendChild(overlay)
        }

    function act600 () {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = 9999;
      
            let content = document.createElement("div");
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.alignItems = "center";
            content.style.backgroundColor = "#111159";
            content.style.border = "2px solid #AA24FF";
            content.style.borderRadius = "12px";
            content.style.color = "#FCB46A";
            content.style.fontWeight = "800";
            content.style.padding = "34px";
            content.innerHTML = 
            "Kur?? Ieguva Oskara Balvu K?? Lab??kais Aktieris Film?? 'The Godfather'?<br><br><button id='answer' value='Marlon Brando'>Marlon Brando</button><button id='answer' value='Al Pacino'>Al Pacino</button><button id='answer' value='Robert De Niro'>Robert De Niro</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add600 = 600
                    var fifthnthQuestion = document.getElementById("fifthnth-question")
                    var changeAccordingly = document.getElementById("fronta600")
                    if (answer.value === fifthnthQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 600 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add600);
                    } else if (answer.value !== fifthnthQuestion.value) {
                        content.innerHTML = 
                        "J??s atbild??j??t nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpin??t";
                        closeButton.addEventListener("click", function() {
                        overlay.style.display = "none";
                    });
                        content.appendChild(closeButton);
                    });
                });
                overlay.appendChild(content);
                document.body.appendChild(overlay)
        }

    function musicians600 () {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = 9999;
      
            let content = document.createElement("div");
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.alignItems = "center";
            content.style.backgroundColor = "#111159";
            content.style.border = "2px solid #AA24FF";
            content.style.borderRadius = "12px";
            content.style.color = "#FCB46A";
            content.style.fontWeight = "800";
            content.style.padding = "34px";
            content.innerHTML = 
            "Kur?? Ir Lead Singer Grup?? 'Queen'?'<br><br><button id='answer' value='Freddie Starr'>Freddie Starr</button><button id='answer' value='Elvis Presley'>Elvis Presley</button><button id='answer' value='Freddie Mercury'>Freddie Mercury</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add600 = 600
                    var sixtnthQuestion = document.getElementById("sixtnth-question")
                    var changeAccordingly = document.getElementById("musician600")
                    if (answer.value === sixtnthQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 600 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add600);
                    } else if (answer.value !== sixtnthQuestion.value) {
                        content.innerHTML = 
                        "J??s atbild??j??t nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpin??t";
                        closeButton.addEventListener("click", function() {
                        overlay.style.display = "none";
                    });
                        content.appendChild(closeButton);
                    });
                });
                overlay.appendChild(content);
                document.body.appendChild(overlay)
        }

    function animals600 () {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = 9999;
  
        let content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexDirection = "column";
        content.style.justifyContent = "center";
        content.style.alignItems = "center";
        content.style.backgroundColor = "#111159";
        content.style.border = "2px solid #AA24FF";
        content.style.borderRadius = "12px";
        content.style.color = "#FCB46A";
        content.style.fontWeight = "800";
        content.style.padding = "34px";
        content.innerHTML = 
        "Kur?? ir ??tr??kais Dz??vnieks uz Zemes?<br><br><button id='answer' value='Gepards'>Gepards</button><button id='answer' value='Leopards'>Leopards</button><button id='answer' value='Lauva'>Lauva</button>";
        const answerInput = content.querySelectorAll("#answer");

        answerInput.forEach(answer => {
            answer.addEventListener("click", function() {
                var add600 = 600
                var seventhnQuestion = document.getElementById("seventhn-question")
                var changeAccordingly = document.getElementById("animal600")
                if (answer.value === seventhnQuestion.value) {
                    content.style.backgroundColor = "green";
                    content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 600 punktu.<br><br>";
                    changeAccordingly.style.backgroundColor = "green";
                    changeAccordingly.style.fontSize = "40px"
                    // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add600);
                } else if (answer.value !== seventhnQuestion.value) {
                    content.innerHTML = 
                    "J??s atbild??j??t nepareizi!<br><br>";
                    content.style.backgroundColor = "red"
                    changeAccordingly.style.backgroundColor = "red";
                }
                    const closeButton = document.createElement("button");
                    closeButton.style.width = "150px"
                    closeButton.style.border = "2px solid gold"
                    closeButton.style.backgroundColor = "#AA24FF"
                    closeButton.style.color = "gold"
                    closeButton.style.cursor = "pointer"
                    closeButton.innerHTML = "Turpin??t";
                    closeButton.addEventListener("click", function() {
                    overlay.style.display = "none";
                });
                    content.appendChild(closeButton);
                });
            });
            overlay.appendChild(content);
            document.body.appendChild(overlay)
        }

    function people600 ()  {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = 9999;

    let content = document.createElement("div");
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.justifyContent = "center";
    content.style.alignItems = "center";
    content.style.backgroundColor = "#111159";
    content.style.border = "2px solid #AA24FF";
    content.style.borderRadius = "12px";
    content.style.color = "#FCB46A";
    content.style.fontWeight = "800";
    content.style.padding = "34px";
    content.innerHTML = 
    "Kur?? Ir Gar??kais Kauls Cilv??ka ??ermen???<br><br><button id='answer' value='Stilba kauls'>Stilba kauls (Tibia)</button><button id='answer' value='Aug??delma kauls'>Aug??delma kauls (Humerus)</button><button id='answer' value='Ciskas kauls'>Ciskas kauls (Femur)</button>";
    const answerInput = content.querySelectorAll("#answer");

    answerInput.forEach(answer => {
        answer.addEventListener("click", function() {
            var add600 = 600
            var eitnQuestion = document.getElementById("eitn-question")
            var changeAccordingly = document.getElementById("peopl600")
            if (answer.value === eitnQuestion.value) {
                content.style.backgroundColor = "green";
                content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 600 punktu.<br><br>";
                changeAccordingly.style.backgroundColor = "green";
                changeAccordingly.style.fontSize = "40px"
                // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add600);
            } else if (answer.value !== eitnQuestion.value) {
                content.innerHTML = 
                "J??s atbild??j??t nepareizi!<br><br>";
                content.style.backgroundColor = "red"
                changeAccordingly.style.backgroundColor = "red";
            }
                const closeButton = document.createElement("button");
                closeButton.style.width = "150px"
                closeButton.style.border = "2px solid gold"
                closeButton.style.backgroundColor = "#AA24FF"
                closeButton.style.color = "gold"
                closeButton.style.cursor = "pointer"
                closeButton.innerHTML = "Turpin??t";
                closeButton.addEventListener("click", function() {
                overlay.style.display = "none";
            });
                content.appendChild(closeButton);
            });
        });
        overlay.appendChild(content);
        document.body.appendChild(overlay)
        }

    function geo800() {
            console.log("test");
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = 9999;
      
            let content = document.createElement("div");
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.alignItems = "center";
            content.style.backgroundColor = "#111159";
            content.style.border = "2px solid #AA24FF";
            content.style.borderRadius = "12px";
            content.style.color = "#FCB46A";
            content.style.fontWeight = "800";
            content.style.padding = "34px";
            content.innerHTML = 
            "Gar??k?? Upe ??frik???<br><br><button id='answer' value='Zambezi'>Zambezi</button><button id='answer' value='Kongo'>Kongo</button><button id='answer' value='N??la'>N??la</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add800 = 800
                    var nithQuestion = document.getElementById("nith-question")
                    var changeAccordingly = document.getElementById("frontgeo800")
                    if (answer.value === nithQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 800 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add800);
                    } else if (answer.value !== nithQuestion.value) {
                        content.innerHTML = 
                        "J??s atbild??j??t nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpin??t";
                        closeButton.addEventListener("click", function() {
                        overlay.style.display = "none";
                    });
                        content.appendChild(closeButton);
                    });
                });
                overlay.appendChild(content);
                document.body.appendChild(overlay)
        }

    function song800() {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = 9999;
      
            let content = document.createElement("div");
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.alignItems = "center";
            content.style.backgroundColor = "#111159";
            content.style.border = "2px solid #AA24FF";
            content.style.borderRadius = "12px";
            content.style.color = "#FCB46A";
            content.style.fontWeight = "800";
            content.style.padding = "34px";
            content.innerHTML = 
            "Kura Dziesma Ieguva 2020 Grammy Balvu K?? 'Song Of The Year'?<br><br><button id='answer' value='Billie Eilish - Bad Guy'>Billie Eilish - Bad Guy</button><button id='answer' value='Lewis Capaldi - Someone You Loved'>Lewis Capaldi - Someone You Loved</button><button id='answer' value='Lil Nas X ft. Billy Ray Cyrus - Old Town Road'>'Lil Nas X ft. Billy Ray Cyrus - Old Town Road</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add800 = 800
                    var twenthhQuestion = document.getElementById("twenth-question")
                    var changeAccordingly = document.getElementById("frontd800")
                    if (answer.value === twenthhQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 800 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add800);
                    } else if (answer.value !== twenthhQuestion.value) {
                        content.innerHTML = 
                        "J??s atbild??j??t nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpin??t";
                        closeButton.addEventListener("click", function() {
                        overlay.style.display = "none";
                    });
                        content.appendChild(closeButton);
                    });
                });
                overlay.appendChild(content);
                document.body.appendChild(overlay)
        }

    function act800 () {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = 9999;
      
            let content = document.createElement("div");
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.alignItems = "center";
            content.style.backgroundColor = "#111159";
            content.style.border = "2px solid #AA24FF";
            content.style.borderRadius = "12px";
            content.style.color = "#FCB46A";
            content.style.fontWeight = "800";
            content.style.padding = "34px";
            content.innerHTML = 
            "Kur?? Aktieris Att??loja 'Indiana Jones' Galveno Lomu?<br><br><button id='answer' value='Tom Cruise'>Tom Cruise</button><button id='answer' value='Sean Connery'>Sean Connery</button><button id='answer' value='Harrison Ford'>Harrison Ford</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add800 = 800
                    var twenthoneQuestion = document.getElementById("twenthone-question")
                    var changeAccordingly = document.getElementById("fronta800")
                    if (answer.value === twenthoneQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 800 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add800);
                    } else if (answer.value !== twenthoneQuestion.value) {
                        content.innerHTML = 
                        "J??s atbild??j??t nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpin??t";
                        closeButton.addEventListener("click", function() {
                        overlay.style.display = "none";
                    });
                        content.appendChild(closeButton);
                    });
                });
                overlay.appendChild(content);
                document.body.appendChild(overlay)
        }

    function musicians800 () {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = 9999;
      
            let content = document.createElement("div");
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.alignItems = "center";
            content.style.backgroundColor = "#111159";
            content.style.border = "2px solid #AA24FF";
            content.style.borderRadius = "12px";
            content.style.color = "#FCB46A";
            content.style.fontWeight = "800";
            content.style.padding = "34px";
            content.innerHTML = 
            "Kur?? Ir Lead Singer Grup?? 'The Rolling Stones'?'<br><br><button id='answer' value='Steven Tyler'>Steven Tyler</button><button id='answer' value='Freddie Mercury'>Freddie Mercury</button><button id='answer' value='Mick Jagger'>Mick Jagger</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add800 = 800
                    var twenthtwoQuestion = document.getElementById("twenthtwo-question")
                    var changeAccordingly = document.getElementById("musician800")
                    if (answer.value === twenthtwoQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 600 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add800);
                    } else if (answer.value !== twenthtwoQuestion.value) {
                        content.innerHTML = 
                        "J??s atbild??j??t nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpin??t";
                        closeButton.addEventListener("click", function() {
                        overlay.style.display = "none";
                    });
                        content.appendChild(closeButton);
                    });
                });
                overlay.appendChild(content);
                document.body.appendChild(overlay)
        }

    function animals800 () {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = 9999;
  
        let content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexDirection = "column";
        content.style.justifyContent = "center";
        content.style.alignItems = "center";
        content.style.backgroundColor = "#111159";
        content.style.border = "2px solid #AA24FF";
        content.style.borderRadius = "12px";
        content.style.color = "#FCB46A";
        content.style.fontWeight = "800";
        content.style.padding = "34px";
        content.innerHTML = 
        "Kura No ????m Ziv??m Ir Zivs?<br><br><button id='answer' value='Zobenzivis'>Zobenzivis</button><button id='answer' value='Med??za'>Med??za</button><button id='answer' value='J??ras Zvaigzne'>J??ras Zvaigzne</button>";
        const answerInput = content.querySelectorAll("#answer");

        answerInput.forEach(answer => {
            answer.addEventListener("click", function() {
                var add800 = 800
                var twenththreeQuestion = document.getElementById("twenththree-question")
                var changeAccordingly = document.getElementById("animal800")
                if (answer.value === twenththreeQuestion.value) {
                    content.style.backgroundColor = "green";
                    content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 800 punktu.<br><br>";
                    changeAccordingly.style.backgroundColor = "green";
                    changeAccordingly.style.fontSize = "40px"
                    // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add800);
                } else if (answer.value !== twenththreeQuestion.value) {
                    content.innerHTML = 
                    "J??s atbild??j??t nepareizi!<br><br>";
                    content.style.backgroundColor = "red"
                    changeAccordingly.style.backgroundColor = "red";
                }
                    const closeButton = document.createElement("button");
                    closeButton.style.width = "150px"
                    closeButton.style.border = "2px solid gold"
                    closeButton.style.backgroundColor = "#AA24FF"
                    closeButton.style.color = "gold"
                    closeButton.style.cursor = "pointer"
                    closeButton.innerHTML = "Turpin??t";
                    closeButton.addEventListener("click", function() {
                    overlay.style.display = "none";
                });
                    content.appendChild(closeButton);
                });
            });
            overlay.appendChild(content);
            document.body.appendChild(overlay)
        }

    function people800 ()  {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = 9999;

    let content = document.createElement("div");
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.justifyContent = "center";
    content.style.alignItems = "center";
    content.style.backgroundColor = "#111159";
    content.style.border = "2px solid #AA24FF";
    content.style.borderRadius = "12px";
    content.style.color = "#FCB46A";
    content.style.fontWeight = "800";
    content.style.padding = "34px";
    content.innerHTML = 
    "J??t??g??kais Cilv??ka Org??ns?<br><br><button id='answer' value='Deguns (O??a)'>Deguns (O??a)</button><button id='answer' value='??da'>??da</button><button id='answer' value='Acis'>Acis</button>";
    const answerInput = content.querySelectorAll("#answer");

    answerInput.forEach(answer => {
        answer.addEventListener("click", function() {
            var add800 = 800
            var twenthtfourthQuestion = document.getElementById("twenthtfourth-question")
            var changeAccordingly = document.getElementById("peopl800")
            if (answer.value === twenthtfourthQuestion.value) {
                content.style.backgroundColor = "green";
                content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 800 punktu.<br><br>";
                changeAccordingly.style.backgroundColor = "green";
                changeAccordingly.style.fontSize = "40px"
                // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add800);
            } else if (answer.value !== twenthtfourthQuestion.value) {
                content.innerHTML = 
                "J??s atbild??j??t nepareizi!<br><br>";
                content.style.backgroundColor = "red"
                changeAccordingly.style.backgroundColor = "red";
            }
                const closeButton = document.createElement("button");
                closeButton.style.width = "150px"
                closeButton.style.border = "2px solid gold"
                closeButton.style.backgroundColor = "#AA24FF"
                closeButton.style.color = "gold"
                closeButton.style.cursor = "pointer"
                closeButton.innerHTML = "Turpin??t";
                closeButton.addEventListener("click", function() {
                overlay.style.display = "none";
            });
                content.appendChild(closeButton);
            });
        });
        overlay.appendChild(content);
        document.body.appendChild(overlay)
        }

    function geo1000() {
            console.log("test");
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = 9999;
      
            let content = document.createElement("div");
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.alignItems = "center";
            content.style.backgroundColor = "#111159";
            content.style.border = "2px solid #AA24FF";
            content.style.borderRadius = "12px";
            content.style.color = "#FCB46A";
            content.style.fontWeight = "800";
            content.style.padding = "34px";
            content.innerHTML = 
            "Pasaul?? Vismaz??k Apdz??voto Pils??ta?<br><br><button id='answer' value='Vatik??ns'>Vatik??ns</button><button id='answer' value='Al??ksne'>Al??ksne</button><button id='answer' value='Ngerulmuda'>Ngerulmuda</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add1000 = 1000
                    var twenthtfifthQuestion = document.getElementById("twenthtfifth-question")
                    var changeAccordingly = document.getElementById("frontgeo1000")
                    if (answer.value === twenthtfifthQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 1000 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add1000);
                    } else if (answer.value !== twenthtfifthQuestion.value) {
                        content.innerHTML = 
                        "J??s atbild??j??t nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpin??t";
                        closeButton.addEventListener("click", function() {
                        overlay.style.display = "none";
                    });
                        content.appendChild(closeButton);
                    });
                });
                overlay.appendChild(content);
                document.body.appendChild(overlay)
        }

    function song1000() {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = 9999;
      
            let content = document.createElement("div");
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.alignItems = "center";
            content.style.backgroundColor = "#111159";
            content.style.border = "2px solid #AA24FF";
            content.style.borderRadius = "12px";
            content.style.color = "#FCB46A";
            content.style.fontWeight = "800";
            content.style.padding = "34px";
            content.innerHTML = 
            "Kur?? Ir Dziesmas 'Work Hard Play Hard' Autors?<br><br><button id='answer' value='Dr. Dre'>Dr. Dre</button><button id='answer' value='Wiz Khalifa'>Wiz Khalifa</button><button id='answer' value='2Pac'>2Pac</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add1000 = 1000
                    var twentysixQuestion = document.getElementById("twentysix-question")
                    var changeAccordingly = document.getElementById("frontd1000")
                    if (answer.value === twentysixQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 1000 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add1000);
                    } else if (answer.value !== twentysixQuestion.value) {
                        content.innerHTML = 
                        "J??s atbild??j??t nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpin??t";
                        closeButton.addEventListener("click", function() {
                        overlay.style.display = "none";
                    });
                        content.appendChild(closeButton);
                    });
                });
                overlay.appendChild(content);
                document.body.appendChild(overlay)
        }

    function act1000 () {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = 9999;
      
            let content = document.createElement("div");
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.alignItems = "center";
            content.style.backgroundColor = "#111159";
            content.style.border = "2px solid #AA24FF";
            content.style.borderRadius = "12px";
            content.style.color = "#FCB46A";
            content.style.fontWeight = "800";
            content.style.padding = "34px";
            content.innerHTML = 
            "Kura Aktiere Atveidoja 'Moniku' Seri??l?? Sirds M?????? Monika?<br><br><button id='answer' value='Mirdza Martinsone'>Mirdza Martinsone</button><button id='answer' value='R??zija Kalni??a'>R??zija Kalni??a</button><button id='answer' value='D??rta Danevi??a'>D??rta Danevi??a</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add1000 = 1000
                    var twentysevenQuestion = document.getElementById("twentyseven-question")
                    var changeAccordingly = document.getElementById("fronta1000")
                    if (answer.value === twentysevenQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 600 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add1000);
                    } else if (answer.value !== twentysevenQuestion.value) {
                        content.innerHTML = 
                        "J??s atbild??j??t nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpin??t";
                        closeButton.addEventListener("click", function() {
                        overlay.style.display = "none";
                    });
                        content.appendChild(closeButton);
                    });
                });
                overlay.appendChild(content);
                document.body.appendChild(overlay)
        }

    function musicians1000 () {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = 9999;
      
            let content = document.createElement("div");
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.alignItems = "center";
            content.style.backgroundColor = "#111159";
            content.style.border = "2px solid #AA24FF";
            content.style.borderRadius = "12px";
            content.style.color = "#FCB46A";
            content.style.fontWeight = "800";
            content.style.padding = "34px";
            content.innerHTML = 
            "Kura Ir Vispopul??r??k?? Elvis Presley Dziesma?'<br><br><button id='answer' value='If I Can Dream'>If I Can Dream</button><button id='answer' value=Always On My Minds'>Always On My Mind</button><button id='answer' value='Cant Help Falling In Love'>Can't Help Falling In Love</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add1000 = 1000
                    var twentyeiQuestion = document.getElementById("twentyei-question")
                    var changeAccordingly = document.getElementById("musician1000")
                    if (answer.value === twentyeiQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 1000 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add1000);
                    } else if (answer.value !== twentyeiQuestion.value) {
                        content.innerHTML = 
                        "J??s atbild??j??t nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpin??t";
                        closeButton.addEventListener("click", function() {
                        overlay.style.display = "none";
                    });
                        content.appendChild(closeButton);
                    });
                });
                overlay.appendChild(content);
                document.body.appendChild(overlay)
        }

    function animals1000 () {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = 9999;
  
        let content = document.createElement("div");
        content.style.display = "flex";
        content.style.flexDirection = "column";
        content.style.justifyContent = "center";
        content.style.alignItems = "center";
        content.style.backgroundColor = "#111159";
        content.style.border = "2px solid #AA24FF";
        content.style.borderRadius = "12px";
        content.style.color = "#FCB46A";
        content.style.fontWeight = "800";
        content.style.padding = "34px";
        content.innerHTML = 
        "K?? D??v?? Daudz Flamingi Vienu Viet (Bars Ar Flamingo)?<br><br><button id='answer' value='Gan??mpulks'>Gan??mpulks</button><button id='answer' value='Spiets'>Spiets</button><button id='answer' value='Kolonija'>Kolonija</button>";
        const answerInput = content.querySelectorAll("#answer");

        answerInput.forEach(answer => {
            answer.addEventListener("click", function() {
                var add1000 = 1000
                var twentynineQuestion = document.getElementById("twentynine-question")
                var changeAccordingly = document.getElementById("animal1000")
                if (answer.value === twentynineQuestion.value) {
                    content.style.backgroundColor = "green";
                    content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 1000 punktu.<br><br>";
                    changeAccordingly.style.backgroundColor = "green";
                    changeAccordingly.style.fontSize = "40px"
                    // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add1000);
                } else if (answer.value !== twentynineQuestion.value) {
                    content.innerHTML = 
                    "J??s atbild??j??t nepareizi!<br><br>";
                    content.style.backgroundColor = "red"
                    changeAccordingly.style.backgroundColor = "red";
                }
                    const closeButton = document.createElement("button");
                    closeButton.style.width = "150px"
                    closeButton.style.border = "2px solid gold"
                    closeButton.style.backgroundColor = "#AA24FF"
                    closeButton.style.color = "gold"
                    closeButton.style.cursor = "pointer"
                    closeButton.innerHTML = "Turpin??t";
                    closeButton.addEventListener("click", function() {
                    overlay.style.display = "none";
                });
                    content.appendChild(closeButton);
                });
            });
            overlay.appendChild(content);
            document.body.appendChild(overlay)
        }

    function people1000 ()  {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = 9999;

    let content = document.createElement("div");
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.justifyContent = "center";
    content.style.alignItems = "center";
    content.style.backgroundColor = "#111159";
    content.style.border = "2px solid #AA24FF";
    content.style.borderRadius = "12px";
    content.style.color = "#FCB46A";
    content.style.fontWeight = "800";
    content.style.padding = "34px";
    content.innerHTML = 
    "Cik % No Kop??jiem Sk??bek??a Un Asins Resursiem Pat??r?? Smadzenes?<br><br><button id='answer' value='25%'>25%</button><button id='answer' value='20%'>20%</button><button id='answer' value='17%'>17%</button>";
    const answerInput = content.querySelectorAll("#answer");

    answerInput.forEach(answer => {
        answer.addEventListener("click", function() {
            var add1000 = 1000
            var thirtnhQuestion = document.getElementById("thirtnh-question")
            var changeAccordingly = document.getElementById("peopl1000")
            if (answer.value === thirtnhQuestion.value) {
                content.style.backgroundColor = "green";
                content.innerHTML = "J??s atbild??j??t pareizi!<br>J??su komanda ieguva 1000 punktu.<br><br>";
                changeAccordingly.style.backgroundColor = "green";
                changeAccordingly.style.fontSize = "40px"
                // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add1000);
            } else if (answer.value !== thirtnhQuestion.value) {
                content.innerHTML = 
                "J??s atbild??j??t nepareizi!<br><br>";
                content.style.backgroundColor = "red"
                changeAccordingly.style.backgroundColor = "red";
            }
                const closeButton = document.createElement("button");
                closeButton.style.width = "150px"
                closeButton.style.border = "2px solid gold"
                closeButton.style.backgroundColor = "#AA24FF"
                closeButton.style.color = "gold"
                closeButton.style.cursor = "pointer"
                closeButton.innerHTML = "Turpin??t";
                closeButton.addEventListener("click", function() {
                overlay.style.display = "none";
            });
                content.appendChild(closeButton);
            });
        });
        overlay.appendChild(content);
        document.body.appendChild(overlay)
        }