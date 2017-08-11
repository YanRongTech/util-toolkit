export function getVolumeOprObj(record) {
    let iscsi = record.iscsi,
        volumeStatus = record.volume.status,
        res = {
            iscsi: {},
            del: {},
            resize: {},
            edit: {},
            policy: {}
        };
    if (iscsi === 'loading' || volumeStatus !== 'available') {
        setDisabled(res.iscsi);
    }
    if (iscsi === 'available') {
        setDisabled(res.del);
    }
    if (!volumeStatus || volumeStatus !== 'available') {
        setDisabled(res.resize);
    }
    if (!volumeStatus || volumeStatus.indexOf('ing') !== -1 || volumeStatus === 'error') {
        setDisabled(res.resize);
        setDisabled(res.edit);
        setDisabled(res.policy);
    }
    return res;
}

export function getSnapshotOprObj(volumeObj, snapshotObj) {
    let volumeStatus = volumeObj.volume.status || '',
        snapshotStatus = snapshotObj.snapshot.status || '',
        res = {
            update: {},
            rollback: {},
            del: {}
        };
    if (volumeStatus.indexOf('ing') !== -1 || snapshotStatus.indexOf('ing') !== -1) {
        setDisabled(res.rollback);
        setDisabled(res.update);
        setDisabled(res.del);
        return res;
    }
    if (volumeStatus !== 'available') {
        setDisabled(res.rollback);
    }
    return res;
}

export function getVmSnapshotOprObj(vmStatus = '', volumeStatus = '', snapshotStatus = '') {
    let res = {
        rollback: {},
        del: {}
    };
    if (vmStatus.indexOf('ing') !== -1 || volumeStatus.indexOf('ing') !== -1 || snapshotStatus.indexOf('ing') !== -1) {
        setDisabled(res.rollback);
        setDisabled(res.del);
        return res;
    }
    if (snapshotStatus !== 'available') {
        setDisabled(res.rollback);
        return res;
    }
    if (vmStatus !== 'SHUTOFF') {
        setDisabled(res.rollback);
        return res;
    }
    if (['in-use', 'available'].indexOf(volumeStatus) === -1) {
        setDisabled(res.rollback);
        return res;
    }
    return res;
}

function setDisabled(obj) {
    obj.disabled = true;
    return obj;
}
