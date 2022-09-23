var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")


request.send();

request.onload=function(){
    var res=JSON.parse(request.response);
    // console.log(res);

    for(i=0;i<res.length;i++){
       

        console.log("country name:"+res[i].name,"region :"+res[i].region ,"subregion:"+res[i].subregion)

    }
}

//     }
// }
//************************************************************************ */

object1={
    name:"kavivarman",
    age:25
}
object2={
    age:25,
    name:"kavivarman"
}

console.log(JSON.stringify(object1)===JSON.stringify(object2))




//***************************************************************************************//

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")


request.send();

request.onload=function(){
    var res=JSON.parse(request.response);
    for(var i=0;i<res.length;i++){
        console.log("flags:"+res[i].flags.png)
    }
}