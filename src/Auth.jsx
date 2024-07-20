// import axios from 'axios';
// import React, { createContext, useState } from 'react'
// export const Authcation = createContext()
// export function Auth({ children }) {
//     const [user, setUser] = useState(null);

//     const royhatdanOtish = async (mall) => {
//         try {
//             const response = await axios.post('https://hellomag.uz/v1/api/users/register', mall);
//             localStorage.setItem('token', response.data.token);
//             setUser(response.data.token);
//             console.log(response);
//         } catch (error) {
//             console.error("catch xato: ", error);
//             if (error.response) {
//                 console.error("xato  statusda", error.response.status);
//                 console.error("Xato Data", error.response.data);
//             } else if (error.request) {
//                 console.error('Xato savolda:', error.request);
//             } else {
//                 console.error('xato savol malumot :', error.message);
//             }
//         }
//     };

//     return (
//         <Authcation.Provider value={{royhatdanOtish}}>
//             {children}
//         </Authcation.Provider>
//     )
// }
