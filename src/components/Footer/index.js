import React from 'react'
// import { Link } from 'gatsby'
import Grid from "@material-ui/core/Grid"
import Link from '@material-ui/core/Link'
const Footer = () => {
    return (
        <div className="center">

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}
            >
                <Grid item >
                    <Link href="https://github.com/eathren">Github</Link>
                </Grid>
                <Grid item>

                    {" "}•{" "}
                </Grid>
                <Grid item >

                    <Link href="https://www.linkedin.com/in/nolanbraman/">LinkedIn</Link >
                </Grid>
                <Grid item>

                </Grid>
            </Grid>
        </div>

    )
}

export default Footer