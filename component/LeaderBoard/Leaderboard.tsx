import React, { useState } from "react";
import { Wrapper, StyleWrapper } from "../Style";
import { P } from "../Typography";
import { Spacer } from "../Spacer";
import { Container } from "react-bootstrap";
import { Button } from "../Button";
import Table from "./Table";
const MenuBarData = [
  {
    name: "Popular",
    src: "/assets/popular.svg",
  },
  {
    name: "Editor’s choice",
    src: "/assets/editor_choice.svg",
  },
  {
    name: "AI",
    src: "/assets/AI.svg",
  },
  {
    name: "Technology",
    src: "/assets/cloud.svg",
  },
  {
    name: "Design",
    src: "/assets/design.svg",
  },
  {
    name: "Software",
    src: "/assets/software.svg",
  },
  {
    name: "Ecommerce",
    src: "/assets/ecommerce.svg",
  },
  {
    name: "Agency",
    src: "/assets/cloud_dull.svg",
  },
];
const Leaderboard = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <Wrapper>
        <Spacer height="50px" />
        <Container className="ms-4 me-4">
          <P weight="500" fontSize="24px">
            Leadorboard
          </P>
          <Spacer height="50px" />
          <StyleWrapper
            className="d-flex flex-row justify-content-between"
            width="70vw"
          >
            <div style={{ width: "70%" }}>
              <div className="d-flex flex-row justify-content-between align-items-center">
                {MenuBarData.map((val, index) => {
                  return (
                    <div
                      key={index}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setActive(index);
                      }}
                      className="d-flex flex-column justify-content-center align-items-center"
                    >
                      <img src={val.src} alt={val.name} />
                      <P color={active === index ? "" : "gray"}>{val.name}</P>
                    </div>
                  );
                })}
                <img src="/assets/forward.svg" alt="Forward" />
              </div>
            </div>
            <div className="me-5 mt-2">
              <Button
                width="100px"
                height="40px"
                className="d-flex flex-row align-items-center"
                color="white"
                bg="#1E1E1E"
              >
                <img className="ms-2 me-2" src="/assets/filter.svg" />
                <span>Filters</span>
              </Button>
            </div>
          </StyleWrapper>

          {/* Table  */}

          <Table />
        </Container>
      </Wrapper>
    </>
  );
};

export default Leaderboard;
