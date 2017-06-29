import _ from 'lodash';


export function getOprMenu(status, oprsMap, menuMap) {
    if (!_.isString(status) || !_.isArray(oprsMap) || oprsMap.length === 0) {
        return [];
    }
    return oprsMap
        .filter((item) => {
            return getPermission(item.permission, status);
        })
        .map((item) => {
            menuMap[item.key].key = item.key;
            return menuMap[item.key]
        });
}

function getPermission(permission, status) {
    let permissionMap = permission.split(',');
    if (permissionMap.indexOf(status) === -1 && permissionMap.indexOf('*') === -1) {
        return false;
    }

    return true;
}