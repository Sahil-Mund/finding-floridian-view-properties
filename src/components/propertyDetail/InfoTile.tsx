import React from 'react'
interface InfoTileProps {
    // Add your component's props here
    icon: any,
    title: string
}

const InfoTile: React.FC<InfoTileProps> = (props) => {
    const { icon, title } = props
    return (
        <div>
            {icon}
            <span style={{marginLeft:'8px'}}>
                {title}
            </span>
        </div>
    )
}

export default InfoTile