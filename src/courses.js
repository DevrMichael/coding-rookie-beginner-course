const courses = [
    {
        id: 1,
        title: "HTML",
        description: "Starting from scratch, HTML is the first step to becoming a web developer.",
        lessons: [
            {
                id: 0,
                title: 'HTML in 100 seconds',
                sidebar_title: "HTML in 100 seconds",
                vimeoId: 76979871
            },
            {
                id: 1,
                title: "Welcome to the HTML course",
                sidebar_title: "Introduction",
                image: "https://picsum.photos/800/400",
                description: "First HTML module", 
                introduction: "The first step to any frontend developers journey is to learn HTML. It is a simple coding language that will give you your first insights to what and how coding looks like. ",
                body: "Any new coder should spent a few weeks to a couple of months first understanding the basics HTML. In most HTML documents you'll work on there are a lot of repetitive aspects of HTML that you will use, and this course will take you through all of them. Below are the main components or starting blocks of an HTML document. You don't yet need to understand any of this, just take a look and make yourself a little familiar with how the language looks like.",
                codesnippet: `
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>This is where you write your page title/header</title>
                </head>
                <body>
                    This is where all the page content goes including the text, 
                    images and videos
                </body>
            </html>
                `,
                summary: "Get your pen and paper ready and let's dive into the wonderful first step of frontend development in HTML!",
                vimeoId: 76979871,
                quizQuestions: [
                    {
                      text: "What is the capital of America?",
                      options: [
                        { id: 0, text: "New York City", isCorrect: false },
                        { id: 1, text: "Miami", isCorrect: false },
                        { id: 2, text: "Santa Fe", isCorrect: false },
                        { id: 3, text: "Washington DC", isCorrect: true },
                      ],
                    },
                    {
                      text: "What year was the Constitution of America written?",
                      options: [
                        { id: 0, text: "1787", isCorrect: true },
                        { id: 1, text: "1776", isCorrect: false },
                        { id: 2, text: "1774", isCorrect: false },
                        { id: 3, text: "1826", isCorrect: false },
                      ],
                    },
                    {
                      text: "Who was the second president of the US?",
                      options: [
                        { id: 0, text: "John Adams", isCorrect: true },
                        { id: 1, text: "Paul Revere", isCorrect: false },
                        { id: 2, text: "Thomas Jefferson", isCorrect: false },
                        { id: 3, text: "Benjamin Franklin", isCorrect: false },
                      ],
                    },
                    {
                      text: "What is the largest state in the US?",
                      options: [
                        { id: 0, text: "California", isCorrect: false },
                        { id: 1, text: "Alaska", isCorrect: true },
                        { id: 2, text: "Texas", isCorrect: false },
                        { id: 3, text: "Montana", isCorrect: false },
                      ],
                    },
                    {
                      text: "Which of the following countries DO NOT border the US?",
                      options: [
                        { id: 0, text: "Canada", isCorrect: false },
                        { id: 1, text: "Russia", isCorrect: true },
                        { id: 2, text: "Cuba", isCorrect: true },
                        { id: 3, text: "Mexico", isCorrect: false },
                      ],
                    },
                  ]
            },
            {
                id: 2,
                title: "What is HTML?",
                sidebar_title: "What is HTML?",
                image: "https://picsum.photos/800/400",
                description: "Short explanation of HTML", 
                introduction:"HTML stands for Hyper Text Markup Language and is a programming language that decides the structure of web pages. Any website uses components from the HTML language to display text, images and video.",
                body:"Most modern websites contain three aspects in some form or fashion and that is HTML, CSS & Javascript. The HTML serves as the skeleton, while the CSS provides the meat, clothing and look and the Javascript makes everything dynamic. For this course we will only be looking at learning HTML, while in the next two we'll dive into the two other factions of a website.",
                codesnippet:`
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Our First HTML Page</title>
                    </head>
                    <body>
                        <div>
                            <h1>On any of your HTML pages you can add headlines.</h1>
                            <p>...or you can add paragraps, images and videos</p>
                        </div>
                    </body>
                </html>
                    `,
                summary: "HTML is an important language where you code the raw content of the page, while CSS & Javascript makes the content even more stylish and dynamic. Let's dive deeper into the structure of HTML pages.",
                vimeoId: 76979871,
                quizQuestions: [
                    {
                      text: "What is the capital of America?",
                      options: [
                        { id: 0, text: "New York City", isCorrect: false },
                        { id: 1, text: "Miami", isCorrect: false },
                        { id: 2, text: "Santa Fe", isCorrect: false },
                        { id: 3, text: "Washington DC", isCorrect: true },
                      ],
                    },
                    {
                      text: "What year was the Constitution of America written?",
                      options: [
                        { id: 0, text: "1787", isCorrect: true },
                        { id: 1, text: "1776", isCorrect: false },
                        { id: 2, text: "1774", isCorrect: false },
                        { id: 3, text: "1826", isCorrect: false },
                      ],
                    },
                    {
                      text: "Who was the second president of the US?",
                      options: [
                        { id: 0, text: "John Adams", isCorrect: true },
                        { id: 1, text: "Paul Revere", isCorrect: false },
                        { id: 2, text: "Thomas Jefferson", isCorrect: false },
                        { id: 3, text: "Benjamin Franklin", isCorrect: false },
                      ],
                    },
                    {
                      text: "What is the largest state in the US?",
                      options: [
                        { id: 0, text: "California", isCorrect: false },
                        { id: 1, text: "Alaska", isCorrect: true },
                        { id: 2, text: "Texas", isCorrect: false },
                        { id: 3, text: "Montana", isCorrect: false },
                      ],
                    },
                    {
                      text: "Which of the following countries DO NOT border the US?",
                      options: [
                        { id: 0, text: "Canada", isCorrect: false },
                        { id: 1, text: "Russia", isCorrect: true },
                        { id: 2, text: "Cuba", isCorrect: true },
                        { id: 3, text: "Mexico", isCorrect: false },
                      ],
                    },
                  ]
            },
            {
                id: 3,
                title: "The Structure of HTML Pages",
                sidebar_title: "HTML Pages Structure",
                image: "https://picsum.photos/800/400",
                description: "How HTML pages are structured", 
                introduction: "Every webpage is structured using HTML elements. These elements are the first thing you should know about when learning this language. Overall, there are many different elements that can be used, however there are a small number of them that are used the most. We've already looked at some of them like the <body>, <h1> and <p> elements.",
                body: "Each HTML element has a specific purpose. The all indicate a part of the HTML that does a specific job. For example, the <p> tag tells the computer that there is a paragraph between those tags. And the <h1> tells the computer to display a header/headline. Here are the top 10 HTML elements that you'll use the most of the time:",
                codesnippet: `
                    <header> - the top/head of the page.
                    <body> - where most of the content is displayed.
                    <footer> - the bottom of the page.
                    <div> - seperates the HTML page into different sections.
                    <h1> to <h6> - headlines in different font sizes.
                    <p> - paragraph.
                    <nav> - navigation bar.
                    <a> - anchor tag or links.
                    <img> - for embedding images.
                    <button> - for buttons.
                    `,
                summary:"Each HTML element serves a very specific purpose. As you'll get better and gain more experience with coding HTML pages, these will become very intuitive to understand and use in your projects.",
                vimeoId: 76979871,
                quizQuestions: [
                    {
                      text: "What is the capital of America?",
                      options: [
                        { id: 0, text: "New York City", isCorrect: false },
                        { id: 1, text: "Miami", isCorrect: false },
                        { id: 2, text: "Santa Fe", isCorrect: false },
                        { id: 3, text: "Washington DC", isCorrect: true },
                      ],
                    },
                    {
                      text: "What year was the Constitution of America written?",
                      options: [
                        { id: 0, text: "1787", isCorrect: true },
                        { id: 1, text: "1776", isCorrect: false },
                        { id: 2, text: "1774", isCorrect: false },
                        { id: 3, text: "1826", isCorrect: false },
                      ],
                    },
                    {
                      text: "Who was the second president of the US?",
                      options: [
                        { id: 0, text: "John Adams", isCorrect: true },
                        { id: 1, text: "Paul Revere", isCorrect: false },
                        { id: 2, text: "Thomas Jefferson", isCorrect: false },
                        { id: 3, text: "Benjamin Franklin", isCorrect: false },
                      ],
                    },
                    {
                      text: "What is the largest state in the US?",
                      options: [
                        { id: 0, text: "California", isCorrect: false },
                        { id: 1, text: "Alaska", isCorrect: true },
                        { id: 2, text: "Texas", isCorrect: false },
                        { id: 3, text: "Montana", isCorrect: false },
                      ],
                    },
                    {
                      text: "Which of the following countries DO NOT border the US?",
                      options: [
                        { id: 0, text: "Canada", isCorrect: false },
                        { id: 1, text: "Russia", isCorrect: true },
                        { id: 2, text: "Cuba", isCorrect: true },
                        { id: 3, text: "Mexico", isCorrect: false },
                      ],
                    },
                  ]
            },
            {
                id: 4,
                title: "HTML Elements & Attributes",
                sidebar_title: "HTML Attributes",
                image: "https://picsum.photos/800/400",
                description: "How can you customize HTML elements using attributes?",
                introduction: "The HTML elements we talked about in the previous lesson are necessary and valuable, but they are also static. Adding attributes to these elements gives you authority of certain aspects of the styles and actions of those elements.",
                body: "Attributes are add-ons to your elements. Some attributes will give you the ability to style the elements, others will attach links or images. Some attributes are visible, while others are not. Here are the main attributes that you will use in your HTML elements:",
                codesnippet: `
                style - adds styling to an element.
                src - adds the image to <img> elements.
                alt - provides alternative information to image elements.
                href - adds the link to <a> elements.
                title - provides a tooltip.
                class/id - elements can be in customizable classes or ids
                `,
                summary:"Attributes are add-ons to HTML elements that provides additional context for that element. They are sometimes necessary(like with the src attribute and <img> element) and other times they are voluntary.", 
                vimeoId: 76979871,
                quizQuestions: [
                    {
                      text: "What is the capital of America?",
                      options: [
                        { id: 0, text: "New York City", isCorrect: false },
                        { id: 1, text: "Miami", isCorrect: false },
                        { id: 2, text: "Santa Fe", isCorrect: false },
                        { id: 3, text: "Washington DC", isCorrect: true },
                      ],
                    },
                    {
                      text: "What year was the Constitution of America written?",
                      options: [
                        { id: 0, text: "1787", isCorrect: true },
                        { id: 1, text: "1776", isCorrect: false },
                        { id: 2, text: "1774", isCorrect: false },
                        { id: 3, text: "1826", isCorrect: false },
                      ],
                    },
                    {
                      text: "Who was the second president of the US?",
                      options: [
                        { id: 0, text: "John Adams", isCorrect: true },
                        { id: 1, text: "Paul Revere", isCorrect: false },
                        { id: 2, text: "Thomas Jefferson", isCorrect: false },
                        { id: 3, text: "Benjamin Franklin", isCorrect: false },
                      ],
                    },
                    {
                      text: "What is the largest state in the US?",
                      options: [
                        { id: 0, text: "California", isCorrect: false },
                        { id: 1, text: "Alaska", isCorrect: true },
                        { id: 2, text: "Texas", isCorrect: false },
                        { id: 3, text: "Montana", isCorrect: false },
                      ],
                    },
                    {
                      text: "Which of the following countries DO NOT border the US?",
                      options: [
                        { id: 0, text: "Canada", isCorrect: false },
                        { id: 1, text: "Russia", isCorrect: true },
                        { id: 2, text: "Cuba", isCorrect: true },
                        { id: 3, text: "Mexico", isCorrect: false },
                      ],
                    },
                  ]
            },
            {
                id: 5,
                title: "Headings & Paragraphs in HTML",
                sidebar_title: "Headings & Paragraphs",
                image: "https://picsum.photos/800/400",
                description: "Explanation of headings and paragraphs", 
                introduction: "Most HTML pages have headings and paragraphs and knowing how to structure your HTML pages with their element tags is one of the first step to know about when learning the language.",
                body: "Headings have 6 different element tags in HTML. They range from <h1> which is the largest text size to <h6>. <h1> is used for the headlines of any pages, blogposts or articles, while the other tags are used for subsequent headlines. Paragraphs are written within <p> tags and most often will be placed below a heading tag.",
                codesnippet: `
                <h1> - <h6> element tags are used for headlines.
                <p> element tags are used for paragraphs.
                `,
                summary:"Most websites have some form of text on them and a lot of them are structured using headlines followed by paragraph tags.",
                vimeoId: 76979871,
                quizQuestions: [
                    {
                      text: "What is the capital of America?",
                      options: [
                        { id: 0, text: "New York City", isCorrect: false },
                        { id: 1, text: "Miami", isCorrect: false },
                        { id: 2, text: "Santa Fe", isCorrect: false },
                        { id: 3, text: "Washington DC", isCorrect: true },
                      ],
                    },
                    {
                      text: "What year was the Constitution of America written?",
                      options: [
                        { id: 0, text: "1787", isCorrect: true },
                        { id: 1, text: "1776", isCorrect: false },
                        { id: 2, text: "1774", isCorrect: false },
                        { id: 3, text: "1826", isCorrect: false },
                      ],
                    },
                    {
                      text: "Who was the second president of the US?",
                      options: [
                        { id: 0, text: "John Adams", isCorrect: true },
                        { id: 1, text: "Paul Revere", isCorrect: false },
                        { id: 2, text: "Thomas Jefferson", isCorrect: false },
                        { id: 3, text: "Benjamin Franklin", isCorrect: false },
                      ],
                    },
                    {
                      text: "What is the largest state in the US?",
                      options: [
                        { id: 0, text: "California", isCorrect: false },
                        { id: 1, text: "Alaska", isCorrect: true },
                        { id: 2, text: "Texas", isCorrect: false },
                        { id: 3, text: "Montana", isCorrect: false },
                      ],
                    },
                    {
                      text: "Which of the following countries DO NOT border the US?",
                      options: [
                        { id: 0, text: "Canada", isCorrect: false },
                        { id: 1, text: "Russia", isCorrect: true },
                        { id: 2, text: "Cuba", isCorrect: true },
                        { id: 3, text: "Mexico", isCorrect: false },
                      ],
                    },
                  ]
            },
            {
                id: 6,
                title: "Text Formatting in HTML",
                sidebar_title: "Text Formatting",
                image: "https://picsum.photos/800/400",
                description: "How text formatting works in HTML", 
                introduction: "Any text that is displayed on a web page can be formatted to emphasize certain aspects of a the text.",
                body: "Firstly, we are able to bold any part of a text by using either the <b> or <strong> elements. Visually they do the same, but semantically they mean slightly different things. While the <b> tag bolds the text, the <strong> element bolds it while also signaling to screen reader and bots who are analyzing the page. The same goes with italisizing with eith er <i> or <em>.",
                codesnippet: `
                <b> & <strong> - bolds any text
                <i> & <em> - italisizes any text
                <u> - underlines text
                `,
                summary:"There are three main ways you can format your text with bolding, italisizing or underlining. In addition to those there are others, but these three are the most important to know about.",
                vimeoId: 76979871,
                quizQuestions: [
                    {
                      text: "What is the capital of America?",
                      options: [
                        { id: 0, text: "New York City", isCorrect: false },
                        { id: 1, text: "Miami", isCorrect: false },
                        { id: 2, text: "Santa Fe", isCorrect: false },
                        { id: 3, text: "Washington DC", isCorrect: true },
                      ],
                    },
                    {
                      text: "What year was the Constitution of America written?",
                      options: [
                        { id: 0, text: "1787", isCorrect: true },
                        { id: 1, text: "1776", isCorrect: false },
                        { id: 2, text: "1774", isCorrect: false },
                        { id: 3, text: "1826", isCorrect: false },
                      ],
                    },
                    {
                      text: "Who was the second president of the US?",
                      options: [
                        { id: 0, text: "John Adams", isCorrect: true },
                        { id: 1, text: "Paul Revere", isCorrect: false },
                        { id: 2, text: "Thomas Jefferson", isCorrect: false },
                        { id: 3, text: "Benjamin Franklin", isCorrect: false },
                      ],
                    },
                    {
                      text: "What is the largest state in the US?",
                      options: [
                        { id: 0, text: "California", isCorrect: false },
                        { id: 1, text: "Alaska", isCorrect: true },
                        { id: 2, text: "Texas", isCorrect: false },
                        { id: 3, text: "Montana", isCorrect: false },
                      ],
                    },
                    {
                      text: "Which of the following countries DO NOT border the US?",
                      options: [
                        { id: 0, text: "Canada", isCorrect: false },
                        { id: 1, text: "Russia", isCorrect: true },
                        { id: 2, text: "Cuba", isCorrect: true },
                        { id: 3, text: "Mexico", isCorrect: false },
                      ],
                    },
                  ]
            },
            {
                id: 7,
                title: "HTML Images",
                sidebar_title: "HTML Images",
                image: "https://picsum.photos/800/400",
                description: "How images are added in HTML pages",
                introduction: "Images are essential part of almost any webpage. Knowing how to add them to your HTML documents can give you a immense freedom in being able to customize your webpages.",
                body: "We add images to our HTML pages by using the <img> element along with a src attribute. The src attribute accepts a pathway to the image, which can come from one of two places. The first one is to add a webpage link from somewhere on the internet that holds the image you want to display. The second on is when you add the image document to your code and referance the pathway to the place in the code. Additionally you would want to add an alt attribute that explains the context of the image. This is important for screen readers, website crawlers and for broken images. This looks like this:",
                codesnippet: `
        1. <img src="https://picsum.photos/800/400" alt="explaining the image context"/>
        2. <img src"/imagefolder/my-image.jpg" alt="explaining the image context"/>
                `,
                summary:"Images can easily be added anywhere on a webpage by using the <img> element and adding the src attribute.", 
                vimeoId: 76979871,
                quizQuestions: [
                    {
                      text: "What is the capital of America?",
                      options: [
                        { id: 0, text: "New York City", isCorrect: false },
                        { id: 1, text: "Miami", isCorrect: false },
                        { id: 2, text: "Santa Fe", isCorrect: false },
                        { id: 3, text: "Washington DC", isCorrect: true },
                      ],
                    },
                    {
                      text: "What year was the Constitution of America written?",
                      options: [
                        { id: 0, text: "1787", isCorrect: true },
                        { id: 1, text: "1776", isCorrect: false },
                        { id: 2, text: "1774", isCorrect: false },
                        { id: 3, text: "1826", isCorrect: false },
                      ],
                    },
                    {
                      text: "Who was the second president of the US?",
                      options: [
                        { id: 0, text: "John Adams", isCorrect: true },
                        { id: 1, text: "Paul Revere", isCorrect: false },
                        { id: 2, text: "Thomas Jefferson", isCorrect: false },
                        { id: 3, text: "Benjamin Franklin", isCorrect: false },
                      ],
                    },
                    {
                      text: "What is the largest state in the US?",
                      options: [
                        { id: 0, text: "California", isCorrect: false },
                        { id: 1, text: "Alaska", isCorrect: true },
                        { id: 2, text: "Texas", isCorrect: false },
                        { id: 3, text: "Montana", isCorrect: false },
                      ],
                    },
                    {
                      text: "Which of the following countries DO NOT border the US?",
                      options: [
                        { id: 0, text: "Canada", isCorrect: false },
                        { id: 1, text: "Russia", isCorrect: true },
                        { id: 2, text: "Cuba", isCorrect: true },
                        { id: 3, text: "Mexico", isCorrect: false },
                      ],
                    },
                  ]
            },
            {
                id: 8,
                title: "Tables & Lists in HTML",
                sidebar_title: "Tables & Lists",
                image: "https://picsum.photos/800/400",
                description: "How tables and list work in HTML", 
                introduction: "Most websites have some form of tables and lists to display data in an organized fashion. They are a necessart part of most website and is an important part of HTML.",
                body: "Tables are an effective way to organize data by using tables and rows. Lists are an additional way to display data in a way that is readable to the user. Tables are built using the <table> element and the <tr>, <th> and <td> subelements. Lists are organized either by number or bulleted.",
                codesnippet: `
                    HTML Tables:
                    <table> - is the element encapsuling the whole table
                    <tr> - table rows
                    <th> - table headers
                    <td> - table data

                    Example of a simple table with two rows:

                    <table>
                        <tr>
                            <th>First table header</th>
                            <th>Second table header</th>
                        </tr>
                        <tr>
                            <td>First row data</td>
                            <td>First row data</td>
                        </tr>
                        <tr>
                            <td>Second row data</td>
                            <td>Second row data</td>
                        </tr>
                    </table>

                    HTML Lists:
                    <ul> - Stands for unordered lists, meaning bulleted
                    <ol> - Stands for ordered lists, meaning numbered
                    <li> - Stands for list item, meaning each item in the list

                    Example of an unordered list:

                    <ul>
                        <li>First bulleted list item</li>
                        <li>Second bulleted list item</li>
                        <li>Third bulleted list item</li>
                        <li>Fourth bulleted list item</li>
                    </ul>

                    Example of an ordered list:
                    <ol>
                        <li>First numbered list item</li>
                        <li>Second numbered list item</li>
                        <li>Third numbered list item </li>
                        <li>Fourth numbered list item</li>
                    </ol>                    
                `,
                summary:"Including tables and lists on your websites give you freedom to display data in organized and customizable ways.",
                vimeoId: 76979871,
                quizQuestions: [
                    {
                      text: "What is the capital of America?",
                      options: [
                        { id: 0, text: "New York City", isCorrect: false },
                        { id: 1, text: "Miami", isCorrect: false },
                        { id: 2, text: "Santa Fe", isCorrect: false },
                        { id: 3, text: "Washington DC", isCorrect: true },
                      ],
                    },
                    {
                      text: "What year was the Constitution of America written?",
                      options: [
                        { id: 0, text: "1787", isCorrect: true },
                        { id: 1, text: "1776", isCorrect: false },
                        { id: 2, text: "1774", isCorrect: false },
                        { id: 3, text: "1826", isCorrect: false },
                      ],
                    },
                    {
                      text: "Who was the second president of the US?",
                      options: [
                        { id: 0, text: "John Adams", isCorrect: true },
                        { id: 1, text: "Paul Revere", isCorrect: false },
                        { id: 2, text: "Thomas Jefferson", isCorrect: false },
                        { id: 3, text: "Benjamin Franklin", isCorrect: false },
                      ],
                    },
                    {
                      text: "What is the largest state in the US?",
                      options: [
                        { id: 0, text: "California", isCorrect: false },
                        { id: 1, text: "Alaska", isCorrect: true },
                        { id: 2, text: "Texas", isCorrect: false },
                        { id: 3, text: "Montana", isCorrect: false },
                      ],
                    },
                    {
                      text: "Which of the following countries DO NOT border the US?",
                      options: [
                        { id: 0, text: "Canada", isCorrect: false },
                        { id: 1, text: "Russia", isCorrect: true },
                        { id: 2, text: "Cuba", isCorrect: true },
                        { id: 3, text: "Mexico", isCorrect: false },
                      ],
                    },
                  ]
            },
            {
                id: 9,
                title: "HTML Forms",
                sidebar_title: "HTML Forms",
                image: "https://picsum.photos/800/400",
                description: "What forms are in HTML", 
                introduction: "Every website these days have some kind of form embedded in them. Especially if you are going to build commercial websites, it is crucial to that you know how to build forms with HTML",
                body: "Forms are a neccessary component to most modern websites. Forms are used in so many ways from your newsletters, log in pages, customer feedback, store checkout, etc. On most jobs you will at some point work on building or customizing different forms. Also on job interviews for frontend jobs, it will be an advantage for you if you know HTML forms well. HTML forms consists of four main elements: <form>, <label>, <input> and <button>. The <form> element encapsulates the form, while the <label> adds a field name over the input and finally the button finalizes the form and sends it off.",
                codesnippet: `
                <form> - encapsulates the form
                <label> - labels/names an input field
                <input> - text field
                <textarea> - a larger input field for user to type information
                <br> - HTML that adds a line break/starts a new line

                Examples:

                <form>
                    <label>Username:</label> <br>
                    <input> <br>
                    <label>Password:</label> <br>
                    <input>
                    <button>Log in</button>
                </form>
                
                <form>
                    <label>Customer Feedback:</label> <br>
                    <textarea>
                    <button>Send Feedback</button>
                </form>
                `,
                summary:"Forms are a necessary part of any website, and it is worth investing some time learning how to create one thorougly.",
                vimeoId: 76979871,
                quizQuestions: [
                    {
                      text: "What is the capital of America?",
                      options: [
                        { id: 0, text: "New York City", isCorrect: false },
                        { id: 1, text: "Miami", isCorrect: false },
                        { id: 2, text: "Santa Fe", isCorrect: false },
                        { id: 3, text: "Washington DC", isCorrect: true },
                      ],
                    },
                    {
                      text: "What year was the Constitution of America written?",
                      options: [
                        { id: 0, text: "1787", isCorrect: true },
                        { id: 1, text: "1776", isCorrect: false },
                        { id: 2, text: "1774", isCorrect: false },
                        { id: 3, text: "1826", isCorrect: false },
                      ],
                    },
                    {
                      text: "Who was the second president of the US?",
                      options: [
                        { id: 0, text: "John Adams", isCorrect: true },
                        { id: 1, text: "Paul Revere", isCorrect: false },
                        { id: 2, text: "Thomas Jefferson", isCorrect: false },
                        { id: 3, text: "Benjamin Franklin", isCorrect: false },
                      ],
                    },
                    {
                      text: "What is the largest state in the US?",
                      options: [
                        { id: 0, text: "California", isCorrect: false },
                        { id: 1, text: "Alaska", isCorrect: true },
                        { id: 2, text: "Texas", isCorrect: false },
                        { id: 3, text: "Montana", isCorrect: false },
                      ],
                    },
                    {
                      text: "Which of the following countries DO NOT border the US?",
                      options: [
                        { id: 0, text: "Canada", isCorrect: false },
                        { id: 1, text: "Russia", isCorrect: true },
                        { id: 2, text: "Cuba", isCorrect: true },
                        { id: 3, text: "Mexico", isCorrect: false },
                      ],
                    },
                  ]
            },
            {
                id: 10,
                title: "Creating a Simple HTML Page from Scratch",
                sidebar_title: "Creating a New Page",
                image: "https://picsum.photos/800/400",
                description: "Create the first HTML page", 
                introduction: "Now that we have gone through the basic elements of the HTML language let's put it all together and build our first HTML page.",
                body: "The first element we need to write that encapsulates every HTML document is the <html> tags. Then we add our <head> and <body> section and add whichever element we want the HTML document to include.",
                codesnippet: `
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>My First HTML Page</title>
            </head>
            <body>
                <div>
                    <h1>My First HTML Page</h1>
                    <p>This is my first HTML page.</p>
                    <img src="https://picsum.photos/200/300" />
                </div>
                <div>
                    <form>
                        <h2>Sign up for our newsletter!</h2>
                        <label>Your email:</label>
                        <input />
                        <button>Sign me up!</button>
                    </form>
                </div>
                <div>
                    <table>
                        <h3>How Long Does it Take to Become a Frontend Developer?</h3>
                        <tr>
                            <th>HTML</th>
                            <th>CSS</th>
                            <th>Javascript</th>
                        </tr>
                        <tr>
                            <td>Takes two weeks to two months to learn</td>
                            <td>Takes one - two months to learn</td>
                            <td>Takes about two months to learn</td>
                        </tr>
                    </table> 

                    <h4>Key Elements to Getting the First Frontend Developer Job</h4>
                    <ul>
                        <li>Basic understanding of HTML, CSS and Javascript</li>
                        <li>Building Projects</li>
                        <li>Learn a Library Built Upon Javascript like React or Vue</li>
                        <li>Create and polish your Linkedin Profile</li>
                        <li>Have a Professional Looking Resume</li>
                    </ul>
                </div>
            </body>
        </html>
`,
                summary:"There you have it! You have officially created your first HTML page and are well on your way to becoming a frontend developer!",
                vimeoId: 76979871,
                quizQuestions: [
                    {
                      text: "What is the capital of America?",
                      options: [
                        { id: 0, text: "New York City", isCorrect: false },
                        { id: 1, text: "Miami", isCorrect: false },
                        { id: 2, text: "Santa Fe", isCorrect: false },
                        { id: 3, text: "Washington DC", isCorrect: true },
                      ],
                    },
                    {
                      text: "What year was the Constitution of America written?",
                      options: [
                        { id: 0, text: "1787", isCorrect: true },
                        { id: 1, text: "1776", isCorrect: false },
                        { id: 2, text: "1774", isCorrect: false },
                        { id: 3, text: "1826", isCorrect: false },
                      ],
                    },
                    {
                      text: "Who was the second president of the US?",
                      options: [
                        { id: 0, text: "John Adams", isCorrect: true },
                        { id: 1, text: "Paul Revere", isCorrect: false },
                        { id: 2, text: "Thomas Jefferson", isCorrect: false },
                        { id: 3, text: "Benjamin Franklin", isCorrect: false },
                      ],
                    },
                    {
                      text: "What is the largest state in the US?",
                      options: [
                        { id: 0, text: "California", isCorrect: false },
                        { id: 1, text: "Alaska", isCorrect: true },
                        { id: 2, text: "Texas", isCorrect: false },
                        { id: 3, text: "Montana", isCorrect: false },
                      ],
                    },
                    {
                      text: "Which of the following countries DO NOT border the US?",
                      options: [
                        { id: 0, text: "Canada", isCorrect: false },
                        { id: 1, text: "Russia", isCorrect: true },
                        { id: 2, text: "Cuba", isCorrect: true },
                        { id: 3, text: "Mexico", isCorrect: false },
                      ],
                    },
                  ]
            },
            {
                id: 11,
                title: "Styling HTML Elements",
                image: "https://picsum.photos/800/400",
                description: "How to style HTML elements",
                sidebar_title: "Styling Elements",
                introduction: "Next, we are going to learn how to style our HTML elements",
                body: "There are a few ways we can style our HTML elements. The main ones you'll use quite a bit are changing the text and background color, size and font style. You will also need to align the HTML elements in different places on the page, which you can do with styling. It is most common to keep most of the styling in a seperate CSS file(which we will learn about later), but for this HTML lesson we will learn how to style elements using in-line HTML styling. In-line styles are added inside of HTML elements by writing style followed by the property you want to style and the value. The most common in-line styles that you will use are:",
                codesnippet: `
    <element style="color:pink"> - changes the text color
    <element style="background-color:yellow"> - changes the background color
    <element style="font-size:18px"> - changes the text size
    <element style="font-family:Arial"> - changes the font family of the text
    <element style="text-align:left"> - changes the text position to left, center or right

    You can add styles to any HTML element, for this example we will use the 
    <p>(paragraph) element.
    
    Example: 
    <p style="color:pink">Pink colored text</p>
    <p style="background-color:yellow">Yellow background color</p>
    <p style="font-size:18px">Sets the paragraph text size to 18px</p>
    <p style="font-family:Arial">Sets the paragraph font family to Arial</p>
    <p style="text-align:left">Aligns the text in the element to the left side</p>
                `,
                summary:"We will learn a lot more about styling HTML elements in the CSS course.",
                vimeoId: 76979871,
                quizQuestions: [
                    {
                      text: "What is the capital of America?",
                      options: [
                        { id: 0, text: "New York City", isCorrect: false },
                        { id: 1, text: "Miami", isCorrect: false },
                        { id: 2, text: "Santa Fe", isCorrect: false },
                        { id: 3, text: "Washington DC", isCorrect: true },
                      ],
                    },
                    {
                      text: "What year was the Constitution of America written?",
                      options: [
                        { id: 0, text: "1787", isCorrect: true },
                        { id: 1, text: "1776", isCorrect: false },
                        { id: 2, text: "1774", isCorrect: false },
                        { id: 3, text: "1826", isCorrect: false },
                      ],
                    },
                    {
                      text: "Who was the second president of the US?",
                      options: [
                        { id: 0, text: "John Adams", isCorrect: true },
                        { id: 1, text: "Paul Revere", isCorrect: false },
                        { id: 2, text: "Thomas Jefferson", isCorrect: false },
                        { id: 3, text: "Benjamin Franklin", isCorrect: false },
                      ],
                    },
                    {
                      text: "What is the largest state in the US?",
                      options: [
                        { id: 0, text: "California", isCorrect: false },
                        { id: 1, text: "Alaska", isCorrect: true },
                        { id: 2, text: "Texas", isCorrect: false },
                        { id: 3, text: "Montana", isCorrect: false },
                      ],
                    },
                    {
                      text: "Which of the following countries DO NOT border the US?",
                      options: [
                        { id: 0, text: "Canada", isCorrect: false },
                        { id: 1, text: "Russia", isCorrect: true },
                        { id: 2, text: "Cuba", isCorrect: true },
                        { id: 3, text: "Mexico", isCorrect: false },
                      ],
                    },
                  ]
            },
            {
                id: 12,
                title: "HTML Classes & IDs",
                sidebar_title: "Classes & IDs",
                image: "https://picsum.photos/800/400",
                description: "Why classes and IDs are in HTML", 
                introduction: "As your projects get bigger the ability to tag specific elements you want to change becomes increasingly more important. With classes and IDs you can tak any element to reference them in your CSS/styling files.",
                body: "Classes are tags for groups of elements that should have the same type of styling. You can name many different elements with the same class name. With IDs, however, they are meant to refer to one or a few elements that you want to style. Both of these are extremely valuable in their own way. They are added to elements just the same way as the in-line styles are.",
                codesnippet: `
                class - for groups of elements that has the same styling
                IDs - for specific and unique elements that you want to style or refer to in the CSS file

                Example:

                <h1 class="headerClass">Headline Text</h1>
                <p id="uniqueId">Unique Id Paragraph</p>
                `,
                summary:"Both of these are important to know about, because you will use them a lot when building your projects.",
                vimeoId: 76979871,
                quizQuestions: [
                    {
                      text: "What is the capital of America?",
                      options: [
                        { id: 0, text: "New York City", isCorrect: false },
                        { id: 1, text: "Miami", isCorrect: false },
                        { id: 2, text: "Santa Fe", isCorrect: false },
                        { id: 3, text: "Washington DC", isCorrect: true },
                      ],
                    },
                    {
                      text: "What year was the Constitution of America written?",
                      options: [
                        { id: 0, text: "1787", isCorrect: true },
                        { id: 1, text: "1776", isCorrect: false },
                        { id: 2, text: "1774", isCorrect: false },
                        { id: 3, text: "1826", isCorrect: false },
                      ],
                    },
                    {
                      text: "Who was the second president of the US?",
                      options: [
                        { id: 0, text: "John Adams", isCorrect: true },
                        { id: 1, text: "Paul Revere", isCorrect: false },
                        { id: 2, text: "Thomas Jefferson", isCorrect: false },
                        { id: 3, text: "Benjamin Franklin", isCorrect: false },
                      ],
                    },
                    {
                      text: "What is the largest state in the US?",
                      options: [
                        { id: 0, text: "California", isCorrect: false },
                        { id: 1, text: "Alaska", isCorrect: true },
                        { id: 2, text: "Texas", isCorrect: false },
                        { id: 3, text: "Montana", isCorrect: false },
                      ],
                    },
                    {
                      text: "Which of the following countries DO NOT border the US?",
                      options: [
                        { id: 0, text: "Canada", isCorrect: false },
                        { id: 1, text: "Russia", isCorrect: true },
                        { id: 2, text: "Cuba", isCorrect: true },
                        { id: 3, text: "Mexico", isCorrect: false },
                      ],
                    },
                  ]
            },
            {
                id: 13,
                title: "HTML Links with Anchor Tags",
                sidebar_title: "Anchor Tags",
                image: "https://picsum.photos/800/400",
                description: "How to add links using anchor tags",
                introduction: "Anchor tags are elements in the HTML language that let us attach links to a URL. They can be used for clicking text, buttons or images.",
                body: "Anchor tags gives us as programmers the ability to provide our users with ways to navigate around our sites, or to other sites. It is simple to implement by attaching a URL or a pathway in your code to an <a> tag.",
                codesnippet: `
                <a href="insert URL here">Link to a URL</a>
                `,
                summary:"In most coding project, you will use anchor tags, and they are good to know about for any aspiring web developer.", 
                vimeoId: 76979871,
                quizQuestions: [
                    {
                      text: "What is the capital of America?",
                      options: [
                        { id: 0, text: "New York City", isCorrect: false },
                        { id: 1, text: "Miami", isCorrect: false },
                        { id: 2, text: "Santa Fe", isCorrect: false },
                        { id: 3, text: "Washington DC", isCorrect: true },
                      ],
                    },
                    {
                      text: "What year was the Constitution of America written?",
                      options: [
                        { id: 0, text: "1787", isCorrect: true },
                        { id: 1, text: "1776", isCorrect: false },
                        { id: 2, text: "1774", isCorrect: false },
                        { id: 3, text: "1826", isCorrect: false },
                      ],
                    },
                    {
                      text: "Who was the second president of the US?",
                      options: [
                        { id: 0, text: "John Adams", isCorrect: true },
                        { id: 1, text: "Paul Revere", isCorrect: false },
                        { id: 2, text: "Thomas Jefferson", isCorrect: false },
                        { id: 3, text: "Benjamin Franklin", isCorrect: false },
                      ],
                    },
                    {
                      text: "What is the largest state in the US?",
                      options: [
                        { id: 0, text: "California", isCorrect: false },
                        { id: 1, text: "Alaska", isCorrect: true },
                        { id: 2, text: "Texas", isCorrect: false },
                        { id: 3, text: "Montana", isCorrect: false },
                      ],
                    },
                    {
                      text: "Which of the following countries DO NOT border the US?",
                      options: [
                        { id: 0, text: "Canada", isCorrect: false },
                        { id: 1, text: "Russia", isCorrect: true },
                        { id: 2, text: "Cuba", isCorrect: true },
                        { id: 3, text: "Mexico", isCorrect: false },
                      ],
                    },
                  ]
            },
            {
                id: 14,
                title: "Comments on HTML Pages",
                sidebar_title: "HTML Comments",
                image: "https://picsum.photos/800/400",
                description: "How to make comments in HTML code", 
                introduction: "One of the most valuable skills for developers is their ability to communicate. Comments are parts of coding projects that communicate what the code is trying to do to both yourself and other developers on your team.",
                body: "As a developer you should strive to write increasingly more readable code. However, sometimes writing some comments can be valuable even if you have written the most readable code. Here is how HTML codes are written:",
                codesnippet: `HTML codes have an opening <!-- tag and a closing --> tag. The comment you want to communicate goes between these tags.
                
                Example:
                <!-- Some comment about your code -->
                `,
                summary:"Comments can be a powerful way to communicate what your code is trying to do. Having them makes it easier for you to come back a year after you have written the code and easily understand what it is doing. Also, it allows other developers to read and understand your code.",
                vimeoId: 76979871,
                quizQuestions: [
                    {
                      text: "What is the capital of America?",
                      options: [
                        { id: 0, text: "New York City", isCorrect: false },
                        { id: 1, text: "Miami", isCorrect: false },
                        { id: 2, text: "Santa Fe", isCorrect: false },
                        { id: 3, text: "Washington DC", isCorrect: true },
                      ],
                    },
                    {
                      text: "What year was the Constitution of America written?",
                      options: [
                        { id: 0, text: "1787", isCorrect: true },
                        { id: 1, text: "1776", isCorrect: false },
                        { id: 2, text: "1774", isCorrect: false },
                        { id: 3, text: "1826", isCorrect: false },
                      ],
                    },
                    {
                      text: "Who was the second president of the US?",
                      options: [
                        { id: 0, text: "John Adams", isCorrect: true },
                        { id: 1, text: "Paul Revere", isCorrect: false },
                        { id: 2, text: "Thomas Jefferson", isCorrect: false },
                        { id: 3, text: "Benjamin Franklin", isCorrect: false },
                      ],
                    },
                    {
                      text: "What is the largest state in the US?",
                      options: [
                        { id: 0, text: "California", isCorrect: false },
                        { id: 1, text: "Alaska", isCorrect: true },
                        { id: 2, text: "Texas", isCorrect: false },
                        { id: 3, text: "Montana", isCorrect: false },
                      ],
                    },
                    {
                      text: "Which of the following countries DO NOT border the US?",
                      options: [
                        { id: 0, text: "Canada", isCorrect: false },
                        { id: 1, text: "Russia", isCorrect: true },
                        { id: 2, text: "Cuba", isCorrect: true },
                        { id: 3, text: "Mexico", isCorrect: false },
                      ],
                    },
                  ]
            },
            {
                id: 15,
                title: "HTML Cheatsheet",
                sidebar_title: "Cheatsheet",
                image: "https://picsum.photos/800/400",
                description: "Recap of the basics of HTML", 
                introduction: "",
                body: "",
                codesnippet: ``,
                summary:"",
                vimeoId: 76979871
            },

        ]
    },
    {
        id: 2,
        title: "CSS",
        description: "Learn everything about styling your HTML pages with CSS.",
        lessons: [
            {
                id: 0,
                title: 'CSS in 100 seconds',
                sidebar_title: "CSS in 100 seconds",
                vimeoId: 76979871
            },
            {
            id: 1,
            title: "Welcome to the CSS course",
            sidebar_title: "CSS Introduction",
            image: "https://picsum.photos/800/400",
            description: "First CSS module", 
            introduction: "",
            body: "",
            codesnippet: ``,
            summary:"",
            vimeoId: 76979871,
            quizQuestions: [
                {
                  text: "What is the capital of America?",
                  options: [
                    { id: 0, text: "New York City", isCorrect: false },
                    { id: 1, text: "Miami", isCorrect: false },
                    { id: 2, text: "Santa Fe", isCorrect: false },
                    { id: 3, text: "Washington DC", isCorrect: true },
                  ],
                },
                {
                  text: "What year was the Constitution of America written?",
                  options: [
                    { id: 0, text: "1787", isCorrect: true },
                    { id: 1, text: "1776", isCorrect: false },
                    { id: 2, text: "1774", isCorrect: false },
                    { id: 3, text: "1826", isCorrect: false },
                  ],
                },
                {
                  text: "Who was the second president of the US?",
                  options: [
                    { id: 0, text: "John Adams", isCorrect: true },
                    { id: 1, text: "Paul Revere", isCorrect: false },
                    { id: 2, text: "Thomas Jefferson", isCorrect: false },
                    { id: 3, text: "Benjamin Franklin", isCorrect: false },
                  ],
                },
                {
                  text: "What is the largest state in the US?",
                  options: [
                    { id: 0, text: "California", isCorrect: false },
                    { id: 1, text: "Alaska", isCorrect: true },
                    { id: 2, text: "Texas", isCorrect: false },
                    { id: 3, text: "Montana", isCorrect: false },
                  ],
                },
                {
                  text: "Which of the following countries DO NOT border the US?",
                  options: [
                    { id: 0, text: "Canada", isCorrect: false },
                    { id: 1, text: "Russia", isCorrect: true },
                    { id: 2, text: "Cuba", isCorrect: true },
                    { id: 3, text: "Mexico", isCorrect: false },
                  ],
                },
              ]
        },
        {
            id: 2,
            title: "What is CSS?",
            sidebar_title: "What is CSS?",
            image: "https://picsum.photos/800/400",
            description: "Introduction to what CSS is", 
            introduction: "",
            body: "",
            codesnippet: ``,
            summary:"",
            vimeoId: 76979871,
            quizQuestions: [
                {
                  text: "What is the capital of America?",
                  options: [
                    { id: 0, text: "New York City", isCorrect: false },
                    { id: 1, text: "Miami", isCorrect: false },
                    { id: 2, text: "Santa Fe", isCorrect: false },
                    { id: 3, text: "Washington DC", isCorrect: true },
                  ],
                },
                {
                  text: "What year was the Constitution of America written?",
                  options: [
                    { id: 0, text: "1787", isCorrect: true },
                    { id: 1, text: "1776", isCorrect: false },
                    { id: 2, text: "1774", isCorrect: false },
                    { id: 3, text: "1826", isCorrect: false },
                  ],
                },
                {
                  text: "Who was the second president of the US?",
                  options: [
                    { id: 0, text: "John Adams", isCorrect: true },
                    { id: 1, text: "Paul Revere", isCorrect: false },
                    { id: 2, text: "Thomas Jefferson", isCorrect: false },
                    { id: 3, text: "Benjamin Franklin", isCorrect: false },
                  ],
                },
                {
                  text: "What is the largest state in the US?",
                  options: [
                    { id: 0, text: "California", isCorrect: false },
                    { id: 1, text: "Alaska", isCorrect: true },
                    { id: 2, text: "Texas", isCorrect: false },
                    { id: 3, text: "Montana", isCorrect: false },
                  ],
                },
                {
                  text: "Which of the following countries DO NOT border the US?",
                  options: [
                    { id: 0, text: "Canada", isCorrect: false },
                    { id: 1, text: "Russia", isCorrect: true },
                    { id: 2, text: "Cuba", isCorrect: true },
                    { id: 3, text: "Mexico", isCorrect: false },
                  ],
                },
              ]
        },
        {
            id: 3,
            title: "CSS Selectors",
            sidebar_title: "CSS Selectors",
            image: "https://picsum.photos/800/400",
            description: "How selectors work in CSS", 
            introduction: "",
            body: "",
            codesnippet: ``,
            summary:"",
            vimeoId: 76979871,
            quizQuestions: [
                {
                  text: "What is the capital of America?",
                  options: [
                    { id: 0, text: "New York City", isCorrect: false },
                    { id: 1, text: "Miami", isCorrect: false },
                    { id: 2, text: "Santa Fe", isCorrect: false },
                    { id: 3, text: "Washington DC", isCorrect: true },
                  ],
                },
                {
                  text: "What year was the Constitution of America written?",
                  options: [
                    { id: 0, text: "1787", isCorrect: true },
                    { id: 1, text: "1776", isCorrect: false },
                    { id: 2, text: "1774", isCorrect: false },
                    { id: 3, text: "1826", isCorrect: false },
                  ],
                },
                {
                  text: "Who was the second president of the US?",
                  options: [
                    { id: 0, text: "John Adams", isCorrect: true },
                    { id: 1, text: "Paul Revere", isCorrect: false },
                    { id: 2, text: "Thomas Jefferson", isCorrect: false },
                    { id: 3, text: "Benjamin Franklin", isCorrect: false },
                  ],
                },
                {
                  text: "What is the largest state in the US?",
                  options: [
                    { id: 0, text: "California", isCorrect: false },
                    { id: 1, text: "Alaska", isCorrect: true },
                    { id: 2, text: "Texas", isCorrect: false },
                    { id: 3, text: "Montana", isCorrect: false },
                  ],
                },
                {
                  text: "Which of the following countries DO NOT border the US?",
                  options: [
                    { id: 0, text: "Canada", isCorrect: false },
                    { id: 1, text: "Russia", isCorrect: true },
                    { id: 2, text: "Cuba", isCorrect: true },
                    { id: 3, text: "Mexico", isCorrect: false },
                  ],
                },
              ]
        },
        {
            id: 4,
            title: "Setting Colors with CSS",
            sidebar_title: "CSS Colors",
            image: "https://picsum.photos/800/400",
            description: "How to set colors using CSS", 
            introduction: "",
            body: "",
            codesnippet: ``,
            summary:"",
            vimeoId: 76979871,
            quizQuestions: [
                {
                  text: "What is the capital of America?",
                  options: [
                    { id: 0, text: "New York City", isCorrect: false },
                    { id: 1, text: "Miami", isCorrect: false },
                    { id: 2, text: "Santa Fe", isCorrect: false },
                    { id: 3, text: "Washington DC", isCorrect: true },
                  ],
                },
                {
                  text: "What year was the Constitution of America written?",
                  options: [
                    { id: 0, text: "1787", isCorrect: true },
                    { id: 1, text: "1776", isCorrect: false },
                    { id: 2, text: "1774", isCorrect: false },
                    { id: 3, text: "1826", isCorrect: false },
                  ],
                },
                {
                  text: "Who was the second president of the US?",
                  options: [
                    { id: 0, text: "John Adams", isCorrect: true },
                    { id: 1, text: "Paul Revere", isCorrect: false },
                    { id: 2, text: "Thomas Jefferson", isCorrect: false },
                    { id: 3, text: "Benjamin Franklin", isCorrect: false },
                  ],
                },
                {
                  text: "What is the largest state in the US?",
                  options: [
                    { id: 0, text: "California", isCorrect: false },
                    { id: 1, text: "Alaska", isCorrect: true },
                    { id: 2, text: "Texas", isCorrect: false },
                    { id: 3, text: "Montana", isCorrect: false },
                  ],
                },
                {
                  text: "Which of the following countries DO NOT border the US?",
                  options: [
                    { id: 0, text: "Canada", isCorrect: false },
                    { id: 1, text: "Russia", isCorrect: true },
                    { id: 2, text: "Cuba", isCorrect: true },
                    { id: 3, text: "Mexico", isCorrect: false },
                  ],
                },
              ]
        },
        {
            id: 5,
            title: "The Box Model",
            sidebar_title: "The Box Model",
            image: "https://picsum.photos/800/400",
            description: "Explanation of the box model", 
            introduction: "",
            body: "",
            codesnippet: ``,
            summary:"",
            vimeoId: 76979871,
            quizQuestions: [
                {
                  text: "What is the capital of America?",
                  options: [
                    { id: 0, text: "New York City", isCorrect: false },
                    { id: 1, text: "Miami", isCorrect: false },
                    { id: 2, text: "Santa Fe", isCorrect: false },
                    { id: 3, text: "Washington DC", isCorrect: true },
                  ],
                },
                {
                  text: "What year was the Constitution of America written?",
                  options: [
                    { id: 0, text: "1787", isCorrect: true },
                    { id: 1, text: "1776", isCorrect: false },
                    { id: 2, text: "1774", isCorrect: false },
                    { id: 3, text: "1826", isCorrect: false },
                  ],
                },
                {
                  text: "Who was the second president of the US?",
                  options: [
                    { id: 0, text: "John Adams", isCorrect: true },
                    { id: 1, text: "Paul Revere", isCorrect: false },
                    { id: 2, text: "Thomas Jefferson", isCorrect: false },
                    { id: 3, text: "Benjamin Franklin", isCorrect: false },
                  ],
                },
                {
                  text: "What is the largest state in the US?",
                  options: [
                    { id: 0, text: "California", isCorrect: false },
                    { id: 1, text: "Alaska", isCorrect: true },
                    { id: 2, text: "Texas", isCorrect: false },
                    { id: 3, text: "Montana", isCorrect: false },
                  ],
                },
                {
                  text: "Which of the following countries DO NOT border the US?",
                  options: [
                    { id: 0, text: "Canada", isCorrect: false },
                    { id: 1, text: "Russia", isCorrect: true },
                    { id: 2, text: "Cuba", isCorrect: true },
                    { id: 3, text: "Mexico", isCorrect: false },
                  ],
                },
              ]
        },
        {
            id: 6,
            title: "Padding & Margin in CSS",
            sidebar_title: "Padding & Margin",
            image: "https://picsum.photos/800/400",
            description: "How padding and margin works in CSS", 
            introduction: "",
            body: "",
            codesnippet: ``,
            summary:"",
            vimeoId: 76979871,
            quizQuestions: [
                {
                  text: "What is the capital of America?",
                  options: [
                    { id: 0, text: "New York City", isCorrect: false },
                    { id: 1, text: "Miami", isCorrect: false },
                    { id: 2, text: "Santa Fe", isCorrect: false },
                    { id: 3, text: "Washington DC", isCorrect: true },
                  ],
                },
                {
                  text: "What year was the Constitution of America written?",
                  options: [
                    { id: 0, text: "1787", isCorrect: true },
                    { id: 1, text: "1776", isCorrect: false },
                    { id: 2, text: "1774", isCorrect: false },
                    { id: 3, text: "1826", isCorrect: false },
                  ],
                },
                {
                  text: "Who was the second president of the US?",
                  options: [
                    { id: 0, text: "John Adams", isCorrect: true },
                    { id: 1, text: "Paul Revere", isCorrect: false },
                    { id: 2, text: "Thomas Jefferson", isCorrect: false },
                    { id: 3, text: "Benjamin Franklin", isCorrect: false },
                  ],
                },
                {
                  text: "What is the largest state in the US?",
                  options: [
                    { id: 0, text: "California", isCorrect: false },
                    { id: 1, text: "Alaska", isCorrect: true },
                    { id: 2, text: "Texas", isCorrect: false },
                    { id: 3, text: "Montana", isCorrect: false },
                  ],
                },
                {
                  text: "Which of the following countries DO NOT border the US?",
                  options: [
                    { id: 0, text: "Canada", isCorrect: false },
                    { id: 1, text: "Russia", isCorrect: true },
                    { id: 2, text: "Cuba", isCorrect: true },
                    { id: 3, text: "Mexico", isCorrect: false },
                  ],
                },
              ]
        },
        {
            id: 7,
            title: "Borders",
            sidebar_title: "Borders",
            image: "https://picsum.photos/800/400",
            description: "How to add borders to HTML elements", 
            introduction: "",
            body: "",
            codesnippet: ``,
            summary:"",
            vimeoId: 76979871,
            quizQuestions: [
                {
                  text: "What is the capital of America?",
                  options: [
                    { id: 0, text: "New York City", isCorrect: false },
                    { id: 1, text: "Miami", isCorrect: false },
                    { id: 2, text: "Santa Fe", isCorrect: false },
                    { id: 3, text: "Washington DC", isCorrect: true },
                  ],
                },
                {
                  text: "What year was the Constitution of America written?",
                  options: [
                    { id: 0, text: "1787", isCorrect: true },
                    { id: 1, text: "1776", isCorrect: false },
                    { id: 2, text: "1774", isCorrect: false },
                    { id: 3, text: "1826", isCorrect: false },
                  ],
                },
                {
                  text: "Who was the second president of the US?",
                  options: [
                    { id: 0, text: "John Adams", isCorrect: true },
                    { id: 1, text: "Paul Revere", isCorrect: false },
                    { id: 2, text: "Thomas Jefferson", isCorrect: false },
                    { id: 3, text: "Benjamin Franklin", isCorrect: false },
                  ],
                },
                {
                  text: "What is the largest state in the US?",
                  options: [
                    { id: 0, text: "California", isCorrect: false },
                    { id: 1, text: "Alaska", isCorrect: true },
                    { id: 2, text: "Texas", isCorrect: false },
                    { id: 3, text: "Montana", isCorrect: false },
                  ],
                },
                {
                  text: "Which of the following countries DO NOT border the US?",
                  options: [
                    { id: 0, text: "Canada", isCorrect: false },
                    { id: 1, text: "Russia", isCorrect: true },
                    { id: 2, text: "Cuba", isCorrect: true },
                    { id: 3, text: "Mexico", isCorrect: false },
                  ],
                },
              ]
        },
        {
            id: 8,
            title: "Height & Width in CSS",
            sidebar_title: "Height & Width",
            image: "https://picsum.photos/800/400",
            description: "Why adding height and width can be useful in CSS", 
            introduction: "",
            body: "",
            codesnippet: ``,
            summary:"",
            vimeoId: 76979871,
            quizQuestions: [
                {
                  text: "What is the capital of America?",
                  options: [
                    { id: 0, text: "New York City", isCorrect: false },
                    { id: 1, text: "Miami", isCorrect: false },
                    { id: 2, text: "Santa Fe", isCorrect: false },
                    { id: 3, text: "Washington DC", isCorrect: true },
                  ],
                },
                {
                  text: "What year was the Constitution of America written?",
                  options: [
                    { id: 0, text: "1787", isCorrect: true },
                    { id: 1, text: "1776", isCorrect: false },
                    { id: 2, text: "1774", isCorrect: false },
                    { id: 3, text: "1826", isCorrect: false },
                  ],
                },
                {
                  text: "Who was the second president of the US?",
                  options: [
                    { id: 0, text: "John Adams", isCorrect: true },
                    { id: 1, text: "Paul Revere", isCorrect: false },
                    { id: 2, text: "Thomas Jefferson", isCorrect: false },
                    { id: 3, text: "Benjamin Franklin", isCorrect: false },
                  ],
                },
                {
                  text: "What is the largest state in the US?",
                  options: [
                    { id: 0, text: "California", isCorrect: false },
                    { id: 1, text: "Alaska", isCorrect: true },
                    { id: 2, text: "Texas", isCorrect: false },
                    { id: 3, text: "Montana", isCorrect: false },
                  ],
                },
                {
                  text: "Which of the following countries DO NOT border the US?",
                  options: [
                    { id: 0, text: "Canada", isCorrect: false },
                    { id: 1, text: "Russia", isCorrect: true },
                    { id: 2, text: "Cuba", isCorrect: true },
                    { id: 3, text: "Mexico", isCorrect: false },
                  ],
                },
              ]
        },
        {
            id: 9,
            title: "The Display Property",
            sidebar_title: "The Display Property",
            image: "https://picsum.photos/800/400",
            description: "How the display property work in CSS", 
            introduction: "",
            body: "",
            codesnippet: ``,
            summary:"",
            vimeoId: 76979871,
            quizQuestions: [
                {
                  text: "What is the capital of America?",
                  options: [
                    { id: 0, text: "New York City", isCorrect: false },
                    { id: 1, text: "Miami", isCorrect: false },
                    { id: 2, text: "Santa Fe", isCorrect: false },
                    { id: 3, text: "Washington DC", isCorrect: true },
                  ],
                },
                {
                  text: "What year was the Constitution of America written?",
                  options: [
                    { id: 0, text: "1787", isCorrect: true },
                    { id: 1, text: "1776", isCorrect: false },
                    { id: 2, text: "1774", isCorrect: false },
                    { id: 3, text: "1826", isCorrect: false },
                  ],
                },
                {
                  text: "Who was the second president of the US?",
                  options: [
                    { id: 0, text: "John Adams", isCorrect: true },
                    { id: 1, text: "Paul Revere", isCorrect: false },
                    { id: 2, text: "Thomas Jefferson", isCorrect: false },
                    { id: 3, text: "Benjamin Franklin", isCorrect: false },
                  ],
                },
                {
                  text: "What is the largest state in the US?",
                  options: [
                    { id: 0, text: "California", isCorrect: false },
                    { id: 1, text: "Alaska", isCorrect: true },
                    { id: 2, text: "Texas", isCorrect: false },
                    { id: 3, text: "Montana", isCorrect: false },
                  ],
                },
                {
                  text: "Which of the following countries DO NOT border the US?",
                  options: [
                    { id: 0, text: "Canada", isCorrect: false },
                    { id: 1, text: "Russia", isCorrect: true },
                    { id: 2, text: "Cuba", isCorrect: true },
                    { id: 3, text: "Mexico", isCorrect: false },
                  ],
                },
              ]
        },
        {
            id: 10,
            title: "Styling Text Using CSS",
            sidebar_title: "Styling Text",
            image: "https://picsum.photos/800/400",
            description: "How to style text with CSS", 
            introduction: "",
            body: "",
            codesnippet: ``,
            summary:"",
            vimeoId: 76979871,
            quizQuestions: [
                {
                  text: "What is the capital of America?",
                  options: [
                    { id: 0, text: "New York City", isCorrect: false },
                    { id: 1, text: "Miami", isCorrect: false },
                    { id: 2, text: "Santa Fe", isCorrect: false },
                    { id: 3, text: "Washington DC", isCorrect: true },
                  ],
                },
                {
                  text: "What year was the Constitution of America written?",
                  options: [
                    { id: 0, text: "1787", isCorrect: true },
                    { id: 1, text: "1776", isCorrect: false },
                    { id: 2, text: "1774", isCorrect: false },
                    { id: 3, text: "1826", isCorrect: false },
                  ],
                },
                {
                  text: "Who was the second president of the US?",
                  options: [
                    { id: 0, text: "John Adams", isCorrect: true },
                    { id: 1, text: "Paul Revere", isCorrect: false },
                    { id: 2, text: "Thomas Jefferson", isCorrect: false },
                    { id: 3, text: "Benjamin Franklin", isCorrect: false },
                  ],
                },
                {
                  text: "What is the largest state in the US?",
                  options: [
                    { id: 0, text: "California", isCorrect: false },
                    { id: 1, text: "Alaska", isCorrect: true },
                    { id: 2, text: "Texas", isCorrect: false },
                    { id: 3, text: "Montana", isCorrect: false },
                  ],
                },
                {
                  text: "Which of the following countries DO NOT border the US?",
                  options: [
                    { id: 0, text: "Canada", isCorrect: false },
                    { id: 1, text: "Russia", isCorrect: true },
                    { id: 2, text: "Cuba", isCorrect: true },
                    { id: 3, text: "Mexico", isCorrect: false },
                  ],
                },
              ]
        },
        {
            id: 11,
            title: "Customizing the Background with CSS",
            sidebar_title: "Customizing Backgrounds",
            image: "https://picsum.photos/800/400",
            description: "How to change background in CSS", 
            introduction: "",
            body: "",
            codesnippet: ``,
            summary:"",
            vimeoId: 76979871,
            quizQuestions: [
                {
                  text: "What is the capital of America?",
                  options: [
                    { id: 0, text: "New York City", isCorrect: false },
                    { id: 1, text: "Miami", isCorrect: false },
                    { id: 2, text: "Santa Fe", isCorrect: false },
                    { id: 3, text: "Washington DC", isCorrect: true },
                  ],
                },
                {
                  text: "What year was the Constitution of America written?",
                  options: [
                    { id: 0, text: "1787", isCorrect: true },
                    { id: 1, text: "1776", isCorrect: false },
                    { id: 2, text: "1774", isCorrect: false },
                    { id: 3, text: "1826", isCorrect: false },
                  ],
                },
                {
                  text: "Who was the second president of the US?",
                  options: [
                    { id: 0, text: "John Adams", isCorrect: true },
                    { id: 1, text: "Paul Revere", isCorrect: false },
                    { id: 2, text: "Thomas Jefferson", isCorrect: false },
                    { id: 3, text: "Benjamin Franklin", isCorrect: false },
                  ],
                },
                {
                  text: "What is the largest state in the US?",
                  options: [
                    { id: 0, text: "California", isCorrect: false },
                    { id: 1, text: "Alaska", isCorrect: true },
                    { id: 2, text: "Texas", isCorrect: false },
                    { id: 3, text: "Montana", isCorrect: false },
                  ],
                },
                {
                  text: "Which of the following countries DO NOT border the US?",
                  options: [
                    { id: 0, text: "Canada", isCorrect: false },
                    { id: 1, text: "Russia", isCorrect: true },
                    { id: 2, text: "Cuba", isCorrect: true },
                    { id: 3, text: "Mexico", isCorrect: false },
                  ],
                },
              ]
        },
        {
            id: 12,
            title: "Screen Customization & Media Queries",
            sidebar_title: "Screen Customization",
            image: "https://picsum.photos/800/400",
            description: "How to adapt your HTML pages to different screen sizes",
            introduction: "",
            body: "",
            codesnippet: ``,
            summary:"", 
            vimeoId: 76979871,
            quizQuestions: [
                {
                  text: "What is the capital of America?",
                  options: [
                    { id: 0, text: "New York City", isCorrect: false },
                    { id: 1, text: "Miami", isCorrect: false },
                    { id: 2, text: "Santa Fe", isCorrect: false },
                    { id: 3, text: "Washington DC", isCorrect: true },
                  ],
                },
                {
                  text: "What year was the Constitution of America written?",
                  options: [
                    { id: 0, text: "1787", isCorrect: true },
                    { id: 1, text: "1776", isCorrect: false },
                    { id: 2, text: "1774", isCorrect: false },
                    { id: 3, text: "1826", isCorrect: false },
                  ],
                },
                {
                  text: "Who was the second president of the US?",
                  options: [
                    { id: 0, text: "John Adams", isCorrect: true },
                    { id: 1, text: "Paul Revere", isCorrect: false },
                    { id: 2, text: "Thomas Jefferson", isCorrect: false },
                    { id: 3, text: "Benjamin Franklin", isCorrect: false },
                  ],
                },
                {
                  text: "What is the largest state in the US?",
                  options: [
                    { id: 0, text: "California", isCorrect: false },
                    { id: 1, text: "Alaska", isCorrect: true },
                    { id: 2, text: "Texas", isCorrect: false },
                    { id: 3, text: "Montana", isCorrect: false },
                  ],
                },
                {
                  text: "Which of the following countries DO NOT border the US?",
                  options: [
                    { id: 0, text: "Canada", isCorrect: false },
                    { id: 1, text: "Russia", isCorrect: true },
                    { id: 2, text: "Cuba", isCorrect: true },
                    { id: 3, text: "Mexico", isCorrect: false },
                  ],
                },
              ]
        },
        {
            id: 13,
            title: "The Z-Index",
            sidebar_title: "Z-Index",
            image: "https://picsum.photos/800/400",
            description: "What the z-index is in CSS", 
            introduction: "",
            body: "",
            codesnippet: ``,
            summary:"",
            vimeoId: 76979871,
            quizQuestions: [
                {
                  text: "What is the capital of America?",
                  options: [
                    { id: 0, text: "New York City", isCorrect: false },
                    { id: 1, text: "Miami", isCorrect: false },
                    { id: 2, text: "Santa Fe", isCorrect: false },
                    { id: 3, text: "Washington DC", isCorrect: true },
                  ],
                },
                {
                  text: "What year was the Constitution of America written?",
                  options: [
                    { id: 0, text: "1787", isCorrect: true },
                    { id: 1, text: "1776", isCorrect: false },
                    { id: 2, text: "1774", isCorrect: false },
                    { id: 3, text: "1826", isCorrect: false },
                  ],
                },
                {
                  text: "Who was the second president of the US?",
                  options: [
                    { id: 0, text: "John Adams", isCorrect: true },
                    { id: 1, text: "Paul Revere", isCorrect: false },
                    { id: 2, text: "Thomas Jefferson", isCorrect: false },
                    { id: 3, text: "Benjamin Franklin", isCorrect: false },
                  ],
                },
                {
                  text: "What is the largest state in the US?",
                  options: [
                    { id: 0, text: "California", isCorrect: false },
                    { id: 1, text: "Alaska", isCorrect: true },
                    { id: 2, text: "Texas", isCorrect: false },
                    { id: 3, text: "Montana", isCorrect: false },
                  ],
                },
                {
                  text: "Which of the following countries DO NOT border the US?",
                  options: [
                    { id: 0, text: "Canada", isCorrect: false },
                    { id: 1, text: "Russia", isCorrect: true },
                    { id: 2, text: "Cuba", isCorrect: true },
                    { id: 3, text: "Mexico", isCorrect: false },
                  ],
                },
              ]
        },
        {
            id: 14,
            title: "CSS Align",
            sidebar_title: "CSS Align",
            image: "https://picsum.photos/800/400",
            description: "How to align elements in CSS", 
            introduction: "",
            body: "",
            codesnippet: ``,
            summary:"",
            vimeoId: 76979871,
            quizQuestions: [
                {
                  text: "What is the capital of America?",
                  options: [
                    { id: 0, text: "New York City", isCorrect: false },
                    { id: 1, text: "Miami", isCorrect: false },
                    { id: 2, text: "Santa Fe", isCorrect: false },
                    { id: 3, text: "Washington DC", isCorrect: true },
                  ],
                },
                {
                  text: "What year was the Constitution of America written?",
                  options: [
                    { id: 0, text: "1787", isCorrect: true },
                    { id: 1, text: "1776", isCorrect: false },
                    { id: 2, text: "1774", isCorrect: false },
                    { id: 3, text: "1826", isCorrect: false },
                  ],
                },
                {
                  text: "Who was the second president of the US?",
                  options: [
                    { id: 0, text: "John Adams", isCorrect: true },
                    { id: 1, text: "Paul Revere", isCorrect: false },
                    { id: 2, text: "Thomas Jefferson", isCorrect: false },
                    { id: 3, text: "Benjamin Franklin", isCorrect: false },
                  ],
                },
                {
                  text: "What is the largest state in the US?",
                  options: [
                    { id: 0, text: "California", isCorrect: false },
                    { id: 1, text: "Alaska", isCorrect: true },
                    { id: 2, text: "Texas", isCorrect: false },
                    { id: 3, text: "Montana", isCorrect: false },
                  ],
                },
                {
                  text: "Which of the following countries DO NOT border the US?",
                  options: [
                    { id: 0, text: "Canada", isCorrect: false },
                    { id: 1, text: "Russia", isCorrect: true },
                    { id: 2, text: "Cuba", isCorrect: true },
                    { id: 3, text: "Mexico", isCorrect: false },
                  ],
                },
              ]
        },
        {
            id: 15,
            title: "CSS Cheatsheet",
            sidebar_title: "CSS Cheatsheet",
            image: "https://picsum.photos/800/400",
            description: "Recap of the basics of CSS", 
            introduction: "",
            body: "",
            codesnippet: ``,
            summary:"",
            vimeoId: 76979871
        },
    ]
    },
    {
    id: 3,
    title: "Javascript",
    description: "Make your HTML pages dynamic with Javascript programming.",
    lessons: [
        {
            id: 0,
            title: 'Javascript in 100 seconds',
            sidebar_title: "Javascript in 100 seconds",
            vimeoId: 76979871
        },
        {
        id: 1,
        title: "Welcome to the Javascript course",
        sidebar_title: "Javascript Introduction",
        image: "https://picsum.photos/800/400",
        description: "First Javascript module", 
        introduction: "",
        body: "",
        codesnippet: ``,
        summary:"",
        vimeoId: 76979871,
        quizQuestions: [
            {
              text: "What is the capital of America?",
              options: [
                { id: 0, text: "New York City", isCorrect: false },
                { id: 1, text: "Miami", isCorrect: false },
                { id: 2, text: "Santa Fe", isCorrect: false },
                { id: 3, text: "Washington DC", isCorrect: true },
              ],
            },
            {
              text: "What year was the Constitution of America written?",
              options: [
                { id: 0, text: "1787", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
              ],
            },
            {
              text: "Who was the second president of the US?",
              options: [
                { id: 0, text: "John Adams", isCorrect: true },
                { id: 1, text: "Paul Revere", isCorrect: false },
                { id: 2, text: "Thomas Jefferson", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
              ],
            },
            {
              text: "What is the largest state in the US?",
              options: [
                { id: 0, text: "California", isCorrect: false },
                { id: 1, text: "Alaska", isCorrect: true },
                { id: 2, text: "Texas", isCorrect: false },
                { id: 3, text: "Montana", isCorrect: false },
              ],
            },
            {
              text: "Which of the following countries DO NOT border the US?",
              options: [
                { id: 0, text: "Canada", isCorrect: false },
                { id: 1, text: "Russia", isCorrect: true },
                { id: 2, text: "Cuba", isCorrect: true },
                { id: 3, text: "Mexico", isCorrect: false },
              ],
            },
          ]
    },
    {
        id: 2,
        title: "What is Javascript?",
        sidebar_title: "What is Javascript?",
        image: "https://picsum.photos/800/400",
        description: "Introduction of Javascript",
        introduction: "",
        body: "",
        codesnippet: ``,
        summary:"", 
        vimeoId: 76979871,
        quizQuestions: [
            {
              text: "What is the capital of America?",
              options: [
                { id: 0, text: "New York City", isCorrect: false },
                { id: 1, text: "Miami", isCorrect: false },
                { id: 2, text: "Santa Fe", isCorrect: false },
                { id: 3, text: "Washington DC", isCorrect: true },
              ],
            },
            {
              text: "What year was the Constitution of America written?",
              options: [
                { id: 0, text: "1787", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
              ],
            },
            {
              text: "Who was the second president of the US?",
              options: [
                { id: 0, text: "John Adams", isCorrect: true },
                { id: 1, text: "Paul Revere", isCorrect: false },
                { id: 2, text: "Thomas Jefferson", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
              ],
            },
            {
              text: "What is the largest state in the US?",
              options: [
                { id: 0, text: "California", isCorrect: false },
                { id: 1, text: "Alaska", isCorrect: true },
                { id: 2, text: "Texas", isCorrect: false },
                { id: 3, text: "Montana", isCorrect: false },
              ],
            },
            {
              text: "Which of the following countries DO NOT border the US?",
              options: [
                { id: 0, text: "Canada", isCorrect: false },
                { id: 1, text: "Russia", isCorrect: true },
                { id: 2, text: "Cuba", isCorrect: true },
                { id: 3, text: "Mexico", isCorrect: false },
              ],
            },
          ]
    },
    {
        id: 3,
        title: "Javascript Values",
        sidebar_title: "Javascript Values",
        image: "https://picsum.photos/800/400",
        description: "What values are in Javascript", 
        introduction: "",
        body: "",
        codesnippet: ``,
        summary:"",
        vimeoId: 76979871,
        quizQuestions: [
            {
              text: "What is the capital of America?",
              options: [
                { id: 0, text: "New York City", isCorrect: false },
                { id: 1, text: "Miami", isCorrect: false },
                { id: 2, text: "Santa Fe", isCorrect: false },
                { id: 3, text: "Washington DC", isCorrect: true },
              ],
            },
            {
              text: "What year was the Constitution of America written?",
              options: [
                { id: 0, text: "1787", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
              ],
            },
            {
              text: "Who was the second president of the US?",
              options: [
                { id: 0, text: "John Adams", isCorrect: true },
                { id: 1, text: "Paul Revere", isCorrect: false },
                { id: 2, text: "Thomas Jefferson", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
              ],
            },
            {
              text: "What is the largest state in the US?",
              options: [
                { id: 0, text: "California", isCorrect: false },
                { id: 1, text: "Alaska", isCorrect: true },
                { id: 2, text: "Texas", isCorrect: false },
                { id: 3, text: "Montana", isCorrect: false },
              ],
            },
            {
              text: "Which of the following countries DO NOT border the US?",
              options: [
                { id: 0, text: "Canada", isCorrect: false },
                { id: 1, text: "Russia", isCorrect: true },
                { id: 2, text: "Cuba", isCorrect: true },
                { id: 3, text: "Mexico", isCorrect: false },
              ],
            },
          ]
    },
    {
        id: 4,
        title: "Creating Variables",
        sidebar_title: "Creating Variables",
        image: "https://picsum.photos/800/400",
        description: "How to create variables in Javascript", 
        introduction: "",
        body: "",
        codesnippet: ``,
        summary:"",
        vimeoId: 76979871,
        quizQuestions: [
            {
              text: "What is the capital of America?",
              options: [
                { id: 0, text: "New York City", isCorrect: false },
                { id: 1, text: "Miami", isCorrect: false },
                { id: 2, text: "Santa Fe", isCorrect: false },
                { id: 3, text: "Washington DC", isCorrect: true },
              ],
            },
            {
              text: "What year was the Constitution of America written?",
              options: [
                { id: 0, text: "1787", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
              ],
            },
            {
              text: "Who was the second president of the US?",
              options: [
                { id: 0, text: "John Adams", isCorrect: true },
                { id: 1, text: "Paul Revere", isCorrect: false },
                { id: 2, text: "Thomas Jefferson", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
              ],
            },
            {
              text: "What is the largest state in the US?",
              options: [
                { id: 0, text: "California", isCorrect: false },
                { id: 1, text: "Alaska", isCorrect: true },
                { id: 2, text: "Texas", isCorrect: false },
                { id: 3, text: "Montana", isCorrect: false },
              ],
            },
            {
              text: "Which of the following countries DO NOT border the US?",
              options: [
                { id: 0, text: "Canada", isCorrect: false },
                { id: 1, text: "Russia", isCorrect: true },
                { id: 2, text: "Cuba", isCorrect: true },
                { id: 3, text: "Mexico", isCorrect: false },
              ],
            },
          ]
    },
    {
        id: 5,
        title: "Operators in Javascript",
        sidebar_title: "Operators",
        image: "https://picsum.photos/800/400",
        description: "What are operators in Javascript", 
        introduction: "",
        body: "",
        codesnippet: ``,
        summary:"",
        vimeoId: 76979871,
        quizQuestions: [
            {
              text: "What is the capital of America?",
              options: [
                { id: 0, text: "New York City", isCorrect: false },
                { id: 1, text: "Miami", isCorrect: false },
                { id: 2, text: "Santa Fe", isCorrect: false },
                { id: 3, text: "Washington DC", isCorrect: true },
              ],
            },
            {
              text: "What year was the Constitution of America written?",
              options: [
                { id: 0, text: "1787", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
              ],
            },
            {
              text: "Who was the second president of the US?",
              options: [
                { id: 0, text: "John Adams", isCorrect: true },
                { id: 1, text: "Paul Revere", isCorrect: false },
                { id: 2, text: "Thomas Jefferson", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
              ],
            },
            {
              text: "What is the largest state in the US?",
              options: [
                { id: 0, text: "California", isCorrect: false },
                { id: 1, text: "Alaska", isCorrect: true },
                { id: 2, text: "Texas", isCorrect: false },
                { id: 3, text: "Montana", isCorrect: false },
              ],
            },
            {
              text: "Which of the following countries DO NOT border the US?",
              options: [
                { id: 0, text: "Canada", isCorrect: false },
                { id: 1, text: "Russia", isCorrect: true },
                { id: 2, text: "Cuba", isCorrect: true },
                { id: 3, text: "Mexico", isCorrect: false },
              ],
            },
          ]
    },
    {
        id: 6,
        title: "Statements in Javascript",
        sidebar_title: "Writing Statements",
        image: "https://picsum.photos/800/400",
        description: "How statements are in Javascript", 
        introduction: "",
        body: "",
        codesnippet: ``,
        summary:"",
        vimeoId: 76979871,
        quizQuestions: [
            {
              text: "What is the capital of America?",
              options: [
                { id: 0, text: "New York City", isCorrect: false },
                { id: 1, text: "Miami", isCorrect: false },
                { id: 2, text: "Santa Fe", isCorrect: false },
                { id: 3, text: "Washington DC", isCorrect: true },
              ],
            },
            {
              text: "What year was the Constitution of America written?",
              options: [
                { id: 0, text: "1787", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
              ],
            },
            {
              text: "Who was the second president of the US?",
              options: [
                { id: 0, text: "John Adams", isCorrect: true },
                { id: 1, text: "Paul Revere", isCorrect: false },
                { id: 2, text: "Thomas Jefferson", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
              ],
            },
            {
              text: "What is the largest state in the US?",
              options: [
                { id: 0, text: "California", isCorrect: false },
                { id: 1, text: "Alaska", isCorrect: true },
                { id: 2, text: "Texas", isCorrect: false },
                { id: 3, text: "Montana", isCorrect: false },
              ],
            },
            {
              text: "Which of the following countries DO NOT border the US?",
              options: [
                { id: 0, text: "Canada", isCorrect: false },
                { id: 1, text: "Russia", isCorrect: true },
                { id: 2, text: "Cuba", isCorrect: true },
                { id: 3, text: "Mexico", isCorrect: false },
              ],
            },
          ]
    },
    {
        id: 7,
        title: "Events in Javascript",
        sidebar_title: "Events",
        image: "https://picsum.photos/800/400",
        description: "What events do and how to used them in Javascript",
        introduction: "",
        body: "",
        codesnippet: ``,
        summary:"", 
        vimeoId: 76979871,
        quizQuestions: [
            {
              text: "What is the capital of America?",
              options: [
                { id: 0, text: "New York City", isCorrect: false },
                { id: 1, text: "Miami", isCorrect: false },
                { id: 2, text: "Santa Fe", isCorrect: false },
                { id: 3, text: "Washington DC", isCorrect: true },
              ],
            },
            {
              text: "What year was the Constitution of America written?",
              options: [
                { id: 0, text: "1787", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
              ],
            },
            {
              text: "Who was the second president of the US?",
              options: [
                { id: 0, text: "John Adams", isCorrect: true },
                { id: 1, text: "Paul Revere", isCorrect: false },
                { id: 2, text: "Thomas Jefferson", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
              ],
            },
            {
              text: "What is the largest state in the US?",
              options: [
                { id: 0, text: "California", isCorrect: false },
                { id: 1, text: "Alaska", isCorrect: true },
                { id: 2, text: "Texas", isCorrect: false },
                { id: 3, text: "Montana", isCorrect: false },
              ],
            },
            {
              text: "Which of the following countries DO NOT border the US?",
              options: [
                { id: 0, text: "Canada", isCorrect: false },
                { id: 1, text: "Russia", isCorrect: true },
                { id: 2, text: "Cuba", isCorrect: true },
                { id: 3, text: "Mexico", isCorrect: false },
              ],
            },
          ]
    },
    {
        id: 8,
        title: "Objects in Javascript",
        sidebar_title: "Objects",
        image: "https://picsum.photos/800/400",
        description: "What are Javascript objects", 
        introduction: "",
        body: "",
        codesnippet: ``,
        summary:"",
        vimeoId: 76979871,
        quizQuestions: [
            {
              text: "What is the capital of America?",
              options: [
                { id: 0, text: "New York City", isCorrect: false },
                { id: 1, text: "Miami", isCorrect: false },
                { id: 2, text: "Santa Fe", isCorrect: false },
                { id: 3, text: "Washington DC", isCorrect: true },
              ],
            },
            {
              text: "What year was the Constitution of America written?",
              options: [
                { id: 0, text: "1787", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
              ],
            },
            {
              text: "Who was the second president of the US?",
              options: [
                { id: 0, text: "John Adams", isCorrect: true },
                { id: 1, text: "Paul Revere", isCorrect: false },
                { id: 2, text: "Thomas Jefferson", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
              ],
            },
            {
              text: "What is the largest state in the US?",
              options: [
                { id: 0, text: "California", isCorrect: false },
                { id: 1, text: "Alaska", isCorrect: true },
                { id: 2, text: "Texas", isCorrect: false },
                { id: 3, text: "Montana", isCorrect: false },
              ],
            },
            {
              text: "Which of the following countries DO NOT border the US?",
              options: [
                { id: 0, text: "Canada", isCorrect: false },
                { id: 1, text: "Russia", isCorrect: true },
                { id: 2, text: "Cuba", isCorrect: true },
                { id: 3, text: "Mexico", isCorrect: false },
              ],
            },
          ]
    },
    {
        id: 9,
        title: "Arrays in Javascript",
        sidebar_title: "Arrays",
        image: "https://picsum.photos/800/400",
        description: "What are Javascript arrays", 
        introduction: "",
        body: "",
        codesnippet: ``,
        summary:"",
        vimeoId: 76979871,
        quizQuestions: [
            {
              text: "What is the capital of America?",
              options: [
                { id: 0, text: "New York City", isCorrect: false },
                { id: 1, text: "Miami", isCorrect: false },
                { id: 2, text: "Santa Fe", isCorrect: false },
                { id: 3, text: "Washington DC", isCorrect: true },
              ],
            },
            {
              text: "What year was the Constitution of America written?",
              options: [
                { id: 0, text: "1787", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
              ],
            },
            {
              text: "Who was the second president of the US?",
              options: [
                { id: 0, text: "John Adams", isCorrect: true },
                { id: 1, text: "Paul Revere", isCorrect: false },
                { id: 2, text: "Thomas Jefferson", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
              ],
            },
            {
              text: "What is the largest state in the US?",
              options: [
                { id: 0, text: "California", isCorrect: false },
                { id: 1, text: "Alaska", isCorrect: true },
                { id: 2, text: "Texas", isCorrect: false },
                { id: 3, text: "Montana", isCorrect: false },
              ],
            },
            {
              text: "Which of the following countries DO NOT border the US?",
              options: [
                { id: 0, text: "Canada", isCorrect: false },
                { id: 1, text: "Russia", isCorrect: true },
                { id: 2, text: "Cuba", isCorrect: true },
                { id: 3, text: "Mexico", isCorrect: false },
              ],
            },
          ]
    },
    {
        id: 10,
        title: "Functions in Javascript",
        sidebar_title: "Functions",
        image: "https://picsum.photos/800/400",
        description: "How to use Javascript functions", 
        introduction: "",
        body: "",
        codesnippet: ``,
        summary:"",
        vimeoId: 76979871,
        quizQuestions: [
            {
              text: "What is the capital of America?",
              options: [
                { id: 0, text: "New York City", isCorrect: false },
                { id: 1, text: "Miami", isCorrect: false },
                { id: 2, text: "Santa Fe", isCorrect: false },
                { id: 3, text: "Washington DC", isCorrect: true },
              ],
            },
            {
              text: "What year was the Constitution of America written?",
              options: [
                { id: 0, text: "1787", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
              ],
            },
            {
              text: "Who was the second president of the US?",
              options: [
                { id: 0, text: "John Adams", isCorrect: true },
                { id: 1, text: "Paul Revere", isCorrect: false },
                { id: 2, text: "Thomas Jefferson", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
              ],
            },
            {
              text: "What is the largest state in the US?",
              options: [
                { id: 0, text: "California", isCorrect: false },
                { id: 1, text: "Alaska", isCorrect: true },
                { id: 2, text: "Texas", isCorrect: false },
                { id: 3, text: "Montana", isCorrect: false },
              ],
            },
            {
              text: "Which of the following countries DO NOT border the US?",
              options: [
                { id: 0, text: "Canada", isCorrect: false },
                { id: 1, text: "Russia", isCorrect: true },
                { id: 2, text: "Cuba", isCorrect: true },
                { id: 3, text: "Mexico", isCorrect: false },
              ],
            },
          ]
    },
    {
        id: 11,
        title: "Methods in Javascript",
        sidebar_title: "Methods",
        image: "https://picsum.photos/800/400",
        description: "What are methods in Javascript", 
        introduction: "",
        body: "",
        codesnippet: ``,
        summary:"",
        vimeoId: 76979871,
        quizQuestions: [
            {
              text: "What is the capital of America?",
              options: [
                { id: 0, text: "New York City", isCorrect: false },
                { id: 1, text: "Miami", isCorrect: false },
                { id: 2, text: "Santa Fe", isCorrect: false },
                { id: 3, text: "Washington DC", isCorrect: true },
              ],
            },
            {
              text: "What year was the Constitution of America written?",
              options: [
                { id: 0, text: "1787", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
              ],
            },
            {
              text: "Who was the second president of the US?",
              options: [
                { id: 0, text: "John Adams", isCorrect: true },
                { id: 1, text: "Paul Revere", isCorrect: false },
                { id: 2, text: "Thomas Jefferson", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
              ],
            },
            {
              text: "What is the largest state in the US?",
              options: [
                { id: 0, text: "California", isCorrect: false },
                { id: 1, text: "Alaska", isCorrect: true },
                { id: 2, text: "Texas", isCorrect: false },
                { id: 3, text: "Montana", isCorrect: false },
              ],
            },
            {
              text: "Which of the following countries DO NOT border the US?",
              options: [
                { id: 0, text: "Canada", isCorrect: false },
                { id: 1, text: "Russia", isCorrect: true },
                { id: 2, text: "Cuba", isCorrect: true },
                { id: 3, text: "Mexico", isCorrect: false },
              ],
            },
          ]
    },
    {
        id: 12,
        title: "Loops in Javascript",
        sidebar_title: "Loops",
        image: "https://picsum.photos/800/400",
        description: "What loops are for in Javascript",
        introduction: "",
        body: "",
        codesnippet: ``,
        summary:"", 
        vimeoId: 76979871,
        quizQuestions: [
            {
              text: "What is the capital of America?",
              options: [
                { id: 0, text: "New York City", isCorrect: false },
                { id: 1, text: "Miami", isCorrect: false },
                { id: 2, text: "Santa Fe", isCorrect: false },
                { id: 3, text: "Washington DC", isCorrect: true },
              ],
            },
            {
              text: "What year was the Constitution of America written?",
              options: [
                { id: 0, text: "1787", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
              ],
            },
            {
              text: "Who was the second president of the US?",
              options: [
                { id: 0, text: "John Adams", isCorrect: true },
                { id: 1, text: "Paul Revere", isCorrect: false },
                { id: 2, text: "Thomas Jefferson", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
              ],
            },
            {
              text: "What is the largest state in the US?",
              options: [
                { id: 0, text: "California", isCorrect: false },
                { id: 1, text: "Alaska", isCorrect: true },
                { id: 2, text: "Texas", isCorrect: false },
                { id: 3, text: "Montana", isCorrect: false },
              ],
            },
            {
              text: "Which of the following countries DO NOT border the US?",
              options: [
                { id: 0, text: "Canada", isCorrect: false },
                { id: 1, text: "Russia", isCorrect: true },
                { id: 2, text: "Cuba", isCorrect: true },
                { id: 3, text: "Mexico", isCorrect: false },
              ],
            },
          ]
    },
    {
        id: 13,
        title: "If Statements in Javascript",
        sidebar_title: "If Statements",
        image: "https://picsum.photos/800/400",
        description: "How to use If statements in Javascript", 
        introduction: "",
        body: "",
        codesnippet: ``,
        summary:"",
        vimeoId: 76979871,
        quizQuestions: [
            {
              text: "What is the capital of America?",
              options: [
                { id: 0, text: "New York City", isCorrect: false },
                { id: 1, text: "Miami", isCorrect: false },
                { id: 2, text: "Santa Fe", isCorrect: false },
                { id: 3, text: "Washington DC", isCorrect: true },
              ],
            },
            {
              text: "What year was the Constitution of America written?",
              options: [
                { id: 0, text: "1787", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
              ],
            },
            {
              text: "Who was the second president of the US?",
              options: [
                { id: 0, text: "John Adams", isCorrect: true },
                { id: 1, text: "Paul Revere", isCorrect: false },
                { id: 2, text: "Thomas Jefferson", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
              ],
            },
            {
              text: "What is the largest state in the US?",
              options: [
                { id: 0, text: "California", isCorrect: false },
                { id: 1, text: "Alaska", isCorrect: true },
                { id: 2, text: "Texas", isCorrect: false },
                { id: 3, text: "Montana", isCorrect: false },
              ],
            },
            {
              text: "Which of the following countries DO NOT border the US?",
              options: [
                { id: 0, text: "Canada", isCorrect: false },
                { id: 1, text: "Russia", isCorrect: true },
                { id: 2, text: "Cuba", isCorrect: true },
                { id: 3, text: "Mexico", isCorrect: false },
              ],
            },
          ]
    },
    {
        id: 14,
        title: "Switch Statements in Javascript",
        sidebar_title: "Switch Statements",
        image: "https://picsum.photos/800/400",
        description: "How to use Switch statements in Javascript",
        introduction: "",
        body: "",
        codesnippet: ``,
        summary:"", 
        vimeoId: 76979871,
        quizQuestions: [
            {
              text: "What is the capital of America?",
              options: [
                { id: 0, text: "New York City", isCorrect: false },
                { id: 1, text: "Miami", isCorrect: false },
                { id: 2, text: "Santa Fe", isCorrect: false },
                { id: 3, text: "Washington DC", isCorrect: true },
              ],
            },
            {
              text: "What year was the Constitution of America written?",
              options: [
                { id: 0, text: "1787", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
              ],
            },
            {
              text: "Who was the second president of the US?",
              options: [
                { id: 0, text: "John Adams", isCorrect: true },
                { id: 1, text: "Paul Revere", isCorrect: false },
                { id: 2, text: "Thomas Jefferson", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
              ],
            },
            {
              text: "What is the largest state in the US?",
              options: [
                { id: 0, text: "California", isCorrect: false },
                { id: 1, text: "Alaska", isCorrect: true },
                { id: 2, text: "Texas", isCorrect: false },
                { id: 3, text: "Montana", isCorrect: false },
              ],
            },
            {
              text: "Which of the following countries DO NOT border the US?",
              options: [
                { id: 0, text: "Canada", isCorrect: false },
                { id: 1, text: "Russia", isCorrect: true },
                { id: 2, text: "Cuba", isCorrect: true },
                { id: 3, text: "Mexico", isCorrect: false },
              ],
            },
          ]
    },
    {
        id: 15,
        title: "Javascript Cheatsheet",
        sidebar_title: "Javascript Cheatsheet",
        image: "https://picsum.photos/800/400",
        description: "Recap of the basics of Javascript", 
        introduction: "",
        body: "",
        codesnippet: ``,
        summary:"",
        vimeoId: 76979871
    },
]
}]

export default courses