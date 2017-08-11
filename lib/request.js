import FetchHttpClient, {json, query, credentials} from 'fetch-http-client';

import {autoDirectLogin} from './auth';

let requestClient = null;

export function getClient(credentialsType = 'include') {
    if (!requestClient) {
        requestClient = new FetchHttpClient();
        requestClient.addMiddleware(json());
        requestClient.addMiddleware(query());
        requestClient.addMiddleware(credentials(credentialsType));
        requestClient.addMiddleware(autoDirectLogin);
    }
    return requestClient;
}

export function download(url, name) {
    let link = document.createElement('a');
    link.href = url;
    link.download = name;
    let event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    link.dispatchEvent(event);
}