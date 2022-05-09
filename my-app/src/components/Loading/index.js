import React from "react";
export default function Loading(){
    return (
       React.createElement(
              "P",
                { className: "loading" },
                "Loading..."
            )
    );
}
