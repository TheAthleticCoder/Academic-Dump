import { useState } from "react";
import { useNavigate } from "react-router-dom";
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


const Login = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("");
    const navigate = useNavigate();




    const onChangeUsername = (event) => {
        setName(event.target.value);
    };
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const onChangeType = (event) => {
        setType(event.target.value);
    };




    const resetInputs = () => {
        setName("");
        setEmail("");
        setPassword("");
    };





    const onSubmitBLog = (event) => {
        event.preventDefault();

        const newBLog = {
            name: name,
            email: email,
            password: password,
        };

        axios
            .post("http://localhost:4000/buyer/login", newBLog)
            .then((response) => {
                alert("User Logged In:\t" + JSON.parse(response.config.data).name);
                // localStorage.setItem("email", JSON.stringify(JSON.parse(response.config.data).email));
                localStorage.setItem("email", newBLog.email);
                navigate("/buyer");
            })
            .catch((error) => {
                alert(error)
            });

        resetInputs();
    };

    const onSubmitVLog = (event) => {
        event.preventDefault();

        const newVLog = {
            name: name,
            email: email,
            password: password,
        };

        axios
            .post("http://localhost:4000/vendor/login", newVLog)
            .then((response) => {
                alert("User Logged In:\t" + JSON.parse(response.config.data).name);
                // localStorage.setItem("email", JSON.stringify(JSON.parse(response.config.data).email));
                localStorage.setItem("email", newVLog.email);
                navigate("/vendor");
            })
            .catch((error) => {
                alert(error)
            });

        resetInputs();
    };


    if (type === 'buyer') {
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
                            onChange={onChangeUsername}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            variant="outlined"
                            value={password}
                            onChange={onChangePassword}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={onChangeEmail}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" onClick={onSubmitBLog}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

    if (type === 'vendor') {
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
                            onChange={onChangeUsername}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            variant="outlined"
                            value={password}
                            onChange={onChangePassword}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={onChangeEmail}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" onClick={onSubmitVLog}>
                            Login
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

export default Login;
