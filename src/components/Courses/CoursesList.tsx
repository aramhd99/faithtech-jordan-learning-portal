import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
    },
});

const courses = [
    { id: 1, title: 'Introduction to Python', description: 'Learn the basics of Python programming.' },
    { id: 2, title: 'Web Development with React', description: 'Build modern web applications using React.' },
    { id: 3, title: 'Data Analysis with Pandas', description: 'Analyze data effectively with Pandas library.' },
    { id: 4, title: 'Machine Learning Basics', description: 'Get started with machine learning concepts.' },
];

const CoursesList = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <Box py={5} textAlign="center">
                    <Typography variant="h2" component="h1" gutterBottom>
                        Our Courses
                    </Typography>
                    <Typography variant="h5" component="h2" color="textSecondary" paragraph>
                        Explore our range of courses designed to help you learn and grow.
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {courses.map((course, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <Paper elevation={3} sx={{ p: 3 }}>
                                    <Typography variant="h6" component="h3">
                                        {course.title}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" paragraph>
                                        {course.description}
                                    </Typography>
                                    <Button variant="contained" color="primary">
                                        Start Learning
                                    </Button>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default CoursesList;
