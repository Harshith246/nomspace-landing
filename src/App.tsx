import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "theme-ui";
import { Header } from "src/components/Header";
import Modal from "react-modal";
import Illustration from "src/assets/SpaceDiscovery.svg";
import cUSD from "src/assets/cUSD.svg";
import { QrCode } from "phosphor-react";
import QRCode from "qrcode.react";

const App: React.FC = () => {
  React.useEffect(() => {
    Modal.setAppElement("body");
  });

  return (
    <Container sx={{ maxWidth: "100%", width: "auto" }}>
      <Container sx={{ py: 6, px: [4, "15%"] }}>
        <Box mb={["15%", 6]}>
          <Header />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Heading as="h2" mb={4}>
            Every cryptonaut needs a name.
            <br />
            Reserve yours
          </Heading>
          <Button>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.nom.space"
              sx={{ textDecoration: "none" }}
            >
              <Text>Launch App</Text>
            </Link>
          </Button>
          <Box mb={2}>
            <Image
              src={Illustration}
              sx={{
                height: ["240px", "400px"],
              }}
            />
          </Box>

          <Divider my={[0, 5]} mb={4} />

          <Heading as="h2" mb={1}>
            Send and receive crypto
          </Heading>
          <Text sx={{ display: "block" }} variant="regularGray" mb={4}>
            Wallet addresses are hard to remember. Names aren't.
          </Text>
          <Flex sx={{ justifyContent: "center" }} mb={6}>
            <Card sx={{ width: "fit-content", px: 4 }}>
              <Flex sx={{ alignItems: "center", mb: 3 }}>
                <Heading as="h3" mr={2}>
                  valora.nom
                </Heading>
                <QrCode size={32} />
              </Flex>
              <QRCode value="https://valoraapp.com/" />
            </Card>
          </Flex>

          <Divider my={[0, 5]} mb={4} />
          <Heading as="h2" mb={2}>
            Reserve using cUSD
          </Heading>
          <Text sx={{ display: "block" }} variant="regularGray" mb={4}>
            cUSD is one of the most powerful stablecoins in crypto today. You
            can get cUSD directly on{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://valoraapp.com/"
              style={{ textDecoration: "none" }}
              mr={2}
            >
              Valora
            </Link>
          </Text>
          <Box mb={2}>
            <Image src={cUSD} sx={{ height: ["200px"] }} />
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default App;
