import React from 'react'
import '../Rightsidebar/RightBar.css';
import Widget from '../Rightsidebar/Widget';
import WidgetTag from '../Rightsidebar/WidgetTag';;
const RightBar = () => {
  return (
    <aside className="right-sidebar">
        <Widget/>
        <WidgetTag/>
    </aside>
  )
}

export default RightBar
