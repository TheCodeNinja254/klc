"use client";

import {Box, Typography, useTheme} from "@mui/material";

const Page = () => {
    const theme = useTheme();

    return (
        <Box sx={{marginTop: theme.spacing(30)}}>
            <Typography>Not Found</Typography>
        </Box>
    )
}

export default Page;
