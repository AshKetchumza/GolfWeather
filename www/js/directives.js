angular.module('starter.directives', ['ionic'])
  .directive('ionToggleText', function () {

  var $ = angular.element;

  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {

      // Try to figure out what text values we're going to use

      var textOn = $attrs.ngTrueValue || 'on',
        textOff = $attrs.ngFalseValue || 'off';

      if ($attrs.ionToggleText) {
        var x = $attrs.ionToggleText.split(';');

        if (x.length === 2) {
          textOn = x[0] || textOn;
          textOff = x[1] || textOff;
        }
      }

      // Create the text elements

      var $handleTrue = $('<div class="handle-text handle-text-true">' + textOn + '</div>'),
        $handleFalse = $('<div class="handle-text handle-text-false">' + textOff + '</div>');

      var label = $element.find('label');

      if (label.length) {
        label.addClass('toggle-text');

        // Locate both the track and handle elements

        var $divs = label.find('div'),
          $track, $handle;

        angular.forEach($divs, function (div) {
          var $div = $(div);

          if ($div.hasClass('handle')) {
            $handle = $div;
          } else if ($div.hasClass('track')) {
            $track = $div;
          }
        });

        if ($handle && $track) {

          // Append the text elements

          $handle.append($handleTrue);
          $handle.append($handleFalse);

          // Grab the width of the elements

          var wTrue = $handleTrue[0].offsetWidth,
            wFalse = $handleFalse[0].offsetWidth;

          // Adjust the offset of the left element

          $handleTrue.css('left', '-' + (wTrue + 10) + 'px');

          // Ensure that the track element fits the largest text

          var wTrack = Math.max(wTrue, wFalse);
          $track.css('width', (wTrack + 60) + 'px');
        }
      }
    }
  };

});
