import React from 'react';
import { Button, Grid } from "@chakra-ui/react";


export function SeeMore(){
    return(

        <Grid 
            justifyContent= "center"
            margin= "3rem"
            marginTop= "150px"
        >
        <Button 
            alignItems= "center"
            backgroundColor="red"
            spacing="6"
            size="md"
            height="38px"
            width="120px"
            cursor="pointer"
            borderRadius="8px"
            fontWeight="bold"
            colorScheme="blue">Inscrever
        </Button>
        </Grid>
    );
}
