import { Button, Stack, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
const Input = () => {
    return (
        <Stack direction="row" justifyContent="space-between" mx="100px">
            <TextField fullWidth placeholder='Enter some text message here...'/>
            <Button variant='contained' height="70px" ><SendIcon /></Button>
        </Stack>
    )
}

export default Input