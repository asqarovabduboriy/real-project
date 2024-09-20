import { IoIosMenu } from "react-icons/io";
import React from 'react'

const AdminHeader = ({setClose}) => {
  return (
    <div className="admin__header">
          <button className="menu__btn" onClick={()=> setClose(p => !p)}><IoIosMenu/></button>
      </div>
  )
}

export default AdminHeader