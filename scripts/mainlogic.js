import { dataSeries } from './data.js';
var seriesTableBody = document.getElementById('series');
var averageSeasons = document.getElementById('averageSeasons');
var seriesInfo = document.getElementById('seriesInfo');
loadSeriesTable(dataSeries);
averageSeasons.innerHTML = "<b>Seasons average:</b> ".concat(average(dataSeries));
function loadSeriesTable(series) {
    series.forEach(function (serie) {
        var tr = document.createElement('tr');
        tr.setAttribute("class", "clickable");
        tr.onclick = function () {
            loadCard(serie);
        };
        tr.innerHTML = "\n        <td><b>".concat(serie.getIndex(), "<b></td>\n        <td><a href=\"#Card ").concat(serie.getName(), "\">").concat(serie.getName(), "</a></td>\n        <td>").concat(serie.getchannel(), "</td>\n        <td>").concat(serie.getSeasons(), "</td>");
        seriesTableBody.appendChild(tr);
    });
}
//function average of seasons
function average(series) {
    var sum = 0;
    series.forEach(function (serie) {
        sum += serie.getSeasons();
    });
    return sum / series.length;
}
//function load an especific card
function loadCard(serie) {
    seriesInfo.innerHTML = "\n    <div class=\"card\" style=\"width: 19rem;\">\n        <img class=\"card-img-top\" src=\"".concat(serie.getLinkImage(), "\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(serie.getName(), "</h5>\n            <div class=\"card-content\">\n                <p>").concat(serie.getDescription(), "</p>\n            </div>\n            <div class=\"card-action\">\n                <a href=\"").concat(serie.getLinkWebPage(), "\" target=\"_blank\">").concat(serie.getLinkWebPage(), "</a>\n            </div>\n        </div>\n    </div>");
}
