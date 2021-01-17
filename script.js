$.ajax({
  url: "https://www.reddit.com/r/Sneakers.json",
  methods: "GET",
  success: function (data, status, xhr) {
    if (status === "success") {
      var items = data.data.children;
      for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
        var item = items[i].data;
        var title = item.title;
        var author = item.author;
        var url = item.permalink;

        var wrapper = $("<tr></tr>");
        title = $("<td>" + title + "</td>");
        author = $("<td>" + author + "</td>");
        url = $(
          "<td><a href='https://www.reddit.com" +
            url +
            "' target='_blank'><img src='./hot_Gif.gif'></a></td>"
        );
        wrapper.append(title).append(author).append(url);
        $("#tables").append(wrapper);
      }
    } else {
      console.error("the reddit info is not available!");
    }
  },
  error: function (err) {
    console.log(err);
  }
});
