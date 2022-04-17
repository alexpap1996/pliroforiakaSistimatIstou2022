/*
    TEMP FILE BECAUSE THERE IS NOT DB YET
    WILL BE DELETED LATER
*/
import water from "./resources/water.jpg";
import evoia from "./resources/evoia.jpg";
import bitcoin from "./resources/bitcoin.jpg";
import gardening from "./resources/gardening.png";
import solarenergy from "./resources/solar-energy.png";

class User {
    constructor (username, firstname, lastname, role, password, id) {
        this.username = username
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
        this.articleDescription = 'Article Description'
    }
}

const users = []
const articleArray = []

users.push(new User('alexpap', 'Alex', 'Pap', 'Admin', 'password', 1))
users.push(new User('jimgal', 'Dimitris', 'Galanis', 'Admin', 'password', 2))
users.push(new User('triant', 'Triantafillos', 'Example', 'Admin', 'password', 3))
users.push(new User('jdoe', 'Jane', 'Doe', 'User', 'password', 4))

articleArray.push(new Article(
    'Protect your groundwater',
    'This is the body of the article This is the body of the article This is the body of the article',
    water,
    1,
    undefined,
    1
))
articleArray.push(new Article(
    'Fire Hazard Protection',
    'This is the body of the article This is the body of the article This is the body of the article',
    evoia,
    1,
    undefined,
    2
))

articleArray.push(new Article(
    'Bitcoin under pressure to adopt more sustainable practices',
    'This is the body of the article This is the body of the article This is the body of the article',
    bitcoin,
    1,
    undefined,
    3
))

articleArray.push(new Article(
    'Eco friendly gardening',
    'This is the body of the article This is the body of the article This is the body of the article',
    gardening,
    1,
    undefined,
    4
))

articleArray.push(new Article(
    'Solar Energy',
    'This is the body of the article This is the body of the article This is the body of the article',
    solarenergy,
    1,
    undefined,
    5
))

const articles = articleArray.reduce((acc, curr) => {
    const article = { [curr.articleId]: curr }
    acc = { ...acc, ...article }
    return acc
}, {})

const exportObj = {
    users,
    articles,
}

export default exportObj