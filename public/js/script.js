$(document).ready(() => {
  $('#search-submit').click(() => {
    getSearchResults();
  });
  $('#search').keydown((e) => {
    if(e.which == 13) {
      event.preventDefault()
      getSearchResults()
    }
  });
});

function getSearchResults() {
  var $searchText = $('#search').val();
  $.ajax({
      beforeSend: function(request) {
          request.setRequestHeader("querystring", $searchText);
      },
      dataType: "json",
      url: '/search',
      success: function(data) {
        $( ".articles-container" ).empty();
        data.forEach(function(article, i){
          $(".articles-container").append(
            `<div class="article">
              <div id="article-${i + 1}" class="article-title">
                <a href=${article.location.uri}>${article.title.title}</a>
              </div>
              <div class="article-summary">
                ${article.summary.excerpt}
              </div>
            </div>`
          )
        });
      }
  });
}
