import MainContent from "@/component/mainComponent/MainContent";
import SideNavBar from "@/component/SideNavBar";
import SummarySideBar from "@/component/SummarySideBar";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useAppSelector } from "@/redux/Hooks";
// import Create from "@/component/create/Create";
// import Test from "@/component/create/Test";
import dynamic from "next/dynamic";
const Test = dynamic(() => import("@/component/create/Test"), {
  ssr: false,
});
const Create = dynamic(() => import("@/component/create/Create"), {
  ssr: false,
});
export default function Dashboard() {
  const [mount, setMount] = useState(false);
  const state: any = useAppSelector((states) => states.user);
  useEffect(() => {
    setMount(true);
  });
  if (!mount) {
    return null;
  }
  return (
    <Row>
      <Col style={{ padding: "0px" }} md={3}>
        <SideNavBar />
      </Col>
      {state.nameUse !== "Create" ? (
        <Col
          style={{ padding: "0px" }}
          md={state.nameUse === "Notification" ? 9 : 6}
        >
          <MainContent />
        </Col>
      ) : (
        <Col style={{ background: "#0f0f10" }} md={9}>
          <Create />
          ""
          <Test />
        </Col>
      )}
      {state.nameUse === "Notification" ? (
        <></>
      ) : state.nameUse !== "Create" ? (
        <Col style={{ padding: "0px" }} md={3}>
          <SummarySideBar />
        </Col>
      ) : (
        ""
      )}
    </Row>
  );
}
