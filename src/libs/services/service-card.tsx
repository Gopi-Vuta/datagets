import { Typography } from "@mui/material";
import React from "react";

interface ServiceCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  data: string[];
}

const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div>
      <div>
        <img width="350px" src={props.imageUrl} alt="Service" />
      </div>
      <div className="flex items-center flex-col bg-gray-1 h-96">
        <div className="mt-8">
          <p className="text-2xl">{props.title}</p>
        </div>
        <div className="mt-8 text-center">
          <p className="font-bold mb-4">{props.subtitle}</p>
          <ul>
            {props.data.map((datapoint, index) => (
              <li className="w-72 py-1">{datapoint}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
