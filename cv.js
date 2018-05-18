    var elem1 = document.getElementById("barre1");
    var text1 = document.getElementById("text1");
    var width1 = 1;
    var id1 = setInterval(frame1, 40);
    function frame1() {
        if (width1 >= 70) {
            clearInterval(id1);
        }

        else {
            width1++;
            elem1.style.width = width1 + '%';
            text1.textContent= width1 + '%';
        }
        }



    var elem2 = document.getElementById("barre2");
    var text2 = document.getElementById("text2");
    var width2 = 1;
    var id2 = setInterval(frame2, 40);
    function frame2() {
        if (width2 >= 60) {
            clearInterval(id2);
        }

        else {
            width2++;
            elem2.style.width = width2 + '%';
            text2.textContent= width2 + '%';
        }
        }



    var elem3 = document.getElementById("barre3");
    var text3 = document.getElementById("text3");
    var width3 = 1;
    var id3 = setInterval(frame3, 40);
    function frame3() {
        if (width3 >= 40) {
            clearInterval(id3);
        }

        else {
            width3++;
            elem3.style.width = width3 + '%';
            text3.textContent= width3 + '%';
        }
        }



    var elem4 = document.getElementById("barre4");
    var text4 = document.getElementById("text4");
    var width4 = 1;
    var id4 = setInterval(frame4, 40);
    function frame4() {
        if (width4 >= 80) {
            clearInterval(id4);
        }

        else {
            width4++;
            elem4.style.width = width4 + '%';
            text4.textContent= width4 + '%';
        }
        }