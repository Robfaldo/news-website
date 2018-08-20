#Financial Times Tech Test
==================

 ![Alt text](https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo:brand-ft-masthead?source=o-header&amp;tint=%2333302E,%2333302E&amp;format=svg)

Heroku link: https://robert-faldo-ft.herokuapp.com/

## Instructions:  

```
Build a website that shows a list of news headlines from Financial Times. You may use our Developer
APIs to achieve this.

Provide a search box for users to search for headlines containing specific words (i.e. searching for
"brexit" should return a list of brexit-related headlines).

Optionally, provide pagination for results, at 20 results per page.

This website should be:
* Server-rendered
* Progressively enhanced
* Responsive
* Accessible

For bonus points, the site should:

* Be built using Javascript and node.js
* Be deployed on Heroku
* Not rely too heavily on client-side frameworks (i.e. Angular, React) or libraries like jQuery
* Have a similar look and feel as ft.com
* Be performant over 3G networks

It'd be really awesome if, on top of all that, your site:

* Uses Origami Components
* Works offline
```

## MVP:

__I came up with the following mock up for my MVP:__

<img src="/img/mvp.png" />

__And included the following user stories as part of the MVP:__
```
As a user,
so that I can keep up to date on what's happening in the financial world,
I can see the most recent financial news
```

__See also non-MVP user stories:__
```
As a user,
So that I can find information specific to my interests,
I can search for information
```

## Getting started

1. Fork this repo and clone to your local machine
2. Run ```npm install```
3. Run ```npm start```
4. Navigate to localhost:8080

## Running tests

* Run the __back-end tests__ by running ```npm test```
* Run the __feature tests__ by running ```npm start``` from one terminal window and ```npm run cypress``` from another. When cypress opens, click ```run all tests```

Included in the back-end tests is Istanbul code coverage. This will run automatically.<br />
<img src="/img/code-coverage.png" />

## Usage

It is deployed and you can use it at Heroku link: https://robert-faldo-ft.herokuapp.com/

![Alt text](https://media.giphy.com/media/1jkXOnr0gcPCGKm1br/giphy.gif)

## Tech/Framework used

* __JavaScript__
* __Node.js__
* __Express__ framework
* __Heroku__
* __EJS__ view engine
* __ESLint__

* __Trello__ (for kanban style workflow)
* __Balsamiq__ (for wireframing mockups)

## Challenges

* __Server rendered__: I realised towards the end that although I had server-rendered the articles that load when the user visits the homepage, I was not server rendering the search results as I was making an Ajax request and appending html that I was creating on the client side. I had to refactor this out, which was challenging and also broke all my tests!
* __Testing API__: I've not tested a 3rd party API before, and it took me quite a while to do it. On the cypress side, I was originally creating a fake server and providing a fake response until I moved my search results to be server-rendered which meant that to isolate I needed to stub the ApiService to provide fake data (like I had in the server tests) but I couldn't get this to work.
* __Origami__: I looked into Origami, and although it looks like a really interesting tool, I didn't have time to implement.

## What I would have done with more time

* I would have loved to have tried the pagination. I thought I was going to get on to this but after the server-rendered refactor which caused a lot of breaking changes I didn't.
* I would have liked to have successfully stubbed the API call on the cypress tests. Although it's good to have end-to-end tests, I think it's unnecessary to have all of them making requests to the server.
* I'm not handling errors as well as I could be. I'd like to spend more time catching behaviour if there are errors.
