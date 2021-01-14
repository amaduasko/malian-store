import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'

const SpinnerComponent = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 100vw;
`

const Spinner = () => (
    <SpinnerComponent>
        <CircularProgress />
    </SpinnerComponent>
)

export default Spinner
