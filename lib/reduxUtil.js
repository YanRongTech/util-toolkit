import {bindActionCreators} from 'redux';

export function getMapDispatch(actions, dispatch) {
    let map = {};
    for (let actionName in actions) {
        map[actionName] = bindActionCreators(actions[actionName], dispatch);
    }
    return map;
}

export function genConst(constStrings) {
    let map = {};
    constStrings.forEach((str)=> {
        map[str] = str;
    });
    return map;
}
