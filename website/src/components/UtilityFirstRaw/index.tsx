import React from 'react'
import './index.css'

export const UtilityFirstRaw = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img className="profile-avatar" src="/img/jobs.webp" />
        <div className="profile-content">
          <div className="profile-username">Steve Jobs</div>
          <span className="profile-introduction">Co-founder of Apple Inc.</span>
        </div>
      </div>
    </div>
  )
}
