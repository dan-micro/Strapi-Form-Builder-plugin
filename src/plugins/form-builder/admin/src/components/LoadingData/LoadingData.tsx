import { Typography } from "@mui/material";
import React, { FC, ReactElement } from "react";

import styled, { keyframes } from "styled-components";

export interface LoadingDataProps {
  loading: boolean;
  error?: any;
  customStyle?: React.CSSProperties;
  customLoaderWrapper?: (Loader: FC) => React.ReactElement;
  children(): ReactElement<any>;
}

export const LoadingData = ({
  loading,
  error,
  children,
  customLoaderWrapper,
}: LoadingDataProps) => {
  return (
    <>
      {loading || error ? (
        loading ? (
          customLoaderWrapper ? (
            customLoaderWrapper(Loader)
          ) : (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          )
        ) : (
          error && <Typography>Some thing went wrong.</Typography>
        )
      ) : (
        children()
      )}
    </>
  );
};

const Transition = keyframes`
 from {
   transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 40px;
  width: inherit;
  text-align: center;
  height: 200px;
`;

const Loader = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  border-radius: 50%;
  animation-duration: 2s;
  animation-name: ${Transition};
  animation-iteration-count: infinite;
  border: 3px solid ${({ theme }) => theme.palette.grey[300]};
  border-top: 3px solid ${({ theme }) => theme.palette.primary};
`;
