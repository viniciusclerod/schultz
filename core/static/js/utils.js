const togglePassword = function (event) {
    /**
     * Javascript Char Codes (Key Codes)
     * @docs https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
     */
    switch (event.keyCode) {
        case 0:
        case 9:
        case 16:
        case 32:
            e.preventDefault()
            break
    }

    let icon = $(this).children()
    let input = $(this).parent().children('input')

    icon.toggleClass('unhide').toggleClass('hide')
    if (icon.hasClass('hide')) input.attr('type', 'text')
    else input.attr('type', 'password')
}

$(document).ready(() => {
    $('button.toggle.password').click(togglePassword)
    $('button.toggle.password').keydown(togglePassword)
})
