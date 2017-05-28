/*global $*/
$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/benjaminadk.json',
    dataType: 'jsonp',
    success: function(response) {
      var data = response.courses.completed;
     
      
      data.forEach(function(el){
        var title = el.title;
        var img = el.badge;
        var url = el.url;
        var container = document.createElement("div");
        var badges = document.getElementById("badges");
        container.setAttribute("class","course");
        badges.appendChild(container);
        var header = document.createElement("h3");
        header.innerHTML = title;
        container.appendChild(header);
        var money = document.createElement("img");
        money.setAttribute("src",img);
        container.appendChild(money);
        var a = document.createElement("a");
        a.setAttribute("href",url);
        a.setAttribute("target","_blank");
        a.setAttribute("class","btn btn-primary");
        a.innerHTML=("See Course");
        container.appendChild(a);
        console.log(title);
        });

    }
  });

});
