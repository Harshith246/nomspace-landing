import React from "react";
import { Box, Button, Flex, Link, MenuButton, Text } from "theme-ui";
import { Logo } from "src/components/Logo";
import { Breakpoint, useBreakpoint } from "src/hooks/useBreakpoint";
import { Menu, MenuItem } from "@szhsin/react-menu";

export const Header: React.FC = () => {
  const breakpoint = useBreakpoint();
  return (
    <Flex sx={{ justifyContent: "space-between" }} mb={4}>
      <Logo />

      {breakpoint === Breakpoint.DESKTOP ? (
        <Flex sx={{ alignItems: "center" }}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nomspace"
            style={{ textDecoration: "none" }}
            mr={2}
          >
            Github
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/nomspace_nom"
            style={{ textDecoration: "none" }}
            mr={2}
          >
            Twitter
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/WPYZC7ZTcY"
            style={{ textDecoration: "none" }}
            mr={3}
          >
            Discord
          </Link>
          <Button>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.nom.space"
              sx={{ textDecoration: "none" }}
            >
              <Text color="#FAFAFA">Launch App</Text>
            </Link>
          </Button>
        </Flex>
      ) : (
        <Box>
          <Menu
            styles={{
              backgroundColor: "var(--theme-ui-colors-secondaryBackground)",
            }}
            menuButton={<MenuButton />}
          >
            <MenuItem>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/nomspace"
                sx={{ textDecoration: "none", color: "text" }}
              >
                <Text>Github</Text>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/nomspace_nom"
                sx={{ textDecoration: "none", color: "text" }}
              >
                <Text>Twitter</Text>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.gg/WPYZC7ZTcY"
                sx={{ textDecoration: "none" }}
              >
                <Text>Discord</Text>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.nom.space"
                sx={{ textDecoration: "none" }}
              >
                <Text color="primaryText">Launch App</Text>
              </Link>
            </MenuItem>
          </Menu>
        </Box>
      )}
    </Flex>
  );
};
