/***********************************************************
 * desk Ui
 ************************************************************/
$(function() {
	deskUi();
});

function deskUi() {

// plugin init

	$('.toolTip-bottom').tooltip({align: 'bottom'});

	//setInterval('widgetClock()', 1000*60);
	/*
	$("#header").on("contextmenu", function(){
        //alert("오른쪽 마우스 금지");
        return false;
    });
	*/

	toolbar ();
	deskBody ();
}

/***********************************************************
 * desk Ui - 전역변수
 ************************************************************/
	var appPlusOpen = "[data-ui='appPlusOpen']";
	var appPlusExit = "[data-ui='appPlusExit'],[data-ui='dim']";
	var settingExit = "[data-ui='settingExit'],[data-ui='dim']";
	var wallpaperExit = "[data-ui='wallpaperExit'],[data-ui='dim']";
	var contentList = "[data-ui='contentList']";
	var contentListView = "[data-ui='contentListView']";

	var sideToggle = "[data-ui='sideToggle']";

	var btnFullScreen = "[data-ui='btnFullScreen']";
	var btnFullScreenOff = "[data-ui='btnFullScreenOff']";
	var addListOpen = "[data-ui='addListOpen']";
	var addUserOpen = "[data-ui='addUserOpen']";
	var popExit = "[data-ui='popExit'],[data-ui='dim']";

/***********************************************************
 * desk Ui - 실행함수 모음
 ************************************************************/
// appPlus
function appPlusBoxOpen() { // appPlus open
	$(appPlusOpen).addClass("active");

	//$("#wrap").addClass("filter_blur");
	$("body").append( "<div id='appPlus' class='popupBox'></div>" );
	$('#appPlus').load("./ui_deskboard/popup/desk_apps.html");
}
function appPlusBoxExit() { // appPlus off
	$(appPlusOpen).removeClass("active");
	//$("#wrap").removeClass("filter_blur");
	$("#appPlus").remove();
}

// 환경설정
function mydeskOpen() { // 환경설정 open
	//$("#wrap").addClass("filter_blur");
	alert("선택적 앱실행 코드 만들기")
}
function deskSettingOpen() { // 환경설정 open
	//$("#wrap").addClass("filter_blur");
	$("body").append( "<div id='SettingPop' class='popupBox'></div>" );
	$('#SettingPop').load("./ui_deskboard/popup/desk_setting.html");
}
function deskSettingExit() { // 환경설정 open
	//$("#wrap").removeClass("filter_blur");
	$("#SettingPop").remove();
}

// wallpaper
function wallpaperBoxOpen() { // 환경설정 open
	//$("#wrap").addClass("filter_blur");
	$("body").append( "<div id='wallpaperPop' class='popupBox'></div>" );
	$('#wallpaperPop').load("./ui_deskboard/popup/desk_wallpaper.html");
}

function wallpaperBoxExit() { // 환경설정 open
	//$("#wrap").removeClass("filter_blur");
	$("#wallpaperPop").remove();
}

// fullscreen
function fullscreenOn() { // fullscreenOn
	$(document.body).fullscreen();
	return false;
}
function fullscreenOff() { // fullscreenOff
	$.fullscreen.exit();
	return false;
}

// addList
function addListBoxOpen() { // addList open
	//$("#wrap").addClass("filter_blur");
	$("body").append( "<div id='addBox' class='multiModal'></div>" );
	$('#addBox').load("./ui_deskboard/popup/app_addList.html");
}
function addListBoxExit() { // addList off
	//$("#wrap").removeClass("filter_blur");
	$("#addBox").remove();
}

// addUser
function addUserBoxOpen() { // addList open
	//$("#wrap").addClass("filter_blur");
	$("body").append( "<div id='adduserBox' class='multiModal'></div>" );
	$('#adduserBox').load("./ui_deskboard/popup/app_addUserList.html");
}
function addUserBoxExit() { // addList off
	//$("#wrap").removeClass("filter_blur");
	$("#adduserBox").remove();
}

$(document).on('fscreenchange', function(e, state, elem) { // fullscreen state
	// if we currently in fullscreen mode
	if ($.fullscreen.isFullScreen()) {
		$(btnFullScreen).hide();
		$(btnFullScreenOff).show();
		$(".nu-context-menu").find("[data-key='fullscreenOn']").hide();
		$(".nu-context-menu").find("[data-key='fullscreenOff']").show();
	} else {// 취소
		$(btnFullScreen).show();
		$(btnFullScreenOff).hide();
		$(".nu-context-menu").find("[data-key='fullscreenOn']").show();
		$(".nu-context-menu").find("[data-key='fullscreenOff']").hide();
	}
});


