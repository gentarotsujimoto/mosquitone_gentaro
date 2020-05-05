'use strict';
{
    $("#DI").click(function(){
        $("#DI_input").append('<img class="DI_out" src="./png/DI.png" cmanOMat="movearea">');
        cmanOM_JS_init();
    });
    $("#microphone").click(function(){
        $("#microphone_input").append('<img class="microphone_out" src="./png/microphone.png" cmanOMat="movearea">');
        cmanOM_JS_init();
    });
}