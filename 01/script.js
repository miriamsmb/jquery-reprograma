// Inicialização DOM
// $(document).ready(function(){

  //  alert('uhul')//aqui é o escopo que vamos trabalhar

//});


// Inicialização on load

//$(window).load('',function(){
  //  alert('oii')
//});

// Função de seleção e alteração do css em bloco

/*$(document).ready(function(){
    $('h2').css('color','#3d138b');
    $('h2').css('font-size','32px');
    $('h2').css('text-align','center');
    $('h2').text('Carol ama CSS');

})*/

// Função de seleção e alteração do css inline

/* $(document).ready(function(){
    $('h2').css('color','#3d138b').css('font-size','32px').css('text-align','center').text('Carol ama CSS');
})*/

// Função de seleção e alteração do css concatenado

/*$(document).ready(function(){

    $('h2')
    .css({color:'#3d158b',fontSize: '40px',textAlign: 'center'})
})*/

// Seleção por Seletor, Classe ou ID

$(document).ready(function(){

    $('h2')
    .css({color:'#3d158b',fontSize: '40px',textAlign: 'center'})
    .text('estamos aprendendo como modificar o dom usando jquery');
    $('#infoTitle')
    .css({color:'#3d338b',fontSize: '10px',textAlign: 'center'});
    $('.link-legal')
    .css('text-decoration','none');
})

// Múltiplas Seleções

$(document).ready(function(){

    $('h1, #coolLink, p')
    .css({padding:'15px', color:'#d32794'})
    .hide()
    .delay('2000')
    .fadeIn('slow')
    .text(':)')
    .click(function(){
        $('body').css('background-color','#C30')
        $('h1').css('color','#fff');
    })  
});

