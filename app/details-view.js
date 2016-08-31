import {timeStamp, replaceAll} from './utils';
import {showElement, hideElement} from './ui';

export const showDetails = (key, data, e) => {
    e.stopPropagation();
    e.preventDefault();
    hideElement('problems-table');
    createView(key, data);
};

const createView = (key, data) => {
    let target = document.getElementById('problem-details'),
        merged = merge(key, data);
    target.innerHTML = merged;
    document.getElementById('problem-details-back-btn').addEventListener('click', showTable, false)
    showElement('problem-details');
};

const merge = (key, data) => {
    let merged = replaceAll('{{id}}', key, template);
    merged = replaceAll('{{site}}', data.site, merged);
    merged = replaceAll('{{feedback}}', data.feedback, merged);
    merged = replaceAll('{{browser}}', data.browser, merged);
    merged = replaceAll('{{dateRaised}}', data.dateRaised, merged);
    return merged;
};

const template = `
    <div class="card card-2">
        <div class="title">
            <h4>Problem: {{id}}</h4>
        </div>
        <div class="content">
            <span class="field-label">Site</span>
            <span>{{site}}</span>
        </div>
        <div class="content">
            <span class="field-label">Feedback</span>
            <span>{{feedback}}</span>
        </div>
        <div class="content">
            <span class="field-label">Browser</span>
            <span>{{browser}}</span>
        </div>
        <div class="content">
            <span class="field-label">Date Raised</span>
            <span>{{dateRaised}}</span>
        </div>
        <div class="buttons">
            <button class="btn btn-danger" id="problem-details-back-btn">BACK</button>
        </div>
    </div>
`;

let showTable = (e) => {
    e.stopPropagation();
    e.preventDefault();
    hideElement('problem-details')
    showElement('problems-table');
}