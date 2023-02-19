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
            introduction: "Cascading Style Sheets (CSS) is a fundamental technology used in web development that enables you to add style, layout, and design to your HTML documents. With CSS, you can define colors, fonts, spacing, and other visual elements of your web page, making it more appealing and user-friendly.",
            body: "CSS allows you to create rules that specify how different elements of your HTML document should be displayed, and these rules can be applied to individual elements or to groups of elements. With CSS, you can also create responsive designs that adjust automatically to different screen sizes and devices, ensuring a consistent and optimal user experience across all platforms. Whether you're creating a simple blog or a complex web application, CSS is an essential tool that can help you create beautiful and functional web pages that meet your specific needs.",
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
            introduction: " CSS is a style sheet language that is used to describe the presentation of an HTML document. CSS works by creating a set of rules that define how various elements of an HTML document should be displayed on the screen, in print, or other types of media. These rules can be applied to specific HTML tags, such as headings, paragraphs, tables, and images, or to groups of tags based on their class or ID attributes.",
            body: "CSS offers a wide range of styling options, such as font styles, colors, borders, backgrounds, margins, padding, and positioning. It also allows you to control the layout of your webpage, including how elements are arranged, sized, and aligned relative to each other. One of the main advantages of using CSS is that it separates the content of a webpage from its presentation. This means that you can change the visual style of your webpage without affecting its underlying content. CSS also enables you to create consistent styles across multiple pages, making it easier to maintain and update your website over time. In addition, CSS has evolved to include advanced features such as animations, transitions, and responsive design. With CSS, you can create engaging and interactive web experiences that captivate your audience and enhance your brand identity.",
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
            introduction: "CSS selectors are a powerful tool for styling and formatting HTML elements on a webpage. A CSS selector is a pattern that matches one or more HTML elements, allowing you to apply specific styles and formatting to those elements. In this lesson, we will learn about the different types of CSS selectors and how to use them effectively.",
            body: "Type Selectors: Type selectors are the most basic type of selector in CSS, and they match HTML elements based on their tag name. For example, the selector <p> matches all paragraphs on the page, and the selector <h1> matches all level one headings. Type selectors are used when you want to apply the same styles to all elements of a particular type. Class Selectors: Class selectors are used to match elements that have a specific class attribute. The class attribute is used to group elements together that share a common trait or purpose. To create a class selector, you add a period (.) followed by the class name. For example, the selector .highlight matches all elements with a class of highlight. Class selectors are useful when you want to apply a specific style to a group of related elements. ID Selectors: ID selectors are similar to class selectors, but they are used to match a single element based on its unique ID attribute. To create an ID selector, you add a pound sign (#) followed by the ID name. For example, the selector #header matches the element with an ID of header. ID selectors are used when you want to apply a specific style to a unique element on the page. Attribute Selectors: Attribute selectors are used to match elements based on their attribute values. For example, the selector input[type='text'] matches all text input fields on the page. Attribute selectors are useful when you want to apply a style to elements with specific attribute values. Pseudo-Classes: Pseudo-classes are used to match elements based on their state or position within the document. For example, the selector a:hover matches links that are being hovered over by the user. Pseudo-classes are useful when you want to apply styles to elements based on their interaction with the user. Combinators: Combinators are used to match elements based on their relationship to other elements. There are three types of combinators: descendant, child, and adjacent sibling. Descendant combinators match elements that are descendants of a parent element. Child combinators match elements that are direct children of a parent element. Adjacent sibling combinators match elements that are adjacent to each other in the HTML document.",
            codesnippet: ``,
            summary:"In conclusion, CSS selectors are an essential tool for styling and formatting HTML elements on a webpage. By understanding the different types of selectors and how to use them effectively, you can create stylish and visually appealing web pages that meet your specific design needs.",
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
            introduction: "CSS colors allow you to add visual appeal to your web pages by specifying the color of text, backgrounds, borders, and other elements. ",
            body: "There are several ways to define colors in CSS, including named colors, hexadecimal values, RGB values, and HSL values. Named colors refer to predefined color names, such as red or blue. Hexadecimal values are six-digit codes that represent a combination of red, green, and blue values, ranging from 00 to FF. RGB values specify a color by its red, green, and blue values, each ranging from 0 to 255. HSL values represent a color using its hue, saturation, and lightness values. By using CSS colors effectively, you can enhance the visual design and aesthetic of your web pages.",
            codesnippet: ``,
            summary:"In addition to these color options, CSS also offers a variety of color-related properties, such as opacity and transparency. By using CSS colors effectively, web designers can create visually appealing and engaging web pages that stand out from the crowd.",
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
            introduction: "The box model is a fundamental concept in web design that describes how elements are displayed on a web page. It defines how an element is enclosed within a rectangular box, which consists of content, padding, borders, and margins.",
            body: "The content refers to the actual content of the element, such as text, images, or videos. The content area is the area within the box that contains the element's content. Padding is the space between the content area and the border. It is used to create space around the content area, and can be specified using CSS. The padding area is the area between the content area and the border. Borders are used to define the edges of the box. They can be used to create decorative effects or to visually separate the element from its surroundings. Borders can also be specified using CSS. Margins are the space outside the box, between the box and other elements on the page. Margins can be used to create space between elements, or to center an element on the page. Like padding and borders, margins can also be specified using CSS.",
            codesnippet: ``,
            summary:"The box model is important to understand because it affects the layout and spacing of elements on a web page. By adjusting the values of padding, borders, and margins, web designers can create the desired spacing and layout for their elements. It is also important to note that the size of an element is not only determined by its content, but also by its padding, border, and margin values. In addition to the basic box model, there is also the concept of the box-sizing property in CSS. By default, the box-sizing property is set to content-box, which means that the width and height of an element does not include padding, border, or margin. However, by setting the box-sizing property to border-box, the width and height of an element will include the padding and border, but not the margin. This can be useful when creating responsive designs, as it allows for more precise control over element sizing.",
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
            introduction: "Padding and margin are two important CSS properties that are used to adjust the spacing and layout of elements on a web page.",
            body: "Padding refers to the space between the content of an element and its border. It is used to create space around an element's content, such as adding space between a paragraph of text and its border. Padding can be specified using CSS, and can be applied to all four sides of an element (top, right, bottom, and left), or individually using the padding-top, padding-right, padding-bottom, and padding-left properties. Margin, on the other hand, refers to the space outside an element, between the element's border and other elements on the page. It is used to create space between elements, such as adding space between two paragraphs of text. Like padding, margin can also be specified using CSS, and can be applied to all four sides of an element (top, right, bottom, and left), or individually using the margin-top, margin-right, margin-bottom, and margin-left properties. Both padding and margin can be specified using different units of measurement, such as pixels, ems, or percentages. Additionally, padding and margin can be specified using shorthand properties, such as padding: 10px 20px 30px 40px, which applies 10 pixels of padding to the top of the element, 20 pixels to the right, 30 pixels to the bottom, and 40 pixels to the left. Understanding how to use padding and margin effectively is important for creating visually appealing and well-spaced web pages. By adjusting the padding and margin values of elements, web designers can create the desired spacing and layout for their page.",
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
            introduction: "In CSS, a border is a decorative or structural element that can be applied to an HTML element to create a visible edge around it. Borders can be used to visually separate elements from each other, add emphasis or highlight important elements, or create decorative effects.",
            body: "To apply a border to an element, you can use the CSS border property. The border property can be used to specify the width, style, and color of the border. In addition to the basic border styles (solid, dashed, dotted, double, groove, ridge, inset, and outset), CSS also provides a way to create custom border styles using the border-image property. The border-image property allows you to specify an image to use as the border instead of a solid or patterned line. For example, the following CSS rule adds a 2-pixel wide solid border of red color to a paragraph element:",
            codesnippet: `
            p {
              border: 2px solid red;
            }`,
            summary:"Overall, CSS borders are a versatile and powerful tool for web designers to add structure, visual interest, and style to their web pages.",
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
            introduction: "Height and width are CSS properties used to define the size of an HTML element, such as an image, a video, or a div container.",
            body: "The height property specifies the height of an element, and the width property specifies the width of an element. These properties can be set to a fixed value, such as pixels or centimeters, or to a relative value, such as a percentage of the parent element. In example 1, the following CSS rule sets the height and width of an image to 200 pixels. Alternatively, you can use a percentage value to specify the height and width of an element relative to its parent element. For example, the following CSS rule in example 2 sets the height and width of a div container to 50% of its parent element:",
            codesnippet: `
            img {
              height: 200px;
              width: 200px;
            }
            
            .container {
              height: 50%;
              width: 50%;
            }`,
            summary:"By using the height and width properties, you can control the size and layout of elements on a web page. These properties are particularly useful when designing responsive web pages that need to adapt to different screen sizes and devices.",
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
            introduction: "In CSS, the display property is used to control the visibility and layout of an HTML element. The display property can be set to various values to control how an element is rendered on the web page.",
            body: "The most common values for the display property are: block: The element is displayed as a block-level element, which takes up the full width of its parent container and starts on a new line. Examples of block-level elements include <div>, <p>, and <h1>. inline: The element is displayed as an inline-level element, which flows with the text and takes up only as much width as necessary. Examples of inline-level elements include <span>, <a>, and <img>. inline-block: The element is displayed as an inline-level element, but it also has a width and height that you can specify, and it allows other elements to sit next to it. This is useful for creating horizontal menus or grids of images. none: The element is not displayed on the web page and takes up no space. This is useful for hiding elements that you don't want to be visible, such as pop-up windows or error messages. flex: The element is displayed as a flexible container that can be used to create responsive layouts. This is useful for creating layouts that adjust to different screen sizes and device orientations. grid: The element is displayed as a grid container that can be used to create complex layouts with rows and columns. This is useful for creating web pages with multiple content areas and navigation menus.",
            codesnippet: ``,
            summary:"By using the display property, you can control how HTML elements are rendered on the web page and create a wide variety of layouts and designs.",
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
            introduction: "In CSS, text styling refers to the process of defining the visual appearance of text on a web page. Text styling allows you to control the font, size, color, weight, and other visual properties of text to create a specific look and feel for your web page.",
            body: "The most common CSS properties for text styling are: font-family: Sets the font for the text, such as Arial, Times New Roman, or Verdana. font-size: Sets the size of the text, such as 12px, 16px, or 24px. font-weight: Sets the weight of the text, such as bold, normal, or lighter. color: Sets the color of the text, such as red, blue, or #FFFFFF (hexadecimal value). text-align: Sets the alignment of the text, such as left, center, or right. text-decoration: Sets the decoration of the text, such as underline, overline, or none. text-transform: Sets the transformation of the text, such as uppercase, lowercase, or capitalize.line-height: Sets the height of the line that the text is displayed on, such as 1.5 or 2.",
            codesnippet: ``,
            summary:"By using these properties, you can control the visual appearance of text on your web page and create a cohesive and visually appealing design. Text styling is an important part of web design because it helps to convey the tone and message of your website, and it can also improve readability and user experience.",
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
            introduction: "In CSS, you can customize the background of HTML elements on a web page by setting the background property. This property can be used to control the background color, image, and other properties of an element's background.",
            body: "The background-color property is used to set the color of an element's background, such as background-color: #FFFFFF; to set the background color to white. The background-image property is used to set an image as the background of an element, such as background-image: url(''image.jpg''); to set the background image to an image file called 'image.jpg'. In addition to the background-color and background-image properties, you can also use other properties to customize the background of an element, such as: background-repeat: Sets whether the background image should be repeated or not, such as background-repeat: repeat; to repeat the image both vertically and horizontally, or background-repeat: no-repeat; to display the image only once. background-size: Sets the size of the background image, such as background-size: cover; to scale the image to cover the entire element, or background-size: contain; to scale the image to fit inside the element. background-position: Sets the position of the background image, such as background-position: center; to center the image horizontally and vertically, or background-position: top right; to position the image in the top right corner of the element.",
            codesnippet: ``,
            summary:"By using these properties, you can customize the background of HTML elements on your web page and create visually appealing designs that enhance the user experience.",
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
            title: "Media Queries",
            sidebar_title: "Media Queries",
            image: "https://picsum.photos/800/400",
            description: "How to adapt your HTML pages to different screen sizes",
            introduction: "CSS media queries are a powerful feature of Cascading Style Sheets (CSS) that allow developers to create different styles for different devices or screen sizes. Media queries allow web pages to be responsive, adapting to different viewport sizes and resolutions, by applying different styles based on the characteristics of the user's device.",
            body: "Media queries work by checking certain device parameters, such as screen width, height, orientation, and resolution, and applying different styles based on the results. For example, a media query might check if the user's device has a screen width of less than 768 pixels and apply a different style sheet for mobile devices. Media queries are written using the @media rule in CSS, followed by the specific media feature that the query is checking for. For example, a media query that checks for a maximum screen width of 768 pixels would be written like this:",
            codesnippet: `
            @media (max-width: 768px) {
              /* CSS styles for screens with a maximum width of 768 pixels go here */
            }`,
            summary:"In this example, any CSS styles inside the curly braces will only be applied if the user's device has a maximum screen width of 768 pixels or less. Media queries can be used to create a wide variety of responsive designs, from simple adjustments to font sizes and layouts, to complex designs that reorganize content and navigation based on the user's device. With media queries, developers can create web pages that are optimized for different devices and screen sizes, providing a better user experience for all users.", 
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
            introduction: "In CSS, z-index is a property that controls the stacking order of positioned elements. The z-index property determines which element appears on top of other elements when they overlap on a web page.",
            body: "Every HTML element has a default z-index value of auto, which means that its stacking order is determined by the order in which the elements appear in the HTML markup. However, by setting the z-index property to a non-auto value, developers can control the stacking order of elements in a more precise way. The z-index property takes an integer value, with higher values stacking on top of lower values. For example, an element with a z-index of 2 will appear on top of an element with a z-index of 1. It's important to note that the z-index property only works on elements that have a position value of absolute, fixed, or relative. By default, non-positioned elements cannot be stacked in the z-axis and cannot have a z-index value. Here's an example of how the z-index property can be used to control the stacking order of elements:",
            codesnippet: `
            .box1 {
              position: absolute;
              z-index: 2;
            }
            
            .box2 {
              position: absolute;
              z-index: 1;
            }`,
            summary:"In this example, .box1 has a higher z-index value than .box2, so it will appear on top of .box2 when the two elements overlap on the page. Overall, the z-index property is a powerful tool for controlling the stacking order of elements in a web page, allowing developers to create complex layouts and visual effects.",
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
            introduction: "In CSS, the align property is used to horizontally align content within a container. There are several different values that can be used with the align property, each of which determines how the content should be aligned.",
            body: "Here are some of the most common values of the align property: left: This value aligns the content to the left edge of the container. center: This value centers the content horizontally within the container. right: This value aligns the content to the right edge of the container. justify: This value aligns the content so that it is evenly distributed between the left and right edges of the container, with extra space added between words as needed. initial: This value sets the alignment to its default value. inherit: This value inherits the alignment from the parent element. The align property can be used with various HTML elements such as <div>, <p>, and <h1> to horizontally align content. Here's an example of how the align property can be used to center a <div> element:",
            codesnippet: `
            div {
              align: center;
            }`,
            summary:"In this example, the align property is set to center, which centers the content of the <div> element horizontally within its parent container. Overall, the align property is a useful tool for controlling the horizontal alignment of content in a web page, allowing developers to create visually appealing and well-organized layouts.",
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
            introduction: "Now, that you have gone through the full CSS course, here is a cheatsheet of what you should focus on going forward to expand your knowledge on CSS.",
            body: "Box Model: Understanding the box model is essential for creating layouts with CSS. The box model describes how HTML elements are made up of content, padding, borders, and margins. Selectors: CSS selectors are used to select HTML elements that you want to style. There are several types of selectors, including tag selectors, class selectors, and ID selectors. Properties: CSS properties are used to specify the visual style of an HTML element. There are many different properties you can use, such as color, font size, background color, and margin. Layouts: CSS can be used to create complex layouts for web pages, including multi-column layouts, grid layouts, and responsive layouts. Cascading: The C in CSS stands for cascading, which means that styles can be inherited from parent elements and overridden by child elements. Understanding how cascading works is essential for creating complex stylesheets. Media queries: Media queries are used to apply different styles to HTML elements based on the size of the screen or device. This is important for creating responsive web designs that look good on all devices. Flexbox: Flexbox is a CSS layout module that makes it easy to create flexible and responsive layouts. It's especially useful for creating layouts with columns and rows. CSS frameworks: There are many CSS frameworks available that provide pre-built styles and layouts for web pages. Learning how to use a CSS framework can save you time and help you create professional-looking designs. Browser compatibility: Different web browsers can interpret CSS differently, which can cause your stylesheets to look different on different browsers. Learning how to write CSS that works across different browsers is an important skill. CSS preprocessors: CSS preprocessors like Sass and Less can make it easier to write and maintain large stylesheets. These tools allow you to use variables, functions, and other programming concepts to make your CSS more efficient and easier to work with.",
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
        introduction: "JavaScript is a high-level, interpreted programming language that is widely used in web development. It is a scripting language that runs on the client-side (in the web browser) and can be used to create dynamic and interactive web pages.",
        body: "JavaScript was originally created by Brendan Eich at Netscape in 1995 and was later standardized as ECMAScript. Since then, it has become one of the most popular programming languages in the world, with a vast ecosystem of libraries, frameworks, and tools. JavaScript is often used to add interactivity to web pages, such as form validation, animations, and dynamic content updates. It can also be used on the server-side with Node.js to build full-stack web applications.",
        codesnippet: ``,
        summary:"JavaScript syntax is similar to other programming languages like Java and C, but it also has some unique features like dynamic typing, first-class functions, and closures. With the rise of modern web development technologies like React, Angular, and Vue.js, JavaScript has become an essential skill for web developers.",
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
        introduction: "JavaScript is a versatile programming language that can perform a wide range of tasks. Here are some of the things that JavaScript can do:",
        body: "Create dynamic web content: JavaScript can be used to create interactive and dynamic web pages. For example, it can be used to validate forms, add animations, update content dynamically, and create pop-ups. Control the behavior of web browsers: JavaScript can interact with web browsers to control their behavior. For example, it can be used to manipulate the DOM (Document Object Model), change the styles of HTML elements, and respond to user events like mouse clicks and keyboard inputs. Build web applications: JavaScript can be used to build web applications that run entirely in the browser. For example, frameworks like React, Angular, and Vue.js use JavaScript to create rich and complex web applications. Connect to web services: JavaScript can be used to connect to web services and APIs to retrieve and send data. For example, it can be used to fetch data from a database, retrieve weather data from a third-party API, or send data to a web server. Develop server-side applications: With Node.js, JavaScript can be used to build server-side applications that can handle HTTP requests, interact with databases, and communicate with other servers.",
        codesnippet: ``,
        summary:"Overall, JavaScript is a versatile and powerful programming language that can be used for a wide range of tasks in web development and beyond.", 
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
        introduction: "In JavaScript, a value is a piece of data that can be assigned to a variable, passed as an argument to a function, or returned as a result of a computation. There are several types of values in JavaScript, including:",
        body: "Numbers: JavaScript has a numeric data type that can represent both integers and floating-point numbers. Numbers can be used in mathematical computations, such as addition, subtraction, multiplication, and division. Strings: A string is a sequence of characters enclosed in quotes. Strings can be used to represent text, such as names, addresses, or messages. Booleans: A Boolean value represents either true or false. Booleans are often used in conditional statements and loops to control program flow. Null and Undefined: Null and undefined are special values that represent the absence of a value. Null represents a deliberate absence of any object value, while undefined represents an uninitialized or missing value. Objects: An object is a collection of key-value pairs, where the keys are strings and the values can be any JavaScript value, including other objects. Objects are used to represent complex data structures, such as arrays, maps, and dictionaries. Functions: A function is a value that can be invoked to perform a specific task. Functions can take arguments, perform computations, and return values.",
        codesnippet: ``,
        summary:"Overall, JavaScript values are the building blocks of JavaScript programs. They can be combined, transformed, and manipulated to create complex applications and dynamic web content.",
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
        introduction: "In JavaScript, a variable is a named container that holds a value. Variables are used to store data that can be used and manipulated by a program. Here are some key features of variables in JavaScript:",
        body: "Declaration: A variable can be declared using the keyword var, let, or const. var is the original way of declaring a variable, but let and const were introduced in newer versions of JavaScript to provide additional scoping and immutability features. Assignment: A value can be assigned to a variable using the = operator. For example, let x = 10; assigns the value 10 to the variable x. Data Types: JavaScript variables can hold values of different types, such as numbers, strings, booleans, objects, and functions. Scope: The scope of a variable determines where it can be accessed in a program. Variables declared with var have function scope, while variables declared with let and const have block scope. Mutability: Variables declared with var and let can be reassigned to new values, while variables declared with const are read-only and cannot be reassigned. Naming Conventions: JavaScript variables must follow certain naming conventions. They must start with a letter or underscore, and can contain letters, numbers, or underscores. They are case-sensitive.",
        codesnippet: ``,
        summary:"Overall, variables are an essential part of JavaScript programming, and they enable developers to store and manipulate data in a flexible and dynamic way.",
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
        introduction: "In JavaScript, an operator is a symbol or keyword that performs an action on one or more values, called operands. Operators are used to perform mathematical computations, compare values, and manipulate strings and other data types. Here are some common types of operators in JavaScript:",
        body: "Arithmetic Operators: Arithmetic operators perform mathematical calculations on numerical values. Examples include + (addition), - (subtraction), * (multiplication), / (division), and % (modulo). Comparison Operators: Comparison operators compare two values and return a Boolean value (true or false) based on the comparison result. Examples include == (equal to), != (not equal to), > (greater than), < (less than), >= (greater than or equal to), and <= (less than or equal to). Logical Operators: Logical operators are used to combine Boolean values and return a Boolean result. Examples include && (logical AND), || (logical OR), and ! (logical NOT). Assignment Operators: Assignment operators are used to assign a value to a variable. Examples include = (simple assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment), and %= (modulo assignment). String Operators: String operators are used to manipulate strings. The + operator can be used to concatenate two strings, while the += operator can be used to append a string to an existing string. Type Operators: Type operators are used to check the data type of a value. Examples include typeof, which returns the data type of a value, and instanceof, which checks whether an object is an instance of a particular class.",
        codesnippet: ``,
        summary:"Overall, operators are essential building blocks of JavaScript programs, and they enable developers to perform a wide range of computations and operations on data.",
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
        introduction: "In JavaScript, a statement is a line of code that performs a specific action. Statements can be used to assign values to variables, control program flow, and perform operations on data. Here are some common types of statements in JavaScript:",
        body: "Variable Declaration: A variable declaration statement creates a new variable and assigns an initial value to it. For example, let x = 10; creates a new variable called x and assigns the value 10 to it. Expression Statement: An expression statement is a statement that evaluates an expression and returns a value. For example, x + y; is an expression statement that evaluates the expression x + y and returns the result. Control Flow Statements: Control flow statements are used to control the flow of a program based on conditions. Examples include if statements, switch statements, and loops such as for, while, and do-while. Function Declaration: A function declaration statement creates a new function with a specified name and parameters. For example, function add(x, y) { return x + y; } creates a new function called add that takes two parameters x and y, and returns their sum. Block Statement: A block statement is a statement that groups several statements together in a block, enclosed by curly braces {}. Block statements are often used in control flow statements and function declarations. Error Handling Statements: Error handling statements are used to catch and handle errors that occur during program execution. Examples include try-catch and throw statements.",
        codesnippet: ``,
        summary:"Overall, statements are essential building blocks of JavaScript programs, and they enable developers to create complex and dynamic applications by controlling program flow, manipulating data, and handling errors.",
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
        introduction: "In JavaScript, events are actions or occurrences that happen in a web page or application, such as a user clicking a button or scrolling the page. Events can be detected and responded to using JavaScript code, and they enable developers to create interactive and responsive web applications. Here are some key concepts related to events in JavaScript:",
        body: "Event Types: There are many types of events in JavaScript, such as mouse events (e.g., click, hover, scroll), keyboard events (e.g., keypress, keydown, keyup), and form events (e.g., submit, reset, change). Event Listeners: An event listener is a JavaScript function that is attached to an element on a web page and is executed when a specific event occurs on that element. Event listeners can be added using the addEventListener() method. Event Handlers: An event handler is a JavaScript function that is executed in response to an event. Event handlers can be defined inline as an attribute of an HTML element, or they can be defined in a separate JavaScript file and attached to an element using an event listener. Event Propagation: Event propagation refers to the way in which events are propagated or passed through the elements in a web page. There are two types of event propagation: bubbling (the event starts at the innermost element and propagates up to the outermost element) and capturing (the event starts at the outermost element and propagates down to the innermost element). Event Object: When an event occurs, an event object is created that contains information about the event, such as the type of event, the target element, and any data associated with the event. Event objects can be accessed and manipulated using JavaScript code.",
        codesnippet: ``,
        summary:"Overall, events are a powerful feature of JavaScript that enable developers to create dynamic and interactive web applications that respond to user actions and other events.", 
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
        introduction: "In JavaScript, an object is a data type that represents a collection of related data and behavior. Objects are used extensively in JavaScript to model real-world entities and concepts, such as users, products, and events. Here are some key concepts related to objects in JavaScript:",
        body: "Properties: An object's properties are its attributes or data values. Properties can be defined and accessed using dot notation (e.g., obj.prop) or bracket notation (e.g., obj['prop']). Properties can be of any data type, including other objects, functions, and arrays. Methods: An object's methods are its functions or behavior. Methods can be defined as properties that are functions, and they can be called using dot notation (e.g., obj.method()). Methods can access and manipulate the object's properties. Constructors: A constructor is a special function that is used to create new instances of an object. Constructors can be defined using the class syntax or using regular functions and the new keyword. Prototypes: Prototypes are a powerful feature of JavaScript that enable objects to inherit properties and methods from other objects. Each object has a prototype, which is another object that serves as a template for the object's properties and methods. Object-oriented programming (OOP): OOP is a programming paradigm that is based on the concept of objects. In OOP, objects are the basic building blocks of a program, and they are used to model real-world entities and concepts. JavaScript supports OOP through its object-oriented features, such as constructors, prototypes, and inheritance.",
        codesnippet: ``,
        summary:"Overall, objects are a fundamental concept in JavaScript that enable developers to create complex and powerful programs by modeling real-world entities and concepts. By using objects, developers can organize their code into reusable, modular, and easy-to-understand components, and they can create dynamic and interactive applications that respond to user input and other events.",
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
        introduction: "In JavaScript, an array is a data structure that represents an ordered collection of values. Arrays can store values of any data type, including numbers, strings, booleans, objects, and even other arrays. Here are some key concepts related to arrays in JavaScript:",
        body: "Declaration and Initialization: To declare and initialize an array in JavaScript, you can use square brackets [] and separate the values with commas, like this: let myArray = [value1, value2, value3]. You can also create an empty array by simply using square brackets with no values inside: let myArray = []. Indexing: Array elements are indexed starting from 0, so the first element is at index 0, the second element is at index 1, and so on. You can access array elements using square bracket notation, like this: myArray[0]. Properties and Methods: Arrays have several built-in properties and methods that allow you to manipulate and access their elements. Some common properties include length, which returns the number of elements in the array, and constructor, which returns the function that created the array. Some common methods include push(), which adds an element to the end of the array, pop(), which removes the last element from the array, and slice(), which returns a copy of a portion of the array. Iteration: Arrays can be iterated over using loops, such as for and while loops. You can also use built-in iteration methods, such as forEach(), map(), and reduce(), which provide a more concise and functional way to iterate over arrays.",
        codesnippet: ``,
        summary:"Overall, arrays are a powerful feature of JavaScript that enable developers to store and manipulate collections of data in a flexible and efficient way. By using arrays, developers can create dynamic and interactive applications that respond to user input and other events, and they can perform complex data operations with ease.",
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
        introduction: "In JavaScript, a function is a block of code that performs a specific task or set of tasks. Functions are a fundamental concept in JavaScript and are used extensively in programming to organize code, make it more reusable, and perform complex operations. Here are some key concepts related to functions in JavaScript:",
        body: "Declaration and Invocation: To declare a function in JavaScript, you can use the function keyword, followed by the function name, the parameter list (if any), and the function body enclosed in curly braces {}. For example, function myFunction(param1, param2) { ... }. To invoke a function, you can use its name followed by parentheses, passing in any arguments as needed, like this: myFunction(arg1, arg2). Parameters and Arguments: Parameters are the input values that a function accepts, and they are defined in the function declaration. Arguments are the actual values that are passed to the function when it is invoked. In JavaScript, functions can have any number of parameters, including none at all. Return Values: Functions can return values using the return keyword. When a function returns a value, it can be assigned to a variable or used in other expressions. If a function does not explicitly return a value, it returns undefined by default. Scope: Functions have their own scope in JavaScript, which means that variables declared inside a function are not accessible outside of the function. This concept is known as function scope. However, variables declared outside of a function (in the global scope) can be accessed inside the function. Function Expression: A function expression is a way to declare a function as a variable value. In this case, the function is not named and is referred to by the variable name. For example, const myFunc = function(param1, param2) { ... }. Arrow Function: Arrow functions are a shorthand way of declaring functions in JavaScript. They have a simpler syntax and automatically bind the this keyword to the parent scope. For example, const myFunc = (param1, param2) => { ... }.",
        codesnippet: ``,
        summary:"Overall, functions are a powerful feature of JavaScript that enable developers to create modular and reusable code, perform complex operations, and build dynamic and interactive applications. By using functions, developers can organize their code into small, manageable chunks and create more efficient and flexible programs.",
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
        introduction: "In JavaScript, methods are functions that are associated with objects. Methods can be thought of as actions that an object can perform. When a method is invoked, it operates on the object it is associated with, and can access and modify the object's properties and state. Here are some key concepts related to methods in association with objects in JavaScript:",
        body: "Object Literal Notation: In JavaScript, you can declare objects using object literal notation, which involves defining properties and methods as key-value pairs. For example, const myObject = { myMethod() { ... }, myProperty: 'value' }.Method Declaration: To declare a method in JavaScript, you can define it as a property of an object using function syntax. For example, const myObject = { myMethod() { ... } }. This Keyword: Inside a method, the this keyword refers to the object that the method is called on. This enables the method to access and manipulate the object's properties and state. Method Invocation: To invoke a method in JavaScript, you can use dot notation, which involves specifying the object name followed by the method name and parentheses. For example, myObject.myMethod(). Return Values: Like functions, methods can return values using the return keyword. When a method returns a value, it can be assigned to a variable or used in other expressions.",
        codesnippet: ``,
        summary:"Overall, methods in association with objects are a powerful feature of JavaScript that enable developers to create more complex and dynamic objects with specialized behavior. By using methods, developers can create objects that can perform specific actions, manipulate their own state and properties, and interact with other objects in a meaningful way.",
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
        introduction: "In JavaScript, loops are used to execute a block of code repeatedly until a certain condition is met. Loops are useful when you need to perform the same task multiple times with different inputs, or when you want to iterate over a collection of data. There are three types of loops in JavaScript:",
        body: "For Loop: A for loop is used to iterate over a sequence of values, such as the elements in an array or the characters in a string. It consists of an initialization statement, a condition, and an update statement, followed by the code to be executed in each iteration. While Loop: A while loop is used to repeatedly execute a block of code as long as a certain condition is true. It consists of a condition, followed by the code to be executed in each iteration. Do-While Loop: A do-while loop is similar to a while loop, but it always executes the code block at least once before checking the condition. It consists of a code block, followed by the condition. For example:",
        codesnippet: `
        for (let i = 0; i < myArray.length; i++) {
          // code to be executed for each element in myArray
        }

        while (condition) {
          // code to be executed as long as the condition is true
        }
        
        do {
        // code to be executed at least once
        } while (condition);
        `,
        summary:"Loops can be nested inside other loops, allowing you to perform complex iterations and operations. When using loops, it is important to ensure that the condition is properly defined to prevent infinite loops, which can cause your program to crash or become unresponsive.", 
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
        introduction: "In JavaScript, an if statement is used to execute a block of code conditionally based on a Boolean expression. The Boolean expression is evaluated to either true or false, and if it is true, the code inside the if block is executed. If the expression is false, the code inside the if block is skipped.",
        body: "Here, condition is any expression that can be evaluated to true or false. If the condition is true, the code inside the curly braces is executed. If the condition is false, the code inside the curly braces is skipped. You can also use the else keyword to provide an alternative code block to be executed if the condition is false. In addition, you can use the else if keyword to chain multiple conditions together. Here are the three types of if statements written in code form:",
        codesnippet: `
        if (condition) {
          // code to be executed if the condition is true
        }
        
        if (condition) {
          // code to be executed if the condition is true
        } else {
          // code to be executed if the condition is false
        }

        if (condition1) {
          // code to be executed if condition1 is true
        } else if (condition2) {
          // code to be executed if condition2 is true
        } else {
          // code to be executed if all conditions are false
        }
        `,
        summary:"If statements are a fundamental tool for writing conditional logic in JavaScript. They can be used to control the flow of a program based on specific conditions, making your code more flexible and responsive to user input and other variables.",
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
        introduction: "In JavaScript, a switch statement is used to execute different code blocks based on the value of a variable or expression. It is similar to a series of if-else statements, but can be more concise and readable in certain situations.",
        body: "Here, expression is any variable or expression whose value you want to test, and value1, value2, etc. are the possible values that expression might have. When the switch statement is executed, it compares the value of expression to each of the case values in turn. If expression matches a case value, the code inside that case block is executed. The break statement is used to exit the switch statement and prevent execution of any further cases. If expression doesn't match any of the case values, the code inside the default block is executed (if there is one). Here's an example of first the basic syntax of a switch statement and a in-action example:",
        codesnippet: `
        switch (expression) {
          case value1:
            // code to be executed if expression equals value1
            break;
          case value2:
            // code to be executed if expression equals value2
            break;
          ...
          default:
            // code to be executed if expression doesn't match any of the cases
        }
        
        let color = "blue";

        switch (color) {
          case "red":
            console.log("The color is red.");
            break;
          case "green":
            console.log("The color is green.");
            break;
          case "blue":
            console.log("The color is blue.");
            break;
          default:
            console.log("The color is not red, green, or blue.");
        }
        `,
        summary:"In this example, the value of the color variable is compared to each of the case values in turn. Since color is equal to 'blue', the code inside the third case block is executed, and the output is 'The color is blue.' The break statement exits the switch statement and prevents execution of the default case.", 
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
        introduction: "Now, that you have gone through the full Javascript course, here is a cheatsheet of what you should focus on going forward to expand your knowledge in Javascript.",
        body: "Data Types and Variables: Learn about the different data types in JavaScript, such as strings, numbers, and booleans, and how to declare and use variables to store and manipulate data. Operators: Learn about the different operators in JavaScript, such as arithmetic operators, comparison operators, and logical operators, and how to use them to perform calculations and make decisions. Functions: Learn about functions in JavaScript, how to declare and call them, how to pass arguments and return values, and how to use them to organize your code and make it more reusable. Arrays: Learn about arrays in JavaScript, how to declare and manipulate them, and how to use them to store and manipulate lists of data. Objects: Learn about objects in JavaScript, how to declare and use them, and how to use them to represent complex data structures and behaviors. Control Structures: Learn about control structures in JavaScript, such as if statements, loops, and switch statements, and how to use them to control the flow of your code. Events: Learn about events in JavaScript, how to handle them, and how to use them to create interactive user interfaces. DOM Manipulation: Learn about the Document Object Model (DOM) in JavaScript, how to manipulate it using JavaScript code, and how to use it to create dynamic web pages. Asynchronous Programming: Learn about asynchronous programming in JavaScript, how to use callbacks, promises, and async/await to manage asynchronous tasks, and how to avoid common pitfalls. Debugging: Learn about how to use the JavaScript console and debugger to identify and fix errors in your code, and how to write code that is easy to debug and maintain.",
        codesnippet: ``,
        summary:"",
        vimeoId: 76979871
    },
]
}]

export default courses