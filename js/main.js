$(document).ready(function($) {

function matrixArray(rows,columns){
  var arr = new Array();
  for(var i=0; i<columns; i++){
    arr[i] = new Array();
    for(var j=0; j<rows; j++){
      arr[i][j] = '';//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
    }
  }
  return arr;
}
var myMatrix = matrixArray(3,3);


    var dfs ="<table>";
    for(var i=0; i<3; i++){

        dfs +="<tr>";
        for(var j=0; j<3; j++){
            dfs += "<td row='"+i+"' col='"+j+"'>"+myMatrix[i][j]+"</td>";
        }
        dfs += "</tr>";
    }
    dfs += "</table>";

    $("div").html(dfs);

    //document.write( "<table>");
    //for(var i=0; i<3; i++){
    //
    //    document.write( "<tr>");
    //    for(var j=0; j<3; j++){
    //        document.write( "<td row='"+i+"' col='"+j+"'>"+myMatrix[i][j]+"</td>");
    //    }
    //    document.write( "</tr>");
    //}
    //document.write( "</table>");

    var gamer = "X";

$("td").on('click',function(){
    var row = $(this).attr('row');
    var col = $(this).attr('col');

    if(gamer == "X"){
        myMatrix[col][row] = "1";
    }else{
        myMatrix[col][row] = "2";
    }

    $(this).html(gamer);

    if(getWiner() == 1){
        delete myMatrix;
        location.reload();
    }
    if(getWiner1() == 1){
        delete myMatrix;
        location.reload();
    }
    changeGamer();

});

    function changeGamer(){
        if(gamer == "X"){
            gamer = "O";
        }else{
            gamer = "X";
        }
    }

    function getWiner(){
        var vin = 0;
        var vin1 = 0;
        for(var i=0; i<3; i++){
            for(var j =0;j<3;j++){
                if(myMatrix[i][j] == 1){
                    vin ++;
                }else if(myMatrix[i][j] ==2)  vin1 ++;

            }
            if(vin ==3){
                var asd = true;
                break;
            }else if(vin1 ==3){
                var asd = true;
                break;

            }else{
                vin = 0;
            }
        }

        if(asd ==true){
            alert(gamer + " gamer won");
            return 1;
        }
    }

    function getWiner1(){
        var vin = 0;
        var vin1 = 0;
        for(var i=0; i<3; i++){
            for(var j =0;j<3;j++){
                if(myMatrix[j][i] == 1){
                    vin ++;
                }else if(myMatrix[j][i] ==2) vin1 ++;
            }
            if(vin ==3){
                var asd = true;
                break;
            }else if(vin1 ==3){
                var asd = true;
                break;

            }else{
                vin = 0;
            }
        }
        if(asd ==true){
            alert(gamer + " gamer won");
            return 1;
        }
    }




});