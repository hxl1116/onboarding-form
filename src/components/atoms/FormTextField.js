import React, {useContext} from "react";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core";

import {SectionContext} from "../../utils/app.utils";

// const FormTextField = (props) => {
//     const fieldProps = {
//         id: props.id,
//         name: props.name,
//         type: props.type,
//         label: props.text,
//         required: props.required,
//         variant: 'outlined',
//         fullWidth: true
//     }
//
//     return (
//         <Grid item sm={6}>
//             <SectionContext.Consumer>
//                 {({data, update}) => (
//                     <TextField {...fieldProps} defaultValue={data[fieldProps.name] ? data[fieldProps.name].value : ''}
//                                onChange={event => {
//                                    update({
//                                        ...data,
//                                        [props.name]: {id: props.id, value: event.target.value, label: props.text}
//                                    })
//                                }}/>
//                 )}
//             </SectionContext.Consumer>
//         </Grid>
//     )
// }

const FormTextField = (props) => {
    const [data, setData] = useContext(SectionContext)

    const fieldProps = {
        id: props.id,
        name: props.name,
        type: props.type,
        label: props.text,
        required: props.required,
        variant: 'outlined',
        fullWidth: true
    }

    return (
        <Grid item sm={6}>
            <TextField {...fieldProps} defaultValue={data[fieldProps.name] ? data[fieldProps.name].value : ''}/>
        </Grid>
    )
}

export default FormTextField
