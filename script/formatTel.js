document.getElementById('telefone').addEventListener('input', function (e) {
    var value = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (value.length === 11) {
        e.target.value = '(' + value.substring(0, 2) + ') ' + value.substring(2, 7) + '-' + value.substring(7, 11);
    }
});
