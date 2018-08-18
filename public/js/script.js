function search() {
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
            `<div id="article-${i + 1}" class="article"><a href=${article.location.uri}>${article.title.title}</a></div>`
          )
        });
      }
  });
}