/***********************************************************
 * desk Ui - toolbar
 ************************************************************/
function toolbar () {

	// FullScreen onf
	$(btnFullScreen).click(function() {
		fullscreenOn();
	});

	$(btnFullScreenOff).click(function() {
		fullscreenOff();
	});


	showHide();
	profile();
	notifications();
}

/***********************************************************
 * desk Ui - Header - showHide
 ************************************************************/
function showHide() {

	//show/hide
    $("#show_desktop").on("mousedown", function(e) {
		// debugger;
        // inactive
        // If any windows are visible, hide all.
        var activeWindowLen = $(".window:visible").length;
        if (activeWindowLen > 0) {
            $(".window").hide();
            $("#dock li").addClass("inactive");
        } else {
            $(".window").show();
			$("#dock li").removeClass("inactive");
        }
    });
}

/***********************************************************
 * desk Ui - Header - profile
 ************************************************************/
function profile() {

    //
    $('#profileInfo').on("click",function(){
		$(this).addClass("active");
		$("#profileInfoCard").addClass("active"); //카드 레이어 활성
		$('#notifyInfo').removeClass("active"); //버튼비활성
		$("#notifyInfoCard").removeClass("active"); //카드 레이어 활성
	});

	$('#notifyInfo').on("click",function(){
		$(this).addClass("active");
		$("#notifyInfoCard").addClass("active"); //카드 레이어 활성
		$('#profileInfo').removeClass("active"); // 버튼 비활성
		$("#profileInfoCard").removeClass("active"); // 카드레이어 비활성
	});

}


$(document).on("mouseup",function (e) {
	// 팝업 아이디
	var container = $("#profileInfo, #notifyInfo");
	if (!container.is(e.target) && container.has(e.target).length === 0){
		container.removeClass("active");
		$("#profileInfoCard").removeClass("active"); // 카드 레이어 비활성
		$("#notifyInfoCard").removeClass("active"); // 카드 레이어 비활성
	}
});




/***********************************************************
 * desk Ui - Header - notifications
 ************************************************************/
function notifications() {
    //notifications


}


/***********************************************************
 * desk Ui - Body
 ************************************************************/
function deskBody () {

	//nuContextMenu
	var context = $('.wallpaper')
      .nuContextMenu({
          hideAfterClick: true,
          //items: '',
          callback: function(key, element) {
              //alert('Clicked ' + key + ' on ' + $(element).attr('rel'));

				if(key=="appPlus"){
					appPlusBoxOpen();
				}

				if(key=="wallpaper"){
					wallpaperBoxOpen();

				}

				if(key=="fullscreenOn"){
					fullscreenOn();
				}

				if(key=="fullscreenOff"){
					fullscreenOff();
				}

				if(key=="setting"){
					deskSettingOpen();
				}

				if(key=="mydesk"){
					mydeskOpen();
				}

          },
          menu: [
		  		{name:'appPlus', title:'앱서랍 열기', icon:'i_apps',},
				//{name:'void'},
				{name:'mydesk', title:'데스크 설정', icon:'i_mydesk',},
				//{name:'void'},
				{name:'wallpaper', title:'배경화면 설정', icon:'i_background',},
				//{name:'void'},
				{name:'fullscreenOn', title:'전체화면', icon:'mti-crop-free',},
				{name:'fullscreenOff', title:'전체화면 취소', icon:'mti-fullscreen-exit',},
		  		]
      });

	  $(".nu-context-menu").find("[data-key='fullscreenOff']").hide();

	deskApp();
	deskWidget();
	appPlus();
	setting();
	wallpaper();
	addCatagoryList()
	talkAddUser()

}

/***********************************************************
 * desk Ui - Body - deskApp
 ************************************************************/
