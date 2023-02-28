import * as React from "react";
import logo from "../../logo.svg";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Accordion from "@mui/material/Accordion";
import {
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./home.css";

export const Home = () => {
  return (
    <body>
      <div className="App">
        {/* <Alert severity="info"
    onClose={() => {}}>
    <AlertTitle>Home Page</AlertTitle>
   Welcome to my website- <strong>check it out!</strong>
    </Alert>       */}
        <header>
          <Box sx={{ flexGrow: 1 }}>
            {/* <AppBar position ="static" color="secondary">
            <Toolbar>
            <IconButton
            size ="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
            >
              <MenuIcon/>
            </IconButton>
            <Avatar>DB</Avatar>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Home Page
          </Typography>
         
          <Box
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    >
      <HomeIcon />  
      
        </Box>
        </Toolbar>
        </AppBar> 
       */}
            <h2>Dena Bensinger's Home Page:</h2>
            <p class="p">
              Hello! My name is Dena Bensinger. I am currently pursuing a BS in
              Computer Science at Touro University. This semster is my last
              semester before I finish my degree. I am looking forward to
              strengthening my skills and becoming a programmer.{" "}
            </p>
            <br></br>

            <h2>More About Me:</h2>
            <div class="moreInfo">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Hobbies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    I have many other interests in life besides for programming.
                    I enjoy playing piano, exercising, and learning new things.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Goals</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    I aim to learn as much as I can in my last semester in Touro
                    University. My goal is to take all of the knowledge that I
                    gained and use it in my future.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Current Occupation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    I currently work at Bnos Yaakov High School. I teach 9th
                    grade Keyboarding and Microsoft Word, 10th grade Photoshop,
                    11th grade Excel and PowerPoint, and 11th grade Algebra
                    II/Trigonometry. One of the main reasons why I love teaching
                    is because I have the opportunity to give over knowledge to
                    others and teach new concepts.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <br></br>

            <Box>
              <h4>
                One hobby that I'm very passionate about is music. I am
                constantly listening to music and playing piano. I mostly play
                by ear, but I do challenge myself to learn songs by notes. Below
                is a link to a website that I enjoy using when I am working on a
                song by notes.
              </h4>
            </Box>
            <Button
              variant="outlined"
              color="secondary"
              target="_blank"
              component="a"
              href="https://www.musicnotes.com/?cmpid=sem_roirevolution&gclid=CjwKCAiArY2fBhB9EiwAWqHK6js2GDilK0Zif8Ux5g6tAOwtmqAJgL3eqf7tbCF27FMi1QYv3OLpmRoCYkwQAvD_BwE"
            >
              Click Here to For Sheet Music
            </Button>
          </Box>
        </header>
      </div>
    </body>
  );
};

//export default App;
