// ==UserScript==
// @name         Devrant Comment Rant Saver
// @namespace    https://devrant.com/
// @version      0.1
// @description  Save comment or rant, when accidentally clicking outside the textbox area
// @author       7twin
// @match        https://devrant.com/rants/*
// @match        https://devrant.com/feed*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    var commentText, rantText = "";
    $(".modal-overlay:first").on("click",function(){
        commentText = $(".comment-text-input:first").val();
        rantText = $(".rant-text-input:first").val();
    });

    $(".addcomment-btn:first,.addrant-btn:first").on("click",function(){
        $(".comment-text-input:first").val(commentText);
        $(".rant-text-input:first").val(rantText);
    });
})();