function deskApp () {

	// init application
	$("body").on("click", "#deskApp .app, #appPlus .app, #myDesk", function() {
		$(this).app({
          loadCallback: function(){
            var activeWindowLen = $('.window:visible').length;
            if (activeWindowLen > 0) {
                $('#show_desktop').removeAttr("disabled");
				// $('#dock li').removeClass("inactive");
            }
          }
        });
		// appPlus 로 열고 닫을때
		if ($("#appPlus").hasClass("popupBox")){
			$(appPlusOpen).removeClass("active");
			//$("#wrap").removeClass("filter_blur");
			$("#appPlus").remove();
		}
	});


	// deskApp sortable
	$( "#desktop #deskApp ul" ).sortable({
			revert: true,
			tolerance: "pointer"
		});
	$( "#desktop #deskApp ul" ).disableSelection();

//nuContextMenu
	var context = $('#deskApp')
      .nuContextMenu({
          hideAfterClick: true,
          items: '.app',
          callback: function(key, element) {
              //alert('Clicked ' + key + ' on ' + $(element).attr('rel'));

				if(key=="removeDesk"){
					$(element).parent().remove();
				}

          },

		  menu: [
				{name:'removeDesk', title:'바탕화면에서 제거', icon:'mti-minus-circle',},
				]
      });
}

/***********************************************************
 * desk Ui - Body - Widget
 ************************************************************/
function deskWidget () {

	widgetClock();
	widgetWeather();
}

/********** desk Ui - Body - Widget - widgetClock **********/

function widgetClock () {
/*
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    //Set the AM or PM time
    if (hours >= 12) {
        meridiem = "PM";
    } else {
        meridiem = "AM";
    }

    //convert hours to 12 hour format and put 0 in front
    if (hours > 12) {
        hours = hours - 12;
    } else if (hours === 0) {
        hours = 12;
    }

    //Put 0 in front of single digit minutes and seconds
    if (minutes < 10) {
        minutes = "0" + minutes;
    } else {
        minutes = minutes;
    }
*/
	/*
    if (seconds < 10) {
        seconds = "0" + seconds;
    } else {
        seconds = seconds;
    }
	*/
//    document.getElementById("widgetClock").innerHTML = ("<span>" + hours + ":" + minutes +"</span>"+"<span>"+ meridiem +"</span>");


}

/********** desk Ui - Body - Widget - widgetWeather **********/
function widgetWeather () {

}

/***********************************************************
 * desk Ui - Body - appPlus
 ************************************************************/
function appPlus () {

	$("body").on("click", appPlusOpen, function() {
		appPlusBoxOpen()
	});

	// appPlusExit
	$("body").on("click", appPlusExit, function() {
		appPlusBoxExit()
	});


}

/***********************************************************
 * desk Ui - Body - addCatagoryList
 ************************************************************/
function addCatagoryList () {

	$("body").on("click", addListOpen, function() {
		addListBoxOpen()
	});

	// popExit
	$("body").on("click", popExit, function() {
		addListBoxExit()
	});

}

/***********************************************************
 * desk Ui - Body - talkAddUser
 ************************************************************/
function talkAddUser () {

	$("body").on("click", addUserOpen, function() {
		addUserBoxOpen()
	});

	// popExit
	$("body").on("click", popExit, function() {
		addUserBoxExit()
	});


}

/***********************************************************
 * desk Ui - Body - setting
 ************************************************************/
function setting () {

	// setting Exit
	$("body").on("click", settingExit, function() {
		deskSettingExit()
	});


}

/***********************************************************
 * desk Ui - Body - wallpaper
 ************************************************************/
function wallpaper () {

	// wallpaper Exit
	$("body").on("click", wallpaperExit, function() {
		wallpaperBoxExit()
	});

	// wallpaper change
	// var bgimg = "#wallpaperPop .popup .popBody ul li"
	// $("body").on("click", bgimg, function() {
	// 	var wallpaperBg = $(this).attr("rel");
    //     $(".wallpaper").css("background-image", "url(ui_deskboard/assets/images/bg/" + wallpaperBg + ".jpg)");
	// });


}


/***********************************************************
 * APP UI - Window
 ************************************************************/
