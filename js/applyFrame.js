/**
 * Created by Sam on 14-8-6.
 * ApplyFrame JS
 */

$(document).ready(function(){
    var tab = $("#tab-body .tab");
    tab.click(function(e){
        e.preventDefault();
        var dataType = $(this).attr("data-type");
        var dataState = $(this).attr("data-state");
        if(dataState == "active")
            return ;
        else{
            $(this).siblings().attr("data-state","inactive");
            $(this).attr("data-state","active");
            var tabBodyClass = dataType + "-body";
            $(".tab-body").each(function(index){
                if($(this).hasClass(tabBodyClass)){
                    $(this).attr("data-state-body","active");
                }else{
                    $(this).attr("data-state-body","inactive");
                }
            })

        }
    })
})
