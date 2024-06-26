import { useState, useEffect } from "react";
import { Heading, Image } from "@chakra-ui/react";
import * as API from "./services/launches";
import logo from "./assets/SpaceX_logo_black.svg.png";
import { LaunchItem } from "./components/LaunchItem";

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLuanches().then(setLaunches);
  }, []);

  return (
    <>
      <Image m={4} src={logo} alt="logo" width={300} />
      <Heading as="h1" size="lg">
        SpaceX Launches
      </Heading>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} {...launch} />
        ))}
      </section>
    </>
  );
}
