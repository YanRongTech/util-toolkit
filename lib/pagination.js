import _ from 'lodash';

export function getOffsetByIndex(pageIndex, limit) {
    return (pageIndex - 1) * limit;
}

export function getPagination(state, resourceName, pageIndex, limit) {
    const pagination = _.get(state, ['pagination', resourceName], {});
    if (pageIndex) {
        pagination.pageIndex = pageIndex;
    }

    if (limit) {
        pagination.limit = limit;
    }

    pagination.limit = pagination.limit || 5;

    return pagination;
}