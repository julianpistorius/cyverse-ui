import React from "react";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "material-ui/styles";
import classnames from "classnames";
import Element from "./Element";

// Each key of the returned object will be available as a className below.
const styles = theme => ({
    wrapper: {
        display: "flex",
        background: "rgba(0,0,0,.08)",
        height: "8px",
    },
    barBefore: {
        transition: "flex-basis ease .3s",
        flexShrink: "0",
        maxWidth: "100%",
    },
    barAfter: {
        transition: "flex-basis ease .3s",
        opacity: ".5",
    },
});

/**
 * BarGraph is used to show a percentage of a whole.
 */
const BarGraph = ({
    classes,
    className,
    startValue,
    afterValue,
    barColor,
    muiTheme,
    ...rest
}) => {
    const wrapperClasses = classnames(
        { [className]: className },
        "CY-BarGraph",
        classes.wrapper
    );

    return (
        <Element {...rest} className={wrapperClasses}>
            <div
                style={{
                    flexBasis: startValue + "%",
                    background: barColor,
                }}
                className={`CY-BarGraph-barBefore ${
                    classes.barBefore
                }`}
            />
            <div
            style={{
                flexBasis: afterValue + "%",
                background: barColor,
            }}
                className={`CY-BarGraph-barAfter ${classes.barAfter}`}
            />
        </Element>
    );
};
BarGraph.displayName = "BarGraph";

BarGraph.propTypes = {
    /**
     * The number representing the primary percentage of a whole used
     */
    startValue: PropTypes.number,
    /**
     * The number representing the secondary percentage of a whole used. Typically a projected value after an action is taken.
     */
    afterValue: PropTypes.number,
    /**
     * The color of the bar representing the percentage of the whole used. The after value will be a lighter version of this color.
     */
    barColor: PropTypes.string,
};

export default withTheme()(withStyles(styles)(BarGraph));
