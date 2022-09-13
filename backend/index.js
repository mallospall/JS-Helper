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
    console.log(pageNumber);
    const arr = [];
    for (let i = 1; i < 40; i++) {
      const selector = await getHTML(
        `https://habr.com/ru/flows/develop/news/page${i}/`,
      );
      selector('.tm-article-snippet').each((i, element) => {
        const link = `https://habr.com${selector(element).find('a.tm-article-snippet__title-link').attr('href')}`;
        const title = selector(element).find('a.tm-article-snippet__title-link').text();
        arr.push(title);
        console.log(link);
        console.log(title);
      });
    }
    // res.json(title);
  } catch (error) {
    console.log('iui!', error);
  }
};

parse();
// div.tm-article-snippet - for get all data
// .tm-article-snippet__title-link
