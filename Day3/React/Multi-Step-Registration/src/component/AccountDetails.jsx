import React from 'react'

function AccountDetails({data, onChange}) {
  return (
    <div>
        <h2>Account Details</h2>
      <input
        type="text"
        name="username"
        value={data.username}
        onChange={onChange}
        placeholder="enter username"
      />
      <input
        type="text"
        name="detail"
        value={data.detail}
        onChange={onChange}
        placeholder="enter detail"
      />
      
    </div>
  )
}

export default AccountDetails