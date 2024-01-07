const quotes = [
    {
        quote : "hey must often change who would be constant in happiness or wisdom.",
        author : "Confucius",
    },

    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author : "Nelson Mandela",
    },
    
    {
        quote : "Life is either a daring adventure or nothing at all.",
        author : "Helen Keller",
    },

    {
        quote : "This too shall pass.",
        author : "Et hoc transibit",
    },

    {
        quote : "The goal of life is living in agreement with nature.",
        author : "Zeno",
    },

    {
        quote : "The die is cast.",
        author : "Julius caesar",
    },

    {
        quote : "Only I can change me life, no one can do it for me.",
        author : "Carol Burnett",
    },

    {
        quote : "When in doubt, choose change.",
        author : "Lily leung",
    },

    {
        quote : "All you need in this life is ignorance and confidence, then success is sure.",
        author : "Mark Twain",
    },

    {
        quote : "Life is a mountain. Your goal is to find your path, not to reach the top.",
        author : "Maxime Lagacé",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
