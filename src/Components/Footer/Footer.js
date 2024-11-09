import React from "react";
import classes from './Footer.module.css'


export default class Footer extends React.Component {
    render() {
        return (
                React.createElement(
                        "footer",
                        {
                            id: "footer",
                            key: crypto.randomUUID(),
                            style: classes,
                        }
                        ,
                        [
                            React.createElement(
                                    "a",
                                    {
                                        id: "forum",
                                        key: crypto.randomUUID(),
                                        href: ""                                    
                                    },
                                    "Forum"
                                )
                        ]
                    )
            )
    }

}
