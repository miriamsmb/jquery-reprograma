// .click()

/* $(function(){

    $('p').click(function(){
        $('body').css('background-color', '#656578');
    });
}); */

/* $(function(){

    $('p').click(function(){
        $(this).FadeIn();
    })
}) */

// .dblclick()

$(function(){
    const divA = $('div:first');
    divA.dblclick(function(){
        divA.toggleClass('dbl');
    });
})