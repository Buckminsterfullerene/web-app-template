/**
 * @fileoverview The template for template.
 * @author Buckminsterfullerene
 * @version 1.0.0
 */

if (typeof jQuery === 'undefined') {
  throw new Error('TEMPLATE\'s JavaScript requires jQuery.');
}

/**
 * @namespace TEMPLATE
 * @description TEMPLATE API.
 */
var TEMPLATE = TEMPLATE || {};

;(function (template, $){
    'use strict';

    /**
     * @type {string}
     * @description jQuery's version number. This is used to check if the application using this is using a valid jQuery version.
     */
    var jqVersion = window.jQuery.fn.jquery;
    
    // Display warning in console if the jQuery version being used is not valid.
    if (jqVersion.split('.')[0] < 2) {
        console.warn('The TEMPLATE requires jQuery version 2.0.0 or higher. The version being used is ' + jqVersion + '.  This may cause failures.');
    }
    
    /**
     * @function
     * @name myFunction
     * @param {Object} foo An object. 
     * @description This function does something.
     * @memberOf TEMPLATE
     * @returns {Object}
     */
    template.myFunction = function (foo) {
        console.info('myFunction()');
        
        return {};
    };
    
    /**
     * @function
     * @name setData
     * @param {Object} foo An object. 
     * @description This function does something.
     * @memberOf TEMPLATE
     * @returns {Object}
     */
    template.setData = function (foo) {
        console.info('setData()');
        
        return {};
    };
    
    return template;
})(TEMPLATE, jQuery);
