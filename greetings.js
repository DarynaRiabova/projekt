const funny = [
  "Hey there, fancy meeting you here!",
  "¡Hola! ¿Qué onda?",
  " Bonjour! Comment ça va? ",
  "Guten Tag! Bist du ein Fisch?",
  "Ciao! Come va la vita?",
  "こんにちは！お元気ですか？",
  " 你好！你会跳舞吗？",
  " Здравствуйте! Как поживаете?",
  "Olá! Como vai você? ",
  "Hej! Har du hört den om giraffen som gick in på en bar?!",
];
const sweet = [
  "Lovebug",
  "Honeycomb",
  "Sweetheart",
  "Sugarplum",
  "Cupcake",
  "Snugglebug",
  "Buttercup",
  "Sweetiepie",
  "Cherub",
  "Pumpkin",
];
const motivation = [
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "The only way to do great work is to love what you do.",
  "Don't watch the clock; do what it does. Keep going.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "If you want to achieve greatness, stop asking for permission.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "You miss 100% of the shots you don't take.",
];
const randomMotivation =
  motivation[Math.floor(Math.random() * motivation.length)];
const randomSweet = sweet[Math.floor(Math.random() * sweet.length)];
const randomFunny = funny[Math.floor(Math.random() * funny.length)];
const randomAll = `${randomMotivation},${randomSweet}, ${randomFunny}`;
console.log(randomAll);
