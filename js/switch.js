$(document).ready(function() {
    $("#onoffswitch").on('click', function(){
        clickSwitch1();
        clickSwitch2();
    });

    var clickSwitch1 = function() {
        if ($("#onoffswitch1").is(':checked')) {
            console.log("在ON的状态下");
        } else {
            console.log("在OFF的状态下");
        }
    };

    var clickSwitch2 = function() {
        if ($("#onoffswitch1").is(':checked')) {
            console.log("在ON的状态下");
        } else {
            console.log("在OFF的状态下");
        }
    };
});