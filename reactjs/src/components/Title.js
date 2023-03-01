import React from 'react'

// function Title() {
//   return (
//     <div>
//         <h1>Hey!Title is Tatvasoft.</h1>
//     </div>
//   )
// }

// export default Title;

// const Title = props => {
//     const {name} = props
//     return(<>
//     <h1>Hey {name} !Title is Tatvasoft. </h1>
//     </>)
// }

const Title = props => {
const {title,description} = props 
    return(<>
    <h1>{title} :-  </h1>
    <p>The decription is {description}</p>
    </>)

    }
export default Title ;