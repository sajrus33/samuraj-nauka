import React from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/** Single Accordion Element */

const AccordionElement = props => {
    return (
        <Fade in={props.showed} timeout={400}>
            <ExpansionPanel className={props.classes.panelExpansion} >
                <ExpansionPanelSummary className={props.classes.panelSummary}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"panel" + props.index + "a-content"}
                    id={"panel" + props.index + "a-header"}
                >
                    <Typography variant="h2" className={props.classes.heading}> {props.cityName}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails >
                    <Box display="flex" flexDirection="column">
                        <Typography style={{ marginBottom: "15px" }}>
                            {props.cityDescribe}
                        </Typography>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">PM25</TableCell>
                                    <TableCell align="left">PM10</TableCell>
                                    <TableCell align="left">CO</TableCell>
                                    <TableCell align="left">O3</TableCell>
                                    <TableCell align="left">BC</TableCell>
                                    <TableCell align="left">SO2</TableCell>
                                    <TableCell align="left">NO2</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key={"row"}>
                                    <TableCell align="left">{props.pm25} </TableCell>
                                    <TableCell align="left">{props.pm10} </TableCell>
                                    <TableCell align="left">{props.co} </TableCell>
                                    <TableCell align="left">{props.o3} </TableCell>
                                    <TableCell align="left">{props.bc} </TableCell>
                                    <TableCell align="left">{props.so2} </TableCell>
                                    <TableCell align="left">{props.no2} </TableCell>

                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Fade>
    )
}
export default AccordionElement;
