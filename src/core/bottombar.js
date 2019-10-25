import React from 'react';
import Typography from '@material-ui/core/Typography';


const BottomBar = () => {
  return (
    <Typography className="fixed-bottom" variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      Stefanusdody
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default BottomBar;
