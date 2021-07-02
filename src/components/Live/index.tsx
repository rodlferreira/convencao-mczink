import React from "react";
import { AspectRatio, Grid, Text } from "@chakra-ui/react";

// This video will have equal sides
export function Live() {
  return (
    <Grid alignItems="center" marginLeft="380px" marginTop="50px">
      <Grid background-color="pink" align-itens="center" justify-content="center" margin="50px" ml="110px">
        <h1>Acompanhe tudo ao vivo</h1>
      </Grid>

      <AspectRatio maxW="560px" ratio={1}>
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>
    </Grid>
  );
}
