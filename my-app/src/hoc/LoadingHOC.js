import React from "react";
import Loading from "../components/Loading";
export default function LoadingHOC(WrappedComponent) {
    return class extends React.Component {
        render() {
            const { loading, error, ...props } = this.props;
            if (loading) {
                return React.createElement(Loading);
            }
            if (error) {
                return React.createElement(
                    "p",
                    { className: "error" },
                    error
                );
            }
            return React.createElement(WrappedComponent, this.props);
        }
    }
}
