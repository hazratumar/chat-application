import { Avatar, Stack, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const User = () => {
    return (
        <Stack direction="row">
            <Avatar />
            <Typography>Hazrat Umar</Typography>
            <MoreVertIcon />
        </Stack>
    )
}

export default User