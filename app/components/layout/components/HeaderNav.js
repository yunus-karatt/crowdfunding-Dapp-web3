import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import styled from "styled-components";

const HeaderNav = () => {
  const Router = useRouter();

  return (
    <HeaderNavWrapper>
      <Link href={"/"}>
        <HeaderNavLinks active={Router.pathname === "/" ? true : false}>
          Campaigns
        </HeaderNavLinks>
      </Link>
      <Link href={"/createcampaign"}>
        <HeaderNavLinks
          active={Router.pathname === "/createcampaign" ? true : false}
        >
          Create Campaign
        </HeaderNavLinks>
      </Link>
      <Link href={"/dashboard"}>
        <HeaderNavLinks
          active={Router.pathname === "/dashboard" ? true : false}
        >
          Dashboard
        </HeaderNavLinks>
      </Link>
    </HeaderNavWrapper>
  );
};

const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgDiv};
  padding: 6px;
  height: 70%;
  border-radius: 10px;
`;

const HeaderNavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 7px;
  background-color: ${(props) =>
    props.theme ? props.theme.bgDiv : props.theme.bgSubDiv};
  border-radius: 10px;
  padding: 0 5px 0 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: small;
`;
export default HeaderNav;
