class Site {
    constructor(board) {
        if (board === undefined) {
            this.boards = [];
        } else {
            this.board = board;
        }
    }

    addBoard(board) {
        for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].board === board.board) {
                throw new Error();
            }
        }
        board.flag = 1;
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
        this.flag = 0;
        this.article = [];
    }

    publish(article) {
        if (this.flag === 0) {
            throw new Error();
        }
        article.flag = 1;
        article.id = `${this.board}-${Math.floor(Math.random())}`;
        this.article.push(
            article,
            // id: article.id,
            // createdDate: new Date().toISOString(),
        );
    }

    getAllArticles() {
        return this.article;
    }
}

class Article {
    constructor({ subject, content, author }) {
        if (!subject || !content || !author) {
            throw new Error();
        }
        this.subejct = subject;
        this.content = content;
        this.author = author;
        this.id;
        this.createdDate = new Date().toISOString();
        this.flag = 0;
        this.comment = [];
    }

    startsWitd(boardname) {
        return Boolean(this.id.includes(boardname));
    }

    reply(comment) {
        if (this.flag === 0) {
            throw new Error();
        }
        this.comment.push(comment);
    }

    getAllComments() {
        return this.comment;
    }
}

class Comment {
    constructor({ content, author }) {
        if (!content || !author) {
            throw new Error();
        }
        this.content = content;
        this.author = author;
        this.createdDate = new Date().toISOString();
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
