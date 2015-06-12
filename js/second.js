$(document).ready(function($) {

    function matrixArray(rows,columns){
        var arr = new Array();
        for(var i=0; i<columns; i++){
            arr[i] = new Array();
            for(var j=0; j<rows; j++){
                arr[i][j] = 0;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
            }
        }
        return arr;
    }
    var myMatrix = matrixArray(3,3);


    var dfs ="<table>";
    for(var i=0; i<3; i++){

        dfs +="<tr>";
        for(var j=0; j<3; j++){
            dfs += "<td class='"+i+j+"' row='"+i+"' col='"+j+"' > </td>";
        }
        dfs += "</tr>";
    }
    dfs += "</table>";

    $("div").html(dfs);


    var gamer = "X";

    $("td").on('click',function(){
        var row = $(this).attr('row');
        var col = $(this).attr('col');

        myMatrix[col][row] = "1";

        $(this).html(gamer);

        if(findO() == null){
            findEmpty();
        }

        if(getWiner() == 1){
            delete myMatrix;
            location.reload();
        }
        if(getWiner1() == 1){
            delete myMatrix;
            location.reload();
        }
    });


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

    function findO(){
        for(var i=0; i<3; i++){
            for(var j =0;j<3;j++){
                if(myMatrix[i][j] == 2){
                    if(myMatrix[i+1][j] != null || myMatrix[i+1][j] !=1){
                        myMatrix[i+1][j] = "O";
                        $("."+i+j).html("O");
                        return true;
                    }else if(myMatrix[i-1][j] != null || myMatrix[i+1][j] !=1){
                        myMatrix[i-1][j] = "O";
                        return true;
                    }else{
                        return false;
                    }
                }
            }

        }
    }

    function findEmpty(){
        var val = 0;
        for(var i=0; i<3; i++){
            for(var j =0;j<3;j++){
                if(myMatrix[i][j] == 0){
                    val ++;
                }
            }
            //alert(val);
            if(val == 3){
                myMatrix[i][2] = "O";
                var aa ="."+i+2;

                $("tr").children(aa).html("O");
                break;
            }else{
                val = 0;
            }
        }
    }



});