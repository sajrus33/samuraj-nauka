console.log("yee")

function turn(){
    $(".fas, nav").toggleClass("off");
}

$(".burger").on('click', turn)