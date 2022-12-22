import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
const Recent = ["Hazrat Umar", "Masood", "Hazrat Umar", "Rahmat Ullah", "Masood", "Hazrat Umar", "Rahmat Ullah", "Masood"];

const RecentChat = () => {
    return (
        <Stack>
            <Typography ml="20px">Recent chats</Typography>
            <Stack>
                {Recent.map((chat) => {
                    return (
                        <Stack direction="row" justifyContent="space-between" p="7px" m="1px" height="40px" sx={{ backgroundColor: "#ebedf2",borderRadius:"10px" }}>
                            <Stack direction="row">
                                <Avatar>H</Avatar>
                                <Stack sx={{ marginLeft: "10px" }}>
                                    <Typography component="h4">{chat}</Typography>
                                    <Typography variant="body2">ok</Typography>
                                </Stack>
                            </Stack>
                            <Typography>Tue</Typography>
                        </Stack>
                    )
                })}
            </Stack>
        </Stack >
    )
}

export default RecentChat