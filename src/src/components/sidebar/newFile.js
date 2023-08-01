import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import '../../styles/NewFile.css'

import firebase from 'firebase'
import { Storage, db } from '../firebase'

import { makeStyles } from '@mui/material/core/styles';
import Modal from '@mui/material/core/Modal';

function GetModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`, 
  };
}

const useStyles = makeStyles((theme) =>({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadow[5],
    padding: theme.spacing(2, 4, 3),

  },
}));

function NewFile() {

  const classes = useStyles();
  const [modelStyle] = useStyles(GetModalStyle);
  const [opem, setOpen] = useStyles(false);
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)

  return (

    <div className='newFile'>
        <div className='newFile_Container'>
            <AddIcon/>
            {/*plus icon*/}
            <p>New</p>
        </div>
    </div>
  )
    
}

export default NewFile