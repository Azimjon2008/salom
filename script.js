
// selector  $

// let div = document.querySelector('.box')
// div.addEventListener('click', () => {
//     div.innerHTML = 'ishla'
// })

// $('.box').on('click', () => alert('ish'))


$('div').on('click', function() {
    $('div').addClass('bg')
})

$('div').on('click', function() {
    $('div').removeClass('box')
})