import React from "react";
import Loading from "../components/Loading";
export default function LoadingHOC(WrappedComponent) {
    return class extends React.Component {
        render() {
            const { isLoading, error, ...props } = this.props;
            if (isLoading) {
                return <Loading />;
            }
            if (error) {
                return <div>Error! {error.message}</div>;
            }
            return <WrappedComponent {...props} />;
        }
    };
}


