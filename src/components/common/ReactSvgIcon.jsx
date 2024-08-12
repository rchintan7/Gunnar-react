import React from 'react';
import { AnimateKeyframes } from "react-simple-animate";
import logo from '../../assets/Content/images/logo.svg';
export default class ReactSvgIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const appHeader = {
            backgroundColor: '#222',
            height: '50px',
            width: 'auto',
            color: 'red'
        };

        const left = { display: "inline", textAlign: "left" };
        const middle = { display: "inline", textAlign: "center" };
        const right = { display: "inline", textAlign: "right" };

        return (
            <div style={appHeader}>
                <div style={left}>
                    <AnimateKeyframes
                        play
                        iterationCount="infinite"
                        direction="alternate"
                        durationSeconds={1000}
                        playState="running"
                        keyframes={[
                            "transform: rotateX(0) rotateY(0) rotateZ(0)",
                            "transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)"
                        ]}
                        render={({ style }) => {
                            return (<img style={{
                                animation: "10s linear 0s infinite alternate none running RSI-isz5l8c1u",
                                width: 50
                            }} src={logo} alt="reactLogo"
                                    />);
                        }}
                    />
                </div>
                <div style={middle}>{this.props.text}</div>
                <div style={right}>
                    <img
                        src={this.props.icon}
                        alt={this.props.iconClass}
                        className={this.props.iconClass}
                    />
                </div>
            </div>
        );
    }
}
