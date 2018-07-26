import * as React from 'react' 
import { bugsnagClient } from '../config/bugsnag';

interface IGeneralProps {
  userSession: number;
}

const withErrorHandler = <P extends object>(Component: React.ComponentType<P>): React.ComponentClass<P & IGeneralProps> => {
  class WithErrorHandler extends React.Component<P & IGeneralProps> {
    public state = { hasError: false };

    public componentDidCatch(error: Error) {
      try {
        const { userSession, ...data } = this.props as IGeneralProps;
        // Display fallback UI
        this.setState({ hasError: true });
        bugsnagClient.notify(error, {
          metaData: {
            props: { ...data }
          }
        });
      } catch (error) {
        throw new Error(error)
      }
    }

    public render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <div className="">
            <div>{`Hey! Something doesn't feel right here.\nTry going back and see if you can continue your work!`}</div>
          </div>
        );
      }
      return <Component />;
    }
  }
  (WithErrorHandler as React.ComponentClass).displayName = `WithErrorHandler(${Component.displayName})`;
  return WithErrorHandler;
};

export default withErrorHandler;
