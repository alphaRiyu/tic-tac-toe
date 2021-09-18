// yes its not very clean, I brute forced my way out. don't judge me. stil a beginner

let btn_x = document.getElementById('x')
let btn_o = document.getElementById('o')
let btn_play = document.getElementById('play')
let player
let canPlayGame = false
let gamePlane = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
let winCount_o = 0
let winCount_x = 0
let round = 1

function setPlayerX() {
    btn_x.classList.add('active')
    btn_o.classList.remove('active')
    btn_play.classList.remove('transparent-inactive')
    player = 'X'
}

function setPlayerO() {
    btn_o.classList.add('active')
    btn_x.classList.remove('active')
    btn_play.classList.remove('transparent-inactive')
    player = 'O'
}

function playGame() {
    if (!btn_play.classList.contains('transparent-inactive')) {
        alert('Start!')
        canPlayGame = true
        if (player == 'X') {
            document.getElementById('x-container').classList.add('score-container-border-bottom')
        }
        if (player == 'O') {
            round = 2
            moveAi()
        }
    }
}

function resetGame() {
    if (canPlayGame) {
        let isConfirm = confirm('Are you sure to restart progress?')
        if (isConfirm) {
            btn_x.classList.remove('active')
            btn_o.classList.remove('active')
            btn_play.classList.add('transparent-inactive')
            player = null
            canPlayGame = false
            round = 1
            gamePlane = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
            winCount_o = 0
            winCount_x = 0
            document.getElementById('o-score').innerHTML = '0'
            document.getElementById('x-score').innerHTML = '0'
            cleanPlane()
        }
    }
}

function markZ_Z() {
    if (canPlayGame) {
        if (gamePlane[0][0] != 1) {
            if (player == 'X') {
                document.getElementById('z_z').classList.add('fa-times')
            } else {
                document.getElementById('z_z').classList.add('fa-circle')
            }
            gamePlane[0][0] = 1
            if (!checkMatch()) {
                if (!isFull()) {
                    setTimeout(() => {
                        if (player == 'X') {
                            document.getElementById('o-container').classList.add('score-container-border-bottom')
                            document.getElementById('x-container').classList.remove('score-container-border-bottom')
                        }
                        if (player == 'O') {
                            document.getElementById('x-container').classList.add('score-container-border-bottom')
                            document.getElementById('o-container').classList.remove('score-container-border-bottom')
                        }
                    }, 300);
                    setTimeout(() => {
                        moveAi()
                    }, 700)
                }
            } else {
                matchPoint()
            }
        }
    }
}

function markZ_1() {
    if (canPlayGame) {
        if (gamePlane[0][1] != 1) {
            if (player == 'X') {
                document.getElementById('z_1').classList.add('fa-times')
            } else {
                document.getElementById('z_1').classList.add('fa-circle')
            }
            gamePlane[0][1] = 1
            if (!checkMatch()) {
                if (!isFull()) {
                    setTimeout(() => {
                        if (player == 'X') {
                            document.getElementById('o-container').classList.add('score-container-border-bottom')
                            document.getElementById('x-container').classList.remove('score-container-border-bottom')
                        }
                        if (player == 'O') {
                            document.getElementById('x-container').classList.add('score-container-border-bottom')
                            document.getElementById('o-container').classList.remove('score-container-border-bottom')
                        }
                    }, 300);
                    setTimeout(() => {
                        moveAi()
                    }, 700)
                }
            } else {
                matchPoint()
            }
        }
    }
}

function markZ_2() {
    if (canPlayGame) {
        if (gamePlane[0][2] != 1) {
            if (player == 'X') {
                document.getElementById('z_2').classList.add('fa-times')
            } else {
                document.getElementById('z_2').classList.add('fa-circle')
            }
            gamePlane[0][2] = 1
            if (!checkMatch()) {
                if (!isFull()) {
                    setTimeout(() => {
                        if (player == 'X') {
                            document.getElementById('o-container').classList.add('score-container-border-bottom')
                            document.getElementById('x-container').classList.remove('score-container-border-bottom')
                        }
                        if (player == 'O') {
                            document.getElementById('x-container').classList.add('score-container-border-bottom')
                            document.getElementById('o-container').classList.remove('score-container-border-bottom')
                        }
                    }, 300);
                    setTimeout(() => {
                        moveAi()
                    }, 700)
                }
            } else {
                matchPoint()
            }
        }
    }
}

