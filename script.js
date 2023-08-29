//QUOTES ANIMATION
const quotes = [
  "Travel makes one modest. You see what a tiny place you occupy in the world.",
  "Travel far, travel wide, travel freely. Embrace the unknown, for it holds the key to discovery.",
  "Travel far, travel wide, let wanderlust be your guide.",
  "Adventure calls, follow the unknown, discover where your heart belongs.",
  "In every journey, we find pieces of ourselves we never knew existed.",
  "Life's greatest treasures lie in the places we explore and the people we meet.",
  "The world is a book, and those who don't travel read only one page.",
  "Collect memories, not things; fill your heart with experiences that make it sing.",
  "Travel opens hearts, broadens minds, and paints the world with vibrant colors.",
  "Travel is the only thing you can buy that makes you richer.",
  "The world is a book, and those who do not travel read only one page.",
  "The best souvenirs are the friendships and memories we make along the way.",
  "Wherever you go becomes a part of you somehow.",
  "Travel far, travel wide, travel deep.",
  "Travel: the antidote to routine, the magic that sparks the soul's serenade.",
  "Journey far, embrace the unknown; life's canvas awaits your masterpiece.",
  "Travel is an investment in yourself.",
  "Travel awakens the dreamer, the adventurer, the storyteller within us all.",
  "Travel is not a place; it's a new way of seeing things.",
  "The beauty of travel lies not in the destination, but in the journey itself.",
  "Live, travel, adventure, bless, and don't be sorry.",
  "Travel is the art of collecting memories.",
  "Through travel, we learn the art of gratitude and the gift of perspective.",
  "Travel opens hearts and minds.",
  "Travel nourishes the soul, quenches curiosity, and ignites the flames of wonder."
];

const quoteElement = document.getElementById("quote");
let index = 0;

function displayQuote() {
  quoteElement.textContent = quotes[index];
  index = (index + 1) % quotes.length;
}

// Display the first quote immediately
displayQuote();

// Display a new quote every 3 seconds
setInterval(displayQuote, 3000);










