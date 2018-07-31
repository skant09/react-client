import * as React from 'react';
import { bugsnagClient } from '../config/bugsnag';

const withErrorHandler = WrappedComponent => {
  class WithErrorHandler extends React.Component {
    state = { hasError: false };

    componentDidCatch(error) {
      try {
        const { userSession, ...data } = this.props;
        // Display fallback UI
        this.setState({ hasError: true });
        bugsnagClient.notify(error, {
          metaData: {
            props: { ...data }
          }
        });
      } catch (error) {
        throw new Error(error);
      }
    }

    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <div className="">
            <div>{`Hey! Something doesn't feel right here.\nTry going back and see if you can continue your work!`}</div>
          </div>
        );
      }
      return <WrappedComponent />;
    }
  }
  WithErrorHandler.displayName = `WithErrorHandler(${
    WrappedComponent.displayName
  })`;
  return WithErrorHandler;
};

export default withErrorHandler;
