
$(function() {

	// landLoad
    //$('#landLoad').delay(800).slideUp(200);

	// toolTip
	$('.toolTip-top').tooltip({align: 'top'});
	$('.toolTip-right').tooltip({align: 'right'});
	//$('.fc-content').tooltip({align: 'right'});
	$('.toolTip-bottom').tooltip({align: 'bottom'});
	//$('.fc-content').tooltip({align: 'bottom'});
	$('.toolTip-left').tooltip({align: 'left'});
	$('.toolTip-autotop').tooltip({align: 'autoTop'});
	$('.toolTip-autoleft').tooltip({align: 'autoLeft'});

});



/*!
 * jquery.tooltip.js 0.0.1 - https://github.com/yckart/jquery.tooltip.js
 * The tooltip to use, ready for mobile!
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/02/09
*/
(function ($, window, document) {
    'use strict';

    var pluginName = 'tooltip',
        defaults = {
            fade: false,
            fallback: '',
            align: 'autoTop',
            html: false,
            attr: 'title',
            trigger: {
                show: 'ontouchend' in document ? 'touchstart' : 'mouseenter',
                hide: 'ontouchend' in document ? 'touchend' : 'mouseleave'
            },
            delay: {
                show: 0,
                hide: 0
            }
        };

    function Plugin(el, options) {

        options = $.extend({}, defaults, options);

        var elem = $(el),
            timeout;

        elem.on('tooltip:show ' + options.trigger.show, function(){
            $.data(this, 'cancel.tooltip', true);

            var tip = $.data(this, 'active.tooltip');
            if (!tip) {
                tip = $('<div class="tooltip"><div class="tooltip-inner"/></div>').css({position:'absolute', zIndex:100000});
                $.data(this, 'active.tooltip', tip);
            }

            if (elem.attr('title') || typeof (elem.attr('original-title')) !== 'string') {
                elem.attr('original-title', elem.attr('title') || '').removeAttr('title');
            }

            var title;
            if (typeof options.attr === 'string') {
                title = elem.attr(options.attr === 'title' ? 'original-title' : options.attr);
            } else if (typeof options.attr == 'function') {
                title = options.attr.call(this);
            }

            tip.find('.tooltip-inner')[options.html ? 'html' : 'text'](title || options.fallback);

            var pos = $.extend({}, elem.offset(), {width: this.offsetWidth, height: this.offsetHeight});

            tip[0].className = 'tooltip';
            tip.remove().css({
                top: 0,
                left: 0,
                opacity: 0
            }).appendTo(document.body);

            var actualWidth = tip[0].offsetWidth,
                actualHeight = tip[0].offsetHeight,
                dir = options.align === 'autoTop' ?
                      pos.top > ($(document).scrollTop() + $(window).height() / 2) ? 't' : 'b' :
                      pos.left > ($(document).scrollLeft() + $(window).width() / 2) ? 'l' : 'r';

            switch (options.align.charAt(0) === 'a' ? dir : options.align.charAt(0)) {
                case 'b':
                    tip.css({top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}).addClass('tooltip-bottom');
                    break;
                case 't':
                    tip.css({top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}).addClass('tooltip-top');
                    break;
                case 'l':
                    tip.css({top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}).addClass('tooltip-left');
                    break;
                case 'r':
                    tip.css({top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}).addClass('tooltip-right');
                    break;
            }

            clearTimeout(timeout);
            tip.stop().delay(options.delay.show).fadeTo(options.fade ? options.fade.duration : 0, options.fade.opacity || 0.8, options.fade.complete);
        });

        elem.on('tooltip:hide ' + options.trigger.hide, function(){
            $.data(this, 'cancel.tooltip', false);
            var self = this;
            timeout = setTimeout(function () {
                if ($.data(self, 'cancel.tooltip')) return;
                var tip = $.data(self, 'active.tooltip');
                if (options.fade) {
                    tip.stop().fadeTo(options.fade.duration, 0, function () {
                        tip.remove();
                        if(options.fade.complete) options.fade.complete(true);
                    });
                } else {
                    tip.remove();
                }
            }, options.delay.hide);
        });

    }

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

}(jQuery, window, document));
	

/***********************************************************
 * nuContextMenu - jQuery Plugin
 * Copyright (c) 2015, Alex Suyun
 * Copyrights licensed under The MIT License (MIT)
************************************************************/
(function(b,l,k,m){var g={hideAfterClick:!1,contextMenuClass:"context-menu",activeClass:"active"},h=function(a,d){this.container=b(a);this.options=b.extend({},g,d);this._defaults=g;this._name="nuContextMenu";this.init()};b.extend(h.prototype,{init:function(){this.options.items&&(this.items=b(this.options.items));this._buildContextMenu()&&(this._bindEvents(),this._menuVisible=this._menu.hasClass(this.options.activeClass))},_getCallback:function(){return this.options.callback&&"function"===typeof this.options.callback?
this.options.callback:function(){}},_buildContextMenu:function(){this._menu=b("<div>").addClass(this.options.contextMenuClass).append("<ul>");var a=this.options.menu,d=this._menu.children("ul");b.each(a,function(a,c){var f;if(null===c||"object"===typeof c){if("void"===c.name)f=b("<hr>");else if(f=b("<li>").attr("data-key",c.name).text(" "+c.title),c.icon){var e=b("<i>").addClass("zmdi zmdi-"+c.icon.toString());f.prepend(e)}d.append(f)}});b("body").append(this._menu);return!0},_pDefault:function(a){a.preventDefault();
a.stopPropagation();return!1},_contextMenu:function(a){a.preventDefault();var d=this,e=a.target;if(this._menuVisible||this.options.disable)return!1;var c=this._getCallback();this._menu.children("ul").children("li").off().on("click",function(){var a=b(this).attr("data-key");c(a,e);d.options.hideAfterClick&&d.closeMenu()});this.openMenu();this._menu.css({top:a.pageY+"px",left:a.pageX+"px"});return!0},_onMouseDown:function(a){b(a.target).parents("."+this.options.contextMenuClass).length||this.closeMenu()},
_bindEvents:function(){if(this.items)this.container.on("contextmenu",this.options.items,b.proxy(this._contextMenu,this));else this.container.on("contextmenu",b.proxy(this._contextMenu,this));b(k).on("mousedown",b.proxy(this._onMouseDown,this))},disable:function(){return this.options.disable=!0},destroy:function(){this.items?this.container.off("contextmenu",this.options.items):this.container.off("contextmenu");this._menu.remove();return!0},openMenu:function(){this._menu.addClass(this.options.activeClass);
return this._menuVisible=!0},closeMenu:function(){this._menu.removeClass(this.options.activeClass);this._menuVisible=!1;return!0}});b.fn.nuContextMenu=function(a){var d=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=b(this),c=e.data("nuContextMenu");c?"string"===typeof a&&"_"!==a[0]&&"init"!==a&&c[a].apply(c,d):e.data("nuContextMenu",new h(this,a))})}})(jQuery,window,document);

/* side menu */
$(function() {
  var context = $('#desktop')
    .nuContextMenu({
      hideAfterClick: true,
      items: '.wsb_list ul .context',
      callback: function(key, element) {
        alert('Clicked ' + key + ' on ' + $(element)
          .attr('id'));
      },
      menu: [
        {
          name: 'Edit',
          title: 'Edit',
          icon: 'edit',
        },
        {
          name: 'void'
        },
        {
          name: 'delete',
          title: 'Delete',
          icon: 'delete',
        },
      ]
    });

});

