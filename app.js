document.addEventListener("DOMContentLoaded", function() {
    // const loadQuestions = document.querySelectorAll("#load-question");
    var changeAccordingly = document.getElementById("frontgeo200")
    var firstQuestion = document.getElementById("first-question")

    // var updateScoreT1 = document.getElementById("updateScoreT1")
    // var updateScoreT2 = document.getElementById("updateScoreT2")

    var g200 = document.getElementById("g200")
    var g400 = document.getElementById("g400")
    var g600 = document.getElementById("g600")
    var g800 = document.getElementById("g800")
    var g1000 = document.getElementById("g1000")
    var d200 = document.getElementById("d200")
    var d400 = document.getElementById("d400")
    var d600 = document.getElementById("d600")
    var d800 = document.getElementById("d800")
    var d1000 = document.getElementById("d1000")
    var a200 = document.getElementById("a200")
    var a400 = document.getElementById("a400")
    var a600 = document.getElementById("a600")
    var a800 = document.getElementById("a800")
    var a1000 = document.getElementById("a1000")
    var m200 = document.getElementById("m200")
    var m400 = document.getElementById("m400")
    var m600 = document.getElementById("m600")
    var m800 = document.getElementById("m800")
    var m1000 = document.getElementById("m1000")
    var dz200 = document.getElementById("dz200")
    var dz400 = document.getElementById("dz400")
    var dz600 = document.getElementById("dz600")
    var dz800 = document.getElementById("dz800")
    var dz1000 = document.getElementById("dz1000")
    var c200 = document.getElementById("c200")
    var c400 = document.getElementById("c400")
    var c600 = document.getElementById("c600")
    var c800 = document.getElementById("c800")
    var c1000 = document.getElementById("c1000")

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
        "Kura ir vecākā pilsēta Latvijā?<br><br><button id='answer' value='Ludza'>Ludza</button><button id='answer' value='Valmiera'>Valmiera</button><button id='answer' value='Cēsis'>Cēsis</button>";
        const answerInput = content.querySelectorAll("#answer");

        answerInput.forEach(answer => {
            answer.addEventListener("click", function() {
                var add200 = 200
                if (answer.value === firstQuestion.value) {
                    content.style.backgroundColor = "green";
                    content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 200 punktu.<br><br>";
                    changeAccordingly.style.backgroundColor = "green";
                    changeAccordingly.style.fontSize = "40px"
                    // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add200);
                } else if (answer.value !== firstQuestion.value) {
                    content.innerHTML = 
                    "Jūs atbildējāt nepareizi!<br><br>";
                    content.style.backgroundColor = "red"
                    changeAccordingly.style.backgroundColor = "red";
                }
                    const closeButton = document.createElement("button");
                    closeButton.style.width = "150px"
                    closeButton.style.border = "2px solid gold"
                    closeButton.style.backgroundColor = "#AA24FF"
                    closeButton.style.color = "gold"
                    closeButton.style.cursor = "pointer"
                    closeButton.innerHTML = "Turpināt";
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
        "Kā Sauc Latvijas Himnas Autoru?<br><br><button id='answer' value='Kalniņš Imants'>Kalniņš Imants</button><button id='answer' value='Kalniņš Alfrēds'>Kalniņš Alfrēds</button><button id='answer' value='Baumaņu Kārlis'>Baumaņu Kārlis</button>";
        const answerInput = content.querySelectorAll("#answer");

        answerInput.forEach(answer => {
            answer.addEventListener("click", function() {
                var add200 = 200
                var secondQuestion = document.getElementById("second-question")
                var changeAccordingly = document.getElementById("frontd200")
                if (answer.value === secondQuestion.value) {
                    content.style.backgroundColor = "green";
                    content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 200 punktu.<br><br>";
                    changeAccordingly.style.backgroundColor = "green";
                    changeAccordingly.style.fontSize = "40px"
                    // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add200);
                } else if (answer.value !== secondQuestion.value) {
                    content.innerHTML = 
                    "Jūs atbildējāt nepareizi!<br><br>";
                    content.style.backgroundColor = "red"
                    changeAccordingly.style.backgroundColor = "red";
                }
                    const closeButton = document.createElement("button");
                    closeButton.style.width = "150px"
                    closeButton.style.border = "2px solid gold"
                    closeButton.style.backgroundColor = "#AA24FF"
                    closeButton.style.color = "gold"
                    closeButton.style.cursor = "pointer"
                    closeButton.innerHTML = "Turpināt";
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
        "Galvenās Lomas Atveidotājs Filmā Titāniks?<br><br><button id='answer' value='Steven Seagal'>Steven Seagal</button><button id='answer' value='Leonardo Di Kaprio'>Leonardo Di Kaprio</button><button id='answer' value='Rowan Atkinson'>Rowan Atkinson</button>";
        const answerInput = content.querySelectorAll("#answer");

        answerInput.forEach(answer => {
            answer.addEventListener("click", function() {
                var add200 = 200
                var thirdQuestion = document.getElementById("third-question")
                var changeAccordingly = document.getElementById("fronta200")
                if (answer.value === thirdQuestion.value) {
                    content.style.backgroundColor = "green";
                    content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 200 punktu.<br><br>";
                    changeAccordingly.style.backgroundColor = "green";
                    changeAccordingly.style.fontSize = "40px"
                    // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add200);
                } else if (answer.value !== thirdQuestion.value) {
                    content.innerHTML = 
                    "Jūs atbildējāt nepareizi!<br><br>";
                    content.style.backgroundColor = "red"
                    changeAccordingly.style.backgroundColor = "red";
                }
                    const closeButton = document.createElement("button");
                    closeButton.style.width = "150px"
                    closeButton.style.border = "2px solid gold"
                    closeButton.style.backgroundColor = "#AA24FF"
                    closeButton.style.color = "gold"
                    closeButton.style.cursor = "pointer"
                    closeButton.innerHTML = "Turpināt";
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
        "Kādu Instrumentu Spēlē Ģitārists?<br><br><button id='answer' value='Klavieres'>Klavieres</button><button id='answer' value='Bungas'>Bungas</button><button id='answer' value='Ģitāru'>Ģitāru</button>";
        const answerInput = content.querySelectorAll("#answer");

        answerInput.forEach(answer => {
            answer.addEventListener("click", function() {
                var add200 = 200
                var forthQuestion = document.getElementById("forth-question")
                var changeAccordingly = document.getElementById("musician200")
                if (answer.value === forthQuestion.value) {
                    content.style.backgroundColor = "green";
                    content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 200 punktu.<br><br>";
                    changeAccordingly.style.backgroundColor = "green";
                    changeAccordingly.style.fontSize = "40px"
                    // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add200);
                } else if (answer.value !== forthQuestion.value) {
                    content.innerHTML = 
                    "Jūs atbildējāt nepareizi!<br><br>";
                    content.style.backgroundColor = "red"
                    changeAccordingly.style.backgroundColor = "red";
                }
                    const closeButton = document.createElement("button");
                    closeButton.style.width = "150px"
                    closeButton.style.border = "2px solid gold"
                    closeButton.style.backgroundColor = "#AA24FF"
                    closeButton.style.color = "gold"
                    closeButton.style.cursor = "pointer"
                    closeButton.innerHTML = "Turpināt";
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
        "Kuram Dzīvniekam Ir garš kakls un Plankumi?<br><br><button id='answer' value='Žirafe'>Žirafe</button><button id='answer' value='Zebra'>Zebra</button><button id='answer' value='Zīlonis'>Zīlonis</button>";
        const answerInput = content.querySelectorAll("#answer");

        answerInput.forEach(answer => {
            answer.addEventListener("click", function() {
                var add200 = 200
                var fifthQuestion = document.getElementById("fifth-question")
                var changeAccordingly = document.getElementById("animal200")
                if (answer.value === fifthQuestion.value) {
                    content.style.backgroundColor = "green";
                    content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 200 punktu.<br><br>";
                    changeAccordingly.style.backgroundColor = "green";
                    changeAccordingly.style.fontSize = "40px"
                    // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add200);
                } else if (answer.value !== fifthQuestion.value) {
                    content.innerHTML = 
                    "Jūs atbildējāt nepareizi!<br><br>";
                    content.style.backgroundColor = "red"
                    changeAccordingly.style.backgroundColor = "red";
                }
                    const closeButton = document.createElement("button");
                    closeButton.style.width = "150px"
                    closeButton.style.border = "2px solid gold"
                    closeButton.style.backgroundColor = "#AA24FF"
                    closeButton.style.color = "gold"
                    closeButton.style.cursor = "pointer"
                    closeButton.innerHTML = "Turpināt";
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
        "Kura Ķermeņa Daļa Tiek Izmantota Ožai?<br><br><button id='answer' value='Deguns'>Deguns</button><button id='answer' value='Ausis'>Ausis</button><button id='answer' value='Kājas'>Kājas</button>";
        const answerInput = content.querySelectorAll("#answer");

        answerInput.forEach(answer => {
            answer.addEventListener("click", function() {
                var add200 = 200
                var sixthQuestion = document.getElementById("sixth-question")
                var changeAccordingly = document.getElementById("peopl200")
                if (answer.value === sixthQuestion.value) {
                    content.style.backgroundColor = "green";
                    content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 200 punktu.<br><br>";
                    changeAccordingly.style.backgroundColor = "green";
                    changeAccordingly.style.fontSize = "40px"
                    // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add200);
                } else if (answer.value !== sixthQuestion.value) {
                    content.innerHTML = 
                    "Jūs atbildējāt nepareizi!<br><br>";
                    content.style.backgroundColor = "red"
                    changeAccordingly.style.backgroundColor = "red";
                }
                    const closeButton = document.createElement("button");
                    closeButton.style.width = "150px"
                    closeButton.style.border = "2px solid gold"
                    closeButton.style.backgroundColor = "#AA24FF"
                    closeButton.style.color = "gold"
                    closeButton.style.cursor = "pointer"
                    closeButton.innerHTML = "Turpināt";
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
            "Kurš Ir Lielākais Kontinents?<br><br><button id='answer' value='Āfrika'>Āfrika</button><button id='answer' value='Āzija'>Āzija</button><button id='answer' value='Austrālija'>Austrālija</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add400 = 400
                    var secondQuestion = document.getElementById("seventh-question")
                    var changeAccordingly = document.getElementById("frontgeo400")
                    if (answer.value === secondQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 400 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add400);
                    } else if (answer.value !== secondQuestion.value) {
                        content.innerHTML = 
                        "Jūs atbildējāt nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpināt";
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
                "Populārākais Mūzikas Novirziens Pasaulē?<br><br><button id='answer' value='Roks'>Roks</button><button id='answer' value='Hip-Hop/Rap'>Hip-Hop/Rap</button><button id='answer' value='Pop'>Pop</button>";
                const answerInput = content.querySelectorAll("#answer");
        
                answerInput.forEach(answer => {
                    answer.addEventListener("click", function() {
                        var add400 = 400
                        var eithQuestion = document.getElementById("eith-question")
                        var changeAccordingly = document.getElementById("frontd400")
                        if (answer.value === eithQuestion.value) {
                            content.style.backgroundColor = "green";
                            content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 400 punktu.<br><br>";
                            changeAccordingly.style.backgroundColor = "green";
                            changeAccordingly.style.fontSize = "40px"
                            // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add400);
                        } else if (answer.value !== eithQuestion.value) {
                            content.innerHTML = 
                            "Jūs atbildējāt nepareizi!<br><br>";
                            content.style.backgroundColor = "red"
                            changeAccordingly.style.backgroundColor = "red";
                        }
                            const closeButton = document.createElement("button");
                            closeButton.style.width = "150px"
                            closeButton.style.border = "2px solid gold"
                            closeButton.style.backgroundColor = "#AA24FF"
                            closeButton.style.color = "gold"
                            closeButton.style.cursor = "pointer"
                            closeButton.innerHTML = "Turpināt";
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
            "Kurš Ieguva Labākā Aktiera Tituli 2022 Gadā?<br><br><button id='answer' value='Anthony Hopkins'>Anthony Hopkins</button><button id='answer' value='Gary Oldman'>Gary Oldman</button><button id='answer' value='Tom Hanks'>Tom Hanks</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add400 = 400
                    var ninthQuestion = document.getElementById("ninth-question")
                    var changeAccordingly = document.getElementById("fronta400")
                    if (answer.value === ninthQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 400 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add400);
                    } else if (answer.value !== ninthQuestion.value) {
                        content.innerHTML = 
                        "Jūs atbildējāt nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpināt";
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
                "Kura Māksliniece Ir Zināma Kā 'Queen Of Pop?'<br><br><button id='answer' value='Madonna'>Madonna</button><button id='answer' value='Mariah Carey'>Mariah Carey</button><button id='answer' value='Whitney Houston'>Whitney Houston</button>";
                const answerInput = content.querySelectorAll("#answer");
        
                answerInput.forEach(answer => {
                    answer.addEventListener("click", function() {
                        var add400 = 400
                        var tenthQuestion = document.getElementById("tenth-question")
                        var changeAccordingly = document.getElementById("musician400")
                        if (answer.value === tenthQuestion.value) {
                            content.style.backgroundColor = "green";
                            content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 400 punktu.<br><br>";
                            changeAccordingly.style.backgroundColor = "green";
                            changeAccordingly.style.fontSize = "40px"
                            // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add400);
                        } else if (answer.value !== tenthQuestion.value) {
                            content.innerHTML = 
                            "Jūs atbildējāt nepareizi!<br><br>";
                            content.style.backgroundColor = "red"
                            changeAccordingly.style.backgroundColor = "red";
                        }
                            const closeButton = document.createElement("button");
                            closeButton.style.width = "150px"
                            closeButton.style.border = "2px solid gold"
                            closeButton.style.backgroundColor = "#AA24FF"
                            closeButton.style.color = "gold"
                            closeButton.style.cursor = "pointer"
                            closeButton.innerHTML = "Turpināt";
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
                    "Lielākais Zīdītājs Uz Zemes?<br><br><button id='answer' value='Nīlzirgs'>Nīlszirgs</button><button id='answer' value='Grizlij Lācis'>Grizlij Lācis</button><button id='answer' value='Āfrikas Zīlonis'>Āfrikas Zīlonis</button>";
                    const answerInput = content.querySelectorAll("#answer");
            
                    answerInput.forEach(answer => {
                        answer.addEventListener("click", function() {
                            var add400 = 400
                            var eleventhQuestion = document.getElementById("eleventh-question")
                            var changeAccordingly = document.getElementById("animal400")
                            if (answer.value === eleventhQuestion.value) {
                                content.style.backgroundColor = "green";
                                content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 400 punktu.<br><br>";
                                changeAccordingly.style.backgroundColor = "green";
                                changeAccordingly.style.fontSize = "40px"
                                // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add400);
                            } else if (answer.value !== eleventhQuestion.value) {
                                content.innerHTML = 
                                "Jūs atbildējāt nepareizi!<br><br>";
                                content.style.backgroundColor = "red"
                                changeAccordingly.style.backgroundColor = "red";
                            }
                                const closeButton = document.createElement("button");
                                closeButton.style.width = "150px"
                                closeButton.style.border = "2px solid gold"
                                closeButton.style.backgroundColor = "#AA24FF"
                                closeButton.style.color = "gold"
                                closeButton.style.cursor = "pointer"
                                closeButton.innerHTML = "Turpināt";
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
            "Kurš Ir Lielākais Orgāns Cilvēka Ķermenī?<br><br><button id='answer' value='Aknas'>Aknas</button><button id='answer' value='Plaušas'>Plaušas</button><button id='answer' value='Āda'>Āda</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add400 = 400
                    var twelvethQuestion = document.getElementById("twelveth-question")
                    var changeAccordingly = document.getElementById("peopl400")
                    if (answer.value === twelvethQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 400 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add400);
                    } else if (answer.value !== twelvethQuestion.value) {
                        content.innerHTML = 
                        "Jūs atbildējāt nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpināt";
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
            "Kura Ir Francijas Galvas Pilsēta?<br><br><button id='answer' value='Parīze'>Parīze</button><button id='answer' value='Berlīne'>Berlīne</button><button id='answer' value='Madride'>Madride</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add600 = 600
                    var trnthQuestion = document.getElementById("trnth-question")
                    var changeAccordingly = document.getElementById("frontgeo600")
                    if (answer.value === trnthQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 600 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add600);
                    } else if (answer.value !== trnthQuestion.value) {
                        content.innerHTML = 
                        "Jūs atbildējāt nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpināt";
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
            "Kurš No Šiem Singliem Ir Vispārdotākais Singls Jebkad?<br><br><button id='answer' value='Ed Sheeran - Shape of You'>Ed Sheeran - Shape of You</button><button id='answer' value='Queen - Bohemian Rhapsody'>Queen - Bohemian Rhapsody</button><button id='answer' value='Michael Jackson - Billie Jean'>Michael Jackson - Billie Jean</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add600 = 600
                    var frtnthQuestion = document.getElementById("frtnth-question")
                    var changeAccordingly = document.getElementById("frontd600")
                    if (answer.value === frtnthQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 600 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add600);
                    } else if (answer.value !== frtnthQuestion.value) {
                        content.innerHTML = 
                        "Jūs atbildējāt nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpināt";
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
            "Kurš Ieguva Oskara Balvu Kā Labākais Aktieris Filmā 'The Godfather'?<br><br><button id='answer' value='Marlon Brando'>Marlon Brando</button><button id='answer' value='Al Pacino'>Al Pacino</button><button id='answer' value='Robert De Niro'>Robert De Niro</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add600 = 600
                    var fifthnthQuestion = document.getElementById("fifthnth-question")
                    var changeAccordingly = document.getElementById("fronta600")
                    if (answer.value === fifthnthQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 600 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add600);
                    } else if (answer.value !== fifthnthQuestion.value) {
                        content.innerHTML = 
                        "Jūs atbildējāt nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpināt";
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
            "Kurš Ir Lead Singer Grupā 'Queen'?'<br><br><button id='answer' value='Freddie Starr'>Freddie Starr</button><button id='answer' value='Elvis Presley'>Elvis Presley</button><button id='answer' value='Freddie Mercury'>Freddie Mercury</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add600 = 600
                    var sixtnthQuestion = document.getElementById("sixtnth-question")
                    var changeAccordingly = document.getElementById("musician600")
                    if (answer.value === sixtnthQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 600 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add600);
                    } else if (answer.value !== sixtnthQuestion.value) {
                        content.innerHTML = 
                        "Jūs atbildējāt nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpināt";
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
        "Kurš ir Ātrākais Dzīvnieks uz Zemes?<br><br><button id='answer' value='Gepards'>Gepards</button><button id='answer' value='Leopards'>Leopards</button><button id='answer' value='Lauva'>Lauva</button>";
        const answerInput = content.querySelectorAll("#answer");

        answerInput.forEach(answer => {
            answer.addEventListener("click", function() {
                var add600 = 600
                var seventhnQuestion = document.getElementById("seventhn-question")
                var changeAccordingly = document.getElementById("animal600")
                if (answer.value === seventhnQuestion.value) {
                    content.style.backgroundColor = "green";
                    content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 600 punktu.<br><br>";
                    changeAccordingly.style.backgroundColor = "green";
                    changeAccordingly.style.fontSize = "40px"
                    // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add600);
                } else if (answer.value !== seventhnQuestion.value) {
                    content.innerHTML = 
                    "Jūs atbildējāt nepareizi!<br><br>";
                    content.style.backgroundColor = "red"
                    changeAccordingly.style.backgroundColor = "red";
                }
                    const closeButton = document.createElement("button");
                    closeButton.style.width = "150px"
                    closeButton.style.border = "2px solid gold"
                    closeButton.style.backgroundColor = "#AA24FF"
                    closeButton.style.color = "gold"
                    closeButton.style.cursor = "pointer"
                    closeButton.innerHTML = "Turpināt";
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
    "Kurš Ir Garākais Kauls Cilvēka Ķermenī?<br><br><button id='answer' value='Stilba kauls'>Stilba kauls (Tibia)</button><button id='answer' value='Augšdelma kauls'>Augšdelma kauls (Humerus)</button><button id='answer' value='Ciskas kauls'>Ciskas kauls (Femur)</button>";
    const answerInput = content.querySelectorAll("#answer");

    answerInput.forEach(answer => {
        answer.addEventListener("click", function() {
            var add600 = 600
            var eitnQuestion = document.getElementById("eitn-question")
            var changeAccordingly = document.getElementById("peopl600")
            if (answer.value === eitnQuestion.value) {
                content.style.backgroundColor = "green";
                content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 600 punktu.<br><br>";
                changeAccordingly.style.backgroundColor = "green";
                changeAccordingly.style.fontSize = "40px"
                // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add600);
            } else if (answer.value !== eitnQuestion.value) {
                content.innerHTML = 
                "Jūs atbildējāt nepareizi!<br><br>";
                content.style.backgroundColor = "red"
                changeAccordingly.style.backgroundColor = "red";
            }
                const closeButton = document.createElement("button");
                closeButton.style.width = "150px"
                closeButton.style.border = "2px solid gold"
                closeButton.style.backgroundColor = "#AA24FF"
                closeButton.style.color = "gold"
                closeButton.style.cursor = "pointer"
                closeButton.innerHTML = "Turpināt";
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
            "Garākā Upe Āfrikā?<br><br><button id='answer' value='Zambezi'>Zambezi</button><button id='answer' value='Kongo'>Kongo</button><button id='answer' value='Nīla'>Nīla</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add800 = 800
                    var nithQuestion = document.getElementById("nith-question")
                    var changeAccordingly = document.getElementById("frontgeo800")
                    if (answer.value === nithQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 800 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add800);
                    } else if (answer.value !== nithQuestion.value) {
                        content.innerHTML = 
                        "Jūs atbildējāt nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpināt";
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
            "Kura Dziesma Ieguva 2020 Grammy Balvu Kā 'Song Of The Year'?<br><br><button id='answer' value='Billie Eilish - Bad Guy'>Billie Eilish - Bad Guy</button><button id='answer' value='Lewis Capaldi - Someone You Loved'>Lewis Capaldi - Someone You Loved</button><button id='answer' value='Lil Nas X ft. Billy Ray Cyrus - Old Town Road'>'Lil Nas X ft. Billy Ray Cyrus - Old Town Road</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add800 = 800
                    var twenthhQuestion = document.getElementById("twenth-question")
                    var changeAccordingly = document.getElementById("frontd800")
                    if (answer.value === twenthhQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 800 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add800);
                    } else if (answer.value !== twenthhQuestion.value) {
                        content.innerHTML = 
                        "Jūs atbildējāt nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpināt";
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
            "Kurš Aktieris Attēloja 'Indiana Jones' Galveno Lomu?<br><br><button id='answer' value='Tom Cruise'>Tom Cruise</button><button id='answer' value='Sean Connery'>Sean Connery</button><button id='answer' value='Harrison Ford'>Harrison Ford</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add800 = 800
                    var twenthoneQuestion = document.getElementById("twenthone-question")
                    var changeAccordingly = document.getElementById("fronta800")
                    if (answer.value === twenthoneQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 800 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add800);
                    } else if (answer.value !== twenthoneQuestion.value) {
                        content.innerHTML = 
                        "Jūs atbildējāt nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpināt";
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
            "Kurš Ir Lead Singer Grupā 'The Rolling Stones'?'<br><br><button id='answer' value='Steven Tyler'>Steven Tyler</button><button id='answer' value='Freddie Mercury'>Freddie Mercury</button><button id='answer' value='Mick Jagger'>Mick Jagger</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add800 = 800
                    var twenthtwoQuestion = document.getElementById("twenthtwo-question")
                    var changeAccordingly = document.getElementById("musician800")
                    if (answer.value === twenthtwoQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 600 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add800);
                    } else if (answer.value !== twenthtwoQuestion.value) {
                        content.innerHTML = 
                        "Jūs atbildējāt nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpināt";
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
        "Kura No Šīm Zivīm Ir Zivs?<br><br><button id='answer' value='Zobenzivis'>Zobenzivis</button><button id='answer' value='Medūza'>Medūza</button><button id='answer' value='Jūras Zvaigzne'>Jūras Zvaigzne</button>";
        const answerInput = content.querySelectorAll("#answer");

        answerInput.forEach(answer => {
            answer.addEventListener("click", function() {
                var add800 = 800
                var twenththreeQuestion = document.getElementById("twenththree-question")
                var changeAccordingly = document.getElementById("animal800")
                if (answer.value === twenththreeQuestion.value) {
                    content.style.backgroundColor = "green";
                    content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 800 punktu.<br><br>";
                    changeAccordingly.style.backgroundColor = "green";
                    changeAccordingly.style.fontSize = "40px"
                    // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add800);
                } else if (answer.value !== twenththreeQuestion.value) {
                    content.innerHTML = 
                    "Jūs atbildējāt nepareizi!<br><br>";
                    content.style.backgroundColor = "red"
                    changeAccordingly.style.backgroundColor = "red";
                }
                    const closeButton = document.createElement("button");
                    closeButton.style.width = "150px"
                    closeButton.style.border = "2px solid gold"
                    closeButton.style.backgroundColor = "#AA24FF"
                    closeButton.style.color = "gold"
                    closeButton.style.cursor = "pointer"
                    closeButton.innerHTML = "Turpināt";
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
    "Jūtīgākais Cilvēka Orgāns?<br><br><button id='answer' value='Deguns (Oža)'>Deguns (Oža)</button><button id='answer' value='Āda'>Āda</button><button id='answer' value='Acis'>Acis</button>";
    const answerInput = content.querySelectorAll("#answer");

    answerInput.forEach(answer => {
        answer.addEventListener("click", function() {
            var add800 = 800
            var twenthtfourthQuestion = document.getElementById("twenthtfourth-question")
            var changeAccordingly = document.getElementById("peopl800")
            if (answer.value === twenthtfourthQuestion.value) {
                content.style.backgroundColor = "green";
                content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 800 punktu.<br><br>";
                changeAccordingly.style.backgroundColor = "green";
                changeAccordingly.style.fontSize = "40px"
                // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add800);
            } else if (answer.value !== twenthtfourthQuestion.value) {
                content.innerHTML = 
                "Jūs atbildējāt nepareizi!<br><br>";
                content.style.backgroundColor = "red"
                changeAccordingly.style.backgroundColor = "red";
            }
                const closeButton = document.createElement("button");
                closeButton.style.width = "150px"
                closeButton.style.border = "2px solid gold"
                closeButton.style.backgroundColor = "#AA24FF"
                closeButton.style.color = "gold"
                closeButton.style.cursor = "pointer"
                closeButton.innerHTML = "Turpināt";
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
            "Pasaulē Vismazāk Apdzīvoto Pilsēta?<br><br><button id='answer' value='Vatikāns'>Vatikāns</button><button id='answer' value='Alūksne'>Alūksne</button><button id='answer' value='Ngerulmuda'>Ngerulmuda</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add1000 = 1000
                    var twenthtfifthQuestion = document.getElementById("twenthtfifth-question")
                    var changeAccordingly = document.getElementById("frontgeo1000")
                    if (answer.value === twenthtfifthQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 1000 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add1000);
                    } else if (answer.value !== twenthtfifthQuestion.value) {
                        content.innerHTML = 
                        "Jūs atbildējāt nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpināt";
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
            "Kurš Ir Dziesmas 'Work Hard Play Hard' Autors?<br><br><button id='answer' value='Dr. Dre'>Dr. Dre</button><button id='answer' value='Wiz Khalifa'>Wiz Khalifa</button><button id='answer' value='2Pac'>2Pac</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add1000 = 1000
                    var twentysixQuestion = document.getElementById("twentysix-question")
                    var changeAccordingly = document.getElementById("frontd1000")
                    if (answer.value === twentysixQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 1000 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add1000);
                    } else if (answer.value !== twentysixQuestion.value) {
                        content.innerHTML = 
                        "Jūs atbildējāt nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpināt";
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
            "Kura Aktiere Atveidoja 'Moniku' Seriālā Sirds Mīļā Monika?<br><br><button id='answer' value='Mirdza Martinsone'>Mirdza Martinsone</button><button id='answer' value='Rēzija Kalniņa'>Rēzija Kalniņa</button><button id='answer' value='Dārta Daneviča'>Dārta Daneviča</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add1000 = 1000
                    var twentysevenQuestion = document.getElementById("twentyseven-question")
                    var changeAccordingly = document.getElementById("fronta1000")
                    if (answer.value === twentysevenQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 600 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add1000);
                    } else if (answer.value !== twentysevenQuestion.value) {
                        content.innerHTML = 
                        "Jūs atbildējāt nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpināt";
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
            "Kura Ir Vispopulārākā Elvis Presley Dziesma?'<br><br><button id='answer' value='If I Can Dream'>If I Can Dream</button><button id='answer' value=Always On My Minds'>Always On My Mind</button><button id='answer' value='Cant Help Falling In Love'>Can't Help Falling In Love</button>";
            const answerInput = content.querySelectorAll("#answer");
    
            answerInput.forEach(answer => {
                answer.addEventListener("click", function() {
                    var add1000 = 1000
                    var twentyeiQuestion = document.getElementById("twentyei-question")
                    var changeAccordingly = document.getElementById("musician1000")
                    if (answer.value === twentyeiQuestion.value) {
                        content.style.backgroundColor = "green";
                        content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 1000 punktu.<br><br>";
                        changeAccordingly.style.backgroundColor = "green";
                        changeAccordingly.style.fontSize = "40px"
                        // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add1000);
                    } else if (answer.value !== twentyeiQuestion.value) {
                        content.innerHTML = 
                        "Jūs atbildējāt nepareizi!<br><br>";
                        content.style.backgroundColor = "red"
                        changeAccordingly.style.backgroundColor = "red";
                    }
                        const closeButton = document.createElement("button");
                        closeButton.style.width = "150px"
                        closeButton.style.border = "2px solid gold"
                        closeButton.style.backgroundColor = "#AA24FF"
                        closeButton.style.color = "gold"
                        closeButton.style.cursor = "pointer"
                        closeButton.innerHTML = "Turpināt";
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
        "Kā Dēvē Daudz Flamingi Vienu Viet (Bars Ar Flamingo)?<br><br><button id='answer' value='Ganāmpulks'>Ganāmpulks</button><button id='answer' value='Spiets'>Spiets</button><button id='answer' value='Kolonija'>Kolonija</button>";
        const answerInput = content.querySelectorAll("#answer");

        answerInput.forEach(answer => {
            answer.addEventListener("click", function() {
                var add1000 = 1000
                var twentynineQuestion = document.getElementById("twentynine-question")
                var changeAccordingly = document.getElementById("animal1000")
                if (answer.value === twentynineQuestion.value) {
                    content.style.backgroundColor = "green";
                    content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 1000 punktu.<br><br>";
                    changeAccordingly.style.backgroundColor = "green";
                    changeAccordingly.style.fontSize = "40px"
                    // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add1000);
                } else if (answer.value !== twentynineQuestion.value) {
                    content.innerHTML = 
                    "Jūs atbildējāt nepareizi!<br><br>";
                    content.style.backgroundColor = "red"
                    changeAccordingly.style.backgroundColor = "red";
                }
                    const closeButton = document.createElement("button");
                    closeButton.style.width = "150px"
                    closeButton.style.border = "2px solid gold"
                    closeButton.style.backgroundColor = "#AA24FF"
                    closeButton.style.color = "gold"
                    closeButton.style.cursor = "pointer"
                    closeButton.innerHTML = "Turpināt";
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
    "Cik % No Kopējiem Skābekļa Un Asins Resursiem Patērē Smadzenes?<br><br><button id='answer' value='25%'>25%</button><button id='answer' value='20%'>20%</button><button id='answer' value='17%'>17%</button>";
    const answerInput = content.querySelectorAll("#answer");

    answerInput.forEach(answer => {
        answer.addEventListener("click", function() {
            var add1000 = 1000
            var thirtnhQuestion = document.getElementById("thirtnh-question")
            var changeAccordingly = document.getElementById("peopl1000")
            if (answer.value === thirtnhQuestion.value) {
                content.style.backgroundColor = "green";
                content.innerHTML = "Jūs atbildējāt pareizi!<br>Jūsu komanda ieguva 1000 punktu.<br><br>";
                changeAccordingly.style.backgroundColor = "green";
                changeAccordingly.style.fontSize = "40px"
                // updateScoreT1.innerText = Number(updateScoreT1.innerText) + Number(add1000);
            } else if (answer.value !== thirtnhQuestion.value) {
                content.innerHTML = 
                "Jūs atbildējāt nepareizi!<br><br>";
                content.style.backgroundColor = "red"
                changeAccordingly.style.backgroundColor = "red";
            }
                const closeButton = document.createElement("button");
                closeButton.style.width = "150px"
                closeButton.style.border = "2px solid gold"
                closeButton.style.backgroundColor = "#AA24FF"
                closeButton.style.color = "gold"
                closeButton.style.cursor = "pointer"
                closeButton.innerHTML = "Turpināt";
                closeButton.addEventListener("click", function() {
                overlay.style.display = "none";
            });
                content.appendChild(closeButton);
            });
        });
        overlay.appendChild(content);
        document.body.appendChild(overlay)
        }