;
(function($, window, document, undefined) {

    $.widget("desk.app", {
        // 기본값으로 사용할 옵션값을 정의
        options: {
            appId: null,
            dasktopId: null,
            dockId: null,
            loadCallback: null,
            docDivCss: '.window .windowStack .loading'
        },

        // 위젯 설정정 // 요소 초기화 및 요소 생성 & 이벤트 바인딩 등등...
        _create: function() {

        },
        _init: function() {
            var appId, appLength;
            var options = this.options;
            var $dasktop = (options.dasktopId || options.dasktopId === null) ? $(document) : $(options.dasktopId);

            options.appId = (options.appId || options.appId === null) ? $(this.element).attr('rel').substring(11) : $(options.appId);
            appLength = $dasktop.find('#icon_dock_' + options.appId).length;
            //console.log('_init');
            if (appLength === 0) {
                this.create();
            } else {
                this.align($dasktop.find('#window_' + options.appId));
            }
        },
        destroy: function() {
            // var $dasktop = (options.dasktopId === null) ? $('#desktop') : $(options.dasktopId);
            // var $dock = (options.dockId === null) ? $('#header #dock') : $(options.dockId);
            //
            // this.appEventBind($dasktop.find('#window_' + appId).remove());
            // this.dockEventBind($dock.find('#icon_dock_' + appId));
            // $dasktop.find('#window_' + appId).remove();
            // $dock.find('#icon_dock_' + appId);
            // console.log('destory');
            // $(this).closest('div.window').remove();
            // $($(this).attr('rel')).remove();
            // var dockLength = $('.abs .window').length;
            // if(dockLength == 0){
            //   $('#show_desktop').addClass("inactive");
            //   $('#align_desktop').addClass("inactive");
            // }
        },
        methodB: function(event) {
            this._trigger('methodA', event, {
                key: value
            });
        },

        // Respond to any changes the user makes to the
        // option method
        _setOption: function(key, value) {
            switch (key) {
                //case "someValue":
                //this.options.someValue = doSomethingWith( value );
                //break;
                default:
                //this.options[ key ] = value; break;
            }

            $.Widget.prototype._setOption.apply(this, arguments);
        },
        create: function() {
            var options = this.options;
            var appId = options.appId;
            var appUrl, img, docDiv, dockLi, appUrl, appImg, docDivCss, dockLiCss;

            docDivCss = options.docDivCss.replace(/\./gi, "");
            dockLiCss = 'icon_' + appId;
            appImg = './ui_deskboard/app/' + appId + '/icon.png';
			jsUrl = './ui_deskboard/app/' + appId + '/app.js';
			cssUrl = './ui_deskboard/app/' + appId + '/app.css';

            docDiv = "<div id='window_" + appId + "' class='" + docDivCss + "'></div>";
            dockLi = "<li id='icon_dock_" + appId + "'><span rel='#window_" + appId + "'  class='appIcon " + dockLiCss + "'><img src='" + appImg + "'></span></li>";
            appUrl = "./ui_deskboard/app/" + appId + "/app.html";
			appjs = "<script src='" + jsUrl + "'></script>";
			appCss = "<link href='" + cssUrl + "'rel='stylesheet' type='text/css'/>";


            var $dasktop = (options.dasktopId === null) ? $('#desktop') : $(options.dasktopId);
            var $dock = (options.dockId === null) ? $('#toolbar #dock') : $(options.dockId);
            $dasktop.append(docDiv);
			//debugger;
			var $deskApp = $dasktop.find('#window_' + appId);
            $deskApp.load(appUrl, function() {

				$deskApp.prepend(appCss).prepend(appjs); // 동적 css 추가
				//$deskApp.prepend(appjs) // 동적 js 추가
                $deskApp.find('.datepicker').datepicker({showButtonPanel: true});
				$deskApp.find('.toolTip-bottom').tooltip({align: 'bottom'});
				$deskApp.find('.toolTip-top').tooltip({align: 'top'});

				// appSortList
				$deskApp.find('.appSortList .mCSB_container').sortable ({
					containment:'parent',
					disabled: true,
					axis:"y",
					tolerance: "pointer",
					handle: '.tools .sort',
					placeholder: 'placeholder',
				}).disableSelection();

                if (typeof options.loadCallback === "function") {
                    options.loadCallback.call();
					$deskApp.delay(400).queue(function(){
					  $deskApp.removeClass('loading').dequeue();
					});
                }
            });


            $dock.append(dockLi);
            var thisApp = this;
            thisApp.offset($deskApp);
            thisApp.align($deskApp);
			thisApp.appEventBind($deskApp);
            thisApp.dockEventBind($dock.find('#icon_dock_' + appId));
			/*
			setTimeout(function() {

				thisApp.appEventBind($deskApp);
            	thisApp.dockEventBind($dock.find('#icon_dock_' + appId));
			}, 80);
			*/
        },

		dockEventBind: function(el) {

            var util = {
                align: this.align,
                deskFlat: this.deskFlat,
                deskResize: this.deskResize,
                destroy: this.destroy,
            };

            $(el).on('click', '.appIcon', function(e) {
                //debugger;
				// Get the link's target.
                var x = $($(this).attr('rel'));
                var objId = $(this).attr("rel");
                if (x.is(':visible') && !$(objId).hasClass("windowStack")) {
                    $(objId).trigger('mousedown');
                } else {
                    if (x.is(':visible')) {
                        x.hide();
						$(this).parent().addClass("inactive");
                    } else {
						$(this).parent().removeClass("inactive");
                        util.deskFlat($(objId));
                        x.show().addClass('windowStack');
                        util.align($(objId));
                    }
                }
            });
        },

        appEventBind: function(el) {
            var util = {
                align: this.align,
                deskFlat: this.deskFlat,
                deskResize: this.deskResize,
                destroy: this.destroy,
            };

            $(el).on('mousedown', function(e) {
                $("#desktop").find(".window").removeClass("windowStack");
                // window header order by
                util.align(this);
                // Focus active window.
                util.deskFlat(this);
                $(this).addClass('windowStack');
            });

            $(el).on('mouseenter', function(e) {

                $(this).off('mouseenter').draggable({
                    cancel: '.winHeader button',
                    snap: true,
                    snapTolerance: 6,
                    containment: 'parent',
                    handle: '.winHeader',
                    handles: "n, e, s, w",
                    stop: function(event, ui) {
                        var obj = $(this);
                        util.align(obj);
                    }
                }).resizable({
                    containment: 'parent',
                });
            });

            // Close the window.
            $(el).on('click', '.windowClose', function() {
                //util.destroy();
                $(this).closest('.window').addClass("hide").delay(100).queue(function(){
					$(this).remove();

					var dockLength = $('.window').length;

					if(dockLength == 0){
						$('#show_desktop').attr("disabled",true);
						//$('#dock li').addClass("inactive");
					}

				});
				$(this).dequeue();

                $($(this).parent().attr('rel')).remove();


            });

            // full/min reisize
            $(el).on('dblclick', '.dbcResize', function() {
                util.deskResize(this);
            });

            // Minimize the window.
            $(el).on('click', '.windowMin', function() {
                $(this).closest('.window').hide();
				$($(this).parent().attr('rel')).addClass("inactive");
            });

            // Maximize or restore the window.
            $(el).on('click', '.windowResize', function() {
                util.deskResize(this);
            });

            // WINDOW INIT COMMON UI

            //전체 정렬
            /*
            function nextOffset(offset, size){
              var newLeft;
              newLeft = offset.left + size.width;
              //if(offset.maxWidth < newLeft){
              //  offset.left = 0;
              //  offset.top = offset.top + size.height;
              //}else{
              //  offset.left = newLeft;
              //}
              offset.top = offset.top + 30;
              offset.left = offset.left + 30;
            }

            function deskAppSort(objs, deskOffset){
              objs.each(function(){
                var size = {
                  width  : $(this).width(),
                  height : $(this).height(),
                };
                $(this).offset({left:deskOffset.left,top:deskOffset.top});
                nextOffset(deskOffset, size);
              });
            }
            //debugger;
            var deskOffset = {
              left : 0,
              top  : $("#header").height(),
              maxWidth  : $("#desktop").width(),
              maxHeight : $("#desktop").height()
            }
            deskOffset.top = 46;
            deskOffset.left = 100;
            deskAppSort($('div.window:visible'), deskOffset);
            */

// APP UI

			var backTool = "[data-ui='backTool']";
			var viewInfo = "[data-ui='viewInfo']";
			var viewClose = "[data-ui='viewClose']";
			var listEdit = "[data-ui='listEdit']"
			var listEditClose = "[data-ui='listEditClose']"
			var setOpen = "[data-ui='setOpen']";
			var sendOpen = "[data-ui='sendOpen']";
			var winRefresh = "[data-ui='winRefresh']";
			var allCheck = "[data-ui='allCheck']";
			var favorite = "[data-ui='favorite']";
			var sortSideList = "[data-ui='sortSideList']";


		// favorite
            $(el).on("click", favorite, function() {
				if($(this).hasClass("active")){
					$(this).removeClass("active");
				}else{
					$(this).addClass("active");
				}
            });

		// allCheck
            $(el).on("click", allCheck, function() {
				if($(this).hasClass("zmdi-square-o")){
					$(this).removeClass("zmdi-square-o").addClass("zmdi-check-square");
				}else{
					$(this).removeClass("zmdi-check-square").addClass("zmdi-square-o");
				}
            });

		// winRefresh
            $(el).on("click", winRefresh, function() {
                $(el).find(winRefresh).addClass("spin");
            });

		// sideToggle

			 $(el).on("click", sideToggle, function() {
				if($(el).find(sideToggle).hasClass("active")){
					$(el).find(sideToggle).removeClass("active");
					$(el).find(".winBody").removeClass("winsideOut").addClass("winsideIn");
				}else {
					$(el).find(sideToggle).addClass("active");
					$(el).find(".winBody").removeClass("winsideIn").addClass("winsideOut");
				}


            });

		// conten
            $(el).on("click", contentList, function() {
                $(el).find(contentList).addClass("prime").siblings().removeClass("prime");
                $(el).find(".winContent").removeClass("listView").addClass("list");
                $(el).removeClass("listView");
            });

            $(el).on("click", contentListView, function() {
                $(el).find(contentListView).addClass("prime").siblings().removeClass("prime");
                $(el).find(".winContent").removeClass("list").addClass("listView");
                $(el).addClass("listView");
            });


		// listEdit
            $(el).on('click', listEdit, function() {
				$(el).find(".winContent .listBox").addClass("edit");
            });

		// listEditClose
            $(el).on('click', listEditClose, function() {
				$(el).find(".winContent .listBox").removeClass("edit");
            });


		// list click
            $(el).on('click', viewInfo, function() {
                $(el).find(".winContent").addClass("active");
				$(el).find(".connectBox").hide();
                $(this).parent().addClass("active").removeClass("message").siblings().removeClass("active");
                $(this).parent().removeClass("un_read");
            });
            $(el).on('click', viewClose, function() {
                $(el).find(".winContent").removeClass("active");
            });

		// app Setting onf
            $(el).on('click', setOpen, function() {
                $(el).find(".winSetting").addClass("active");
				$(el).find(sideToggle).attr("disabled",true);
				$(el).find(backTool).removeAttr("disabled");
            });


		// mail send onf
			$(el).on('click', sendOpen, function() {
				$(el).find(".emailSend").toggleClass("active");
				$(el).find(sideToggle).attr("disabled",true);
				$(el).find(backTool).removeAttr("disabled");
			});

		// backTool
			$(el).on('click', backTool, function() {
				$(el).find(".winSetting").removeClass("active");
				$(el).find(".emailSend").removeClass("active");
				$(this).attr("disabled",true);
				$(el).find(sideToggle).removeAttr("disabled");
			});

		// favorite
            $(el).on("click", sortSideList, function() {

				if($(this).hasClass("zmdi-tune")){
					$(this).removeClass("zmdi-tune").addClass("zmdi-check");
					$(".appSortList .mCSB_container" ).sortable({disabled: false});
				}else{
					$(this).removeClass("zmdi-check").addClass("zmdi-tune");
					$(".appSortList .mCSB_container" ).sortable({disabled: true});
				}

				$(this).parent().next().toggleClass("edit");

            });


        },

		offset: function(el) {
			var left = ( $("#desktop").scrollLeft() + ( $("#desktop").width() - $('.window').width()) / 2 );
			var top = ( $("#desktop").scrollTop() + ( $("#desktop").height() - $('.window').height()) / 5 );

			$(el).css({
				"left": left,
				"top": top,
			});
        },

        align: function(el) {
            var index_highest = 0;
            $('.window').each(function() {
                var index_current = parseInt($(this).css("zIndex"), 10);
                if (index_current > index_highest) {
                    index_highest = index_current;
                }
            });
            var zIndex = parseInt(index_highest + 1);
            $(el).css("zIndex", zIndex);
        },

        deskFlat: function(el) {
            $(el).removeClass('windowStack');
        },

        deskResize: function(el) {
            var win = $(el).closest('.window');
            // Is it maximized already?
            if (win.hasClass('windowFull')) {
                win.removeClass('windowFull');

				// list_view off
				/*
				if(win.hasClass('listView')){
					win.removeClass('listView')
					win.find(".winContent").removeClass("listView").addClass('list')
					win.find(contentList).addClass("prime").siblings().removeClass("prime")
				}
				*/

				// sideOff
				/*
				if(win.find(".winBody").hasClass('winsideIn')){
					win.find(".winBody").removeClass("winsideIn").addClass('winsideOut')
					win.find(sideOff).addClass("prime").siblings().removeClass("prime")
				}
				*/

            } else {
                win.addClass('windowFull');

				// list_view on
				/*
				if(win.find(".winContent").hasClass('list')){
					win.addClass('listView')
					win.find(".winContent").removeClass("list").addClass('listView')
					win.find(contentListView).addClass("prime").siblings().removeClass("prime")
				}
				*/

				// sideOn
				/*
				if(win.find(".winBody").hasClass('winsideOut')){
					win.find(".winBody").removeClass("winsideOut").addClass('winsideIn')
					win.find(sideOn).addClass("prime").siblings().removeClass("prime")
				}
				*/

                // Bring window to front.
                this.deskFlat(win);
                win.addClass('windowStack');
            }
        }

    });



})(jQuery, window, document);


