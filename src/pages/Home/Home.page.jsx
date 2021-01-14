import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuDirectory from '../../containers/menu-directory/menu-directory.container'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 60,
    },
}))

export default function HomePage() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <MenuDirectory />
        </div>
    )
}
