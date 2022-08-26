import React from "react";
import { Flex } from "@strapi/design-system/Flex";
import { Button } from "@strapi/design-system/Button";
import styled from "styled-components";
import { FormPlayground } from "./FormPlayground";
import { FormController } from "./FormController";

const HomePage = () => {
  return (
    <Flex direction="row" wrap="wrap">
      <ButtonWrapper>
        <Button>Preview</Button>
      </ButtonWrapper>
      <FormPlayground />
      <FormController />
    </Flex>
  );
};
const ButtonWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: end;
  padding: 2rem;
`;

export default HomePage;