function markO_Z() {
    if (canPlayGame) {
        if (gamePlane[1][0] != 1) {
            if (player == 'X') {
                document.getElementById('o_z').classList.add('fa-times')
            } else {
                document.getElementById('o_z').classList.add('fa-circle')
            }
            gamePlane[1][0] = 1
            if (!checkMatch()) {
                if (!isFull()) {
                    setTimeout(() => {
                        if (player == 'X') {
                            document.getElementById('o-container').classList.add('score-container-border-bottom')
                            document.getElementById('x-container').classList.remove('score-container-border-bottom')
                        }
                        if (player == 'O') {
                            document.getElementById('x-container').classList.add('score-container-border-bottom')
                            document.getElementById('o-container').classList.remove('score-container-border-bottom')
                        }
                    }, 300);
                    setTimeout(() => {
                        moveAi()
                    }, 700)
                }
            } else {
                matchPoint()
            }
        }
    }
}

function markO_1() {
    if (canPlayGame) {
        if (gamePlane[1][1] != 1) {
            if (player == 'X') {
                document.getElementById('o_1').classList.add('fa-times')
            } else {
                document.getElementById('o_1').classList.add('fa-circle')
            }
            gamePlane[1][1] = 1
            if (!checkMatch()) {
                if (!isFull()) {
                    setTimeout(() => {
                        if (player == 'X') {
                            document.getElementById('o-container').classList.add('score-container-border-bottom')
                            document.getElementById('x-container').classList.remove('score-container-border-bottom')
                        }
                        if (player == 'O') {
                            document.getElementById('x-container').classList.add('score-container-border-bottom')
                            document.getElementById('o-container').classList.remove('score-container-border-bottom')
                        }
                    }, 300);
                    setTimeout(() => {
                        moveAi()
                    }, 700)
                }
            } else {
                matchPoint()
            }
        }
    }
}

function markO_2() {
    if (canPlayGame) {
        if (gamePlane[1][2] != 1) {
            if (player == 'X') {
                document.getElementById('o_2').classList.add('fa-times')
            } else {
                document.getElementById('o_2').classList.add('fa-circle')
            }
            gamePlane[1][2] = 1
            if (!checkMatch()) {
                if (!isFull()) {
                    setTimeout(() => {
                        if (player == 'X') {
                            document.getElementById('o-container').classList.add('score-container-border-bottom')
                            document.getElementById('x-container').classList.remove('score-container-border-bottom')
                        }
                        if (player == 'O') {
                            document.getElementById('x-container').classList.add('score-container-border-bottom')
                            document.getElementById('o-container').classList.remove('score-container-border-bottom')
                        }
                    }, 300);
                    setTimeout(() => {
                        moveAi()
                    }, 700)
                }
            } else {
                matchPoint()
            }
        }
    }
}

function markT_Z() {
    if (canPlayGame) {
        if (gamePlane[2][0] != 1) {
            if (player == 'X') {
                document.getElementById('t_z').classList.add('fa-times')
            } else {
                document.getElementById('t_z').classList.add('fa-circle')
            }
            gamePlane[2][0] = 1
            if (!checkMatch()) {
                if (!isFull()) {
                    setTimeout(() => {
                        if (player == 'X') {
                            document.getElementById('o-container').classList.add('score-container-border-bottom')
                            document.getElementById('x-container').classList.remove('score-container-border-bottom')
                        }
                        if (player == 'O') {
                            document.getElementById('x-container').classList.add('score-container-border-bottom')
                            document.getElementById('o-container').classList.remove('score-container-border-bottom')
                        }
                    }, 300);
                    setTimeout(() => {
                        moveAi()
                    }, 700)
                }
            } else {
                matchPoint()
            }
        }
    }
}

