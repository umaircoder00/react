// // import Box from '@mui/material/Box';
// // import TextField from '@mui/material/TextField';

// // export default function BasicTextFields({ labal, type, handler,value }) {

// // //  const key = {
// // //   key: "email",
// // //   value: "abc@gmail.com"
// // // }
// // // console.log(key)
// //   return (
// //     <Box
// //         // component="form"
// //       //   sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
// //       //   noValidate
// //       //   autoComplete="off"
// //       sx={{
// //         width: '100%',
// //       }}

// //     >
// //       {/* <Box   sx={{
// //             width: 400,
// //             backgroundColor: "#f44336",
// //           }}>
// // <TextField id="outlined-basic" label="Outlined" variant="outlined" />
// //         </Box> */}
// //       <TextField

// //         sx={{
// //           width: 390,
// //           ml: 0.5,
// //           mt: 1,
// //           mb: 1

// //         }}
// //         onChange={(e) => handler(type,e.target.value)}  label={labal} variant="outlined" type={type} 
// //         value={value} />

// //       {/* <TextField id="filled-basic" label="Filled" variant="filled" />
// //       <TextField id="standard-basic" label="Standard" variant="standard" /> */}
// //     </Box>
// //   );
// // }

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function Input() {
//   return (
//     <Box
//       component="form"
//       sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="standard-basic" label="Standard" variant="standard" />
//     </Box>
//   );
// }

import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input({ label, type, handler, value, name }) {
  return (
     <Box
        // component="form"
      //   sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      //   noValidate
      //   autoComplete="off"
      sx={{
        width: '100%',
      }}

    >
      {/* <Box   sx={{
            width: 400,
            backgroundColor: "#f44336",
          }}>
<TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box> */}
      <TextField

        sx={{
          width: 390,
          ml: 0.5,
          mt: 1,
          mb: 1

        }}
        onChange={(e) => handler(type,e.target.value)}  label={label} variant="outlined" type={type} 
        value={value} />

      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </Box>
  );
// // }
    // <Box sx={{ width: '100%' }}>
    //   <TextField
    //     sx={{
    //       width: '100%',
    //       mt: 1,
    //       mb: 1
    //     }}
    //     // Input badalne par form state update hogi
    //     onChange={(e) => handler(name, e.target.value)} 
    //     label={label} 
    //     variant="outlined" 
    //     type={type} 
    //     value={value} 
    //      name="password"
    //   />
    // </Box>
 
}

