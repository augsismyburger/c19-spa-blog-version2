"use-strict"

var blogSpot = document.getElementById('blog');
// function MakeBlogpost(title, text, date) {
//     this.title = title;
//     this.text = text;
//     this.date = date;
// }
// DOC READY
$(document).ready(function(){
// JQUERY JSON REQUEST
$.ajax({
  url: "../blogs.json"
}).done(function(object) {
  console.log("json object", object[4].title);
  for(let i = object.length - 1; i >= 0; i--) {
    console.log(i);
    var toPrint = `<article><blockquote>${object[i].title}</blockquote><p>${object[i].text}</p><p class="right">${object[i].author}</p><a class="blog-delete waves-effect waves-light btn red white-text">Delete</a></article>`;
    blogSpot.innerHTML += toPrint;
    }
    var deleteButtons = $('.blog-delete');
    deleteButtons.click(function(e) {
        e.target.closest('article').remove();
    });
});

// JQUERY MODAL INITIALIZATION
// $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

// JQUERY FOR BLOG SPA
$('.show-blog').click(function(e) {
    $('#blog-spot').removeClass('hide');
    $('#main-content').addClass('hide');
});

$('.show-main-content').click(function(e) {
    $('#blog-spot').addClass('hide');
    $('#main-content').removeClass('hide');
});

// JQUERY - GRABBING NEW BLOG
$('#new-blog-button').click(function(e) {
    let title = $('#new-blog-title')['0'].value;
    let text = $('#new-blog-text')['0'].value;
    let author = $('#new-blog-author')['0'].value + " " + $('#new-blog-date')['0'].value;
    console.log(title, text, author);
    let toPrint = `<article><blockquote>${title}</blockquote><p>${text}</p><p class="right">${author}</p><a class="blog-delete waves-effect waves-light btn red white-text">Delete</a></article>`;
        blogSpot.innerHTML = toPrint + blogSpot.innerHTML;
    var deleteButtons = $('.blog-delete');
    deleteButtons.click(function(e) {
        e.target.closest('article').remove();
    });
});
