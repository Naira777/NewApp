import React from "react";
import MainLayout from "../../MainLayout";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Middle from "../Middle/Middle";

const AboutPageMainLayout = ({ ref1 }) => {
  const { t } = useTranslation();
  const { language } = useSelector((state) => state.products);

  return (
    <MainLayout>
      <div style={{ marginTop: "50px", marginBottom: "100px" }} ref={ref1}>
        <div>
          <Middle />
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPageMainLayout;
