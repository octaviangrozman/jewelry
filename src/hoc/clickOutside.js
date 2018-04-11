import React, { Component } from 'react';


export default function(ComposedComponent, handleClickOutside, target) {
    if (!handleClickOutside) 
        throw new Error("clickOutside HOC requires a handleClickOutside function to be passed as second argument!");
    
    class ClickOutside extends Component {
        
        componentWillMount() {
            document.addEventListener('mousedown', this.handleClick, false);
        }

        componentWillUnmount() {
            document.removeEventListener('mousedown', this.handleClick, false);        
        }

        handleClick = (e) => {
            if (this.node.contains(e.target) || (target && target.contains(e.target))) {
                // the click is inside, continue to whatever doing
                return;
            }

            handleClickOutside();
        }

        render() {
            return <ComposedComponent refProp={node => this.node = node} {...this.props} />
        }
    }

    return ClickOutside;
}