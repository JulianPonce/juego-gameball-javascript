var game = () => {
    let time = 30;
    let moviemiento = 20;
    let movimientoBarra = 20;
    let widht = document.documentElement.clientWidth - moviemiento;
    let height = document.documentElement.clientHeight - movimientoBarra;
    let controlGame;
    let player1;
    let player2;

    function start() {
        init();
        controlGame = setInterval(play, time);
    }

    function init() {
        ball.style.left = 0;
        ball.state = 1;
        ball.direction = 1;
        player1 = new Object();
        player2 = new Object();
        player1.KeyPress = false;
        player1.KeyCode = null;
        player2.KeyPress = false;
        player2.KeyCode = null;
    }

    function stop() {
        clearInterval(controlGame);
        document.body.style.background = "#f00"
    }

    function play() {

    }

    start()
}