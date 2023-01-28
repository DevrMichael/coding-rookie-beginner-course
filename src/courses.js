const courses = [
    {
        id: 1,
        title: "HTML / Hyper Text Markup Language",
        description: "Starting from scratch, HTML is the first step to becoming a web developer.",
        lessons: [
            {
                id: 1,
                title: "Welcome to the HTML course",
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
                vimeoId: 76979871
            },
            {
                id: 2,
                title: "What is HTML",
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
                vimeoId: 76979871
            },
            {
                id: 3,
                title: "The Structure of HTML Pages",
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
                vimeoId: 76979871
            },
            {
                id: 4,
                title: "HTML Elements & Attributes",
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
                vimeoId: 76979871
            },
            {
                id: 5,
                title: "Headings & Paragraphs in HTML",
                description: "Explanation of headings and paragraphs", 
                introduction: "Most HTML pages have headings and paragraphs and knowing how to structure your HTML pages with their element tags is one of the first step to know about when learning the language.",
                body: "Headings have 6 different element tags in HTML. They range from <h1> which is the largest text size to <h6>. <h1> is used for the headlines of any pages, blogposts or articles, while the other tags are used for subsequent headlines. Paragraphs are written within <p> tags and most often will be placed below a heading tag.",
                codesnippet: `
                <h1> - <h6> element tags are used for headlines.
                <p> element tags are used for paragraphs.
                `,
                summary:"Most websites have some form of text on them and a lot of them are structured using headlines followed by paragraph tags.",
                vimeoId: 76979871
            },
            {
                id: 6,
                title: "Text Formatting in HTML",
                description: "How text formatting works in HTML", 
                introduction: "Any text that is displayed on a web page can be formatted to emphasize certain aspects of a the text.",
                body: "Firstly, we are able to bold any part of a text by using either the <b> or <strong> elements. Visually they do the same, but semantically they mean slightly different things. While the <b> tag bolds the text, the <strong> element bolds it while also signaling to screen reader and bots who are analyzing the page. The same goes with italisizing with eith er <i> or <em>.",
                codesnippet: `
                <b> & <strong> - bolds any text
                <i> & <em> - italisizes any text
                <u> - underlines text
                `,
                summary:"There are three main ways you can format your text with bolding, italisizing or underlining. In addition to those there are others, but these three are the most important to know about.",
                vimeoId: 76979871
            },
            {
                id: 7,
                title: "HTML Images",
                description: "How images are added in HTML pages",
                introduction: "Images are essential part of almost any webpage. Knowing how to add them to your HTML documents can give you a immense freedom in being able to customize your webpages.",
                body: "We add images to our HTML pages by using the <img> element along with a src attribute. The src attribute accepts a pathway to the image, which can come from one of two places. The first one is to add a webpage link from somewhere on the internet that holds the image you want to display. The second on is when you add the image document to your code and referance the pathway to the place in the code. Additionally you would want to add an alt attribute that explains the context of the image. This is important for screen readers, website crawlers and for broken images. This looks like this:",
                codesnippet: `
        1. <img src="https://picsum.photos/800/400" alt="explaining the image context"/>
        2. <img src"/imagefolder/my-image.jpg" alt="explaining the image context"/>
                `,
                summary:"Images can easily be added anywhere on a webpage by using the <img> element and adding the src attribute.", 
                vimeoId: 76979871
            },
            {
                id: 8,
                title: "Tables & Lists in HTML",
                description: "How tables and list work in HTML", 
                introduction: "",
                body: "",
                codesnippet: "",
                summary:"",
                vimeoId: 76979871
            },
            {
                id: 9,
                title: "HTML Forms",
                description: "What forms are in HTML", 
                introduction: "",
                body: "",
                codesnippet: "",
                summary:"",
                vimeoId: 76979871
            },
            {
                id: 10,
                title: "Creating a Simple HTML Page from Scratch",
                description: "Create the first HTML page", 
                introduction: "",
                body: "",
                codesnippet: "",
                summary:"",
                vimeoId: 76979871
            },
            {
                id: 11,
                title: "Styling HTML Elements",
                description: "How to style HTML elements", 
                introduction: "",
                body: "",
                codesnippet: "",
                summary:"",
                vimeoId: 76979871
            },
            {
                id: 12,
                title: "HTML Classes & IDs",
                description: "Why classes and IDs are in HTML", 
                introduction: "",
                body: "",
                codesnippet: "",
                summary:"",
                vimeoId: 76979871
            },
            {
                id: 13,
                title: "HTML Links with Anchor Tags",
                description: "How to add links using anchor tags",
                introduction: "",
                body: "",
                codesnippet: "",
                summary:"", 
                vimeoId: 76979871
            },
            {
                id: 14,
                title: "Comments on HTML Pages",
                description: "How to make comments in HTML code", 
                introduction: "",
                body: "",
                codesnippet: "",
                summary:"",
                vimeoId: 76979871
            },
            {
                id: 15,
                title: "HTML Cheatsheet",
                description: "Recap of the basics of HTML", 
                introduction: "",
                body: "",
                codesnippet: "",
                summary:"",
                vimeoId: 76979871
            },

        ]
    },
    {
        id: 2,
        title: "CSS / Cascading Style Sheet",
        description: "Learn everything about styling your HTML pages with CSS.",
        lessons: [
            {
            id: 1,
            title: "Welcome to the CSS course",
            description: "First CSS module", 
            introduction: "",
            body: "",
            codesnippet: "",
            summary:"",
            vimeoId: 76979871
        },
        {
            id: 2,
            title: "What is CSS?",
            description: "Introduction to what CSS is", 
            introduction: "",
            body: "",
            codesnippet: "",
            summary:"",
            vimeoId: 76979871
        },
        {
            id: 3,
            title: "CSS Selectors",
            description: "How selectors work in CSS", 
            introduction: "",
            body: "",
            codesnippet: "",
            summary:"",
            vimeoId: 76979871
        },
        {
            id: 4,
            title: "Setting Colors with CSS",
            description: "How to set colors using CSS", 
            introduction: "",
            body: "",
            codesnippet: "",
            summary:"",
            vimeoId: 76979871
        },
        {
            id: 5,
            title: "The Box Model",
            description: "Explanation of the box model", 
            introduction: "",
            body: "",
            codesnippet: "",
            summary:"",
            vimeoId: 76979871
        },
        {
            id: 6,
            title: "Padding & Margin in CSS",
            description: "How padding and margin works in CSS", 
            introduction: "",
            body: "",
            codesnippet: "",
            summary:"",
            vimeoId: 76979871
        },
        {
            id: 7,
            title: "Borders",
            description: "How to add borders to HTML elements", 
            introduction: "",
            body: "",
            codesnippet: "",
            summary:"",
            vimeoId: 76979871
        },
        {
            id: 8,
            title: "Height & Width in CSS",
            description: "Why adding height and width can be useful in CSS", 
            introduction: "",
            body: "",
            codesnippet: "",
            summary:"",
            vimeoId: 76979871
        },
        {
            id: 9,
            title: "The Display Property",
            description: "How the display property work in CSS", 
            introduction: "",
            body: "",
            codesnippet: "",
            summary:"",
            vimeoId: 76979871
        },
        {
            id: 10,
            title: "Styling Text Using CSS",
            description: "How to style text with CSS", 
            introduction: "",
            body: "",
            codesnippet: "",
            summary:"",
            vimeoId: 76979871
        },
        {
            id: 11,
            title: "Customizing the Background with CSS",
            description: "How to change background in CSS", 
            introduction: "",
            body: "",
            codesnippet: "",
            summary:"",
            vimeoId: 76979871
        },
        {
            id: 12,
            title: "Screen Customization & Media Queries",
            description: "How to adapt your HTML pages to different screen sizes",
            introduction: "",
            body: "",
            codesnippet: "",
            summary:"", 
            vimeoId: 76979871
        },
        {
            id: 13,
            title: "The Z-Index",
            description: "What the z-index is in CSS", 
            introduction: "",
            body: "",
            codesnippet: "",
            summary:"",
            vimeoId: 76979871
        },
        {
            id: 14,
            title: "CSS Align",
            description: "How to align elements in CSS", 
            introduction: "",
            body: "",
            codesnippet: "",
            summary:"",
            vimeoId: 76979871
        },
        {
            id: 15,
            title: "CSS Cheatsheet",
            description: "Recap of the basics of CSS", 
            introduction: "",
            body: "",
            codesnippet: "",
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
        id: 1,
        title: "Welcome to the Javascript course",
        description: "First Javascript module", 
        introduction: "",
        body: "",
        codesnippet: "",
        summary:"",
        vimeoId: 76979871
    },
    {
        id: 2,
        title: "What is Javascript?",
        description: "Introduction of Javascript",
        introduction: "",
        body: "",
        codesnippet: "",
        summary:"", 
        vimeoId: 76979871
    },
    {
        id: 3,
        title: "Javascript Values",
        description: "What values are in Javascript", 
        introduction: "",
        body: "",
        codesnippet: "",
        summary:"",
        vimeoId: 76979871
    },
    {
        id: 4,
        title: "Creating Variables",
        description: "How to create variables in Javascript", 
        introduction: "",
        body: "",
        codesnippet: "",
        summary:"",
        vimeoId: 76979871
    },
    {
        id: 5,
        title: "Operators in Javascript",
        description: "What are operators in Javascript", 
        introduction: "",
        body: "",
        codesnippet: "",
        summary:"",
        vimeoId: 76979871
    },
    {
        id: 6,
        title: "Statements in Javascript",
        description: "How statements are in Javascript", 
        introduction: "",
        body: "",
        codesnippet: "",
        summary:"",
        vimeoId: 76979871
    },
    {
        id: 7,
        title: "Events in Javascript",
        description: "What events do and how to used them in Javascript",
        introduction: "",
        body: "",
        codesnippet: "",
        summary:"", 
        vimeoId: 76979871
    },
    {
        id: 8,
        title: "Objects in Javascript",
        description: "What are Javascript objects", 
        introduction: "",
        body: "",
        codesnippet: "",
        summary:"",
        vimeoId: 76979871
    },
    {
        id: 9,
        title: "Arrays in Javascript",
        description: "What are Javascript arrays", 
        introduction: "",
        body: "",
        codesnippet: "",
        summary:"",
        vimeoId: 76979871
    },
    {
        id: 10,
        title: "Functions in Javascript",
        description: "How to use Javascript functions", 
        introduction: "",
        body: "",
        codesnippet: "",
        summary:"",
        vimeoId: 76979871
    },
    {
        id: 11,
        title: "Methods in Javascript",
        description: "What are methods in Javascript", 
        introduction: "",
        body: "",
        codesnippet: "",
        summary:"",
        vimeoId: 76979871
    },
    {
        id: 12,
        title: "Loops in Javascript",
        description: "What loops are for in Javascript",
        introduction: "",
        body: "",
        codesnippet: "",
        summary:"", 
        vimeoId: 76979871
    },
    {
        id: 13,
        title: "If Statements in Javascript",
        description: "How to use If statements in Javascript", 
        introduction: "",
        body: "",
        codesnippet: "",
        summary:"",
        vimeoId: 76979871
    },
    {
        id: 14,
        title: "Switch Statements in Javascript",
        description: "How to use Switch statements in Javascript",
        introduction: "",
        body: "",
        codesnippet: "",
        summary:"", 
        vimeoId: 76979871
    },
    {
        id: 15,
        title: "Javascript Cheatsheet",
        description: "Recap of the basics of Javascript", 
        introduction: "",
        body: "",
        codesnippet: "",
        summary:"",
        vimeoId: 76979871
    },
]
}]

export default courses