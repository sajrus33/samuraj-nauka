import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import * as contentful from "contentful";
import Course from "../components/Course";

const SPACE_ID = "1s9h6sn58i3n";
const ACCESS_TOKEN = "vE-P_uD2JUlG937vmf0QKtZpam6hI7Ii2gQxrGitwtE";

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
});
console.log(client);
class CourseList extends Component {
    state = {
        courses: [],
        searchString: ""
    }

    constructor() {
        super()
        this.getCourses = () => {
            client.getEntries({
                content_type: "course",
                query: this.state.searchString
            })
                .then((response) => {
                    this.setState({ courses: response.items });
                })
                .catch(err => {
                    console.log("error occured while fetching data");
                    console.log(err);
                })
        }
    }


    onSearchInputChange = event => {
        if (event.target.value) {
            this.setState({ searchString: event.target.value });
        } else {
            this.setState({ searchString: "" })
        }
        this.getCourses()
    }

    render() {
        return (
            <div>
                {this.state.courses
                    ?
                    (
                        <div>
                            <TextField
                                style={{ padding: 24 }}
                                id="searchInput"
                                placeholder="Search for Countries"
                                margin="normal"
                                onChange={this.onSearchInputChange} />

                            <Grid container spacing={5} style={{ padding: 24 }}>
                                {this.state.courses.map(currentCourse => (
                                    <Grid items xs={12} sm={6} lg={4} xl={3}>
                                        <Course course={currentCourse} />
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    )

                    : "No courses found"}
            </div>
        )
    }
}

export default CourseList;