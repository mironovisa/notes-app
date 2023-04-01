import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';

export const NoteButtons = ({ onDelete, onEdit }) => {
  return (
      <div>
    <DeleteIcon/>
      <Button className="delete-btn" onClick={onDelete}>
        </Button>
      <Button className="edit-btn" onClick={onEdit}>
        </Button>
    </div>  );
};
