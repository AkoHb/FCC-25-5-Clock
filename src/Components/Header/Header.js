import React from "react";
import classes from './Header.module.css';
import Logo from './freecodecamp-logo.svg';

export default class Header extends React.Component {
    render() {
        return (
            React.createElement(
                    "header",
                    {
                        id: "header",
                        key: crypto.randomUUID(),
                        style: classes,
                    },
                    [
                        React.createElement(
                            "div", 
                            {
                                id: "fcc_logo",
                                key: crypto.randomUUID(),
                            },
                            React.createElement(
                                "img",
                                {
                                    id: "fcc-logo-img",
                                    alt: "FCC-Logo-png",
                                    key: crypto.randomUUID(),
                                    src: Logo,
                                    title: "FCC logo"
                                }
                                )
                        ),
                        React.createElement(
                                "div",
                                {
                                    id: "title",
                                    key: crypto.randomUUID(),
                                },
                                [
                                    React.createElement(
                                        "h2",
                                        {
                                            id: "project-title",
                                            key: crypto.randomUUID(),
                                            style: {
                                                fontSize: "0.75rem"
                                            }
                                        },
                                        "FCC Project: 25 + 5 Clock"
                                        )
                                ]
                        ),
                        React.createElement(
                            "div",
                            {
                                id: "curriculum",
                                key: crypto.randomUUID(),
                            },
                            [
                                React.createElement(
                                    "a",
                                    {
                                        id: "fcc-curriculum",
                                        key: crypto.randomUUID(),
                                        href: "https://www.freecodecamp.org/learn",
                                        title: "More about curriculum on FCC"
                                    },
                                    "Curriculum"
                                ),
                                React.createElement(
                                    "a",
                                    {
                                        id: "fcc-about",
                                        key: crypto.randomUUID(),
                                        href: "https://www.freecodecamp.org/news/",
                                        title: "Read more about FCC..."
                                    },
                                    "About"
                                    )
                            ]
                    ),
                    ]
                )
        )
    }
}
