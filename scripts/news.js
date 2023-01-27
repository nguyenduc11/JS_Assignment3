'use strict';
if (currentUser) {
  // Variable declaration
  const newsContainer = document.querySelector('#news-container');
  const btnPrev = document.querySelector('#btn-prev');
  const pageNum = document.querySelector('#page-num');
  const btnNext = document.querySelector('#btn-next');
  // API KEY
  const apiKey = 'c01abbf8cde049a291eb5d7b128fd110';
  let totalResults = 0;
  let newsCountry = 'us';
  let newsPage = 1;
  console.log(userArr);
  console.table(currentUser);
  async function getDataNews(country, page) {
    try {
      // const res = await fetch('../top-headlines.json');
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${currentUser.category}&pageSize=${currentUser.pageSize}&page=${page}&apiKey=${apiKey}`
      );
      const data = await res.json();
      // console.log(data);
      console.table(data);
      displayNewsList(data);
    } catch (err) {
      alert('Error: ' + err.stack);
    }
  }
  getDataNews(newsCountry, newsPage);

  function displayNewsList(data) {
    totalResults = data.totalResults;
    checkBtnPrev();
    checkBtnNext();
    let newsContent = '';
    data.articles.forEach((article) => {
      newsContent += `
					<div class="card mb-3" style="">
						<div class="row no-gutters">
							<div class="col-md-4">
								<img src="${article.urlToImage}" class="card-img" alt="">
							</div>
							<div class="col-md-8">
								<div class="card-body">
									<h5 class="card-title">${article.title}</h5>
									<p class="card-text">${article.description}</p>
									<a href="${article.url}" class="btn btn-primary">View</a>
								</div>
							</div>
						</div>
					</div>
          `;
    });
    newsContainer.innerHTML = newsContent;
  }

  function checkBtnPrev() {
    if (pageNum.textContent == 1) {
      btnPrev.style.display = 'none';
    } else {
      btnPrev.style.display = 'block';
    }
  }
  function checkBtnNext() {
    if (pageNum.textContent == Math.ceil(totalResults / currentUser.pageSize)) {
      btnNext.style.display = 'none';
    } else {
      btnNext.style.display = 'block';
    }
  }
  btnPrev.addEventListener('click', function () {
    getDataNews(newsCountry, pageNum.textContent - 1);
  });
  btnNext.addEventListener('click', function () {
    getDataNews(newsCountry, pageNum.textContent + 1);
  });
} else {
  alert('Please log in to read your news');
}
