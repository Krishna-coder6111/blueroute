# BlueRoute — Boston Bikeshare Intelligence

Live site: **https://krishna-coder6111.github.io/blueroute/**

Three tools built on 24M+ Bluebikes trips (2018–2026), live GBFS, OSRM street
routing, MBTA alerts, census (ACS), and weather data:

| Page | What it does |
|---|---|
| [Route planner](https://krishna-coder6111.github.io/blueroute/) | Mixed-mode Bluebikes + T routing with live station availability, real street geometry, live MBTA delay alerts, and dock-availability prediction at your arrival time |
| [Insights Atlas](https://krishna-coder6111.github.io/blueroute/atlas/) | Map-first tour of the research: points-arbitrage flows, station traffic, fleet age, income equity, chronic surplus/deficit, and Boston's bike-lane network |
| [Presentations](https://krishna-coder6111.github.io/blueroute/showcase/) | Org-specific decks (operations, city policy, mobility analytics) |

## Data sources
- Bluebikes GBFS (live station status) & system trip data
- OSRM (FOSSGIS) bike/foot street routing on OpenStreetMap
- MBTA v3 API (rail network + live alerts)
- City of Boston Existing Bike Network (2024)
- US Census ACS block groups, NOAA daily weather

Research by Krishna Singh (Northeastern University). Analysis pipeline lives in a
separate research repo; this repo hosts the public site only.
