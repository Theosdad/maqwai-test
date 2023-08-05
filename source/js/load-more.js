const loadMoreButton = document.getElementById('load-more');
const cardList = document.querySelector('.card-list');
let startIndex = 10;
const cardsPerLoad = 5;
const maxCards = 30;
const headerCollection = ['Bridge', 'Water', 'Forest', 'Nature', 'Art'];

const fetchCards = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts?_start=${startIndex}&_limit=${cardsPerLoad}`)
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) {
        loadMoreButton.style.display = 'none';
      } else {
        data.forEach(cardData => {
          const card = createCard(cardData);
          cardList.appendChild(card);
        });
      }
    })
    .catch(error => console.error(error));
}

const createNode = (tagName, className, text) => {
  const node = document.createElement(tagName);
  if (className) {
    node.classList.add(className);
  }
  if (text) {
    node.textContent = text;
  }
  return node;
};


const getRandomHeader = () => {
  const randomIndex = Math.floor(Math.random() * headerCollection.length);
  return headerCollection[randomIndex];
};

const createCard = (cardData) => {
  const cardItem = createNode('li', 'card-list__item');

  const cardImageContainer = createNode('div', 'card-list__image');
  cardItem.appendChild(cardImageContainer);

  const randomImageIndex = Math.ceil(Math.random() * 10);
  const cardImage = createNode('img');
  cardImage.setAttribute("src", `./img/cards/card-image-${randomImageIndex}.jpg`);
  cardImage.setAttribute("srcset", `./img/cards/card-image-${randomImageIndex}@2x.jpg 2x`)
  cardImage.setAttribute("width", "320");
  cardImage.setAttribute("height", "180");
  cardImage.setAttribute("alt", "");
  cardImageContainer.appendChild(cardImage);

  const cardTextContainer = createNode('div', 'card-list__text');
  cardItem.appendChild(cardTextContainer);

  const cardHeader = createNode('h3', '', getRandomHeader());
  cardTextContainer.appendChild(cardHeader);

  const maxTitleLength = 50;
  const cardTitleText = cardData.title.length > maxTitleLength ? cardData.title.substring(0, maxTitleLength) + '...' : cardData.title;
  const cardTitle = createNode('h4', '', cardTitleText);
  cardTextContainer.appendChild(cardTitle);

  const maxBodyLength = 180;
  const cardBodyText = cardData.body.length > maxBodyLength ? cardData.body.substring(0, maxBodyLength) + '...' : cardData.body;
  const cardBody = createNode('p', '', cardBodyText);
  cardTextContainer.appendChild(cardBody);

  const author = createNode('b', '', 'Eugenia');
  const cardInfo = createNode('span', '', `Posted by `);
  cardInfo.appendChild(author);
  cardInfo.innerHTML += `, on July 24, 2019`;
  cardTextContainer.appendChild(cardInfo);

  const cardLink = createNode('a', 'card-list__link', 'Continue reading');
  cardLink.setAttribute("href", "#!");
  cardTextContainer.appendChild(cardLink)

  return cardItem;
};

loadMoreButton.addEventListener('click', () => {
  if (startIndex < maxCards) {
    fetchCards();
    startIndex += cardsPerLoad;
  } else {
    loadMoreButton.style.display = 'none';
  }
});
