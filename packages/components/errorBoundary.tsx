import React from "react";
import { Component } from "react";
// import { bugsnagClient } from './config/bugsnag';

const withErrorHandler = WrappedComponent => {
  class WithErrorHandler extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
      try {
        const { userSession, ...data } = this.props;
        // Display fallback UI
        this.setState({ hasError: true });
        // bugsnagClient.notify(error, {
        //   metaData: {
        //     props: { ...data }
        //   }
        // });
      } catch (error) {
        console.log(error);
      }
    }

    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <div className="">
            <div
            >{`Hey! Something doesn't feel right here.\nTry going back and see if you can continue your work!`}</div>
          </div>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
  }
  WithErrorHandler.displayName = `withErrorHandler(${
    WrappedComponent.displayName
  })`;
  return WithErrorHandler;
};

export default withErrorHandler;
