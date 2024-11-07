fetch('ads.json')
  .then(response => response.json())
  .then(ads => {
    setTimeout(() => {
      displayAds(ads);
    }, 1000);
  });

const container = document.getElementById('ads-container');
container.classList.add('ads-container');

function displayAds(ads) {
  container.innerHtml = '';

  for (const cardAds of ads) {
    let card = document.createElement('div');
    card.classList.add('ads-card');

    let close = document.createElement('button');
    close.classList.add('ads-card__close');
    close.textContent = 'Close';
    close.addEventListener('click', () => {
      card.remove();
    });
    card.appendChild(close);

    let title = document.createElement('h1');
    title.textContent = cardAds.title;
    title.classList.add('ads-card__title');
    card.appendChild(title);

    let description = document.createElement('p');
    description.textContent = cardAds.description;
    description.classList.add('ads-card__description');
    card.appendChild(description);

    let img = document.createElement('img');
    img.src = 'shop-chair.png';
    card.appendChild(img);

    let discount = document.createElement('p');
    discount.textContent = cardAds.discount;
    discount.classList.add('ads-card__discount');
    card.appendChild(discount);

    container.appendChild(card);
  }
}

const modalAds = document.querySelector('.ads-container');
const adsBtnClose = document.querySelector('.ads-btn-close');

const toggleAdsModal = () => modalAds.classList.toggle('is-hiddens');

adsBtnClose.addEventListener('click', toggleAdsModal);
