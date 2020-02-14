import React from "react"

export const Signature = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="avatar">
        <img src="#" alt="Fred Hawk" />
      </div>
      <article>
        <h5>Fredric Hawk</h5>
        <p className="sign_desc">A bit about me</p>
      </article>
    </div>
  )
}
