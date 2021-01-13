import React from 'react'
import { connect } from 'react-redux'
import { selectDirectorySection } from '../../redux/directory/directory.selector'
import { createStructuredSelector } from 'reselect'
import Grid from '@material-ui/core/Grid'
import MenuItem from '../../components/menu-item/menu-item.component'

const MenuDirectory = ({ sections }) => {
    return (
        <Grid container spacing={3}>
            {sections &&
                sections.map((item, index) => (
                    <MenuItem
                        key={item.id}
                        lg={4}
                        md={4}
                        sm={index === sections.length - 1 ? 12 : 6}
                        xs={index === sections.length - 1 ? 12 : 6}
                        {...item}
                    />
                ))}
        </Grid>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection,
})

export default connect(mapStateToProps)(MenuDirectory)
