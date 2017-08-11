import _ from 'lodash';

export function getSelectLoadInfo(ListResourceNet, ListResourceRes) {

    if (_.get(ListResourceNet, ['fetching'], true)) {
        return {
            disable: true,
            placeholder: '正在加载中'
        }
    }
    if (!ListResourceRes || ListResourceRes.length == 0) {
        return {
            disable: true,
            placeholder: '未获取到资源'
        }
    }
    return {
        disable: false,
    }
}