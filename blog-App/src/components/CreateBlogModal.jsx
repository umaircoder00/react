import * as React from 'react';
import Box from '@mui/material/Box';
// import  TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { colors, Input, TextField } from '@mui/material';
import ButtonCmp from "../components/Button.jsx";
import { useState } from 'react';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../Config.js';

// import Input from '../../components/Input.jsx'


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };

 export function CreateBlogModal({handler, blogData, data }) {
  const [open, setOpen] = React.useState(false);
 
  const [blogForm, setBlogForm] = React.useState({
    title: "",
    description: "",
    file: "",
  });
    // console.log(blogForm)

  const handleInputChange = (key , value) => {
     setBlogForm=((prev) => ({...prev ,[key]:value}))
  }

  const UpdateBlogHandler = async (id) => {
         
    try {
      imguRL = blogForm.file
      if(blogForm.file instanceof file){
         imgUrl = await uploadImageToCloudinary(blogForm.file);
      }
handler
      await setDoc(
        doc(db ,"blog",id),{

        
        title: blogForm.title,
        description: blogForm.description,
       blogImgUrl: imgURL,
       createAT: serverTimestamp(),
       authorId: userId

        },  { merge: true }
      )
        console.log("blog upadte successfully")
    } catch (error) {
      console.log(error.message)
    }
  }

  React.useEffect(() => {
    if(blogData){
      setBlogForm({
        title: blogData.tilte || "",
        description: blogData.description  || "",
        file: blogData.blogImgUrl  || ""
      })
    }

  },[blogData])




  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  

  

  return (
    
    <React.Fragment  >
      <Button sx={{color: 'white'}}onClick={handleOpen}>Create Blog</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        
        
              
               
        
        
        <Box sx={{
          borderRadius:'10px',
          background:'white',
          width:'400px',
          boxShadow:'2xl',
          marginLeft:'500px',
          marginTop:'100px',
          height:'400px'

        }}>
          <Box sx={{paddingTop:'20px', marginLeft:'100px'}}><h2  id="child-modal-title">Create your blog</h2></Box>
          {/* <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p> */}         
           <Input sx={{
            marginLeft:'3px',
            marginTop:'7px',
            marginBottom:'7px',
            width:'98%'
           }}
            label={"Blog Title"}
            type="text"
            id="title"
            handler={"handleInputChange"}
            value={blogForm.title}
          />
        <Input sx={{
           marginLeft:'3px',
           marginTop:'7px',
            marginBottom:'7px',
            width:'98%'
           }}
        label={"Blog Descirption"}
        type='text'
        id='description'
        handler={"handleInputChange"}
        value={blogForm.description}
        />
        <Input sx={{
           marginLeft:'3px',
            width:'98%',
             marginTop:'7px',
            marginBottom:'7px',
           }}
        label={"choose file"}
        type='file'
        id='file'
        handler={"handleInputChange"}
        />
      <Box sx={{marginLeft:'130px', marginTop:'8px'}}><ButtonCmp  handler={() => UpdateBlogHandler(data.id)} title="Update Blog" /></Box> 
        <Box sx={{marginLeft:'130px', marginTop:'17px'}}>  <Button onClick={handleClose}>Close Modal</Button></Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
