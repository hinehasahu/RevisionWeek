import React from 'react'

function Display({data}) {
    const handleSubmit = () => {
        console.log("Final Data: ", data);
        alert("Form submitted!")
    }
  return (
    <div>
        <h2>Review you details</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Telephone</th>
            </tr>
            <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>{data.telephone}</td>
            </tr>
            <tr>
                <th>City</th>
                <th>Username</th>
                <th>Details</th>
                <th>Theme</th>
            </tr>
            <tr>
                <td>{data.city}</td>
                <td>{data.username}</td>
                <td>{data.detail}</td>
                <td>{data.theme}</td>
            </tr>
        </table>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Display