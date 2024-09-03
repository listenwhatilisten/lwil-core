import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import Styles from './styles';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [rows, setRows] = useState(1);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const handleTextChange = (event) => {
    setMessage(event.target.value);

    // Adjust the number of rows dynamically based on the content
    const lineHeight = 24; // Adjust this based on your font size
    const newRows = Math.ceil(event.target.scrollHeight / lineHeight);
    setRows(Math.min(newRows, 4)); // Limit to 4 rows
  };

  const sendMessage = () => {
    // Implement your logic to send the message
    console.log('Sending message:', message);

    // Clear the text field after sending the message
    setMessage('');
    setRows(1); // Reset rows to 1 after sending
  };

  return (
    <Box sx={Styles.chatBoxContainer}>
      <Box sx={Styles.getMessagesContainer}>
        <div style={{ flex: '1', marginBottom: '16px', overflowY: 'auto' }}>
          {/* Display chat messages here */}
          <div>User1: Hello!</div>
          <div>User2: Hi there!</div>
          {/* Add more messages as needed */}
        </div>
      </Box>
      <Box sx={Styles.sendMessageContainer}>
        <TextField
          variant="outlined"
          fullWidth
          multiline
          rows={rows}
          value={message}
          placeholder="Type a message"
          onChange={handleTextChange}
          onKeyPress={handleKeyPress}
          style={{
            height: '30px',
            border: 'solid',
            borderRadius: '50px',
            borderColor: 'white',
            '& label.Mui-focused': {
              color: 'white',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
          InputProps={{
            style: {
              color: 'white',
              overflowY: 'auto',
            },
            endAdornment: (
              <IconButton
                edge="end"
                color="primary"
                size="small"
                style={{ marginLeft: '8px' }}
              >
                <SendIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
    </Box>
  );
};
