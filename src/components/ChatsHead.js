import { Avatar, Stack, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const ChatsHead = () => {
  return (
    <Stack direction="row" justifyContent="space-between"  height="40px" p="10px" sx={{ backgroundColor: "skyBlue" }}>
      <Stack direction="row">
        <Avatar />
        <Typography component="h3" pl="10px" pt="10px">Hazrat Umar</Typography>
      </Stack>
      <MoreVertIcon fontSize='large' />
    </Stack>)
}

export default ChatsHead