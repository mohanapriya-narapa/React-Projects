import React, {useEffect, useState} from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import {Box, Dialog, Typography, Button, DialogTitle, DialogContent, DialogActions, Grid, TextField, FormLabel} from '@mui/material';
import axios from 'axios';
// import  data from '../../public/data.json'

function EmployeeForm() {
const [employees, setEmployees]=useState([]);
const [firstName, setFirstName]=useState("");
const [lastName, setLastName]=useState("");
const[open,setOpen]=useState(false);
useEffect(()=>{
axios.get('/data.json')
.then((response)=>{
  setEmployees(response.data.employees)
})
.catch((error)=>{
console.log('Error fetching employees:', error);
})
},[])
const handleClickOpen=()=>{
  setOpen(true);
}
const handleClose=()=>{
  setOpen(false);
  setFirstName("");
  setLastName("");
}
const handleSubmit=()=>{
  const newEmployee={
    id:employees.length+1,
    firstName,
    lastName
  };
  setEmployees([...employees, newEmployee]);
  handleClose();

}
  return (
    <Box sx={{p:4}} >
      <Typography varient ="h4">
      Employee Database Management
      </Typography>
    
      <Grid  container spacing={5}  alignItems="flex-start" justifyContent="center" >
        
        <Grid item>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
{
  employees.map((employee)=>(
  
      <Box key ={employee.id} sx={{   p: 2, borderRadius: 1,
      boxShadow: 1,}}>
<Typography>
  {employee.firstName} {employee.lastName}
</Typography>
    </Box>
    
 
  )
  )
}</Box>
</Grid>
<Grid item>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Employee
      </Button>
      </Grid>
      </Grid>
  
      <Dialog open={open} >
<DialogTitle>
Add a New Employee
</DialogTitle>
<DialogContent>
<Grid container>
<Grid item>
<TextField label="First Name" value={firstName} onChange={(event)=>setFirstName(event.target.value)}>

</TextField>
</Grid>
<Grid item>
<TextField label="Last Name" value={lastName} onChange={(event)=>setLastName(event.target.value)}>

</TextField>
</Grid>
</Grid>
</DialogContent>
<DialogActions>
<Button onClick={handleClose} color="secondary">
Close
</Button>
<Button onClick={handleSubmit} color="primary">
Submit
</Button>
</DialogActions>
      </Dialog>
    </Box>
  )
}

export default EmployeeForm