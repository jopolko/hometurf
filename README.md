# HomeTurf - Toronto Neighborhood Comparison Tool

A comprehensive web application for comparing Toronto neighborhoods, helping families and newcomers make informed decisions about where to live based on schools, childcare, demographics, and amenities.

## Features

- **Neighborhood Comparison**: Compare up to 3 neighborhoods side-by-side
- **School Information**: Data on elementary and secondary schools from TDSB and TCDSB
- **Childcare Centers**: Licensed childcare facilities with capacity and contact info
- **Demographics**: Population statistics from 2016 and 2021 Census data
- **Interactive Map**: Visual neighborhood boundaries using GeoJSON data
- **Mobile-First Design**: Responsive interface optimized for all devices

## Live Demo

Visit: [https://joshuaopolko.com/hometurf/](https://joshuaopolko.com/hometurf/)

## Technology Stack

- **Frontend**: Vanilla JavaScript (no framework dependencies)
- **Data Sources**:
  - Toronto Open Data Portal
  - Statistics Canada Census
  - TDSB and TCDSB school data
- **APIs**: Google Places & Geocoding (via PHP proxies)
- **Hosting**: Static web app (can run anywhere)

## Project Structure

```
hometurf/
├── index.html                      # Main application (single-page app)
├── data-neighborhoods.js           # Neighborhood data (3.2MB)
├── data-schools.js                 # School information
├── data-childcare.js               # Childcare facilities
├── neighborhoods-boundaries.geojson # Map boundaries
├── geocode-proxy.php               # Google API proxy (key protection)
├── config.php                      # Environment configuration
├── .env.example                    # Environment variables template
├── SECURITY.md                     # Security documentation
└── CLAUDE.md                       # Developer documentation
```

## Setup

### Basic Setup (Viewing Only)

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hometurf.git
cd hometurf
```

2. Serve the files using any static web server:
```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

3. Open `http://localhost:8000` in your browser

### Full Setup (With Geocoding)

To enable the search/geocoding feature, you'll need Google API keys:

1. Copy the environment template:
```bash
cp .env.example .env
```

2. Get API keys from [Google Cloud Console](https://console.cloud.google.com):
   - Enable Google Places API
   - Enable Google Geocoding API
   - Create API keys with proper restrictions (see SECURITY.md)

3. Edit `.env` and add your keys:
```
GOOGLE_PLACES_API_KEY=your_places_key_here
GOOGLE_GEOCODING_API_KEY=your_geocoding_key_here
ALLOWED_ORIGIN=http://localhost:8000
```

4. Ensure PHP is available for the proxy scripts

**Important**: Never commit the `.env` file to version control. See [SECURITY.md](SECURITY.md) for detailed security setup.

## Data Sources

- **Neighborhoods**: Toronto Open Data - Neighbourhoods
- **Demographics**: Statistics Canada Census 2016 & 2021
- **Schools**: TDSB and TCDSB public school directories
- **Childcare**: Toronto Licensed Child Care Centres
- **Boundaries**: City of Toronto GeoJSON neighbourhood boundaries

## Development

This project uses a spec-driven development workflow with Claude Code. See [CLAUDE.md](CLAUDE.md) for:

- Development workflow and commands
- Project architecture
- Contributing guidelines
- Testing procedures

### Key Files

- `index.html` - All application code (HTML/CSS/JS in one file)
- `data-*.js` - Large embedded datasets (static data, no API calls needed)
- `*-proxy.php` - Security layer for Google API keys
- `.claude/` - Development workflow and specifications

## Security

This application implements several security measures:

- **API Key Protection**: Keys never exposed to client-side code
- **Rate Limiting**: Prevents API quota abuse
- **Input Validation**: All user inputs sanitized
- **CORS Protection**: Restricts API access to allowed origins

See [SECURITY.md](SECURITY.md) for complete security documentation.

## Documentation

- [CLAUDE.md](CLAUDE.md) - Developer guide and project instructions
- [SECURITY.md](SECURITY.md) - Security setup and best practices
- [API-KEY-PROTECTION.md](API-KEY-PROTECTION.md) - API key security details
- [ENV-FILE-PROTECTION.md](ENV-FILE-PROTECTION.md) - Environment variable protection
- [LAZY_LOADING_OPTIMIZATION.md](LAZY_LOADING_OPTIMIZATION.md) - Performance optimizations
- [COLLAPSIBLE_SECTIONS.md](COLLAPSIBLE_SECTIONS.md) - UI feature documentation

## Performance

- **Initial Load**: ~3.5MB compressed (includes all neighborhood data)
- **Lazy Loading**: Data files loaded on-demand
- **No Build Process**: Direct deployment, no compilation needed
- **Client-Side Processing**: All filtering and sorting done locally

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This project uses a structured development workflow. To contribute:

1. Read [CLAUDE.md](CLAUDE.md) for development guidelines
2. Follow the spec-driven development process
3. Ensure all security measures remain intact
4. Test on mobile devices

## License

MIT License - See LICENSE file for details

## Author

Jason Carter ([@jasonicarter](https://github.com/jasonicarter))

## Acknowledgments

- City of Toronto Open Data Portal
- Statistics Canada
- Toronto District School Board
- Toronto Catholic District School Board
- All the families using this tool to find their perfect neighborhood!

## Related Projects

- [KidsEvents](https://github.com/yourusername/kidsevents) - Discover free kids events in Toronto
