import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Country from "./Country";

const Countries = ({ countries, handleClick }) => {
  if (countries.length === 0) {
    return <p>No matches found</p>;
  } else if (countries.length === 1) {
    return <Country country={countries[0]} />;
  } else if (countries.length > 1 && countries.length <= 10) {
    return (
      <Paper variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Country Name</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Show</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries.map((country) => (
              <TableRow key={country.name.common}>
                <TableCell style={{ fontSize: "20px" }}>
                  {country.name.common}
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    id={country.name.common}
                    onClick={handleClick}
                    fullWidth={true}
                  >
                    Click to Expand
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  } else {
    return <></>;
  }
};

export default Countries;
