$(document).ready(function(){
    

    $('form').on('submit', function(e){
        e.preventDefault()
        const novaTarefa = $('#nova-tarefa').val()
        const tarefa = $('<li></li>')
        $(`<li>${novaTarefa}</li>`).appendTo(tarefa)
        $(tarefa).appendTo('ul')
        $('#nova-tarefa').val('')
    })
    $(document).on('click', 'li', function(){
        $(this).toggleClass('riscado')
    })
})