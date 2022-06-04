import React from 'react'

import "./Popup.scss";

const Popup = ({active, setActive, children}) => {
  return (
    <div className={active ? "popup active" : "popup"} onClick={() => setActive(false)}>
        <div className="popup-content" onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default Popup