function markT_1() {
    if (canPlayGame) {
        if (gamePlane[2][1] != 1) {
            if (player == 'X') {
                document.getElementById('t_1').classList.add('fa-times')
            } else {
                document.getElementById('t_1').classList.add('fa-circle')
            }
            gamePlane[2][1] = 1
            if (!checkMatch()) {
                if (!isFull()) {
                    setTimeout(() => {
                        if (player == 'X') {
                            document.getElementById('o-container').classList.add('score-container-border-bottom')
                            document.getElementById('x-container').classList.remove('score-container-border-bottom')
                        }
                        if (player == 'O') {
                            document.getElementById('x-container').classList.add('score-container-border-bottom')
                            document.getElementById('o-container').classList.remove('score-container-border-bottom')
                        }
                    }, 300);
                    setTimeout(() => {
                        moveAi()
                    }, 700)
                }
            } else {
                matchPoint()
            }
        }
    }
}

function markT_2() {
    if (canPlayGame) {
        if (gamePlane[2][2] != 1) {
            if (player == 'X') {
                document.getElementById('t_2').classList.add('fa-times')
            } else {
                document.getElementById('t_2').classList.add('fa-circle')
            }
            gamePlane[2][2] = 1
            if (!checkMatch()) {
                if (!isFull()) {
                    setTimeout(() => {
                        if (player == 'X') {
                            document.getElementById('o-container').classList.add('score-container-border-bottom')
                            document.getElementById('x-container').classList.remove('score-container-border-bottom')
                        }
                        if (player == 'O') {
                            document.getElementById('x-container').classList.add('score-container-border-bottom')
                            document.getElementById('o-container').classList.remove('score-container-border-bottom')
                        }
                    }, 300);
                    setTimeout(() => {
                        moveAi()
                    }, 700)
                }
            } else {
                matchPoint()
            }
        }
    }
}

function moveAi() {
    switch (getRandomNum(9)) {
        case 1:
            if (gamePlane[0][0] != 1) {
                if (player == 'O') {
                    document.getElementById('z_z').classList.add('fa-times')
                } else {
                    document.getElementById('z_z').classList.add('fa-circle')
                }
                gamePlane[0][0] = 1
            } else {
                moveAi()
            }
            break
        case 2:
            if (gamePlane[0][1] != 1) {
                if (player == 'O') {
                    document.getElementById('z_1').classList.add('fa-times')
                } else {
                    document.getElementById('z_1').classList.add('fa-circle')
                }
                gamePlane[0][1] = 1
            } else {
                moveAi()
            }
            break
        case 3:
            if (gamePlane[0][2] != 1) {
                if (player == 'O') {
                    document.getElementById('z_2').classList.add('fa-times')
                } else {
                    document.getElementById('z_2').classList.add('fa-circle')
                }
                gamePlane[0][2] = 1
            } else {
                moveAi()
            }
            break
        case 4:
            if (gamePlane[1][0] != 1) {
                if (player == 'O') {
                    document.getElementById('o_z').classList.add('fa-times')
                } else {
                    document.getElementById('o_z').classList.add('fa-circle')
                }
                gamePlane[1][0] = 1
            } else {
                moveAi()
            }
            break
        case 5:
            if (gamePlane[1][1] != 1) {
                if (player == 'O') {
                    document.getElementById('o_1').classList.add('fa-times')
                } else {
                    document.getElementById('o_1').classList.add('fa-circle')
                }
                gamePlane[1][1] = 1
            } else {
                moveAi()
            }
            break
        case 6:
            if (gamePlane[1][2] != 1) {
                if (player == 'O') {
                    document.getElementById('o_2').classList.add('fa-times')
                } else {
                    document.getElementById('o_2').classList.add('fa-circle')
                }
                gamePlane[1][2] = 1
            } else {
                moveAi()
            }
            break
        case 7:
            if (gamePlane[2][0] != 1) {
                if (player == 'O') {
                    document.getElementById('t_z').classList.add('fa-times')
                } else {
                    document.getElementById('t_z').classList.add('fa-circle')
                }
                gamePlane[2][0] = 1
            } else {
                moveAi()
            }
            break
        case 8:
            if (gamePlane[2][1] != 1) {
                if (player == 'O') {
                    document.getElementById('t_1').classList.add('fa-times')
                } else {
                    document.getElementById('t_1').classList.add('fa-circle')
                }
                gamePlane[2][1] = 1
            } else {
                moveAi()
            }
            break
        case 9:
            if (gamePlane[2][2] != 1) {
                if (player == 'O') {
                    document.getElementById('t_2').classList.add('fa-times')
                } else {
                    document.getElementById('t_2').classList.add('fa-circle')
                }
                gamePlane[2][2] = 1
            } else {
                moveAi()
            }
            break
    }
    if (checkMatch()) {
        if (player == 'O') {
            winCount_x++
            document.getElementById('x-score').innerHTML = winCount_x
        } else {
            winCount_o++
            document.getElementById('o-score').innerHTML = winCount_o
        }
        round++
        gamePlane = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
        setTimeout(() => {
            cleanPlane()
        }, 700);
        if (round % 2 == 0) {
            setTimeout(() => {
                moveAi()
            }, 1000)
        }
    }
    setTimeout(() => {
        if (player == 'X') {
            document.getElementById('x-container').classList.add('score-container-border-bottom')
            document.getElementById('o-container').classList.remove('score-container-border-bottom')
        }
        if (player == 'O') {
            document.getElementById('o-container').classList.add('score-container-border-bottom')
            document.getElementById('x-container').classList.remove('score-container-border-bottom')
        }
    }, 300);
}

