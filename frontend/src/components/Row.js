import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import './Row.css';

export default function Row(props) {
    const { data, addItem, role } = props;

    const [value, setValue] = useState({});
    const [disabled, setDisabled] = useState(true);

    const handleInputChange = (newValue) => {

        let disabled = false

        data.forEach(item => {
            if (!item.label.localeCompare(newValue)) {
                disabled = true;
            }
        });

        setValue({ label: newValue, id: 0 });
        setDisabled(disabled);
    }

    const handleChange = (newValue) => {
        setValue(newValue)
    }

    const handleAddProject = () => {
        const newData = {
            label: value.label,
            id: Math.random()
        }

        addItem(newData);
        setDisabled(true);
    }

    useEffect(() => {
        if (value === null || value.label === undefined || value.label === '') {
            setDisabled(true);
        }

    }, [value]);
    return (
        <div className="row-content">
            <div className="container">
                <div className="projects-selector">
                    <Autocomplete
                        id="combo-box-projects"
                        freeSolo
                        onInputChange={(event, newValue) => {
                            handleInputChange(newValue);
                        }}
                        onChange={(event, newValue) => {
                            handleChange(newValue);
                        }}
                        options={data}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label={`Choose  ${role}`} variant="filled" />}
                    />
                    <Button variant="contained" disabled={disabled} onClick={handleAddProject} >Add</Button>
                </div>
            </div>
        </div>
    );
}