$(function () {
    var $txtArea = $('#msg'), $send = $('#sendMsg'), $whatsBtn = $('#WhatsApp-button'), $msgArea = $('.wrapper_whatsapp');
    $whatsBtn.on('click', function () {
        $msgArea.fadeToggle(300);
    });
    $send.on('click', function () {
        if ($txtArea.val() !== '') {
            var msg = $txtArea.val();
            var whatsappMessage = "Via site:\n https://www.convencaomais.com.br:\n" + "\r\n" + msg;
            whatsappMessage = window.encodeURIComponent(whatsappMessage)
            var url = 'https://wa.me/+551140232363?text=' + whatsappMessage;
            window.open(url);
            $txtArea.val('');
        }
    });
});
