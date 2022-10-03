import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
var bcrypt = require('bcryptjs');

const UpdateVendor = (props) => {
    const [email] = useState(localStorage.getItem("email"));
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState(null);
    const [contact_number, setContact_number] = useState("");
    const [shop_name, setShop_name] = useState("");
    const [opening_time, setOpening_time] = useState("");
    const [closing_time, setClosing_time] = useState("");

    useEffect(() => {
        axios.post("http://localhost:4000/vendor/getProfile", { email: email })
            .then((response) => {
                setName(response.data.name);
                setPassword(response.data.password);
                setContact_number(response.data.contact_number);
                setShop_name(response.data.shop_name);
                setOpening_time(response.data.opening_time);
                setClosing_time(response.data.closing_time);
            })
            .catch((error) => {
                alert("Issue\t" + error);
            });
    }, [])



    const onChangeUsername = (event) => {
        console.log(event.target.value)
        setName(event.target.value);
    };
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };
    // const onChangeEmail = (event) => {
    //     setEmail(event.target.value);
    // };
    const onChangeContact_number = (event) => {
        setContact_number(event.target.value);
    };
    const onChangeShop_name = (event) => {
        setShop_name(event.target.value);
    };
    const onChangeOpening_time = (event) => {
        setOpening_time(event.target.value);
    };
    const onChangeClosing_time = (event) => {
        setClosing_time(event.target.value);
    };






    const resetInputsV = () => {
        setName("");
        setPassword("");
        // setEmail("");
        setDate(null);
        setContact_number("");
        setShop_name("");
        setOpening_time("");
        setClosing_time("");
    };





    const onUpdateVendor = (event) => {
        event.preventDefault();

        const UpdateVendor = {
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
            .post("http://localhost:4000/vendor/updateProfile", UpdateVendor)
            .then((response) => {
                alert("Created\t" + response.data.name);
                console.log(response.data);
            });

        // resetInputsV();
    };

    // useEffect(() => {
    //     console.log(name);
    // }, [name])

    return (
        <Grid container align={"center"} spacing={2} item xs={12}>
            {/* <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">View or Edit?</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="type"
                    onChange={onChangeType}
                >
                    <MenuItem value={"view"}>View</MenuItem>
                    <MenuItem value={"edit"}>Edit</MenuItem>
                </Select>
            </FormControl> */}
            <Grid container align={"center"} spacing={2}>
                <Grid item xs={30}>
                    <TextField
                        label="Name"
                        variant="filled"
                        value={name}
                        onChange={onChangeUsername}
                    />
                </Grid>
                <Grid item xs={30}>
                    <TextField
                        label="Password"
                        variant="filled"
                        disabled="true"
                        value={password}
                        //onChange={onChangePassword}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        variant="filled"
                        disabled="true"
                        value={email}
                        //onChange={onChangeEmail}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Contact No."
                        variant="filled"
                        value={contact_number}
                        OnChange={onChangeContact_number}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Shop Name"
                        variant="filled"
                        value={shop_name}
                        onChange={onChangeShop_name}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Opening Time"
                        variant="filled"
                        value={opening_time}
                        onChange={onChangeOpening_time}
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
                        variant="filled"
                        value={closing_time}
                        onChange={onChangeClosing_time}
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
                    <Button variant="outlined" onClick={onUpdateVendor}>
                        Update Vendor
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default UpdateVendor;
