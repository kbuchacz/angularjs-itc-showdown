angular.module('pl.itcrowd.showdown', []);

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

/*global Showdown*/
(function ()
{
    'use strict';

    function $showdown()
    {
        //noinspection JSPotentiallyInvalidConstructorUsage
        return new Showdown.converter();
    }

    angular.module('itc.showdown').factory('$showdown', $showdown);
})();
