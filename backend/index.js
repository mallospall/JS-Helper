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
    for (let i = 1; i < 3; i++) {
      const selector = await getHTML(
        `https://habr.com/ru/flows/develop/news/page${i}/`,
      );
      selector('.tm-article-snippet').each((i, element) => {
        const link = `https://habr.com${selector(element).find('a.tm-article-snippet__title-link').attr('href')}`;
        const title = selector(element).find('a.tm-article-snippet__title-link').text();
        const images = `https://habr.com${selector(element).find('img').attr('src')}`;
        arr.push({ link, title, images });
        console.log(images);
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

{ /* <img data-test-id="articleLeadImage" src="https://habrastorage.org/getpro/habr/upload_files/cbc/388/f4a/cbc388f4aa6e21f8138eaf26a997d049.jpeg" class="tm-article-snippet__lead-image" style="object-position:0% 0%;"> */ }

{ /* .tm-article-snippet__lead-image */ }
