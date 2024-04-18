require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const githubData = {
        "login": "Tom-1508",
        "id": 125782688,
        "node_id": "U_kgDOB39KoA",
        "avatar_url": "https://avatars.githubusercontent.com/u/125782688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Tom-1508",
        "html_url": "https://github.com/Tom-1508",
        "followers_url": "https://api.github.com/users/Tom-1508/followers",
        "following_url": "https://api.github.com/users/Tom-1508/following{/other_user}",
        "gists_url": "https://api.github.com/users/Tom-1508/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Tom-1508/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Tom-1508/subscriptions",
        "organizations_url": "https://api.github.com/users/Tom-1508/orgs",
        "repos_url": "https://api.github.com/users/Tom-1508/repos",
        "events_url": "https://api.github.com/users/Tom-1508/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Tom-1508/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Tamal Majumdar",
        "company": null,
        "blog": "",
        "location": "India",
        "email": null,
        "hireable": null,
        "bio": "Passionate coder on a journey to master the art of software engineering. Turning caffeine into code and dreams into reality, one commit at a time. 🚀💻",
        "twitter_username": "Majumdar15Tamal",
        "public_repos": 8,
        "public_gists": 0,
        "followers": 2,
        "following": 19,
        "created_at": "2023-02-19T04:38:07Z",
        "updated_at": "2024-04-18T18:04:59Z"
} 

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Majumdar15Tamal')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2> chai aur code <\h2>")
})


app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})