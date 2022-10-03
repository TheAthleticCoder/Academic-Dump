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

const UpdateBuyer = (props) => {
    const [email] = useState(localStorage.getItem("email"));
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState(null);
    const [contact_number, setContact_number] = useState("");
    const [age, setAge] = useState("");
    const [batch_name, setBatch_name] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {
        axios.post("http://localhost:4000/buyer/getProfile", { email: email })
            .then((response) => {
                setName(response.data.name);
                setPassword(response.data.password);
                setContact_number(response.data.contact_number);
                setAge(response.data.age);
                setBatch_name(response.data.batch_name);
            })
            .catch((error) => {
                alert("Issue\t" + error);
            });
    }, [])



    const onChangeUsername = (event) => {
        console.log(event.target.value)
        setName(event.target.value);
    };
    const onChangeType = (event) => {
        setType(event.target.value);
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
    const onChangeAge = (event) => {
        setAge(event.target.value);
    };
    const onChangeBatch_name = (event) => {
        setBatch_name(event.target.value);
    };






    const resetInputsB = () => {
        setName("");
        setPassword("");
        // setEmail("");
        setDate(null);
        setContact_number("");
        setBatch_name("");
        setAge("");
    };





    const onUpdateBuyer = (event) => {
        event.preventDefault();

        const updateBuyer = {
            name: name,
            password: password,
            email: email,
            contact_number: contact_number,
            age: age,
            batch_name: batch_name,
            date: Date.now(),
        };

        axios
            .post("http://localhost:4000/buyer/updateProfile", updateBuyer)
            .then((response) => {
                alert("Created\t" + response.data.name);
                console.log(response.data);
            });

        // resetInputsB();
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
                        label="Age"
                        variant="filled"
                        value={age}
                        onChange={onChangeAge}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Batch Name"
                        variant="filled"
                        value={batch_name}
                        onChange={onChangeBatch_name}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" onClick={onUpdateBuyer}>
                        Update Buyer
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default UpdateBuyer;
