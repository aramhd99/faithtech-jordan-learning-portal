import { Container, Typography, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
    },
});

const Home = () => {
    const navigate = useNavigate();
    
    const handleGetStarted = () => {
        navigate('/courses');
    };

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
                >
                    <Typography variant="h4" component="h1" gutterBottom>
                        Welcome to the FaithTech Learning Portal
                    </Typography>
                    <Typography variant="h5" component="h2" color="textSecondary" paragraph>
                        Learn more about the latest technologies and how to use them to spread the word of Jesus.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleGetStarted}
                    >
                        Get Started
                    </Button>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Home;
