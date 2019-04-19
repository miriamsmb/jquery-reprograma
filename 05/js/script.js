$(function(){
        $('p')
        .mouseup(function(){
            $(this).append("<span style='color:#f00';>Subiuuuu </span>");
        })
        .mousedown(function(){
            $(this).append("<span style='color:#00f';>Desceuuuu </span>");
        });
})