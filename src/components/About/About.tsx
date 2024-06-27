import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        background: {
            default: '#f4f4f4',
        },
    },
    typography: {
        h2: {
            fontWeight: 700,
        },
        h5: {
            fontWeight: 500,
        },
    },
});

const About = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    minHeight="100vh"
                    textAlign="center"
                    py={5}
                >
                    <Typography variant="h2" component="h1" gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant="h5" component="h2" color="textSecondary" paragraph>
                        Welcome to FaithTech, where technology meets faith to create impactful solutions. Our mission is to harness the power of technology to address real-world challenges, driven by our commitment to faith-based values and innovation.
                    </Typography>
                    <Box mt={4}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6}>
                                <Paper elevation={3} sx={{ p: 3 }}>
                                    <Typography variant="h6" component="h3">
                                        Our Mission
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        To leverage technology in meaningful ways to solve problems, inspire innovation, and make a positive impact in our communities.
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper elevation={3} sx={{ p: 3 }}>
                                    <Typography variant="h6" component="h3">
                                        Our Vision
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        To be a leading organization where technology and faith intersect, fostering an environment of growth, collaboration, and social good.
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default About;
