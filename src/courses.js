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
                introduction: "This is the introduction for this lesson. The content displayed here will serve as a brief introduction to the lesson. This section should contain 2-3 paragraphs followed by a snippet of code, which details the essence of this lesson.",
                body: "This is where the body goes. In this section we will dive into the meat of the lesson, explaining the most important parts in a way that is simple, easy to understand and memorable.",
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
                summary: "This is a summary of this lesson. It also will serve as a tee-up for the video that encapsulates this lesson.",
                vimeoId: 76979871
            },
            {
                id: 2,
                title: "What is HTML",
                description: "Short explanation of HTML", 
                vimeoId: 76979871
            },
            {
                id: 3,
                title: "The Structure of HTML Pages",
                description: "How HTML pages are structured", 
                vimeoId: 76979871
            },
            {
                id: 4,
                title: "HTML Tags & Attributes",
                description: "What are tags and attributes in HTML", 
                vimeoId: 76979871
            },
            {
                id: 5,
                title: "Headings & Paragraphs in HTML",
                description: "Explaination of headings and paragraphs", 
                vimeoId: 76979871
            },
            {
                id: 6,
                title: "Text Formatting in HTML",
                description: "How text formatting works in HTML", 
                vimeoId: 76979871
            },
            {
                id: 7,
                title: "HTML Images",
                description: "How images are added in HTML pages", 
                vimeoId: 76979871
            },
            {
                id: 8,
                title: "Tables & Lists in HTML",
                description: "How tables and list work in HTML", 
                vimeoId: 76979871
            },
            {
                id: 9,
                title: "HTML Forms",
                description: "What forms are in HTML", 
                vimeoId: 76979871
            },
            {
                id: 10,
                title: "Creating a Simple HTML Page from Scratch",
                description: "Create the first HTML page", 
                vimeoId: 76979871
            },
            {
                id: 11,
                title: "Styling HTML Elements",
                description: "How to style HTML elements", 
                vimeoId: 76979871
            },
            {
                id: 12,
                title: "HTML Classes & IDs",
                description: "Why classes and IDs are in HTML", 
                vimeoId: 76979871
            },
            {
                id: 13,
                title: "HTML Links with Anchor Tags",
                description: "How to add links using anchor tags", 
                vimeoId: 76979871
            },
            {
                id: 14,
                title: "Comments on HTML Pages",
                description: "How to make comments in HTML code", 
                vimeoId: 76979871
            },
            {
                id: 15,
                title: "HTML Cheatsheet",
                description: "Recap of the basics of HTML", 
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
            vimeoId: 76979871
        },
        {
            id: 2,
            title: "What is CSS?",
            description: "Introduction to what CSS is", 
            vimeoId: 76979871
        },
        {
            id: 3,
            title: "CSS Selectors",
            description: "How selectors work in CSS", 
            vimeoId: 76979871
        },
        {
            id: 4,
            title: "Setting Colors with CSS",
            description: "How to set colors using CSS", 
            vimeoId: 76979871
        },
        {
            id: 5,
            title: "The Box Model",
            description: "Explanation of the box model", 
            vimeoId: 76979871
        },
        {
            id: 6,
            title: "Padding & Margin in CSS",
            description: "How padding and margin works in CSS", 
            vimeoId: 76979871
        },
        {
            id: 7,
            title: "Borders",
            description: "How to add borders to HTML elements", 
            vimeoId: 76979871
        },
        {
            id: 8,
            title: "Height & Width in CSS",
            description: "Why adding height and width can be useful in CSS", 
            vimeoId: 76979871
        },
        {
            id: 9,
            title: "The Display Property",
            description: "How the display property work in CSS", 
            vimeoId: 76979871
        },
        {
            id: 10,
            title: "Styling Text Using CSS",
            description: "How to style text with CSS", 
            vimeoId: 76979871
        },
        {
            id: 11,
            title: "Customizing the Background with CSS",
            description: "How to change background in CSS", 
            vimeoId: 76979871
        },
        {
            id: 12,
            title: "Screen Customization & Media Queries",
            description: "How to adapt your HTML pages to different screen sizes", 
            vimeoId: 76979871
        },
        {
            id: 13,
            title: "The Z-Index",
            description: "What the z-index is in CSS", 
            vimeoId: 76979871
        },
        {
            id: 14,
            title: "CSS Align",
            description: "How to align elements in CSS", 
            vimeoId: 76979871
        },
        {
            id: 15,
            title: "CSS Cheatsheet",
            description: "Recap of the basics of CSS", 
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
        vimeoId: 76979871
    },
    {
        id: 2,
        title: "What is Javascript?",
        description: "Introduction of Javascript", 
        vimeoId: 76979871
    },
    {
        id: 3,
        title: "Javascript Values",
        description: "What values are in Javascript", 
        vimeoId: 76979871
    },
    {
        id: 4,
        title: "Creating Variables",
        description: "How to create variables in Javascript", 
        vimeoId: 76979871
    },
    {
        id: 5,
        title: "Operators in Javascript",
        description: "What are operators in Javascript", 
        vimeoId: 76979871
    },
    {
        id: 6,
        title: "Statements in Javascript",
        description: "How statements are in Javascript", 
        vimeoId: 76979871
    },
    {
        id: 7,
        title: "Events in Javascript",
        description: "What events do and how to used them in Javascript", 
        vimeoId: 76979871
    },
    {
        id: 8,
        title: "Objects in Javascript",
        description: "What are Javascript objects", 
        vimeoId: 76979871
    },
    {
        id: 9,
        title: "Arrays in Javascript",
        description: "What are Javascript arrays", 
        vimeoId: 76979871
    },
    {
        id: 10,
        title: "Functions in Javascript",
        description: "How to use Javascript functions", 
        vimeoId: 76979871
    },
    {
        id: 11,
        title: "Methods in Javascript",
        description: "What are methods in Javascript", 
        vimeoId: 76979871
    },
    {
        id: 12,
        title: "Loops in Javascript",
        description: "What loops are for in Javascript", 
        vimeoId: 76979871
    },
    {
        id: 13,
        title: "If Statements in Javascript",
        description: "How to use If statements in Javascript", 
        vimeoId: 76979871
    },
    {
        id: 14,
        title: "Switch Statements in Javascript",
        description: "How to use Switch statements in Javascript", 
        vimeoId: 76979871
    },
    {
        id: 15,
        title: "Javascript Cheatsheet",
        description: "Recap of the basics of Javascript", 
        vimeoId: 76979871
    },
]
}]

export default courses