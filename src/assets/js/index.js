$(document).ready(function () {
   
    var sections = ['hover-another-element', 'input-placeholder-to-label'];

    function showSection(section) {

        var classSection = '.' + section;

        var directory = 'src/screens/' + section + '.html';

        $(function () {
        
            $(classSection).load(directory);

        });
        
    }

    sections.forEach(showSection);

});