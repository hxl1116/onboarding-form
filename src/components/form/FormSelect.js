import React from "react";
import {FormControl, Grid, MenuItem} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}))

export default function FormSelect(props) {
    const classes = styles()
    const labelId = props.text.toLowerCase().replace(' ', '-')

    const selectProps = {
        id: props.id,
        name: props.name,
        label: props.text,
        labelId: labelId,
        value: props.selectedItem,
        onChange: props.handleChange,
        displayEmpty: true,
        autoWidth: true
    }

    return (
        // TODO: Refactor to reflect template changes
        <Grid item sm={6}>
            {/* TODO: Add context consumer */}
            <FormControl className={classes.formControl} variant={"outlined"} required={props.required} fullWidth>
                <InputLabel id={labelId}>{props.text}</InputLabel>
                <Select {...selectProps}>
                    {props.options[props.option].map((value, idx) => (
                        <MenuItem key={`${value}SelectOpt`} value={idx}>{value}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    )
}
