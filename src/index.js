class Site {
    constructor() {
            this.boards = [];
    }

    addBoard(board) {
        for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].board === board.board) {
                throw new Error();
            }
        }
        board.flag = true;
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

class Board {
    constructor(board) {
        if (!board) {
            throw new Error();
        }
        this.board = board;
        this.flag = false;
        this.article = [];
    }

    publish(article) {
        if (this.flag === false) {
            throw new Error();
        }
        article.flag = true;
        article.id = `${this.board}-${Math.floor(Math.random())}`;
        this.article.push(
            article,
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
        this.flag = false;
        this.comment = [];
    }

    reply(comment) {
        if (this.flag === false) {
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
