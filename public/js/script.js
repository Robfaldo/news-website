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
        data.forEach(function(article){
          $(".articles-container").append(
            `<div class="article">${article.title.title}</div>`
          )
        });
      }
  });
}
