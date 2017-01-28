/*global $, console, alert*/
$(document).ready(function () {
    
    "use strict";
    
    var url,
        Partials;
    
    Partials = {};
    
    
    function loadContent(container, selectedURL) {
        
        if (selectedURL !== "./index.html") {
            
            $.ajax({
                type: "get",
                url: selectedURL,
                dataType: "html"
            }).done(function (data) {
                
                if (!Partials[selectedURL]) {
                    Partials[selectedURL] = $(data).find(".box");
                    $(container).append(Partials[selectedURL])
                                .hide()
                                .fadeIn(500);
                }
                
                if (selectedURL.split("/")[selectedURL.split("/").length - 1] === "programs.html") {
                    $("html, body").animate({
                        scrollTop: $("#programs").offset().top
                    }, 500);
                } else {
                    $("html, body").animate({
                        scrollTop: $("#register").offset().top
                    }, 500);
                }
                  
            }).fail(function (jqXHR, textStatus, errorThrown) {
                
                alert("Request failed: " + errorThrown);
            });
        }
    }
    
    
    
    $(".nav a").on("click", function (e) {
        
        e.preventDefault();
        
        url = $(this).attr("href");
        loadContent(".main-content-bg", url);
    });
});