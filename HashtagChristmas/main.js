$(document).ready(function(){
    
// On click for for block 1    

    $("#cont1").click(function(){
        $("#cont1").hide()
        $("#cont2").show()
    })
 
    $("#cont2 div").click(function(){
        var clickedDiv = $(this)
        var clickedClass = clickedDiv.attr('class')
//        console.log(this)
        clickedDiv.hide()
        
        // display the 4 little bubbles underneath..
        var selector = "#cont3 div." + clickedClass
        console.log(selector)
        $(selector).show()
    })    
})