var $ = require('jquery');
var videojs = require('video.js');
var hljs = require('highlight.js');

hljs.initHighlightingOnLoad();

// Set up VJS defaults
videojs.options.controlBar = {
  children: {
    'progressControl': {},
    'playToggle': {},
    'muteToggle': {},
    'volumeControl': {
      'volumeBar' : {
        'vertical': false
      }
    },
    'currentTimeDisplay': {},
    'timeDivider': {},
    'durationDisplay': {},
    'fullscreenToggle': {}
  }
};

var currentScheme = 'vjs-theme-colors-green';
var player = videojs('preview-player');

var schemes = $('.schemes button');
schemes.click(function(e) {
  player.removeClass(currentScheme);
  var newScheme = 'vjs-theme-colors-'+ $(this).attr('id');
  player.addClass(newScheme);
  currentScheme = newScheme;
});