/*
 * jquery.fullscreen v0.6.0
 * https://github.com/private-face/jquery.fullscreen
 *
 * Copyright (c) 2012–2016 Vladimir Zhuravlev
 * Released under the MIT license
 * https://github.com/private-face/jquery.fullscreen/blob/master/LICENSE
 *
 * Date: 2016-08-25
 **/
(function(global, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], function (jQuery) {
			return factory(jQuery);
		});
	} else if (typeof exports === 'object') {
		// CommonJS/Browserify
		factory(require('jquery'));
	} else {
		// Global
		factory(global.jQuery);
	}
}(this, function($) {

function defined(a){return"undefined"!=typeof a}function extend(a,b,c){var d=function(){};d.prototype=b.prototype,a.prototype=new d,a.prototype.constructor=a,b.prototype.constructor=b,a._super=b.prototype,c&&$.extend(a.prototype,c)}function native(a,b){var c;"string"==typeof a&&(b=a,a=document);for(var d=0;d<SUBST.length;++d){b=b.replace(SUBST[d][0],SUBST[d][1]);for(var e=0;e<VENDOR_PREFIXES.length;++e)if(c=VENDOR_PREFIXES[e],c+=0===e?b:b.charAt(0).toUpperCase()+b.substr(1),defined(a[c]))return a[c]}}var SUBST=[["",""],["exit","cancel"],["screen","Screen"]],VENDOR_PREFIXES=["","o","ms","moz","webkit","webkitCurrent"],ua=navigator.userAgent,fsEnabled=native("fullscreenEnabled"),parsedChromeUA=ua.match(/Android.*Chrome\/(\d+)\./),IS_ANDROID_CHROME=!!parsedChromeUA,CHROME_VERSION,ANDROID_CHROME_VERSION;IS_ANDROID_CHROME&&(ANDROID_CHROME_VERSION=parseInt(parsedChromeUA[1]));var IS_NATIVELY_SUPPORTED=(!IS_ANDROID_CHROME||ANDROID_CHROME_VERSION>37)&&defined(native("fullscreenElement"))&&(!defined(fsEnabled)||fsEnabled===!0),version=$.fn.jquery.split("."),JQ_LT_17=parseInt(version[0])<2&&parseInt(version[1])<7,FullScreenAbstract=function(){this.__options=null,this._fullScreenElement=null,this.__savedStyles={}};FullScreenAbstract.prototype={native:native,_DEFAULT_OPTIONS:{styles:{boxSizing:"border-box",MozBoxSizing:"border-box",WebkitBoxSizing:"border-box"},toggleClass:null},__documentOverflow:"",__htmlOverflow:"",_preventDocumentScroll:function(){this.__documentOverflow=document.body.style.overflow,this.__htmlOverflow=document.documentElement.style.overflow,$(this._fullScreenElement).is("body, html")||$("body, html").css("overflow","hidden")},_allowDocumentScroll:function(){document.body.style.overflow=this.__documentOverflow,document.documentElement.style.overflow=this.__htmlOverflow},_fullScreenChange:function(){this.__options&&(this.isFullScreen()?(this._preventDocumentScroll(),this._triggerEvents()):(this._allowDocumentScroll(),this._revertStyles(),this._triggerEvents(),this._fullScreenElement=null))},_fullScreenError:function(a){this.__options&&(this._revertStyles(),this._fullScreenElement=null,a&&$(document).trigger("fscreenerror",[a]))},_triggerEvents:function(){$(this._fullScreenElement).trigger(this.isFullScreen()?"fscreenopen":"fscreenclose"),$(document).trigger("fscreenchange",[this.isFullScreen(),this._fullScreenElement])},_saveAndApplyStyles:function(){var a=$(this._fullScreenElement);this.__savedStyles={};for(var b in this.__options.styles)this.__savedStyles[b]=this._fullScreenElement.style[b],this._fullScreenElement.style[b]=this.__options.styles[b];a.is("body")&&(document.documentElement.style.overflow=this.__options.styles.overflow),this.__options.toggleClass&&a.addClass(this.__options.toggleClass)},_revertStyles:function(){var a=$(this._fullScreenElement);for(var b in this.__options.styles)this._fullScreenElement.style[b]=this.__savedStyles[b];a.is("body")&&(document.documentElement.style.overflow=this.__savedStyles.overflow),this.__options.toggleClass&&a.removeClass(this.__options.toggleClass)},open:function(a,b){a!==this._fullScreenElement&&(this.isFullScreen()&&this.exit(),this._fullScreenElement=a,this.__options=$.extend(!0,{},this._DEFAULT_OPTIONS,b),this._saveAndApplyStyles())},exit:null,isFullScreen:null,isNativelySupported:function(){return IS_NATIVELY_SUPPORTED}};var FullScreenNative=function(){FullScreenNative._super.constructor.apply(this,arguments),this.exit=$.proxy(native("exitFullscreen"),document),this._DEFAULT_OPTIONS=$.extend(!0,{},this._DEFAULT_OPTIONS,{styles:{width:"100%",height:"100%"}}),$(document).bind(this._prefixedString("fullscreenchange")+" MSFullscreenChange",$.proxy(this._fullScreenChange,this)).bind(this._prefixedString("fullscreenerror")+" MSFullscreenError",$.proxy(this._fullScreenError,this))};extend(FullScreenNative,FullScreenAbstract,{VENDOR_PREFIXES:["","o","moz","webkit"],_prefixedString:function(a){return $.map(this.VENDOR_PREFIXES,function(b){return b+a}).join(" ")},open:function(a,b){FullScreenNative._super.open.apply(this,arguments);var c=native(a,"requestFullscreen");c.call(a)},exit:$.noop,isFullScreen:function(){return null!==native("fullscreenElement")},element:function(){return native("fullscreenElement")}});var FullScreenFallback=function(){FullScreenFallback._super.constructor.apply(this,arguments),this._DEFAULT_OPTIONS=$.extend({},this._DEFAULT_OPTIONS,{styles:{position:"fixed",zIndex:"2147483647",left:0,top:0,bottom:0,right:0}}),this.__delegateKeydownHandler()};extend(FullScreenFallback,FullScreenAbstract,{__isFullScreen:!1,__delegateKeydownHandler:function(){var a=$(document);a.delegate("*","keydown.fullscreen",$.proxy(this.__keydownHandler,this));var b=JQ_LT_17?a.data("events"):$._data(document).events,c=b.keydown;JQ_LT_17?b.live.unshift(b.live.pop()):c.splice(0,0,c.splice(c.delegateCount-1,1)[0])},__keydownHandler:function(a){return!this.isFullScreen()||27!==a.which||(this.exit(),!1)},_revertStyles:function(){FullScreenFallback._super._revertStyles.apply(this,arguments),this._fullScreenElement.offsetHeight},open:function(a){FullScreenFallback._super.open.apply(this,arguments),this.__isFullScreen=!0,this._fullScreenChange()},exit:function(){this.__isFullScreen&&(this.__isFullScreen=!1,this._fullScreenChange())},isFullScreen:function(){return this.__isFullScreen},element:function(){return this.__isFullScreen?this._fullScreenElement:null}}),$.fullscreen=IS_NATIVELY_SUPPORTED?new FullScreenNative:new FullScreenFallback,$.fn.fullscreen=function(a){var b=this[0];return a=$.extend({toggleClass:null,overflow:"hidden"},a),a.styles={overflow:a.overflow},delete a.overflow,b&&$.fullscreen.open(b,a),this};
//# sourceMappingURL=jquery.fullscreen.min.js.mapreturn $.fullscreen;
}));