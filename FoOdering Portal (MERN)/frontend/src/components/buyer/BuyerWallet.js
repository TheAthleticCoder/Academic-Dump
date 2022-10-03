import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const BuyWallet = () => {
    const [email] = useState(localStorage.getItem("email"));
    const [wallet, setwallet] = useState(0);
    const [updatedWallet, setupdatedWallet] = useState("");

    const onUpdateWallet = (event) => {
        setupdatedWallet(event.target.value);
    }

    useEffect(() => {
        axios.post("http://localhost:4000/buyer/getWallet", { email: email })
            .then((response) => {
                setwallet(response.data.wallet);
            })
            .catch((error) => {
                alert("Issue\t" + error);
            });
    })

    const onAdd = (event) => {
        event.preventDefault();

        const user = {
            email: email,
            wallet: Number(wallet) + Number(updatedWallet)
        };
        axios
            .post("http://localhost:4000/buyer/setWallet", user)
            .then(() => {
                alert("Wallet Updated");
                setwallet(user.wallet);
                setupdatedWallet('');
            })
            .catch((error) => {
                alert("Error\t" + error);
            });
    }
    return (
        <Grid container align={"center"} spacing={2}>
            <Grid item xs={12}>
                <TextField
                    label="Wallet"
                    variant="filled"
                    value={wallet}
                    disabled={true}
                    sx={{ minWidth: "200px", minHeight: "50px" }}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Add Money"
                    variant="filled"
                    value={updatedWallet}
                    onChange={onUpdateWallet}
                    sx={{ minWidth: "200px", minHeight: "50px" }}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="outlined"
                    onClick={onAdd}
                    sx={{ minWidth: "300px", minHeight: "40px" }}
                >
                    Add
                </Button>
            </Grid>
        </Grid>
    );
}

export default BuyWallet;