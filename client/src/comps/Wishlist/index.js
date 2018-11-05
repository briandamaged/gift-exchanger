
import React from "react";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

import styled from 'styled-components';

const StyledCard = styled(Card)`
  min-width: 250px;
  max-width: 800px;
  margin: auto;
`

const Wishlist = ()=> (
  <div>
    <StyledCard >
      <CardContent>
        <div>
          <TextField
            label="Name"
            variant="outlined"
          />
        </div>

        <div>
          <TextField
            label="Description"
            multiline
            variant="outlined"
          />
        </div>
      </CardContent>
      
    </StyledCard>

    <StyledCard >
      <CardContent>
        <div>
          <TextField
            label="Name"
            variant="outlined"
          />
        </div>

        <div>
          <TextField
            label="Description"
            multiline
            variant="outlined"
          />
        </div>
      </CardContent>
      
    </StyledCard>
  </div>
);

export default Wishlist;
