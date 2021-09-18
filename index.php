<!doctype html>
<html lang="en">

<head>
    <title>Tic-Tac-Toe</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <!-- Font awesome CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Custom CSS -->
    <link rel="stylesheet" href="/assets/css/master.css">

    <link rel="icon" type="image/png" href="/assets/img/tic_tac_toe_100px.png">

</head>

<body>

    <div class="tic-tac-toe-section">
        <div class="tic-tac-toe-container">
            <div class="score-content">
                <h2>Scores</h2>
                <div class="scores">
                    <div id="x-container" class="score-container">
                        <h3>X:</h3>
                        <h3 id="x-score">0</h3>
                    </div>
                    <div id="o-container" class="score-container">
                        <h3>O:</h3>
                        <h3 id="o-score">0</h3>
                    </div>
                </div>
            </div>
            <div class="tic-tac-toe-content">
                <div class="container">
                    <div class="row">
                        <button class="col-4" id="z-z" onclick="markZ_Z()">
                            <i class="fas" id="z_z"></i>
                        </button>
                        <button class="col-4" id="z-1" onclick="markZ_1()">
                            <i class="fas" id="z_1"></i>
                        </button>
                        <button class="col-4" id="z-2" onclick="markZ_2()">
                            <i class="fas" id="z_2"></i>
                        </button>
                        <button class="col-4" id="o-z" onclick="markO_Z()">
                            <i class="fas" id="o_z"></i>
                        </button>
                        <button class="col-4" id="o-1" onclick="markO_1()">
                            <i class="fas" id="o_1"></i>
                        </button>
                        <button class="col-4" id="o-2" onclick="markO_2()">
                            <i class="fas" id="o_2"></i>
                        </button>
                        <button class="col-4" id="t-z" onclick="markT_Z()">
                            <i class="fas" id="t_z"></i>
                        </button>
                        <button class="col-4" id="t-1" onclick="markT_1()">
                            <i class="fas" id="t_1"></i>
                        </button>
                        <button class="col-4" id="t-2" onclick="markT_2()">
                            <i class="fas" id="t_2"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="controls">
                <div class="play-as">
                    <h3>Play as:</h3>
                    <button id="x" class="play-design" onclick="setPlayerX()">
                        <i class="fas fa-times"></i>
                    </button>
                    <button id="o" class="play-design" onclick="setPlayerO()">
                        <i class="fas fa-circle"></i>
                    </button>
                </div>
                <div class="play-reset">
                    <button id="play" class="play-reset-design transparent-inactive" onclick="playGame()">
                        <i class="fas fa-play"></i>
                    </button>
                    <button id="reset" class="play-reset-design" onclick="resetGame()">
                        <i class="fas fa-redo-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    <!-- Custom script -->
    <script src="/assets/js/master.js"></script>
</body>

</html>