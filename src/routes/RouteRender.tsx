import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import { Container, SideBar, Screen } from "./style";
import { MenuBar } from "../components/MenuBar";

interface RouteProperties {
  Component: React.ComponentType;
}

interface ScreenPropertiesRouteRender {
  isLogin?: boolean;
}

interface RouteRenderProps extends RouteProperties {
  screenProps?: ScreenPropertiesRouteRender;
}

const RouteRender: React.FC<RouteRenderProps> = ({
  Component,
  screenProps,
  ...rest
}) => {
  return (
    <Container>
      {!screenProps?.isLogin && (
        <SideBar>
          <MenuBar />
        </SideBar>
      )}
      <Screen>
        <Component {...rest} />
      </Screen>
    </Container>
  );
};

export default RouteRender;
