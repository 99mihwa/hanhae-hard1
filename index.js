class Site {
    constructor() {
        this.boards = [];
}

addBoard(board) {
    let findName = this.findBoardByName(board.name)  //check
    if(findName){
        throw ''
    }
    board.nameCheck = true
    this.boards.push(board);
}



findBoardByName(name) { //check
    for(let i=0; i<this.boards.length; i++){
        if(this.boards[i].name === name){
            return this.boards[i]
        }
    }
}
}
class Board {
    constructor(name) {
        if(name === null || name === ''){
            throw ''
        }
        this.name = name
        this.articles = []
    }
    publish(article) {
        if(!this.nameCheck){
            throw ''
        }
        if(article.subject === null ||
            article.subject === '' ||
            article.content === null ||
            article.content === '' ||
            article.author === null ||
            article.author === ''){
                throw ''
            }
 
        article.id = `${this.name}-${Math.floor(Math.random()*1000)}`

        let recordDate = new Date
        article.createdDate = recordDate.toISOString()
        this.articles.push(article)
        article.publishCheck = true
    }
    getAllArticles(){
        let allArticles = this.articles
        return allArticles
    }    
};

class Article {
    constructor(props){
        this.subject = props.subject
        this.content = props.content
        this.author = props.author
        this.comments = []
    }
    reply(comment){
        if(!this.publishCheck){
            throw ''
        }
        if( comment.content === null ||
            comment.content === '' ||
            comment.author === null ||
            comment.author === ''){
                throw ''
            }
        let replyDate = new Date
        comment.createdDate = replyDate.toISOString()
        this.comments.push(comment)
    }
    getAllComments(){
        let allComments = this.comments
        return allComments
    }    

}

class Comment {
    constructor(props){
        this.content = props.content
        this.author = props.author
    }

}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
