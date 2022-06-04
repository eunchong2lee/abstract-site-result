class Site {
    constructor(board) {
        if (board === undefined) {
            this.boards = [];
        } else {
            this.board = [board];
        }
    }

    addBoard(board) {
        for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].board === board.board) {
                throw new Error();
            }
        }
        return this.boards.push(board);
    }

    findBoardByName(board) {
        for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].board === board) {
                return this.boards[i];
            }
        }
        throw new Error();
    }
}

class Board extends Site {
    constructor(board) {
        if (!board) {
            throw new Error();
        }
        super(board);
    }

    static publish(article) {
        console.log(1);
        console.log('find', this.board);
        console.log('find2', super.this);
        console.log('find3', super.boards);
        if (super.findBoardByName(this.board)) {
            console.log('진입 완료');
            return article;
        }
        throw new Error();
    }
}
const mySite = new Site();
console.log('mySite', mySite);
const noticeBoard1 = new Board('공지사항');
console.log(noticeBoard1);
const noticeBoard2 = new Board('공지사');
console.log(noticeBoard2);
console.log('result', [noticeBoard1, noticeBoard2]);
mySite.addBoard(noticeBoard1);
console.log(mySite.boards);
