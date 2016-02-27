// nav
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
//
$('a').smoothScroll();
$("img").unveil(600);

// $("img").unveil(300, function() {
//     $(this).load(function() {
//       this.style.opacity = 1;
//     });
//   });

//LISTJS
 var options = {
    valueNames: [ 'name', 'slug' , 'description', 'date', 'category', 'type', 'related'],
    listClass: 'filter-list'    
};

var optionsInternal = {
    valueNames: [ 'name', 'slug' , 'description', 'date', 'category', 'type', 'related'],
}

var vidList = new List('filter', options);
var vidListInternal = new List('filter-internal', optionsInternal);

  //and clear the filters
  if (document.getElementById("filter-none")) {
     document.getElementById("filter-none").onclick=function(){
         authorList.filter();
        };
      }
if (document.getElementById("filter-yahoo")) {
        document.getElementById("filter-internal").onclick=function(){
            booksList.filter(function(item) {
               if (item.values().yahoo == "yes" ) {
                 return true;
                 } else {
                 return false;
              }
          });
        };
      }
 
$('#tipue_search_input').tipuesearch({
  highlightEveryTerm: true,
  descriptiveWords: 100
});
