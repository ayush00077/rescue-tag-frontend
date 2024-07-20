import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import style from "./detailsPage.module.css";

import FormComponent from "../../components/FormComponent";
import CustomButton from "../../components/CustomButton/customButton";

const DetailsFormJson = {
  formElements: [
    {
      title: "Basic Details",
      fields: [
        {
          label: "Name",
          name: "name",
          type: "text",
          placeholder: "Please Enter your Name",
          required: true,
          disabled: false,
          style: {
            width: "250px",
            height: "27px",
          },
        },
        {
          label: "Local Name",
          type: "text",
          name: "localName",
          placeholder: "Please Enter your Local Name",
          required: false,
          disabled: false,
          style: {
            width: "250px",
            height: "27px",
          },
        },
        {
          label: "Email",
          name: "email",
          type: "text",
          placeholder: "Please Enter your Email",
          required: true,
          disabled: false,
          style: {
            width: "250px",
            height: "27px",
          },
        },
        {
          label: "User Name",
          name: "userName",
          type: "text",
          placeholder: "Please Enter your User Name",
          required: true,
          disabled: false,
          style: {
            width: "250px",
            height: "27px",
          },
        },
      ],
    },
    {
      title: "Contact Details",
      fields: [
        {
          label: "Primary Number",
          type: "text",
          name: "primaryNumber",
          placeholder: "Please Enter your Primary Number",
          required: true,
          disabled: false,
          style: {
            width: "250px",
            height: "27px",
          },
        },
        {
          label: "State",
          type: "text",
          name: "state",
          placeholder: "Please Enter your State",
          required: false,
          disabled: false,
          style: {
            width: "250px",
            height: "27px",
          },
        },
        {
          label: "Country",
          type: "text",
          name:"country",
          placeholder: "Please Enter your Country",
          required: false,
          disabled: false,
          style: {
            width: "250px",
            height: "27px",
          },
        },
        {
          label: "City",
          type: "text",
          name: "city",
          placeholder: "Please Enter your City",
          required: false,
          disabled: false,
          style: {
            width: "250px",
            height: "27px",
          },
        },
        {
          label: "Pin Code",
          name: "pinCode",
          type: "text",
          placeholder: "Please Enter your Pin Code",
          required: false,
          disabled: false,
          style: {
            width: "250px",
            height: "27px",
          },
        },
        {
          label: "Address",
          name: "address",
          type: "text",
          placeholder: "Please Enter your Address",
          required: false,
          disabled: false,
          style: {
            width: "250px",
            height: "27px",
          },
        },
      ],
    },
  ],
};

export default function DetailsPage() {
  const [formDatas, setFormData] = useState({});
  const [error, setError] = useState({});
  const handleValidation = () =>{
    return true
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target ,"form data");
    if(handleValidation()){
      console.log(formDatas)
    }
  }
  const handelChange = (e) => { 
    const { name, value, type, checked } = e.target;
    console.log(name, value, type, checked);
    if (type === "checkbox" || type === "radio") {
      setFormData({ ...formDatas, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formDatas, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formDatas, [name]: value });
    }
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        {DetailsFormJson.formElements.map((section, index) => (
          <Card className={style.userName_section} key={index}>
            <CardHeader
              title={section.title}
              titleTypographyProps={{ variant: "h6" }}
              sx={{ padding: 0 }}
            />
            <Divider />
            <CardContent>
              <Grid container>
                {section.fields.map((field, index) => (
                  <Grid item xs key={index}>
                    <div className={style.input_field}>
                      <div className={style.input_title}>{field.label}</div>
                       <FormComponent fieldType={field.type} {...field} handelChange={handelChange} value={formDatas[field.name]||""}/>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Stack>
      <div style={{ float: "right"}}>
          <CustomButton type={"submit"} style={{width:"100px"}}>Save</CustomButton>
        </div>
    </form>
  );
}