function getRandomNum(maxNum) {
    return Math.floor(Math.random() * maxNum) + 1
}

function isFull() {
    let i, j
    let ctr = 1
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (gamePlane[i][j] == 1)
                ctr++
        }
    }
    if (ctr == 9) {
        return true
    }
    return false
}

function checkMatch() {
    if (gamePlane[0][0] == 1 && gamePlane[0][1] == 1 && gamePlane[0][2] == 1) {
        if ((document.getElementById('z_z').classList.contains('fa-times') && document.getElementById('z_1').classList.contains('fa-times') && document.getElementById('z_2').classList.contains('fa-times')) || (document.getElementById('z_z').classList.contains('fa-circle') && document.getElementById('z_1').classList.contains('fa-circle') && document.getElementById('z_2').classList.contains('fa-circle'))) {
            document.getElementById('z-z').classList.add('match-color')
            document.getElementById('z-1').classList.add('match-color')
            document.getElementById('z-2').classList.add('match-color')
            return true
        }
    }
    if (gamePlane[1][0] == 1 && gamePlane[1][1] == 1 && gamePlane[1][2] == 1) {
        if ((document.getElementById('o_z').classList.contains('fa-times') && document.getElementById('o_1').classList.contains('fa-times') && document.getElementById('o_2').classList.contains('fa-times')) || (document.getElementById('o_z').classList.contains('fa-circle') && document.getElementById('o_1').classList.contains('fa-circle') && document.getElementById('o_2').classList.contains('fa-circle'))) {
            document.getElementById('o-z').classList.add('match-color')
            document.getElementById('o-1').classList.add('match-color')
            document.getElementById('o-2').classList.add('match-color')
            return true
        }
    }
    if (gamePlane[2][0] == 1 && gamePlane[2][1] == 1 && gamePlane[2][2] == 1) {
        if ((document.getElementById('t_z').classList.contains('fa-times') && document.getElementById('t_1').classList.contains('fa-times') && document.getElementById('t_2').classList.contains('fa-times')) || (document.getElementById('t_z').classList.contains('fa-circle') && document.getElementById('t_1').classList.contains('fa-circle') && document.getElementById('t_2').classList.contains('fa-circle'))) {
            document.getElementById('t-z').classList.add('match-color')
            document.getElementById('t-1').classList.add('match-color')
            document.getElementById('t-2').classList.add('match-color')
            return true
        }
    }
    if (gamePlane[0][0] == 1 && gamePlane[1][0] == 1 && gamePlane[2][0] == 1) {
        if ((document.getElementById('z_z').classList.contains('fa-times') && document.getElementById('o_z').classList.contains('fa-times') && document.getElementById('t_z').classList.contains('fa-times')) || (document.getElementById('z_z').classList.contains('fa-circle') && document.getElementById('o_z').classList.contains('fa-circle') && document.getElementById('t_z').classList.contains('fa-circle'))) {
            document.getElementById('z-z').classList.add('match-color')
            document.getElementById('o-z').classList.add('match-color')
            document.getElementById('t-z').classList.add('match-color')
            return true
        }
    }
    if (gamePlane[0][1] == 1 && gamePlane[1][1] == 1 && gamePlane[2][1] == 1) {
        if ((document.getElementById('z_1').classList.contains('fa-times') && document.getElementById('o_1').classList.contains('fa-times') && document.getElementById('t_1').classList.contains('fa-times')) || (document.getElementById('z_1').classList.contains('fa-circle') && document.getElementById('o_1').classList.contains('fa-circle') && document.getElementById('t_1').classList.contains('fa-circle'))) {
            document.getElementById('z-1').classList.add('match-color')
            document.getElementById('o-1').classList.add('match-color')
            document.getElementById('t-1').classList.add('match-color')
            return true
        }
    }
    if (gamePlane[0][2] == 1 && gamePlane[1][2] == 1 && gamePlane[2][2] == 1) {
        if ((document.getElementById('z_2').classList.contains('fa-times') && document.getElementById('o_2').classList.contains('fa-times') && document.getElementById('t_2').classList.contains('fa-times')) || (document.getElementById('z_2').classList.contains('fa-circle') && document.getElementById('o_2').classList.contains('fa-circle') && document.getElementById('t_2').classList.contains('fa-circle'))) {
            document.getElementById('z-2').classList.add('match-color')
            document.getElementById('o-2').classList.add('match-color')
            document.getElementById('t-2').classList.add('match-color')
            return true
        }
    }
    if (gamePlane[0][2] == 1 && gamePlane[1][1] == 1 && gamePlane[2][0] == 1) {
        if ((document.getElementById('z_2').classList.contains('fa-times') && document.getElementById('o_1').classList.contains('fa-times') && document.getElementById('t_z').classList.contains('fa-times')) || (document.getElementById('z_2').classList.contains('fa-circle') && document.getElementById('o_1').classList.contains('fa-circle') && document.getElementById('t_z').classList.contains('fa-circle'))) {
            document.getElementById('z-2').classList.add('match-color')
            document.getElementById('o-1').classList.add('match-color')
            document.getElementById('t-z').classList.add('match-color')
            return true
        }
    }
    if (gamePlane[0][0] == 1 && gamePlane[1][1] == 1 && gamePlane[2][2] == 1) {
        if ((document.getElementById('z_z').classList.contains('fa-times') && document.getElementById('o_1').classList.contains('fa-times') && document.getElementById('t_2').classList.contains('fa-times')) || (document.getElementById('z_z').classList.contains('fa-circle') && document.getElementById('o_1').classList.contains('fa-circle') && document.getElementById('t_2').classList.contains('fa-circle'))) {
            document.getElementById('z-z').classList.add('match-color')
            document.getElementById('o-1').classList.add('match-color')
            document.getElementById('t-2').classList.add('match-color')
            return true
        }
    }
    return false
}

