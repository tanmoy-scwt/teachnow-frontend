import React from 'react'

const Divider = ({ height = 0, color = '' }: { height: number, color: string }) => {
    return (
        <div style={{ height: `${height}px`, background: color }}></div>
    )
}

export default Divider