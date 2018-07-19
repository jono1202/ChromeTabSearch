var bkg = chrome.extension.getBackgroundPage();
var tabNames = [];
var tabs = [];

$(document).ready(function ()
{
    
    chrome.tabs.query({}, (result) => {
        tabNames = [];
        tabs = Object.assign([],result);
        result.forEach(tab => {
            tabNames.push({label: tab.title, index: tab.index, windowId: tab.windowId});
        });

        $('#input').autocomplete({
            source: tabNames,
            select: (event, ui) => {
                chrome.tabs.highlight({tabs: ui.item.index, windowId: ui.item.windowId});
        }});
    });

    $('#input').focus().select();

    $('#search').click(() => {
        console.log("button click");
    })

    console.log("running");
});