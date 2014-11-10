(function ()
{
    'use strict';
 
    function itcShowdown($showdown)
    {
        return {
            restrict: 'A',
            scope: false,
            link: function (scope, iElement, attrs)
            {
                var content = attrs.itcShowdown;
                if (null == content || content.length < 1) {
                    content = iElement.html();
                    iElement.html($showdown.makeHtml(content));
                } else {
                    scope.$watch(content, function (newValue)
                    {
                        if (null != newValue) {
                            iElement.html($showdown.makeHtml(newValue));
                        } else {
                            iElement.html('');
                        }
                    }, true);
                }
            }
        };
    }
 
    angular.module('itc.showdown').directive('itcShowdown', ['$showdown', itcShowdown]);
})();
