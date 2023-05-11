import React from 'react'
// dummy Data

const users = [
   {
    fullName : "Md. Shohel Mia",
    age : 24,
    email : 'shohel.uoda@engineer.com',
    phones : [
        {father : "01925921797"},
        {mother : "0177007109"}
    ]

   },
   {
    fullName : "Md. Juwel Mia",
    age : 30,
    email : 'juwel@engineer.com',
    phones : [
        {father : "01700634739"},
        {mother : "01996194045"}
    ]

   },
   {
    fullName : "Md. Rubel Mia",
    age : 34,
    email : 'rubel444@gmail.com',
    phones : [
        {father : "01952216389"},
        {mother : "0177007109"}
    ]

   }

]

const Data = () => {
  return (
    <div>
        {users.map((user, index)=>{
            const {fullName, age, email} = user
            return <article key={index}>
                 <h3>Your Name is : {fullName}</h3>
                 <h4>Your Age is : {age}</h4>
                 <h4>Your Email is : {email}</h4>
                  {
                    user.phones.map((phone) =>
                      
                        <div>
                            <p>Your Father Phone Number is : {phone.father}</p>
                            <p>Your Mother Phone Number is : {phone.mother}</p>
                        </div>
                     
                    )
                  }
            </article>
        })}
    </div>
  )
}

export default Data