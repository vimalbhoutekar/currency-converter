# Currency Converter Application 💱

A modern, responsive web-based currency converter that provides real-time exchange rates using the FreeCurrencyAPI. Built with pure JavaScript, HTML5, and CSS3.

![Currency Converter Screenshot](./screenshot.png) <!-- Add actual screenshot path -->

## Features ✨

- **Real-time Exchange Rates**: Utilizes live currency conversion rates
- **150+ Supported Currencies**: Comprehensive currency coverage
- **Intuitive Interface**: Clean and user-friendly design
- **Dynamic Flag Display**: Auto-updating country flags based on currency selection
- **Bi-directional Conversion**: Instant swap between source and target currencies
- **Responsive Design**: Optimized for all device sizes
- **Error Handling**: Robust error management and user feedback
- **Interactive UI**: Smooth animations and transition effects

## Technologies Stack 🛠️

- **Frontend**: HTML5, CSS3 (Flexbox, Grid), JavaScript (ES6+)
- **API Integration**: [FreeCurrencyAPI](https://freecurrencyapi.com/)
- **Icon Library**: Font Awesome 6
- **Flag Resources**: FlagCDN
- **Build Tools**: Pure Vanilla JS (No dependencies)

## Prerequisites 📋

- Modern web browser (Chrome 90+, Firefox 84+, Safari 14+)
- Internet connection for API access
- FreeCurrencyAPI account for API key

# Installation

1. Clone the repository:
```bash
git clone https://github.com/vimalbhoutekar/currency-converter.git
```

2. Navigate to the project directory:
```bash
cd currency-converter
```

3. Create a `.env` file in the root directory and add your API key:
```
API_KEY=your_api_key_here
```

4. Open `index.html` in your web browser or set up a local server.


## Usage Guide 📖
### Enter Amount
- Input numerical value in the amount field.
- **Default:** 1 (automatically converts if field is empty).

### Select Currencies
- Choose **source currency** (From dropdown).
- Choose **target currency** (To dropdown).
- **Flags automatically update** with selections.

### Convert Currency
- Click **"Get Exchange Rate"** button.
- View conversion result in **message area**.

### Swap Currencies
- Click the **↔️ icon** between dropdowns.
- Instant swap with **preserved amount**.

## API Reference 🌐
### Endpoint
`https://api.freecurrencyapi.com/v1/latest`

### Parameters
| Parameter      | Description                           | Required |
|-------------- |-----------------------------------|----------|
| `apikey`      | Your API key                        | Yes      |
| `base_currency` | Source currency code (e.g., USD)  | Yes      |
| `currencies`  | Target currency code (e.g., EUR)  | Yes      |

### Example Request
```javascript
${BASE_URL}&currencies=EUR&base_currency=USD
```

## Project Structure

```
currency-converter/
├── index.html          # Main HTML file
├── style.css          # Stylesheet
├── script.js          # JavaScript logic
└── README.md          # Documentation
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Known Issues

- Some currency flags might not load if the FlagCDN service is down
- API rate limits may apply based on your FreeCurrency API subscription plan

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [FreeCurrency API](https://freecurrencyapi.com/) for exchange rate data
- [FlagCDN](https://flagcdn.com/) for country flags
- [Font Awesome](https://fontawesome.com/) for icons

## Contact

Your Name - [@Vimal Bhoutekar](https://github.com/vimalbhoutekar)

Project Link: [https://github.com/vimalbhoutekar/currency-converter](https://github.com/vimalbhoutekar/currency-converter)



