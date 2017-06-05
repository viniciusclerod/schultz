const togglePassword = function (e) {
    if (e.keyCode === 0 || e.keyCode === 32) e.preventDefault()

    let icon = $(this).children()
    let password = $(this).parent().children('input')

    icon.toggleClass('unhide').toggleClass('hide')
    if (icon.hasClass('hide')) password.attr('type', 'text')
    else password.attr('type', 'password')
}

$(document).ready(() => {
    $('button.toggle.password').click(togglePassword)
    $('button.toggle.password').keydown(togglePassword)
})
