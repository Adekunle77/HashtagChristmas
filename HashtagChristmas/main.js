$(document).ready(function(){
    
    $("#contshdow").hide()
// TweenMax Animation 
    
    // creating a varibale to get id 
    //var cont1 = document.getElementById("cont1");
    var revesreCout1 = TweenMax.to(document.getElementById("cont1"), 1.2, {scale:0.2, opacity:0, ease:Cubic.easeOut})
    
    revesreCout1.reverse(0);   
    
// On click for for block 1    

    $("#cont1").click(function(){
        $("#contshdow").show()
        $("#cont1").hide()
        $("#cont2-1").fadeIn(0400)
        $("#cont2-2").fadeIn(0400)
        $("#cont2-3").fadeIn(0400)
        $("#cont2-4").fadeIn(0400)
        
                TweenMax.to(document.getElementById("contShd1"), 0.6, {ease:Cubic.easeOut, x:-100, y:-100, scale:0.5 })        
        
        TweenMax.to(document.getElementById("contShd2"), 0.6, {ease:Cubic.easeOut, x:132, y:-127, scale:0.5 })
        
        TweenMax.to(document.getElementById("contShd3"), 0.6, {ease:Cubic.easeOut, x:-123, y:127, scale:0.5 })
        
        TweenMax.to(document.getElementById("contShd4"), 0.6, {ease:Cubic.easeOut, x:132, y:127, scale:0.5 }) 
    
    
    })
 
// On click for for block 4 and block 16     
    
    //block top left
    $("#cont2-1").click(function() {
        $(this).remove();
        $(".cont2-1").show() 
        $("#contShd1").hide()
    })
    //block top right
    $("#cont2-2").click(function() {
        $(this).remove();  
        $(".cont2-2").show()
        $("#contShd2").hide()
    }) 
    
    //block bottom left
    $("#cont2-3").click(function() {
        $(this).remove();  
        $(".cont2-3").show() 
        $("#contShd3").hide()
        
//        var x = $("#cont2-3").position();
        alert("Top position: " + x.top + " Left position: " + x.left);
        
    }) 
    
    //block bottom right
    $("#cont2-4").click(function() {
        $(this).remove();  
        $(".cont2-4").show()
        $("#contShd4").hide()
    })   

})