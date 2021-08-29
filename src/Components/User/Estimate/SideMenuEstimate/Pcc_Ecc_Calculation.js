import React, { useEffect, useState } from 'react'
import { InputLabel, MenuItem, FormControl, Select, NativeSelect, InputBase ,TextField} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";


const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    select: {
        width: "13%",
    }
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        width: "13%",
    },
    select: {
        width:"13%",
    }
}));

const Pcc_Ecc_Calculation = () => {
    const [value, setValue] = useState(0)
    const quantity = ["Distance", "Area", "Weight", "Volume"]
    const [currentQuantity, setCurrentQuantity] = useState(0);
    const [currentUnitFrom, setCurrentUnitFrom] = useState(0);
    const [currentUnitTo, setCurrentUnitTo] = useState(0);

    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const units = [
        ["mm", "cm", "m", "km", "yd", "mi", "ft", "in"],
        ["mm2", "cm2", "m2", "km2", "yd2", "mi2", "ft2", "in2"],
        ["mg", "g", "kg", "t", "lb"],
        ["mm3", "cm3", "m3", "km3", "mi3", "yd3", "ft3", "in3"],
    ]

    return (
        <div className="cointainer">
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="demo-customized-textbox">Age</InputLabel>
                <TextField id="standard-basic" label="Standard" />
                <input type="text" placeholder="enter the value" />
            </FormControl>
            <FormControl className={classes.margin , classes.select}>
                <InputLabel id="demo-customized-select-label">Age</InputLabel>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={age}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
                <NativeSelect
                    id="demo-customized-select-native"
                    value={age}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default Pcc_Ecc_Calculation
