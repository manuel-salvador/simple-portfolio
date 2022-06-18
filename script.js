window.onload = () => {
    const welcome = document.getElementById('initialWelcome');

    setTimeout(() => {
        document.querySelector('body').removeChild(welcome)
    }, 9000)
}