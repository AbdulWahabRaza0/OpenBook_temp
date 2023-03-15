import Image from "next/image";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { AudioPlayer } from "./AudioPlayer";
import { Button } from "./Button";
import { Card } from "./Card";
import { Spacer } from "./Spacer";
import { WrapperFlex } from "./Style";
import { H1, P } from "./Typography";
import SpeedIcon from "@mui/icons-material/Speed";
import { useAppSelector } from "@/redux/Hooks";
interface scrool {
  height?: string;
}
const ContentText = styled.div``;
const Wrapper = styled.div`
  height: 100vh;
  background: #0f0f10;
  position: relative;
  border-left: 1px solid #252627;
`;
const PlayerBottom = styled.div`
  position: absolute;
  width: 95%;
  bottom: -0%;
`;
const Scrool = styled.div<scrool>`
  height: ${(props) => (props.height ? props.height : "60%")};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const dataTrend = [
  {
    sport: "Sports . Treanding",
    name: "Alvaro",
    tweet: "39.9k Tweets",
  },
  {
    sport: "Sports . Treanding",
    name: "Alvaro",
    tweet: "39.9k Tweets",
  },
  {
    sport: "Sports . Treanding",
    name: "Alvaro",
    tweet: "39.9k Tweets",
  },
];
const profileData = [
  {
    name: "Morflex",
    mail: "@morflex_com",
  },
  {
    name: "Morflex",
    mail: "@morflex_com",
  },
];
export default function SummarySideBar() {
  const [active, setActive] = useState("summary");

  const state: any = useAppSelector((states) => states.user);
  console.log("state", state.summary);
  const states: any = useAppSelector((states) => states.recomended);
  console.log(states.recomendedData);
  const [dropData, setDropData] = useState("Light");

  return (
    <>
      <Wrapper>
        <div style={{ border: " 1px solid #252627" }}>
          <Container>
            <Row className="align-items-center">
              <Col
                style={
                  active === "summary"
                    ? { borderBottom: "1px solid #DB5C4D" }
                    : { borderBottom: "none" }
                }
                md={5}
              >
                <H1
                  onClick={() => {
                    setActive("summary");
                  }}
                  style={{ padding: "20px 0px 20px 0px", cursor: "pointer" }}
                  fontSize="1.2vw"
                >
                  AI Summary
                </H1>
              </Col>
              <Col
                style={
                  active === "discovery"
                    ? { borderBottom: "1px solid #DB5C4D" }
                    : { borderBottom: "none" }
                }
                md={5}
              >
                <H1
                  onClick={() => {
                    setActive("discovery");
                  }}
                  style={{ padding: "20px 0px 20px 0px", cursor: "pointer" }}
                  fontSize="1.2vw"
                >
                  Discovery
                </H1>
              </Col>
              <Col md={2}>
                <div>
                  <Image
                    style={{ width: "100%" }}
                    width={24}
                    height={24}
                    src={"/assets/rightarrow.svg"}
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {active === "summary" ? (
          <>
            <div
              style={{
                borderBottom: " 1px  solid #252627",
                borderLeft: "1px  solid #252627",
                width: "100%",
                paddingRight: "10px",
              }}
            >
              <WrapperFlex
                style={{
                  padding: "20px 0px 30px 0px",
                  width: "100%",
                }}
                justifyContent="space-around"
                alignItems="center"
              >
                <H1 fontSize="1vw">2. Framework</H1>
                <Card
                  style={{ padding: "8px 8px" }}
                  bg="#252627"
                  radius="28px"
                  className="mt-1"
                >
                  <WrapperFlex alignItems="center">
                    <Image
                      width={16}
                      height={16}
                      src={"/assets/clock.svg"}
                      alt=""
                    />
                    <P
                      lHeight="8px"
                      className="pe-1"
                      style={{ marginLeft: "5px" }}
                      fontSize="0.9vw"
                    >
                      3 mins
                    </P>
                  </WrapperFlex>
                </Card>

                <div className="select-wrapper mt-1">
                  <select
                    onChange={(e) => {
                      setDropData(e.target.value);
                    }}
                    className="pt-1 pb-1"
                    style={{
                      background: "#252627",
                      borderRadius: "6px",
                      paddingLeft: "40px",
                      paddingRight: "35px",
                      color: "white",
                    }}
                  >
                    <option value="Light">Light</option>
                    <option value="Dark" data-thumbnail="/assets/speed.svg">
                      Dark
                    </option>
                    <option value="Medium" data-thumbnail="/assets/speed.svg">
                      Medium
                    </option>
                  </select>
                </div>
              </WrapperFlex>
            </div>

            <Scrool
              style={{
                borderBottom: " 1px  solid #252627",

                borderRight: "1px  solid #252627",
              }}
            >
              <div
                style={{
                  borderRight: "1px  solid #252627",

                  marginRight: "10px",
                }}
              >
                <Container>
                  <ContentText>
                    <Spacer height="30px" />
                    {states.recomendedData.map((item: any, index: any) => {
                      console.log("i am the data os items", item._id);
                      if (item._id === state.summary) {
                        return (
                          <P weight="400" lHeight="20px" fontSize="14px">
                            {/* {item.Summary1} */}
                            {dropData === "Light"
                              ? item.Summary1
                              : dropData === "Dark"
                              ? item.Summary2
                              : dropData === "Medium"
                              ? item.Summary3
                              : item.Summary1}
                          </P>
                        );
                      }
                    })}

                    <P
                      weight="400"
                      lHeight="20px"
                      fontSize="14px"
                      className="ms-3 me-2"
                    >
                      The speaker is spending their last day in Milan and is
                      loaded up with AI-related podcasts and articles for the
                      journey home. They reminisce about the past, noting how
                      quickly technology has advanced, and mention Qualcomm's AI
                      image generation on a mobile phone. They also mention NeRF
                      shots and the Luma AI team's volumetric photorealistic 3D
                      rendering. Lastly, they discuss vector embeddings and
                      Pinecone's usage since ChatGPT, but question if it will
                      remain competitive against Big Tech. image generation on a
                      mobile phone. They also mention NeRF shots and the Luma AI
                      team's volumetric photorealistic 3D rendering. Lastly,
                      they discuss vector embeddings and Pinecone's
                      <br />
                      <br />
                      The speaker is spending their last day in Milan and is
                      loaded up with AI-related podcasts and articles for the
                      journey home. They reminisce about the past, noting how
                      quickly technology has advanced, and mention Qualcomm's AI
                    </P>
                  </ContentText>
                </Container>
              </div>
            </Scrool>
          </>
        ) : (
          <>
            <Scrool height="80vh" className="mt-2 me-3">
              <WrapperFlex justifyContent="center" style={{ width: "100%" }}>
                <Card style={{ width: "85%" }}>
                  <Spacer height="10px" />
                  <H1 fontSize="20px">What's happning</H1>
                  <Spacer height="10px" />
                  <WrapperFlex
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <div>
                      <P color="#B5B8BA" lHeight="35px" fontSize="12px">
                        La Liga LIVE
                      </P>
                      <H1 fontSize="0.9vw">
                        Real Madriad vs Atlentric Madraid
                      </H1>
                    </div>
                    <Image
                      width={50}
                      height={50}
                      src={"/assets/profile.svg"}
                      alt=""
                    />
                  </WrapperFlex>
                  <Spacer height="30px" />
                  <Scrool height="30vh">
                    {dataTrend.map((item, index) => {
                      return (
                        <>
                          <WrapperFlex
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <div>
                              <P color="#B5B8BA" fontSize="12px">
                                {item.sport}
                              </P>
                              <H1 fontSize="0.9vw">{item.name}</H1>
                              <P color="#B5B8BA" fontSize="12px">
                                {item.tweet}
                              </P>
                            </div>
                            <Image
                              width={30}
                              height={30}
                              src={"/assets/threeDot.svg"}
                              alt=""
                            />
                          </WrapperFlex>
                          <Spacer height="10px" />
                        </>
                      );
                    })}
                  </Scrool>
                  <div>
                    <P fontSize="12px" color="lightblue">
                      See More
                    </P>
                  </div>
                </Card>
              </WrapperFlex>
              <Spacer height="10px" />
              <WrapperFlex justifyContent="center" style={{ width: "100%" }}>
                <Card style={{ width: "85%" }}>
                  <Spacer height="10px" />
                  <H1 fontSize="20px">Who to follow</H1>
                  <Scrool height="16vh">
                    {profileData.map((item, index) => {
                      return (
                        <>
                          <Spacer height="20px" />
                          <WrapperFlex
                            key={index}
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <WrapperFlex>
                              <Image
                                width={50}
                                height={50}
                                src={"/assets/profile.svg"}
                                alt=""
                              />
                              <div
                                style={{ marginLeft: "10px", marginTop: "3px" }}
                              >
                                <H1 fontSize="0.9vw">{item.name}</H1>
                                <P
                                  color="#B5B8BA"
                                  lHeight="15px"
                                  fontSize="12px"
                                >
                                  {item.mail}
                                </P>
                              </div>
                            </WrapperFlex>
                            <Button
                              size="12px"
                              borderRadius="20px"
                              height="30px"
                              bg="white"
                              width="30%"
                            >
                              Follow
                            </Button>
                          </WrapperFlex>
                        </>
                      );
                    })}
                  </Scrool>

                  <div>
                    <P fontSize="12px" color="lightblue">
                      See More
                    </P>
                  </div>
                </Card>
              </WrapperFlex>
            </Scrool>
          </>
        )}
        <PlayerBottom>
          <div>
            <WrapperFlex>
              {/* <AudioPlayer /> */}
              {/* <iframe
                src='https://play.ht/embed/?article_url=https://play.ht/drafts/j9uUDofg8BajhKreBmxi3dQnpB53/AAmcmslnu&voice=en-US-JennyNeural'
                scrolling='no'
                width='100%'
              ></iframe> */}
            </WrapperFlex>
          </div>
        </PlayerBottom>
      </Wrapper>
    </>
  );
}
