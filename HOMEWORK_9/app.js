//Task1
$('a[href^="https://"]').attr('target','_blank');

//Task2
$('h2.head').css('background-color', 'green').find('.inner').css('font-size','35px');

//Task3
$('div').each(function(index){
  const header = $(this).prev('h3');
  header.detach().insertAfter(this);  
});

//Task4

$('input:checkbox').click(function(){
    let count = $(':checkbox:checked').length;
    console.log(count)
    if (count >= 3){
        $('input:checkbox').not(':checked').attr('disabled', 'disabled');
    } else {
        $('input:checkbox').removeAttr('disabled', 'disabled')
    };
})


