import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Typography,
} from '@material-ui/core';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Typography
          align="center"
          color="textSecondary"
          variant="h2"
        >
          Dashboard In-Progress
        </Typography>
      </Container>
    </Box>
  </>
);

export default Dashboard;
