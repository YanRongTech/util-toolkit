import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

export function modalWithSubscription(WrappedComponent) {

    class ModalWithSubscription extends React.Component {
        componentWillReceiveProps(nextProps) {
            const modalState = nextProps.modal;
            if (modalState && !modalState.visible) {
                try {
                    this.props.form.resetFields();
                } catch (err) {
                    console.error(err);
                }
            }
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    ModalWithSubscription.displayName = `ModalWithSubscription(${getDisplayName(WrappedComponent)})`;
    return hoistNonReactStatic(ModalWithSubscription, WrappedComponent);
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
