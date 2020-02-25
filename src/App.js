import React, { useState, Fragment } from "react";
import {
  makeStyles,
  Container,
  CssBaseline,
  Box,
  TextField,
  Button
} from "@material-ui/core";
import { Done, Close, HelpOutline } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
// custom styles
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  submit: {
    margin: "15px 0 0 15px"
  },
  line: {
    marginTop: 20
  }
}));
// App component
export default function App() {
  // useState hook
  const [input, setInput] = useState({});
  // input change event
  const handleInputChange = e =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });
  // form submit event
  const handleSubmit = e => {
    e.preventDefault();
    setInput({
      ...input,
      reverseNumber: input.actualNumber
        .split("")
        .reverse()
        .join("")
    });
  };
  // local variables
  const { reverseNumber, newNumber } = input;
  const classes = useStyles();
  // render component
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        {!reverseNumber && (
          <form onSubmit={handleSubmit}>
            <TextField
              id="actualNumber"
              name="actualNumber"
              label="Initial Input"
              onChange={handleInputChange}
              required
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              type="submit"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        )}
        {reverseNumber && (
          <Fragment>
            <Box flexDirection="row">
              <TextField
                id="newNumber"
                name="newNumber"
                label="Match Input"
                onChange={handleInputChange}
              />
              {(newNumber &&
                (reverseNumber === newNumber ? (
                  <Done
                    style={{ color: green[500] }}
                    className={classes.line}
                  />
                ) : (
                  <Close color="secondary" className={classes.line} />
                ))) || <HelpOutline color="primary" className={classes.line} />}
            </Box>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className={classes.line}
              onClick={() => setInput({})}
            >
              Back
            </Button>
          </Fragment>
        )}
      </div>
    </Container>
  );
}
