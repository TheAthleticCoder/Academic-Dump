import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Register = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(null);
  const [contact_number, setContact_number] = useState("");
  const [age, setAge] = useState("");
  const [batch_name, setBatch_name] = useState("");
  const [type, setType] = useState("");
  const [opening_time, setOpening_time] = useState("");
  const [closing_time, setClosing_time] = useState("");
  const [shop_name, setShop_name] = useState("");





  const onChangeUsername = (event) => {
    setName(event.target.value);
  };
  const onChangeType = (event) => {
    setType(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangeContact_number = (event) => {
    setContact_number(event.target.value);
  };
  const onChangeAge = (event) => {
    setAge(event.target.value);
  };
  const onChangeOpening_time = (event) => {
    setOpening_time(event.target.value);
  };
  const onChangeClosing_time = (event) => {
    setClosing_time(event.target.value);
  };
  const onChangeShop_name = (event) => {
    setShop_name(event.target.value);
  };
  const onChangeBatch_name = (event) => {
    setBatch_name(event.target.value);
  };






  const resetInputsB = () => {
    setName("");
    setPassword("");
    setEmail("");
    setDate(null);
    setContact_number("");
    setBatch_name("");
    setAge("");
  };
  const resetInputsV = () => {
    setName("");
    setPassword("");
    setEmail("");
    setDate(null);
    setContact_number("");
    setShop_name("");
    setOpening_time("");
    setClosing_time("");
  };






  const onSubmitBuyer = (event) => {
    event.preventDefault();

    const newBuyer = {
      name: name,
      password: password,
      email: email,
      contact_number: contact_number,
      age: age,
      batch_name: batch_name,
      date: Date.now(),
    };

    axios
      .post("http://localhost:4000/buyer/register", newBuyer)
      .then((response) => {
        alert("Created\t" + response.data.name);
        console.log(response.data);
      });

    resetInputsB();
  };

  const onSubmitVendor = (event) => {
    event.preventDefault();

    const newVendor = {
      name: name,
      password: password,
      email: email,
      contact_number: contact_number,
      shop_name: shop_name,
      opening_time: opening_time,
      closing_time: closing_time,
      date: Date.now(),
    };

    axios
      .post("http://localhost:4000/vendor/register", newVendor)
      .then((response) => {
        alert("Created\t" + response.data.name);
        console.log(response.data);
      });

    resetInputsV();
  };


  if (type === "vendor") {
    return (
      <Grid container align={"center"} spacing={2} item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="type"

            onChange={onChangeType}
          >
            <MenuItem value={"buyer"}>Buyer</MenuItem>
            <MenuItem value={"vendor"}>Vendor</MenuItem>
          </Select>
        </FormControl>
        <Grid container align={"center"} spacing={2}>
          <Grid item xs={30}>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              required
              onChange={onChangeUsername}
              autoFocus
            />
          </Grid>
          <Grid item xs={30}>
            <TextField
              label="Password"
              variant="outlined"
              value={password}
              required
              autoFocus
              onChange={onChangePassword}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              required
              autoFocus
              onChange={onChangeEmail}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact No."
              variant="outlined"
              value={contact_number}
              required
              autoFocus
              onChange={onChangeContact_number}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Shop Name"
              variant="outlined"
              value={shop_name}
              required
              autoFocus
              onChange={onChangeShop_name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Opening Time"
              variant="outlined"
              value={opening_time}
              required
              onChange={onChangeOpening_time}
              defaultValue="18:30"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              sx={{ width: 150 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Closing Time"
              variant="outlined"
              value={closing_time}
              required
              onChange={onChangeClosing_time}
              defaultValue="18:30"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              sx={{ width: 150 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" onClick={onSubmitVendor} >
              Register
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  if (type === "buyer") {
    return (
      <Grid container align={"center"} spacing={2} item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="type"
            onChange={onChangeType}
          >
            <MenuItem value={"buyer"}>Buyer</MenuItem>
            <MenuItem value={"vendor"}>Vendor</MenuItem>
          </Select>
        </FormControl>
        <Grid container align={"center"} spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              required
              autoFocus
              onChange={onChangeUsername}
            />
          </Grid>
          <Grid item xs={30}>
            <TextField
              label="Password"
              variant="outlined"
              value={password}
              required
              autoFocus
              onChange={onChangePassword}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              required
              autoFocus
              onChange={onChangeEmail}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Age"
              variant="outlined"
              value={age}
              required
              autoFocus
              onChange={onChangeAge}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact No."
              variant="outlined"
              value={contact_number}
              required
              autoFocus
              onChange={onChangeContact_number}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Batch</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={batch_name}
                    label="Batch"
                    required
                    autoFocus
                    onChange={onChangeBatch_name}
                  >
                    <MenuItem value={"UG-1"}>UG-1</MenuItem>
                    <MenuItem value={"UG-2"}>UG-2</MenuItem>
                    <MenuItem value={"UG-3"}>UG-3</MenuItem>
                    <MenuItem value={"UG-4"}>UG-4</MenuItem>
                    <MenuItem value={"UG-5"}>UG-5</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" onClick={onSubmitBuyer}>
              Register
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );

  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="type"
          onChange={onChangeType}
        >
          <MenuItem value={"buyer"}>Buyer</MenuItem>
          <MenuItem value={"vendor"}>Vendor</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Register;
