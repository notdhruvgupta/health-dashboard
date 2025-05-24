import React from 'react'
import sidebarData from '../../data/sidebar'

function Sidebar() {
  return (
    <div className='bg-black/10 h-full p-10'>
        <h1><span>Health</span>care.</h1>
        {sidebarData.map((item, index) => ( 
            <div key={index} className="sidebar-item">
                <p>{item.heading}</p>
                {item.items.map((tool, index) => (
                    <div key={index} className="sidebar-tool">
                        <i className="material-icons">{tool.icon}</i>
                        <a href={tool.link}>{tool.name}</a>
                    </div>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Sidebar