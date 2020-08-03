
document.addEventListener("DOMContentLoaded",
    function (event) {


        function makeChange(event) {
            
            handler = function (res){
                console.log(res.responseText);
                var obj = JSON.parse(res.responseText);
                document.querySelector("h1").innerHTML = "<h2>" + obj.name + "</h2>";
            };
            ajaxUtil.sendGetRequest("js/ajax.txt",handler);
            
            // xhr.open("GET","js/ajax.txt",true);
            // xhr.send();

            // xhr.onload = function (){
            //     console.log(this);
            //     console.log(this.responseText);
            // };

            
        };


        // obstrusive event binding
        document.getElementById("btn").addEventListener("click", makeChange);

    }


);


// var A ={};
// var para ="saiful"
// A.necessary = function (){
//     console.log("necessary");
// }
// A.dummy = function (){
//     A.necessary = b;
//     A.necessary(para);
// }

// function b(para){
//     console.log("b func : " , this);
//     console.log(para);
// }


// A.dummy();
