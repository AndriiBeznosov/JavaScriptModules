export default class NewApiService {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
  }

  searchGellery() {
    const op = {
      key: "25684992-ec31d25fc66c7364d0851b638",
      q: this.searchQuery,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      per_page: 6,
      page: this.page,
    };
    const URL = `https://pixabay.com/api/?key=${op.key}&q=${op.q}&image_type=${op.image_type}&orientation=${op.orientation}&safesearch=${op.safesearch}&per_page=${op.per_page}&page=${op.page}`;

    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return renderGallery(res.hits);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get numberPage() {
    return this.totalPage;
  }
  set numberPage(newPage) {
    this.totalPage = newPage;
  }
}
