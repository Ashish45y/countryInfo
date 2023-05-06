import { useState, useEffect } from "react";
import axios from "axios";
import {
  Backdrop,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

const Country = ({ country }) => {
  const [weather, setWeather] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API}`
      )
      .then((response) => {
        setWeather(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("An error occured");
      });
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    if (error !== "") {
      return (
        <Container sx={{ marginTop: "30px" }}>
          Error: Try another Country
        </Container>
      );
    }
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card
          sx={{
            maxWidth: 250,
            marginTop: "20px",
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              src={country.flags.png}
              alt="flag"
            />

            <CardContent>
              <Typography align="center" variant="h4">
                {country.name.common}
              </Typography>
              <Typography align="center" variant="body2">
                <p>Capital: {country.capital}</p>
                <p>Area: {country.area} Sq km</p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={1}>
        <Divider orientation="vertical" sx={{ width: 5, color: "black" }} />
      </Grid>
      <Grid item xs={7} className="app">
        <div>
          <p>{weather.name}</p>
        </div>
        <div>
          {weather.main ? <h1>{weather.main.temp.toFixed()}°C</h1> : null}
        </div>
        <div>{weather.weather ? <p>{weather.weather[0].main}</p> : null}</div>

        {weather.name !== undefined && (
          <div className="bottom">
            <div>
              {weather.main ? (
                <p className="bold">{weather.main.feels_like.toFixed()}°C</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div>
              {weather.main ? (
                <p className="bold">{weather.main.humidity}%</p>
              ) : null}
              <p>Humidity</p>
            </div>
            <div>
              {weather.wind ? (
                <p className="bold">{weather.wind.speed.toFixed()} KPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default Country;
