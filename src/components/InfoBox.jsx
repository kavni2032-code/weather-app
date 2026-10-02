import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

function InfoBox({ info }) {
  return (
    <Card sx={{ maxWidth: 345, mx: 'auto', mt: 4, borderRadius: 4, boxShadow: 8 }}>      <CardContent>
        <Typography variant="h5" sx={{ textTransform: 'capitalize' }}>
          {info.city}
        </Typography>
        <Typography variant="h3">{info.temp}°C</Typography>
        <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
          {info.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Min {info.tempMin}°C · Max {info.tempMax}°C
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Humidity {info.humidity}%
        </Typography>
                <Typography variant="body2" color="text.secondary">
          Wind {info.windSpeed} m/s · Pressure {info.pressure} hPa
        </Typography>
      </CardContent>
    </Card>
  )
}

export default InfoBox