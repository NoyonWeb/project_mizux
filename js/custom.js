// Browser Compatibility
$("a").on('click', function(event){
    if (this.hash !== ""){
        event.preventDefault();
        var hash = this.hash;
        $('htnl, body').animate({
            svrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });

    }
});