import { Serie } from './serie.js';
import { dataSeries } from './data.js';

const seriesTableBody: HTMLElement = document.getElementById('series')!;
const averageSeasons: HTMLElement = document.getElementById('averageSeasons')!;
let seriesInfo: HTMLElement = document.getElementById('seriesInfo')!; // Agregado del nuevo código

loadSeriesTable(dataSeries);
averageSeasons.innerHTML = `<b>Seasons average:</b> ${calculateAverageSeasons(dataSeries)}`; // Modificado para usar calculateAverageSeasons

function loadSeriesTable(series: Serie[]): void {
    seriesTableBody.innerHTML = '';

    series.forEach(serie => {
        const tr: HTMLElement = document.createElement('tr');
        tr.innerHTML = `
            <td><b>${serie.getIndex()}</b></td>
            <td><a href="${serie.getLinkImage()}" target="_blank">${serie.getName()}</a></td>
            <td>${serie.getchannel()}</td>
            <td>${serie.getSeasons()}</td>`;
        seriesTableBody.appendChild(tr);
    });
}

function calculateAverageSeasons(series: Serie[]): number {
    if (series.length === 0) {
        return 0;
    }

    const totalSeasons = series.reduce((sum, serie) => sum + serie.getSeasons(), 0);
    return totalSeasons / series.length;
}

