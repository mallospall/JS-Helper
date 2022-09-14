const axios = require('axios');
const cheerio = require('cheerio');

const parse = async () => {
  try {
    const getHTML = async (url) => {
      const { data } = await axios.get(url);
      return cheerio.load(data);
    };

    const href = await getHTML('https://habr.com/ru/flows/develop/news/');
    const pageNumber = href('a.tm-pagination__page').eq(-1).text();
    const arr = [];
    for (let i = 1; i < 3; i++) {
      const selector = await getHTML(
        `https://habr.com/ru/flows/develop/news/page${i}/`,
      );
      selector('.tm-article-snippet').each((i, element) => {
        const link = `https://habr.com${selector(element).find('a.tm-article-snippet__title-link').attr('href')}`;
        const title = selector(element).find('a.tm-article-snippet__title-link').text();
        const images = `https://habr.com${selector(element).find('img').attr('src')}`;
        const subTitle = selector(element).find('div.article-formatted-body').find('p').text();
        arr.push({
          link, title, images, subTitle,
        });
        console.log(subTitle);
      });
    }
  } catch (error) {
    console.log('fuck you fucking slave!', error);
  }
};

parse();
