let randomQuotes = [
  {
    name: 'Blade Runner 2049',
    sourceImg: './assets/Blade_Runner_Pixelgraph.gif',
    quote: `
    <p class="text-white"><span>Joey:</span> You Look Lonely, I Can Fix That</p>
    <p class="text-white"><span>Officer-K:</span>...</p>
    `,
  },

  {
    name: 'Mr.Robot',
    sourceImg: './assets/mr.robot.gif',
    quote: `
    <p class="text-white"><span>Eliot:</span> We’re all living in each other’s paranoia. </p>
   
    `,
  },

  {
    name: 'Mr.Robot',
    sourceImg: './assets/masterMind.gif',
    quote: `
    <p class="text-white"><span>Eliot:</span> A bug is never just a mistake. It represents something bigger. An error of thinking that makes you who you are.</p>

    `,
  },

  {
    name: 'Joker 2019',
    sourceImg: './assets/jay-bansal-joker.gif',
    quote: `
    <p class="text-white"><span>Arthur Fleck:</span> Is it just me or is it getting crazier out there?</p>
    `,
  },

  {
    name: 'Fight Club',
    sourceImg: './assets/fight_club_smoke_2x.gif',
    quote: `
    <p class="text-white"><span>Tyler Durden:</span> You do not talk about Fight Club.</p>
    `,
  },
];

function generateQuote() {
  let cartona = '';
  let cartona2 = '';
  let index = Math.round(Math.random() * (randomQuotes.length - 1));
  let imageContainer = document.getElementById('imageContainer');
  let contentContainer = document.getElementById('contentContainer');

  let randomQuote = randomQuotes[index];

  cartona += `<img src="${randomQuote.sourceImg}" class="w-100 object-fit-cover" alt="${randomQuote.name}" />`;
  cartona2 += `${randomQuote.quote}

  `;

  imageContainer.innerHTML = cartona;
  contentContainer.innerHTML = cartona2;
}

/**
 * 
 *   let index = Math.round(Math.random() * randomQuotes.length - 1);
  let imageContainer = document.getElementById('imageContainer');
  let contentContainer = document.getElementById('contentContainer');

  let randomQuote = randomQuotes[index];

  let imageElement = document.createElement('img');
  imageElement.src = randomQuote.sourceImg;
  imageElement.className = 'w-100 object-fit-cover';
  imageElement.alt = randomQuote.name;
  imageContainer.appendChild(imageElement);
  contentContainer.appendChild(randomQuote.quote);
 */
