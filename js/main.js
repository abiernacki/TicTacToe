var gra = 1;

function nacisnijPrzycisk(guzik){

    if(gra == 1){

    document.getElementById(guzik).value="X";

    gra -=1;

    document.getElementById(guzik).disabled="disabled";

    zwyciestwo();

    } else {

    document.getElementById(guzik).value="O";

    gra +=1;

    document.getElementById(guzik).disabled="disabled";

    zwyciestwo();

    }
}

function zwyciestwo(){

    if ((document.getElementById('przycisk1').value=="X" &&
       document.getElementById('przycisk2').value=="X"&&
       document.getElementById('przycisk3').value=="X")
       || (document.getElementById('przycisk4').value=="X" &&
           document.getElementById('przycisk5').value=="X"&&
           document.getElementById('przycisk6').value=="X")
           || (document.getElementById('przycisk7').value=="X" &&
               document.getElementById('przycisk8').value=="X"&&
               document.getElementById('przycisk9').value=="X")
               || (document.getElementById('przycisk1').value=="X" &&
                   document.getElementById('przycisk4').value=="X"&&
                   document.getElementById('przycisk7').value=="X")
                   || (document.getElementById('przycisk2').value=="X" &&
                       document.getElementById('przycisk5').value=="X"&&
                       document.getElementById('przycisk8').value=="X")
                       || (document.getElementById('przycisk3').value=="X" &&
                           document.getElementById('przycisk6').value=="X"&&
                           document.getElementById('przycisk9').value=="X")
                           || (document.getElementById('przycisk1').value=="X" &&
                               document.getElementById('przycisk5').value=="X"&&
                               document.getElementById('przycisk9').value=="X")
                               || (document.getElementById('przycisk3').value=="X" &&
                                   document.getElementById('przycisk5').value=="X"&&
                                   document.getElementById('przycisk7').value=="X")){

    document.write("<img src='images/minionki3.png' width=100% height=98%>") 
    reset();

    } else if ((document.getElementById('przycisk1').value=="O" &&
    document.getElementById('przycisk2').value=="O"&&
    document.getElementById('przycisk3').value=="O")
    || (document.getElementById('przycisk4').value=="O" &&
        document.getElementById('przycisk5').value=="O"&&
        document.getElementById('przycisk6').value=="O")
        || (document.getElementById('przycisk7').value=="O" &&
            document.getElementById('przycisk8').value=="O"&&
            document.getElementById('przycisk9').value=="O")
            || (document.getElementById('przycisk1').value=="O" &&
                document.getElementById('przycisk4').value=="O"&&
                document.getElementById('przycisk7').value=="O")
                || (document.getElementById('przycisk2').value=="O" &&
                    document.getElementById('przycisk5').value=="O"&&
                    document.getElementById('przycisk8').value=="O")
                    || (document.getElementById('przycisk3').value=="O" &&
                        document.getElementById('przycisk6').value=="O"&&
                        document.getElementById('przycisk9').value=="O")
                        || (document.getElementById('przycisk1').value=="O" &&
                            document.getElementById('przycisk5').value=="O"&&
                            document.getElementById('przycisk9').value=="O")
                            || (document.getElementById('przycisk3').value=="O" &&
                                document.getElementById('przycisk5').value=="O"&&
                                document.getElementById('przycisk7').value=="O")){

 document.write("<img src='images/minionki1.png' width=100% height=98%>") 
 reset();
    }
}

function reset(){

    document.getElementById('przycisk1').value="";
    document.getElementById('przycisk2').value="";
    document.getElementById('przycisk3').value="";
    document.getElementById('przycisk4').value="";
    document.getElementById('przycisk5').value="";
    document.getElementById('przycisk6').value="";
    document.getElementById('przycisk7').value="";
    document.getElementById('przycisk8').value="";
    document.getElementById('przycisk9').value="";

    document.getElementById('przycisk1').disabled="";
    document.getElementById('przycisk2').disabled="";
    document.getElementById('przycisk3').disabled="";
    document.getElementById('przycisk4').disabled="";
    document.getElementById('przycisk5').disabled="";
    document.getElementById('przycisk6').disabled="";
    document.getElementById('przycisk7').disabled="";
    document.getElementById('przycisk8').disabled="";
    document.getElementById('przycisk9').disabled="";
}
