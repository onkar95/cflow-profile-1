import React , {useState} from 'react'
import "./Paper.css"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';
function Paper({paper_work,setPaper_work,setSection}) {


    const items = ["Pollution Check" , "RC" , "Insurance" , "Permit" , "Road Taxes Documents"]
    const [checked,setChecked] = useState([
        false,
        false,
        false,
        false,
        false
    ])

    const handleSubmit = () => {
        const arr =[]
        for(var i = 0 ; i < 5 ; i++)
        {
            if(checked[i] === true)
            {
                arr.push(items[i])
            }
        }
        setPaper_work(arr)
        setSection(2)
    }


    return (
        <div className="paper-container">
                {
                    items.map((item,index) => (
                        <FormControlLabel
                    control={
                            <Checkbox
                                checked={checked[index]}
                                onChange={(e) => setChecked({...checked , [index] : e.target.checked})}
                                color="primary"
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{border:"1.5px solid #2d2d2d"}}/>}
                                checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1.5px solid #2d2d2d"}}/>}
                            />
                            }
                    label={item}
                    style={{
                        backgroundColor:"transparent",
                        fontWeight:"100"
                    }}
                />
                    ))
                    }
                <div className="paper-button-container">
                    <Button className="paper-button" onClick={handleSubmit}>Continue</Button>
                </div>
        </div>
    )
}

export default Paper
