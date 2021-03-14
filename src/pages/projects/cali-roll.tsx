import { Heading } from "@pids/components/Heading";
import { Text } from "@pids/components/Text";
import { Button } from "@pids/components/Button";

export default function CaliRoll() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Heading>Cali Roll</Heading>
      <Text size="large">Download the assets for the Cali Roll project</Text>
      <a href="../cali-roll-assets.zip" download>
        Download Assets
      </a>
    </div>
  );
}
