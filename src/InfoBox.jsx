import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import CloudySnowingIcon from "@mui/icons-material/CloudySnowing";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import OpacityIcon from "@mui/icons-material/Opacity";

import "./InfoBox.css";

export default function InfoBox({ info, isDarkMode }) {
  const defaultImage =
    "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfDB8MHx8fDA%3D";

  const weatherImages = {
    clear:
      "https://images.unsplash.com/photo-1640888760062-731cf8fa1412?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    clouds:
      "https://images.unsplash.com/photo-1620128910315-2adf643c4136?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGNsb3VkeSUyMHNreXxlbnwwfHwwfHx8MA%3D%3D",
    rain: "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDh8NDkzOTYyOXx8ZW58MHx8fHx8",
    thunderstorm:
      "https://images.unsplash.com/photo-1564343921985-91ced954364a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHRodW5kZXJzdG9ybXxlbnwwfDB8MHx8fDA%3D",
    snow: "https://images.unsplash.com/photo-1414541944151-2f3ec1cfd87d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNub3d8ZW58MHwwfDB8fHww",
    mist: "https://images.unsplash.com/photo-1729013315125-f407a6bc9e90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG1pc3R8ZW58MHwwfDB8fHww",
  };

  const weatherIcons = {
    clear: <WbSunnyIcon style={{ fontSize: 40, color: "#ffeb3b" }} />,
    clouds: <CloudIcon style={{ fontSize: 40, color: "#90a4ae" }} />,
    rain: <CloudySnowingIcon style={{ fontSize: 40, color: "#1e88e5" }} />,
    thunderstorm: (
      <ThunderstormIcon style={{ fontSize: 40, color: "#f57c00" }} />
    ),
    snow: <AcUnitIcon style={{ fontSize: 40, color: "#00bcd4" }} />,
    mist: <OpacityIcon style={{ fontSize: 40, color: "#90a4ae" }} />,
    default: <WbSunnyIcon style={{ fontSize: 40, color: "#ffeb3b" }} />,
  };

  function getWeatherKey(description) {
    if (description.includes("clear")) return "clear";
    if (description.includes("cloud")) return "clouds";
    if (description.includes("rain")) return "rain";
    if (description.includes("thunder")) return "thunderstorm";
    if (description.includes("snow")) return "snow";
    if (description.includes("mist") || description.includes("fog"))
      return "mist";
    return "default";
  }

  const weatherKey = getWeatherKey(info.weather);
  const imageUrl = weatherImages[weatherKey] || defaultImage;

  const weatherGradients = {
    clear: "linear-gradient(135deg, #fdc830 0%, #f37335 100%)",
    clouds: "linear-gradient(135deg, #8e9eab 0%, #eef2f3 100%)",
    rain: "linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)",
    thunderstorm:
      "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    snow: "linear-gradient(135deg, #e6dada 0%, #274046 100%)",
    mist: "linear-gradient(135deg, #757f9a 0%, #d7dde8 100%)",
    default: "linear-gradient(135deg, #5f2c82 0%, #49a09d 100%)",
  };

  // Define which gradients should use dark text (true) or light text (false)
  const useDarkText = {
    clear: true, // Bright yellow/orange gradient
    clouds: true, // Light gray/white gradient
    rain: false, // Blue gradient
    thunderstorm: false, // Dark purple gradient
    snow: true, // Light gradient
    mist: true, // Light gray gradient
    default: false, // Default dark purple gradient
  };

  const cardGradient = weatherGradients[weatherKey] || weatherGradients.default;
  const textColor = useDarkText[weatherKey] ? "#222222" : "white";
  const secondaryTextColor = useDarkText[weatherKey]
    ? "rgba(0,0,0,0.7)"
    : "rgba(255,255,255,0.8)";
  const borderColor = useDarkText[weatherKey]
    ? "rgba(0,0,0,0.1)"
    : "rgba(255,255,255,0.2)";
  const textShadow = useDarkText[weatherKey]
    ? "none"
    : "1px 1px 3px rgba(0,0,0,0.3)";

  return (
    <div className="InfoBox">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <Card
          sx={{
            width: { xs: "90%", sm: "80%", md: "60%", lg: "50%" },
            maxWidth: 500,
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: isDarkMode
              ? "0 8px 32px rgba(0, 0, 0, 0.5)"
              : "0 8px 32px rgba(31, 38, 135, 0.15)",
            background: cardGradient,
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            alt="weather image"
            height="240"
            image={imageUrl}
            sx={{
              objectFit: "cover",
              objectPosition: "center",
              borderBottom: `1px solid ${borderColor}`,
            }}
          />
          <CardContent sx={{ position: "relative", zIndex: 2 }}>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{
                fontWeight: 700,
                color: textColor,
                textShadow: textShadow,
              }}
            >
              {info.city
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </Typography>

            <Box sx={{ mt: 2, color: textColor }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 1,
                }}
              >
                <Typography
                  variant="h2"
                  component="div"
                  sx={{
                    fontWeight: 300,
                    fontSize: "2.4rem",
                    color: textColor,
                    mb: 1.5,
                  }}
                >
                  {info.temp}&deg;C
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 1,
                      mr: 1.5,
                    }}
                  >
                    {weatherIcons[weatherKey] || weatherIcons.default}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 400,
                      textTransform: "capitalize",
                      color: secondaryTextColor,
                      lineHeight: 2,
                    }}
                  >
                    {info.weather}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                  py: 1,
                  borderTop: `1px solid ${borderColor}`,
                  borderBottom: `1px solid ${borderColor}`,
                }}
              >
                <Typography variant="body1" sx={{ color: textColor }}>
                  High: {info.tempMax}&deg;C
                </Typography>
                <Typography variant="body1" sx={{ color: textColor }}>
                  Low: {info.tempMin}&deg;C
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  mt: 2,
                  color: secondaryTextColor,
                }}
              >
                <Typography variant="body1">
                  Feels Like: {info.feelsLike}&deg;C
                </Typography>
                <Typography variant="body1">
                  Humidity: {info.humidity}%
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
