import _ from 'lodash';


/**
 *
 * @param preProjectList
 * @returns
 * [{
 *    cloud: '',
 *    cloudId: '',
 *    projects: [{}]
 * }]
 */
export function classifyProject(preProjectList) {
    if(preProjectList.result.length == 0) {
        return [];
    }

    let map = {}, newProjectList = [];
    _.forEach(preProjectList.result, function (id) {
        let cloud = preProjectList.entities.projects[id].cloud;
        if (!map[cloud['id']]) {
            newProjectList.push({
                cloudId: cloud.id,
                cloud: cloud.name,
                projects: [preProjectList.entities.projects[id]]
            });
            map[cloud['id']] = cloud.id;

        } else {
            for (let i = 0; i < newProjectList.length; i++) {
                if (newProjectList[i]["cloudId"] === cloud.id) {
                    newProjectList[i].projects.push(preProjectList.entities.projects[id]);
                    break;
                }
            }
        }
    });
    return newProjectList;
}