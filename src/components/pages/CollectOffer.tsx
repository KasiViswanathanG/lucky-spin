import React from "react";
import Spinner from "../atoms/Spinner";
import ClaimOffer from "../organisms/ClaimOffer";
import Template from "../template/Template";
import { ResponsiveDiv, ResponsiveIDiv } from "./EnterContest";

const CollectOffer = () => {
  return (
    <Template>
      <ResponsiveDiv>
        <Spinner />
        <ResponsiveIDiv>
          <ClaimOffer />
        </ResponsiveIDiv>
      </ResponsiveDiv>
    </Template>
  );
};

export default CollectOffer;
