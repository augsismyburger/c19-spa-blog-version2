var blogSpot = document.getElementById('blog');
function MakeBlogpost(title, text, date) {
    this.title = title;
    this.text = text;
    this.date = date;
}
var blog1 = "My first week has certainly been interesting. I had no idea what to expect coming in. I already am taking to the teaching style and progressing more quickly than I had anticipated. I learned how to effectively use the console and git with no previous knowledge on the subject. This was about the only Team Treehouse video that I didn't make it through. I also jumped to the more difficult javascript exercises after getting bored working with HTML. I had a ton of questions, but I managed to make to programs that work to the desired effect. I'm not gettting as much done at home as I would like, but I am gennerally happy with my current status.";
var blog2 = "Week two has been a trip. I have become very comfortable with the git system. I don't neccesarily like it, but I get it. I have nearly completed all the exercises for the first milestone and feel comfortable with most of this baseline skills in html css and javascript. I spent most of the week working on my flexbox skills. I didn't get to work with javascript as much as I would have liked, but overall I am satisfied with my progress through this week. Also, I'm getting into my first team lead, so we shall see how that goes."
var blogpost1 = new MakeBlogpost("Here we go..", blog1, "- Matt Augsburger 3/7/17");
var blogpost2 = new MakeBlogpost("Getting into a rythym", blog2, "- Matt Augsburger 3/13/17");
var blogHolder = [blogpost1, blogpost2];

blogHolder.forEach(function(i) {
    var toPrint = "<article><h3>" + i.title + "</h3>" + "<p>" + i.text + "</p>" + "<p>" + i.date + "</p></article>";
    blogSpot.innerHTML += toPrint;
});
