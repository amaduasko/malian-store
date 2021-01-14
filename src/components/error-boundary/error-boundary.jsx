import React from 'react'

import './error-boundary.scss'

class ErrorBoundary extends React.Component {
    constructor() {
        super()

        this.state = {
            hasErrored: false,
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasErrored: true,
        }
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
        if (this.state.hasErrored)
            return (
                <div className='error-boundary'>
                    <div />
                    <h1>Sorry A Dog Ate this Page...</h1>
                </div>
            )

        return this.props.children
    }
}

export default ErrorBoundary
