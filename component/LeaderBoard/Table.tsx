import React from "react";
import { StyleWrapper } from "../Style";
import { P } from "../Typography";
import { Container } from "react-bootstrap";
import { Spacer } from "../Spacer";
import styled from "styled-components";
import Head from "next/head";
import { Button } from "../Button";
const TableData = [
  {
    rank: "1",
    creator: {
      src: "/assets/temp.svg",
      name: "Ben Tossel",
      btnName: "Follow",
    },
    followers: "179,632",
    price: "Free",
  },
  {
    rank: "1",
    creator: {
      src: "/assets/temp.svg",
      name: "Ben Tossel",
      btnName: "Follow",
    },
    followers: "179,632",
    price: "Free",
  },
  {
    rank: "1",
    creator: {
      src: "/assets/temp.svg",
      name: "Ben Tossel",
      btnName: "Follow",
    },
    followers: "179,632",
    price: "Free",
  },
  {
    rank: "1",
    creator: {
      src: "/assets/temp.svg",
      name: "Ben Tossel",
      btnName: "Follow",
    },
    followers: "179,632",
    price: "Free",
  },
  {
    rank: "1",
    creator: {
      src: "/assets/temp.svg",
      name: "Ben Tossel",
      btnName: "Follow",
    },
    followers: "179,632",
    price: "Free",
  },
  {
    rank: "1",
    creator: {
      src: "/assets/temp.svg",
      name: "Ben Tossel",
      btnName: "Follow",
    },
    followers: "179,632",
    price: "Free",
  },
  {
    rank: "1",
    creator: {
      src: "/assets/temp.svg",
      name: "Ben Tossel",
      btnName: "Follow",
    },
    followers: "179,632",
    price: "Free",
  },
];
const TableWraper = styled.div`
  padding: 20px;
  color: white;
`;
const Tables = styled.table`
  border-collapse: separate;
  border-spacing: 0 15px;
  width: 100%;
`;
const menuTable = ["Rank", "Creator", "Followers", "Price"];
const Table = () => {
  return (
    <>
      <Spacer height="50px" />
      <StyleWrapper width="90%" height="70vh" style={{ overflow: "scroll" }}>
        <TableWraper
          className="tableWraper"
          style={{ border: "1px solid #252627", borderRadius: "12px" }}
        >
          <Tables>
            <tr>
              <th>Rank</th>
              <th>
                Creator <img src="/assets/dropdown.svg" />
              </th>
              <th>Followers</th>
              <th>Price</th>
            </tr>
            {TableData.map((val, index) => {
              return (
                <>
                  <tr key={index}>
                    <a>
                      <td>#{val.rank}</td>
                    </a>
                    <td>
                      <div style={{ display: "flex", alignItems: " center" }}>
                        {/* <img src={val.creator.name} alt="" /> */}
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            border: "1px solid #252627",
                            background: "#252627",
                          }}
                        ></div>
                        <div style={{ marginLeft: "15px" }}>
                          {val.creator.name}
                        </div>
                        <Button
                          width="auto"
                          height="auto"
                          className="ms-5"
                          padding="5px"
                          border="1px solid #252627"
                          borderRadius="6px"
                          bg="#1E1E1E"
                          color="white"
                        >
                          {val.creator.btnName}
                        </Button>
                      </div>
                    </td>
                    <td>{val.followers}</td>
                    <td>{val.price}</td>
                  </tr>
                </>
              );
            })}
          </Tables>
        </TableWraper>
      </StyleWrapper>
    </>
  );
};

export default Table;
