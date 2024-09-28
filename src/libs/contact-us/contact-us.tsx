import { Button, Typography } from "@mui/material";
import React from "react";

export default function ContactUs() {
  return (
    <div className="flex justify-center items-center text-center flex-col">
      <div className="flex flex-col gap-10 w-2/3 px-8 pb-32">
        <h4 className="pt-24 text-xl">CONTACT US</h4>
        <p className="text-2xl">Hire Us and See Positive Results</p>
        <p>
          We believe that a business with a great marketing team can make an
          impact on the world. Take the first step: contact us, and together, we
          will reach your company's goals.
        </p>
        <h5 className="text-2xl">DATAGETS</h5>
        <h6 className="text-xl">Hours</h6>
        <div>
          <p>Monday - Friday: 9am - 5pm</p>
          <p>Saturday - Sunday: Closed</p>
        </div>
        <div>
          <Button variant="contained" size="large" onClick={() => {}}>
            SEND MESSAGE
          </Button>
        </div>
      </div>
      <div className="flex py-24">
        <div>
          <Typography>
            Copyright &copy; 2024 DATAGETS - All Rights Reserved.
          </Typography>
        </div>
      </div>
    </div>
  );
}
