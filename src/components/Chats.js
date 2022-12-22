import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
const chats = ["hi", "Texting message", "ok bro", "fine", "and you"]
const Chats = () => {
  return (
    <Stack p="10px" height="calc(100vh - 220px)" >
      {chats.map((chat) => {
        return (
          <Box>
            {(chats.indexOf(chat) % 2 === 0) ?
              <Stack minWidth="150px" maxWidth="100%" direction="row" justifyContent="left" my="2px">
                <Avatar>U</Avatar>
                <Typography ml="5px" p="8px" sx={{ backgroundColor: "skyBlue", borderRadius: "10px" }}>{chat}</Typography>
              </Stack>
              :
              <Stack minWidth="150px" maxWidth="100%" direction="row" justifyContent="right" my="2px">
                <Typography mr="5px" p="8px" sx={{ backgroundColor: "skyBlue", borderRadius: "10px" }}>{chat}</Typography>
                <Avatar>U</Avatar>
              </Stack>
            }
          </Box>
        )
      })}
    </Stack>
  )
}

export default Chats