function matchPoint() {
    if (player == 'X') {
        winCount_x++
        document.getElementById('x-score').innerHTML = winCount_x
    } else {
        winCount_o++
        document.getElementById('o-score').innerHTML = winCount_o
    }
    round++
    gamePlane = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    setTimeout(() => {
        cleanPlane()
    }, 700);
    if (round % 2 == 0) {
        setTimeout(() => {
            if (player == 'X') {
                document.getElementById('x-container').classList.add('score-container-border-bottom')
                document.getElementById('o-container').classList.remove('score-container-border-bottom')
            }
            if (player == 'O') {
                document.getElementById('o-container').classList.add('score-container-border-bottom')
                document.getElementById('x-container').classList.remove('score-container-border-bottom')
            }
        }, 300);
        setTimeout(() => {
            moveAi()
        }, 1000)
    }
}

function cleanPlane() {
    document.getElementById('z-z').classList.remove('match-color')
    document.getElementById('z-1').classList.remove('match-color')
    document.getElementById('z-2').classList.remove('match-color')
    document.getElementById('o-z').classList.remove('match-color')
    document.getElementById('o-1').classList.remove('match-color')
    document.getElementById('o-2').classList.remove('match-color')
    document.getElementById('t-z').classList.remove('match-color')
    document.getElementById('t-1').classList.remove('match-color')
    document.getElementById('t-2').classList.remove('match-color')
    document.getElementById('z-z').classList.remove('match-color')
    document.getElementById('o-z').classList.remove('match-color')
    document.getElementById('t-z').classList.remove('match-color')
    document.getElementById('z-1').classList.remove('match-color')
    document.getElementById('o-1').classList.remove('match-color')
    document.getElementById('t-1').classList.remove('match-color')
    document.getElementById('z-2').classList.remove('match-color')
    document.getElementById('o-2').classList.remove('match-color')
    document.getElementById('t-2').classList.remove('match-color')
    document.getElementById('z-2').classList.remove('match-color')
    document.getElementById('o-1').classList.remove('match-color')
    document.getElementById('t-z').classList.remove('match-color')
    document.getElementById('z-z').classList.remove('match-color')
    document.getElementById('o-1').classList.remove('match-color')
    document.getElementById('t-2').classList.remove('match-color')

    document.getElementById('z_z').classList.remove('fa-times')
    document.getElementById('z_1').classList.remove('fa-times')
    document.getElementById('z_2').classList.remove('fa-times')
    document.getElementById('o_z').classList.remove('fa-times')
    document.getElementById('o_1').classList.remove('fa-times')
    document.getElementById('o_2').classList.remove('fa-times')
    document.getElementById('t_z').classList.remove('fa-times')
    document.getElementById('t_1').classList.remove('fa-times')
    document.getElementById('t_2').classList.remove('fa-times')
    document.getElementById('z_z').classList.remove('fa-times')
    document.getElementById('o_z').classList.remove('fa-times')
    document.getElementById('t_z').classList.remove('fa-times')
    document.getElementById('z_1').classList.remove('fa-times')
    document.getElementById('o_1').classList.remove('fa-times')
    document.getElementById('t_1').classList.remove('fa-times')
    document.getElementById('z_2').classList.remove('fa-times')
    document.getElementById('o_2').classList.remove('fa-times')
    document.getElementById('t_2').classList.remove('fa-times')
    document.getElementById('z_2').classList.remove('fa-times')
    document.getElementById('o_1').classList.remove('fa-times')
    document.getElementById('t_z').classList.remove('fa-times')
    document.getElementById('z_z').classList.remove('fa-times')
    document.getElementById('o_1').classList.remove('fa-times')
    document.getElementById('t_2').classList.remove('fa-times')

    document.getElementById('z_z').classList.remove('fa-circle')
    document.getElementById('z_1').classList.remove('fa-circle')
    document.getElementById('z_2').classList.remove('fa-circle')
    document.getElementById('o_z').classList.remove('fa-circle')
    document.getElementById('o_1').classList.remove('fa-circle')
    document.getElementById('o_2').classList.remove('fa-circle')
    document.getElementById('t_z').classList.remove('fa-circle')
    document.getElementById('t_1').classList.remove('fa-circle')
    document.getElementById('t_2').classList.remove('fa-circle')
    document.getElementById('z_z').classList.remove('fa-circle')
    document.getElementById('o_z').classList.remove('fa-circle')
    document.getElementById('t_z').classList.remove('fa-circle')
    document.getElementById('z_1').classList.remove('fa-circle')
    document.getElementById('o_1').classList.remove('fa-circle')
    document.getElementById('t_1').classList.remove('fa-circle')
    document.getElementById('z_2').classList.remove('fa-circle')
    document.getElementById('o_2').classList.remove('fa-circle')
    document.getElementById('t_2').classList.remove('fa-circle')
    document.getElementById('z_2').classList.remove('fa-circle')
    document.getElementById('o_1').classList.remove('fa-circle')
    document.getElementById('t_z').classList.remove('fa-circle')
    document.getElementById('z_z').classList.remove('fa-circle')
    document.getElementById('o_1').classList.remove('fa-circle')
    document.getElementById('t_2').classList.remove('fa-circle')
}