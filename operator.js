class Site {
  constructor() {
    this.boards = [];
  }

  addBoard(board) {
    for(let i = 0; i < this.boards.length; i++) {
      if(this.boards[i] === board){
        throw new Error("일치하는 보드가 있습니다.");
      }

    }
    board.flag = true;
    this.boards.push(board);
  }

  findBoardByName(boardname) {
    for(let i = 0; i < this.boards.length; i++) {
      if(this.boards[i].name === boardname){
        return this.boards[i];
      }
    }
    throw new Error('일치하는 이름이 없습니다.');
  }
  getAllBoards() {
    return this.boards;
  }
}

class Board {
  constructor(name) {
    if(!name){
      throw new Error();
    }
    this.name = name;
    this.flag = false;
    this.articles = [];
  }

  publish(article){
    if(board.flag !== true){
      throw new Error();
    }
    article.createdDate = new Date().toISOString();
    article.id = `${this.name}-${Math.random()}`
    this.articles.push(article);
  }

  getAllArticles(){
    return this.articles;
  }
}

class Article {
  constructor({subject,content,author}) {
    if(!subject||!content||!author){
      throw new Error();
    }
    this.subject = subject;
    this.content = content;
    this.author = author;
    this.id;
    this.createdDate;
    this.flag = false;
    this.comments = [];
  }
  reply(comment) {
    if(this.flag === false){
      throw new Error();
    }
    comment.createdDate =new Date().toISOString();
    this.comments.push(comment);
  }
  getAllComments(){
    return this.comments;
  }
}
class Comment  {
  constructor(content,author){
    if(!content||!author){
      throw new Error();
    }
    this.content = content;
    this.author = author;
    this.createdDate;
  }
}

const mySite = new Site();
console.log(mySite)
const noticeBoard = new Board('공지사항');
console.log(noticeBoard)
const faqBoard = new Board('FAQ');
console.log('faqBoard',faqBoard)
mySite.addBoard(noticeBoard);
mySite.addBoard(faqBoard);

console.log('mysite',mySite)

console.log(noticeBoard)
console.log(faqBoard)




