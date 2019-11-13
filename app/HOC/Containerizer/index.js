import hoistNonReactStatic from 'hoist-non-react-statics';
import React from 'react';
import { connect } from 'react-redux';

const getDisplayName = Component => Component.displayName || Component.name || 'Component';

const Containerizer = (options = {}) => Component => {
	
	const {
		mapStateToProps,
		mapDispatchToProps,
		reducerOpt,
		sagaOpt,
	} = options;
	
	class Wrapper extends React.Component {
		constructor(props) {
			super(props);
		}
		static displayName = `Wrapped(${getDisplayName(Component)})`;
		render() {
			return <Component {...this.props} />;
		}
	}
	hoistNonReactStatic(Wrapper, Component);
	return Wrapper;
}
