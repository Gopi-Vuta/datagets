import React from "react";
import ProtectedSection from "../auth/protected-section";
import { useAuth } from "../auth/use-auth-hook";
import HeroImage from "../../assets/images/hero.svg";
import { Button, Typography } from "@mui/material";
import { useNavigate, useNavigation } from "react-router-dom";

const Home = () => {
  const { username, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex mt-40 mb-48">
        <div>
          <img
            src="https://img1.wsimg.com/isteam/stock/1YEW15Z/:/rs=w:772,h:500,cg:true,m/cr=w:772,h:500"
            alt="Image explaining datagets"
            width="750"
            height="750"
          />
        </div>
        <div className="flex bg-gray-1">
          <div className="flex w-128 justify-center items-center flex-col gap-6">
            <div className="flex mx-4">
              <p className="text-5xl text-center">
                Drive business impact from your data
              </p>
            </div>
            <div className="flex">
              <Typography>Get help from the experts</Typography>
            </div>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                navigate("/services");
              }}
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex bg-gray-1 w-[37rem]">
          <img
            src="https://img1.wsimg.com/isteam/ip/b74283d7-df57-4724-872f-dc408d647ff5/blob-3c58943.png/:/cr=t:0%25,l:5.65%25,w:66.67%25,h:100%25/rs=w:1200,h:1200,cg:true"
            alt="image about us"
          />
        </div>
        <div className="flex w-[39rem]">
          <div className="ml-24 mt-32">
            <div className="flex justify-center items-center">
              <div className="font-medium text-4xl text-main-medium">
                <h5>Laser focus, high impact</h5>
              </div>
            </div>
            <div className=" my-14 text-lg">
              <ul className="list-disc">
                <li>
                  <b>Boutique data consultancy:</b> we are focused at the
                  intersection of Data and Marketing + Digital Commerce
                </li>
                <li>
                  <b>Industry leading solutions:</b> our founders have 20 yrs+
                  experience in building and refining data solutions at Fortune
                  50 companies
                </li>
                <li>
                  <b>Measurable Impact</b> - granular attribution framework that
                  links your data products to Revenue or other KPI lift
                </li>
                <li>
                  <b>Flexible engagement model</b> - you pay 'only' when our
                  solutions improves your KPIs or project-based fixed cost or
                  time/labor based costing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center item-center py-24">
        <div>
          <Typography>
            Copyright &copy; 2024 DATAGETS - All Rights Reserved.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Home;
