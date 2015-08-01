// ==UserScript==
// @name         Post Format Changer
// @namespace    NRGsoft
// @version      1.0a
// @description  Adds post format changer
// @downloadURL  https://github.com/Goodlookinguy/pwvnrg/raw/master/post-format-changer/post-format-changer.user.js
// @updateURL    https://github.com/Goodlookinguy/pwvnrg/raw/master/post-format-changer/post-format-changer.user.js
// @author       NRGLG
// @run-at       document-end
// @match        http://perfectworld.vanillaforums.com/*
// @grant        none
// ==/UserScript==

(function()
{
    var formatDropdown = '<select id="Form_Format" name="Format">' +
                            '<option value="BBCode">BBCode</option>' +
                            '<option value="Markdown">Markdown</option>' +
                            '<option value="Html">HTML</option>' +
                            '<option value="Text">Text</option>' +
                         '</select>';
    
    document.addEventListener("DOMNodeInserted", function(e)
    {
        var $target = $(e.target);
        if ($target.hasClass('MessageForm'))
            makePostFormatChanger(e.target);
        
    }, false);
    
    
    var makePostFormatChanger = function(target)
    {
        var $target = $(target);
        var $bodyboxWrap = $(($target.find('.bodybox-wrap'))[0]);
        var $formFormat = $(($bodyboxWrap.find('#Form_Format'))[0]);
        var $editorButtons = $(($bodyboxWrap.find('.editor'))[0]);
        var formFormat = $formFormat.val();
        $formFormat.remove();

        var $formatDropdown = $(formatDropdown);
        $editorButtons.prepend($formatDropdown);

        $option = $(($formatDropdown.find('option[value="' + formFormat + '"]'))[0])
        $option.attr('selected', 'selected');
    };
    
    $('.FormWrapper, .FormTitleWrapper').each(function(){makePostFormatChanger(this);});
})();
