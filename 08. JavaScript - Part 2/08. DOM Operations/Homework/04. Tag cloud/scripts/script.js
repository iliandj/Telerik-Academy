/*global window, document*/

window.onload = function () {
    'use strict';
    var tags = ["cms", "javascript", "js", "ASP.NET MVC",
        ".net", ".net", "css", "wordpress", "xaml", "js",
        "http", "web", "asp.net", "asp.net MVC",
        "ASP.NET MVC", "wp", "javascript", "js", "cms",
        "html", "javascript", "http", "http", "CMS"];

    var tagCloud = generateTagCloud(tags, 17, 42);

    var wrapper = document.getElementById('wrapper');
    wrapper.appendChild(tagCloud);
};

function generateTagCloud(tags, minFontSize, maxFontSize) {
    var tagCloud = document.createElement('div');
    addBoxStyles(tagCloud);

    var uniqueTagsObjectList = findUniqueTags(tags);
    var allTagsCount = tags.length;
    var maxTagCount = Math.max.apply(Math, uniqueTagsObjectList[1]);
    var minTagCount = Math.min.apply(Math, uniqueTagsObjectList[1]);

    for (var i = 0, len = uniqueTagsObjectList[0].length; i < len; i++) {
        var currentTag = uniqueTagsObjectList[0][i];
        var currentTagCount = uniqueTagsObjectList[1][i];
        appendTag(tagCloud, currentTag, currentTagCount);
    }

    return tagCloud;

    function appendTag(tagCloud, tag, occurence) {
        var factor = (occurence - minTagCount) / (maxTagCount - minTagCount);
        var fontSize = (maxFontSize - minFontSize) * factor + minFontSize;
        var tagElement = document.createElement('span');
        tagElement.textContent = tag + ' ';
        tagElement.style.fontSize = fontSize + 'px';
        tagCloud.appendChild(tagElement);
    }
}

function findUniqueTags(tags) {
    var uniqueTags = [],
        tagsCount = [],
        prev;

    tags.sort();
    for (var i = 0, len = tags.length; i < len; i++) {
        var currentTag = tags[i].toLocaleLowerCase();
        if (currentTag !== prev) {
            uniqueTags.push(currentTag);
            tagsCount.push(1);
        } else {
            tagsCount[tagsCount.length - 1] += 1;
        }

        prev = currentTag;
    }

    return [uniqueTags, tagsCount];
}

function addBoxStyles(tagCloud) {
    tagCloud.style.border = '1px solid black';
    tagCloud.style.width = '214px';
    tagCloud.style.height = '225px';
    tagCloud.style.padding = '0';
    tagCloud.style.paddingLeft = '10px';
    tagCloud.style.paddingRight = '10px';
}