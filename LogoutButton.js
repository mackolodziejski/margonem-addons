// ==UserScript==
// @name         Logout button
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Logout button
// @author       Alajnos
// @match        https://*.margonem.pl/
// @exclude      https://www.margonem.pl/*
// @exclude      https://forum.margonem.pl/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

function logout(){
	Engine.changePlayer.logout()
}

(function() {
    'use strict';

    const logoutIcon = document.createElement('img')
    logoutIcon.src = 'https://i.imgur.com/R7Ll0y1.png'
    logoutIcon.className = 'logout-icon'
    logoutIcon.style.marginTop = '3px'
    logoutIcon.title = 'Wyloguj się'
    logoutIcon.addEventListener('click', logout)
    document.getElementsByClassName('hud-container')[0].appendChild(logoutIcon)
})();
