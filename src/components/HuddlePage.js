import { HuddleMain, FlexBox, Logo, Section1 } from "./HuddleStyleComp";
import { ArtCont } from "./CSSArtStyle";
import DeskPreview from "./DeskPreview";
import MobPreview from "./MobPreview";
import Register from "./Register";
import SocIcons from "./SocIcons";
import { useState, useEffect, useRef } from "react";

const HuddlePage = () => {
  return (
    <>
      <HuddleMain
        bgDesk={process.env.PUBLIC_URL + "/images/bg-desktop.svg"}
        bgMob={process.env.PUBLIC_URL + "/images/bg-mobile.svg"}
      >
        <header>
          <Logo src={process.env.PUBLIC_URL + "/images/logo.svg"} alt='logo' />
        </header>
        <FlexBox>
          <Section1>
            <ArtCont>
              <DeskPreview />
              <MobPreview />
            </ArtCont>
          </Section1>

          <Register />
        </FlexBox>
        <SocIcons />
      </HuddleMain>
    </>
  );
};

export default HuddlePage;
