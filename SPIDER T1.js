function chance(){
    var p1 = (Math.floor(Math.random()*5)+1)
    var p2 = (Math.floor(Math.random()*5)+1)
    var id1 = "p1"+p1
    var id2 = "p2"+p2
    var a = document.getElementById(id1).getAttribute("src")
    var b = document.getElementById(id2).getAttribute("src")
    var li=["IMG1.jpg","IMG2.jpg","IMG3.jpg","IMG4.jpg","IMG5.jpg"]
    var p1n = document.getElementById("p1").innerHTML
    var p2n = document.getElementById("p2").innerHTML
    document.getElementById("top").innerHTML= p1n+"("+p1+")"+" VS "+p2n+"("+p2+")"
    switch (a) {
        case li[4]:
            document.getElementById(id1).src=li[0]
            break;
        case li[0]:
            document.getElementById(id1).src=li[1]
            break;
        case li[1]:
            document.getElementById(id1).src=li[2]
            break;
        case li[2]:
            document.getElementById(id1).src=li[3]
            var c = document.getElementById("p1s").innerHTML
            var d = parseInt(c)+5
            document.getElementById("p1s").innerHTML=d
            break;
        default:
            break;
    }
    if(document.getElementById("p1s").innerHTML==25){
        var e = document.getElementById("n1").value.toUpperCase()
        document.getElementById("top").innerHTML ="Congrats!! "+ e +" won🚩"
        document.getElementById("last").style.visibility="visible"
        document.getElementById("button").remove()
    }
    switch (b) {
        case li[4]:
            document.getElementById(id2).src=li[0]
            break;
        case li[0]:
            document.getElementById(id2).src=li[1]
            break;
        case li[1]:
            document.getElementById(id2).src=li[2]
            break;
        case li[2]:
            document.getElementById(id2).src=li[3]
            var p = document.getElementById("p2s").innerHTML
            var q = parseInt(p)+5
            document.getElementById("p2s").innerHTML=q
            break;
        default:
            break;
    }
    if(document.getElementById("p2s").innerHTML==25){
        var f = document.getElementById("n2").value.toUpperCase()
        document.getElementById("top").textContent ="Congrats!! " +f+ " won🚩"
        document.getElementById("last").style.visibility="visible"
        document.getElementById("button").remove()
    }
}
function changename(){
    if(document.getElementById("n1").value.trim().length===0 || document.getElementById("n2").value.trim().length===0 ){
        alert("Enter proper names for players !!!")
    }
    else{
    document.getElementById("p1").innerHTML=document.getElementById("n1").value.toUpperCase()
    document.getElementById("p2").innerHTML=document.getElementById("n2").value.toUpperCase()
    document.getElementById("lb").style.visibility="hidden"
    document.getElementById("rb").style.visibility="visible"
    }
}
