$(document).ready(function () {
   
    var sections = ['hover-another-element', 'input-placeholder-to-label'];

    function createSection(section, index) {

        var article = document.getElementsByTagName("article");

        var getSection = document.getElementsByTagName("section");

        var createSection = document.createElement("section");

        article[0].after(createSection);

        setTimeout(function () {

            getSection[index].setAttribute('class', section);
            
        }, 1);

    }

    sections.forEach(createSection);

    function showSection(section) {

        var classSection = '.' + section;

        var directory = 'src/screens/' + section + '.html';

        $(function () {
        
            $(classSection).load(directory);

        });
        
    }
    
    setTimeout(function () {
       
        sections.forEach(showSection);

    }, 2);

});