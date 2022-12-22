import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import RecentChat from '../components/RecentChat'
import ChatsHead from '../components/ChatsHead'
import Chats from '../components/Chats'
import Input from '../components/Input'

const LoginLayout = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" marginTop="70px" >
        <Box sx={{ width: "300px", height: "calc(100vh - 70px)" }}>
          <Stack direction="row" justifyContent="space-around" my="10px">
            <Button variant="contained">New chat</Button>
            <Button variant="contained">New Group chat</Button>
          </Stack>
          <RecentChat />
        </Box>
        <Box sx={{ width: "calc(100% - 300px)", backgroundColor: "#dadde3", }}>
          <ChatsHead />
          <Chats />
          <Input />
        </Box>
      </Stack>
    </Box>
  )
}

export default LoginLayout