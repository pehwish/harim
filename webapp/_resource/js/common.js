$(document).ready(function(){
	/* sub menu tab action */
	$(".subLinkGroup a").on("mouseover", function(){
		$(".subLinkGroup a.active").addClass("holder");
		$(this).siblings().removeClass("active");
	})
	$(".subLinkGroup").on("mouseleave", function(){
		$(".subLinkGroup a.holder").removeClass("holder").addClass("active");
	});

	/* sub menu page action */
	var thisSubPage = $("#wrap").attr("class");
	var thisTitleName = $("h1.sp").text();
	$(".subLinkGroup."+thisSubPage).show();
	$(".subLinkGroup."+thisSubPage+" a").each(function(){
		if($(this).text() == thisTitleName){
			$(this).addClass("active");
		}
	});

	/* select action */
	var linkGroupHeight = $("._select dd").height();
	$(".selectAction").on("click", function(){
		$(this).parent().next().css("top", "-"+ linkGroupHeight +"px");
		$(this).parent().next().toggle();
	});
	$("._select").on("mouseleave", function(){
		$(this).find("dd").hide();
	});
});