# Trello Clone Website

## Table of contents

- [Overview](#overview)
  - [Getting Started](#getting-started)
  - [Project Summary](#project-summary)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### Getting Started 

First, install all the necessary dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project Summary

Trello Clone is a responsive CRUD website in which one can assign tasks to a board. On this website, 
one can add a board and within the board add lists and cards. Inside each card, one can add labels, 
edit the card's description, and add comments. 


## My process


### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Typescript
- Next
- Tailwind
- MongoDB
- Mobile-first workflow


### What I learned

This was my first time working with MongoDB, so I spent a good portion of time reading up MongoDB documentation to 
familiarize myself with the syntax. The code snippet below is part of execution of a PUT request. Here, I first 
connected to my MongoDB database that I set up. Then, I updated a particular card's description with the command $set
after iterating through the list of cards with the correct list index and card index in order to find the matching card. 

```js
export const editCardDescription = async (
  req: NextApiRequest,
  res: NextApiResponse,
  id: string
) => {
  const { db } = await connectToDatabase();
  await db.collection("boards").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        [`lists.${req.body.listIndex}.cards.${req.body.cardIndex}.description`]:
          req.body.cardDescription,
      },
    }
  );
  return res
    .status(200)
    .json({ msg: "Successfully edited the card's description." });
};
```

### Continued development

For further development, I'd have to figure out the failed deployment to Netlify. As of now, 
one has to install all the dependencies and open the local host in order to view the project. 

In addition, I would like to work with react-beautiful-grid to implement the drag-and-drop effect
that Trello is known for. 
  

## Author

- Portfolio Website - [Kaixin Huang](https://www.kaixin-portfolio.netlify.app)
