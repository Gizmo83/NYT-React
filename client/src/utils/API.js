import axios from "axios";

export default {
  // Gets all articles
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  // Search articles from NYT Api
  searchArticles: function(topic, startYear, endYear) {
    let queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}0101`;
    return axios.get(queryUrl);
  }
};
