import React from 'react'
import error from "../../images/error_404.gif"
import "./ErrorPage.css"
export const ErrorPage = () => {
  return (
    <div className="notFound">
        <img src={error} alt="" />
    </div>
  )
}
