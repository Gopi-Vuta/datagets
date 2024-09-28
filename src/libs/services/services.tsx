import { Typography } from "@mui/material";
import React from "react";
import ServiceCard from "./service-card";

export default function Services() {
  const serviceDetails = [
    {
      imageUrl:
        "https://img1.wsimg.com/isteam/ip/b74283d7-df57-4724-872f-dc408d647ff5/blob.png/:/cr=t:0%25,l:29.48%25,w:66.75%25,h:100%25/rs=w:730,h:730,cg:true",
      title: "Customer Golden Profile",
      subtitle: "Consolidated data signals:",
      data: [
        "Stitched from varied sources/systems",
        "Unearth previously unknown insights",
        "Customized data transformation",
        "Easy to use ‘Golden Profile’ for all",
        "APIs or custom integrations",
        "Data quality frame-work enabled",
      ],
    },
    {
      imageUrl:
        "https://img1.wsimg.com/isteam/ip/b74283d7-df57-4724-872f-dc408d647ff5/blob-f9a089e.png/:/cr=t:0%25,l:33.35%25,w:61.78%25,h:100%25/rs=w:730,h:730,cg:true",
      title: "CRM",
      subtitle: "Industry-leading Playbook for:",
      data: [
        "CRM Growth – stratify & increase pool",
        "Increase awareness – delivery & subject-line tactics to increase Opens",
        "Improve engagement – personalized and dynamic content for highest Clicks",
        "Measurable Impact – sophisticated attribution to drive Revenue",
      ],
    },
    {
      imageUrl:
        "https://img1.wsimg.com/isteam/stock/87436/:/cr=t:0%25,l:16.87%25,w:66.27%25,h:100%25/rs=w:730,h:730,cg:true",
      title: "Personalization",
      subtitle: "Incremental Revenue focus:",
      data: [
        "Consumer-first – vs company-first",
        "Individual-level – personalized experiences with real-time optimization",
        "Shop-now clicks – push consumers down the purchase funnel",
        "Revenue lift – always-on measurement",
      ],
    },
    {
      imageUrl:
        "https://img1.wsimg.com/isteam/stock/WbkE9aA/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730",
      title: "Hyper re-targeting",
      subtitle: "Highest CVR by using owned-channels:",
      data: [
        "Intelligent Triggers – catch high intent users along full CEJ",
        "Automated – real-time journeys",
        "Personalized – content based on recent engagements",
        "Multi-channel – outreach across Email, PN, SMS and Website",
      ],
    },
  ];

  return (
    <div>
      <div className="pt-16 pl-48 text-blue">
        <h3 className="text-2xl">Our Services</h3>
      </div>
      <div className="flex justify-center items-center mt-24">
        <div className="grid grid-cols-2 gap-14">
          {serviceDetails.map((service, index) => (
            <ServiceCard
              key={index}
              imageUrl={service.imageUrl}
              title={service.title}
              subtitle={service.subtitle}
              data={service.data}
            />
          ))}
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
}
