import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'

const Spinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 100%;
`

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <Spinner>
            <CircularProgress />
        </Spinner>
    ) : (
        <WrappedComponent {...otherProps} />
    )
}

export default WithSpinner
