$(document).ready(function(){
	/* GNB */
	$(".mainMenuGroup a").on("mouseenter", function(){
		$("#gnb").addClass("active");
	});
	$(".mainMenuGroup, #gnb").on("mouseleave", function(){
		var gnbActive = $("#gnb").hasClass("active");
		if(!gnbActive || $(this).attr("id") == "gnb"){
			$("#gnb").removeClass("active");
		}
	});

	/* BG IMAGE */
	var nextBackground = function() {
		$(".bgAction1").fadeIn(2000);
		$(".bgAction2").fadeOut(2000);
		setTimeout(prevBackground, 6000);
	}
	var prevBackground = function() {
		$(".bgAction1").fadeOut(2000);
		$(".bgAction2").fadeIn(2000);
		setTimeout(nextBackground, 6000);
	}
	setTimeout(nextBackground, 5000);
 
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

	/* bxslider */
	$("#mainSliderCompany").bxSlider({
		auto:true,
		pager:false,
	});
	$('.bannerBox').bxSlider({
		auto:true,
		pager:false,
		slideWidth:135,
		minSlides:2,
		maxSlides:7,
		moveSlides:1,
		slideMargin:0
	});
});