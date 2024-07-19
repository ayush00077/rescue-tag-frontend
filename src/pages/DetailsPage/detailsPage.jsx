import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  Tab,
  TextField,
} from "@mui/material";
import React from "react";
import style from "./detailsPage.module.css";
import InputText from "../../components/inputComponent/InputText";
import CustomButton from "../../components/CustomButton/customButton";

const DetailsFormJson = [
  {
    title: "Basic Details",
    fields: [
      {
        label: "Name",
        type: "text",
        placeholder: "Please Enter your Name",
        required: true,
        disabled: false,
        style: {
          width: "250px",
          height: "40px",
        },
      },
      {
        label: "Local Name",
        type: "text",
        placeholder: "Please Enter your Local Name",
        required: false,
        disabled: false,
        style: {
          width: "250px",
          height: "40px",
        },
      },
      {
        label: "Email",
        type: "email",
        placeholder: "Please Enter your Email",
        required: true,
        disabled: false,
        style: {
          width: "250px",
          height: "40px",
        },
      },
      {
        label: "User Name",
        type: "text",
        placeholder: "Please Enter your User Name",
        required: true,
        disabled: false,
        style: {
          width: "250px",
          height: "40px",
        },
      },
    ],
  }
]

export default function DetailsPage() {
  return (
    <Stack>
      {/* {DetailsFormJson.map((section, index) => () => (  } */}
      {/* <Card className={style.userName_section}>
        <CardHeader title="Basic Details" />
        <Divider />
        <CardContent>
          <Grid container>
            <Grid item xs>
              <div className={style.input_field}>
                <div className={style.input_title}>Name</div>
                <InputText
                  placeHolder={"Place Enter your Name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
              <div className={style.input_field}>
                <div className={style.input_title}>Local Name</div>
                <InputText
                  placeHolder={"If you have another name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
            </Grid>
            <Grid item xs>
              <div className={style.input_field}>
                <div className={style.input_title}>Email</div>
                <InputText
                  placeHolder={"please enter your email"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
            </Grid>
            <Grid item xs>
              <div className={style.input_field}>
                <div className={style.input_title}>User name</div>
                <InputText
                  placeHolder={"please enter your user name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card> */}
      {/* <Card className={style.userName_section}>
        <CardHeader title="Contact Details" />
        <Divider />
        <CardContent>
          <Grid container>
            <Grid item xs>
              <div className={style.input_field}>
                <div className={style.input_title}>Primary number</div>
                <InputText
                  placeHolder={"Place Enter your number"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
              <div className={style.input_field}>
                <div className={style.input_title}>State</div>
                <InputText
                  placeHolder={"If you have another name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
              <div className={style.input_field}>
                <div className={style.input_title}>Country</div>
                <InputText
                  placeHolder={"If you have another name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
            </Grid>
            <Grid item xs>
            <div className={style.input_field}>
                <div className={style.input_title}>City</div>
                <InputText
                  placeHolder={"If you have another name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
              <div className={style.input_field}>
                <div className={style.input_title}>Pin code</div>
                <InputText
                  placeHolder={"If you have another name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
            </Grid>
            <Grid item xs>
            <div className={style.input_field}>
                <div className={style.input_title}>Address</div>
                <InputText
                  placeHolder={"If you have another name"}
                  height={"90px"}
                  width={"250px"}
                  multiline={true}
                  maxRows={5}
                />
              </div>
              
            </Grid>
          </Grid>
        </CardContent>
      </Card> */}
      {/* <Card className={style.userName_section}>
        <CardHeader title="Emergency Contact" />
        <Divider />
        <CardContent>
          <Grid container>
            <Grid item xs>
              <div className={style.input_field}>
                <div className={style.input_title}>Name</div>
                <InputText
                  placeHolder={"Place Enter your Name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
              <div className={style.input_field}>
                <div className={style.input_title}>Local Name</div>
                <InputText
                  placeHolder={"If you have another name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
            </Grid>
            <Grid item xs>
              <div className={style.input_field}>
                <div className={style.input_title}>Address</div>
                <InputText
                  placeHolder={"If you have another name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
            </Grid>
            <Grid item xs>
              <div className={style.input_field}>
                <div className={style.input_title}>Address</div>
                <InputText
                  placeHolder={"If you have another name"}
                  height={"40px"}
                  width={"250px"}
                />
              </div>
            </Grid>
          </Grid>
          <div className={style.button_section}>
            <CustomButton type="submit" variant="outlined">
              Save
            </CustomButton>
          </div>
        </CardContent>
      </Card> */}
    </Stack>
  );
}
