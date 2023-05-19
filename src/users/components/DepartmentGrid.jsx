import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";

import "./DepartmentGrid.css";

const DepartmentGrid = (props) => {
      
  const [checked, setChecked] = useState({
    customerService: [false, false],
    design: [false, false, false],
  });
  const [cusGridOpen, setCusGridOpen] = useState(false);
  const [desGridOpen, setDesGridOpen] = useState(false);

  const handleChange1 = (event) => {
    
    const name = event.target.name;
   
    setChecked((prevState) => {
      if (name === "customerService")
        return {
          ...prevState,
          customerService: [event.target.checked, event.target.checked],
        };
      else
        return {
          ...prevState,
          design: [
            event.target.checked,
            event.target.checked,
            event.target.checked,
          ],
        };
    });
  };

  const handleChange2 = (event) => {

    const name = parseInt(event.target.name);

    if (name < 10) {
      const updateChecked = { ...checked };
      const updateCus = [...checked.customerService];
      updateCus[name] = event.target.checked;
      updateChecked.customerService = updateCus;
      setChecked(updateChecked);
    } else {
      const updateChecked = { ...checked };
      const updateDes = [...checked.design];
      updateDes[name - 10] = event.target.checked;
      updateChecked.design = updateDes;
      setChecked(updateChecked);
    }
  };

  return (
    <div className="department-content">
      <div className={cusGridOpen ? "parent-wrap-open" : "parent-wrap"}>
        <div className="button-row">
          <div onClick={() => {setCusGridOpen(!cusGridOpen)}}>{cusGridOpen? <ExpandLessSharpIcon/> : <ExpandMoreSharpIcon/> }</div>
          <FormControlLabel
            label="Customer Service"
            control={
              <Checkbox
                name="customerService"
                checked={
                  checked.customerService[0] && checked.customerService[1]
                }
                onChange={handleChange1}
              />
            }
          />
        </div>

        <div className="child-wrap">
          <FormControlLabel
            label="Support"
            control={
              <Checkbox
                name="0"
                checked={checked.customerService[0]}
                onChange={handleChange2}
              />
            }
          />
          <FormControlLabel
            name="1"
            label="Customer Success"
            control={
              <Checkbox
                checked={checked.customerService[1]}
                onChange={handleChange2}
              />
            }
          />
        </div>
      </div>
      <div className={desGridOpen ? "parent-wrap-open" : "parent-wrap"}>
        <div className="button-row">
          <div onClick={() => {setDesGridOpen(!desGridOpen)}}>{desGridOpen? <ExpandLessSharpIcon/> : <ExpandMoreSharpIcon/> }</div>
          <FormControlLabel
            label="Design"
          control={
            <Checkbox
              name="design"
              checked={
                checked.design[0] && checked.design[1] && checked.design[2]
              }
              onChange={handleChange1}
            />
            }
          />
        </div>
        <div className="child-wrap">
          <FormControlLabel
            name="10"
            label="Graphic Design"
            control={
              <Checkbox checked={checked.design[0]} onChange={handleChange2} />
            }
          />
          <FormControlLabel
            name="11"
            label="Product Design"
            control={
              <Checkbox checked={checked.design[1]} onChange={handleChange2} />
            }
          />
          <FormControlLabel
            name="12"
            label="Web Design"
            control={
              <Checkbox checked={checked.design[2]} onChange={handleChange2} />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default DepartmentGrid;
