import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; 
import { tokens } from "../../theme";



const FAQ = () => {

    const theme = useTheme(); 
    const colors = tokens(theme.palette.mode); 

    return <Box m="20px">

        <Header title="FAQ" subtitle="Frequent Asked Questions Page" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Question 1
                    
                 </Typography>

            </AccordionSummary>
            <AccordionDetails>

                <Typography>
                 Should we leave Umbrella Tree? Should we at the very least dissassociate? 
                </Typography>

            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Question 2
                    
                 </Typography>

            </AccordionSummary>
            <AccordionDetails>

                <Typography>
                 Should we learn TypeScript? 
                </Typography>

            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Question 3
                    
                 </Typography>

            </AccordionSummary>
            <AccordionDetails>

                <Typography>
                 Isn't this an excellent user interface for the admin for the dairy project? I just have to figure out how to make it mobile first! 
                </Typography>

            </AccordionDetails>
        </Accordion>


        <Accordion>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                   Question 4
                    
                 </Typography>

            </AccordionSummary>
            <AccordionDetails>

                <Typography>
                How much is pork 1 kilo? 
                </Typography>

            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Question 5
                    
                 </Typography>

            </AccordionSummary>
            <AccordionDetails>

                <Typography>
                 Do we really want to meet with Frida? 
                </Typography>

            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Question 6
                    
                 </Typography>

            </AccordionSummary>
            <AccordionDetails>

                <Typography>
                Do we need friends?
                </Typography>

            </AccordionDetails>
        </Accordion>



    </Box>

}

export default FAQ; 