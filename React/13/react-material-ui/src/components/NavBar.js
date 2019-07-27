import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";

const NavBar = () => {
    return (
        <AppBar position="sticky" color="default">
            <ToolBar variant="dense">
                <Typography variant="h1" color="inherit" style={{ fontSize: 42 }}>
                    Most-polluted cities
                    </Typography>
            </ToolBar>
        </AppBar>
    )
}
export default NavBar;
