//지뢰를 가진 8 * 8 minesweeperBox(오브젝트) 생성

let minesweeperBox = {};

export function boxValue(row, col){
    if(minesweeperBox[ `${row}${col}` ] === undefined){
        //지뢰찾기 맵의 없는 값이 있을 경우 unValue
        return 'unValue';
    }else{
        return minesweeperBox[ `${row}${col}` ].isState;
    };
};

export function setRandomMines(){
    const row = 8;
    const col = 8;
    const mines = 9;

    for(let i=0; i < row; i++){
        for(let j=0; j < col; j++){
            minesweeperBox[ `${i}${j}` ] = {
                text: '',
                classList: 'box',
                isFirst: true,
                isState: 0
            }
        }
    };

    let placedMines = 0;
    let randomRow, randomCol;
    while(placedMines < mines){
        // 총 9개의 지뢰를 랜덤 위치에 지정
        randomRow = Math.floor(Math.random() * row);
        randomCol = Math.floor(Math.random() * col);
        if(minesweeperBox[`${randomRow}${randomCol}`].isState === 0){
            // 숫자 9는 mines인지 아닌지를 판별하기 위한 숫자, 즉 숫자 9일 때 지뢰
            minesweeperBox[`${randomRow}${randomCol}`].isState = 9;
            placedMines++;
        }
    }

    // mines 조건에 따른 숫자 넣기
    for(let i=0; i < row; i++){
        for(let j=0; j < col; j++){
            if(minesweeperBox[`${i}${j}`].isState === 9){
                //만약 지뢰를 가진 곳이라면
                for(let ii=-1; ii<=1; ii++){
                    for(let jj=-1; jj<=1; jj++){
                        if(ii!==0 || jj!==0){
                            if(boxValue(i+ii, j+jj) !== 9 && boxValue(i+ii, j+jj) !== 'unValue'){
                                //만약 [0,0]이면 [-1,-1],[-1,0],[-1,1],[0,-1],[0,0][0,1],[1,-1],[1,0],[1,1]
                                minesweeperBox[`${i+ii}${j+jj}`].isState++;
                            }
                        }
                    }
                }
            }
        }
    }

    return minesweeperBox;
};