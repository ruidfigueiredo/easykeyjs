# easykeyjs


Stop having to write code like this

    $(document).keydown(function(e){
    	if (e.which == 13) //enter
	  reloadResults();
	else if (e.which == 37) //left arrow
	  previousPage();
	else if (e.which == 39) //right page
	  nextPage();
	}); 

And write this instead:

	$(document)
	  .onEnterKeyDown(reloadResults)
 	  .onLeftArrowKeyDown(previousPage)
	  .onRightArrowKeyDown(nextPage);

Read more about easykeyjs [here](http://www.blinkingcaret.com/2016/02/24/easykeyjs)

Go download the latest version [http://easykeyjs.com](http://easykeyjs.com)
