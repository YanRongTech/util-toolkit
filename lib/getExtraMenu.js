import _ from 'lodash';

export function getExtraMenu(menuData, stairMenu, secondMenu, type) {
    if (!menuData || !_.isString(stairMenu) || !_.isString(secondMenu) || !_.isString(type)) {
        return [];
    }

    let stairMenuObj = _.find(menuData, {'key': stairMenu});
    let secondMenuObj = _.find(stairMenuObj.sub, {'key': secondMenu});
    return secondMenuObj[type];
}