/*
    TEMP FILE BECAUSE THERE IS NOT DB YET
    WILL BE DELETED LATER
*/

class User {
    constructor (firstname, lastname, role, password, id) {
        this.firstname = firstname
        this.lastname = lastname
        this.role = role
        this.password = password
        this.id = id
        this.articleIds = []
    }

    pushArticle (articleId) {
        this.articleIds.push(articleId)
    }
}

class Article {
    constructor (title, body, imgUrl, authorId, dateCreated, articleId) {
        this.title = title
        this.body = body
        this.imgUrl = imgUrl
        this.authorId = authorId
        this.dateCreated = dateCreated ?? Date.now()
        this.articleId = articleId
    }
}

const users = []
const articles = []

users.push(new User('Alex', 'Pap', 'Admin', 'password', 1))
users.push(new User('Dimitris', 'Galanis', 'Admin', 'password', 2))
users.push(new User('Triantafillos', 'Example', 'Admin', 'password', 3))
users.push(new User('Jane', 'Doe', 'User', 'password', 4))

articles.push(new Article(
    'Article 1',
    'This is the body of the article This is the body of the article This is the body of the article',
    './resources/Alex.jpg',
    1,
    undefined,
    1
))
articles.push(new Article(
    'Article 2',
    'This is the body of the article This is the body of the article This is the body of the article',
    './resources/Daxada.jpg',
    1,
    undefined,
    2
))

const exportObj = {
    users,
    articles,
}

export default exportObj