const products = [
  {
    id: 1,
    title: "The Ultimate",
    fulltitle: "RAKSHAK THE ULTIMATE WATCH FOR MEN IN BLACK",
    brand: 'Rakshak',
    imageUrl: "images/Watches/arsenalRakshak.jpg",
    alt: "Watch",
    newPrice: 99999998,
    oldPrice: 99999999,
    rating: "5",
    numberOfRating: "88888",
    description: "Wrist worthy special crafted for luxury and style",
    fullDescription: "Precision Quartz Movement Water-Resistant up to 50m Scratch-Resistant Sapphire Glass Stainless Steel Build Elegant Minimalist Design",
    category: ["Mens", "Pocket", "Luxury"],
  },
  {
    id: 2,
    title: "Brollna",
    fulltitle: "BROLLNA CLASSIC MENS ANALOGUE WATCH IN BLACK",
    brand: 'Brollna',
    imageUrl: "images/Watches/barcelona.jpg",
    alt: "Watch",
    newPrice: 13200,
    oldPrice: 17000,
    rating: "4.5",
    numberOfRating: "3120",
    description: "Classic Analog Display, Stainless Steel Band, Water-Resistant up to 100m",
    fullDescription: "Classic Analog Display, Stainless Steel Band, Water-Resistant up to 100m, Quartz Movement, Scratch-Resistant Mineral Glass",
    category: ["Mens", "Luxury", "Vintage"],
  },
  {
    id: 3,
    title: "Nacar",
    fulltitle: "NACAR STYLISH MEN'S AUTOMATIC WATCH IN GOLD",
    brand: 'Nacar',
    imageUrl: "images/Watches/Nacar.jpg",
    alt: "Watch",
    newPrice: 14000,
    oldPrice: 18500,
    rating: "4.8",
    numberOfRating: "2480",
    description: "Automatic Movement, Elegant Gold Design, Water-Resistant up to 50m",
    fullDescription: "Automatic Movement, Elegant Gold Design, Water-Resistant up to 50m, Exhibition Case Back, Comfortable Leather Strap",
    category: ["Mens", "Luxury", "Vintage"],
  },
  {
    id: 4,
    title: "Breitling",
    fulltitle: "BREITLING NAVITIMER FOR PROFESSIONAL PILOTS",
    brand: 'Breitling',
    imageUrl: "images/Watches/breitling.jpeg",
    alt: "Watch",
    newPrice: 150000,
    oldPrice: 180000,
    rating: "4.9",
    numberOfRating: "3200",
    description: "Chronograph Function, Rotating Bezel, Water-Resistant up to 200m",
    fullDescription: "Chronograph Function, Rotating Bezel, Water-Resistant up to 200m, Scratch-Resistant Sapphire Crystal, Professional Design",
    category: ["Mens", "Luxury", "Vintage"],
  },
  {
    id: 5,
    title: "Polex",
    fulltitle: "POLEX LUXURY MEN'S WATCH WITH BLUE DIAL",
    brand: 'Polex',
    imageUrl: "images/Watches/Polex.jpg",
    alt: "Watch",
    newPrice: 22500,
    oldPrice: 28000,
    rating: "4.6",
    numberOfRating: "4890",
    description: "Stainless Steel Build, Water-Resistant up to 150m, Luxurious Blue Dial",
    fullDescription: "Stainless Steel Build, Water-Resistant up to 150m, Luxurious Blue Dial, Automatic Movement, Date Display",
    category: ["Mens", "Luxury", "Vintage"],
  },
  {
    id: 6,
    title: "Sapphire",
    fulltitle: "SAPPHIRE ELEGANT WOMEN'S WATCH IN PINK GOLD",
    brand: 'Sapphire',
    imageUrl: "images/Watches/Sapphire.jpg",
    alt: "Watch",
    newPrice: 10000,
    oldPrice: 12500,
    rating: "4.3",
    numberOfRating: "1600",
    description: "Elegant Pink Gold Case, Quartz Movement, Water-Resistant up to 30m",
    fullDescription: "Elegant Pink Gold Case, Quartz Movement, Water-Resistant up to 30m, Stylish Design, Comfortable Strap",
    category: ["Womens", "Luxury", "Vintage"],
  },
  {
    id: 7,
    title: "Seiko",
    fulltitle: "SEIKO DIVER'S WATCH WITH BLACK DIAL",
    brand: 'Seiko',
    imageUrl: "images/Watches/Seiko.jpg",
    alt: "Watch",
    newPrice: 18000,
    oldPrice: 22000,
    rating: "4.7",
    numberOfRating: "5300",
    description: "Divers Watch with Stainless Steel Case, Water-Resistant up to 200m",
    fullDescription: "Divers Watch with Stainless Steel Case, Water-Resistant up to 200m, Automatic Movement, Luminescent Hands, Date Display",
    category: ["Mens", "Luxury"],
  },
  {
    id: 8,
    title: "smartWatch",
    fulltitle: "SMARTWATCH FITNESS TRACKER WITH TOUCHSCREEN",
    brand: 'SmartTech',
    imageUrl: "images/Watches/smartWatch.jpg",
    alt: "Watch",
    newPrice: 8500,
    oldPrice: 10000,
    rating: "4.4",
    numberOfRating: "4000",
    description: "Fitness Tracker with Touchscreen, Heart Rate Monitor, Water-Resistant",
    fullDescription: "Fitness Tracker with Touchscreen, Heart Rate Monitor, Water-Resistant up to 50m, Sleep Tracker, Customizable Watch Faces",
    category: ["Smart", "Mens", "Luxury"],
  },
  {
    id: 9,
    title: "TechWear",
    fulltitle: "TECHWEAR SMARTWATCH WITH AMOLED SCREEN",
    brand: 'TechWear',
    imageUrl: "images/Watches/techWear.webp",
    alt: "Watch",
    newPrice: 15000,
    oldPrice: 18000,
    rating: "4.8",
    numberOfRating: "2100",
    description: "AMOLED Display, Fitness Tracker, Water-Resistant up to 100m",
    fullDescription: "AMOLED Display, Fitness Tracker, Water-Resistant up to 100m, Heart Rate Monitor, Notification Alerts",
    category: ["Smart", "Mens", "Luxury"],
  },
  {
    id: 10,
    title: "Timex",
    fulltitle: "TIMEX CLASSIC MEN'S WATCH WITH SILVER DIAL",
    brand: 'Timex',
    imageUrl: "images/Watches/Timex.jpg",
    alt: "Watch",
    newPrice: 9500,
    oldPrice: 11000,
    rating: "4.6",
    numberOfRating: "6700",
    description: "Classic Analog Watch, Water-Resistant up to 50m, Comfortable Leather Strap",
    fullDescription: "Classic Analog Watch, Water-Resistant up to 50m, Comfortable Leather Strap, Quartz Movement, Date Display",
    category: ["Mens", "Luxury", "Vintage"],
  },
  {
    id: 11,
    title: "Tirrost",
    fulltitle: "TIRROST LUXURY WATCH WITH BLUE LEATHER STRAP",
    brand: 'Tirrost',
    imageUrl: "images/Watches/Tirrost.jpg",
    alt: "Watch",
    newPrice: 14500,
    oldPrice: 18500,
    rating: "4.6",
    numberOfRating: "2300",
    description: "Luxury Blue Leather Strap, Water-Resistant up to 50m",
    fullDescription: "Luxury Blue Leather Strap, Water-Resistant up to 50m, Quartz Movement, Stainless Steel Case, Date Function",
    category: ["Mens", "Luxury", "Vintage"],
  },
  {
    id: 12,
    title: "Trinda",
    fulltitle: "TRINDA MODERN WOMEN'S WATCH WITH GOLD CASE",
    brand: 'Trinda',
    imageUrl: "images/Watches/Trinda.jpg",
    alt: "Watch",
    newPrice: 11200,
    oldPrice: 13500,
    rating: "4.7",
    numberOfRating: "1500",
    description: "Elegant Gold Case, Quartz Movement, Water-Resistant up to 30m",
    fullDescription: "Elegant Gold Case, Quartz Movement, Water-Resistant up to 30m, Stylish Leather Strap, Date Display",
    category: ["Womens", "Luxury", "Vintage"],
  },
  {
    id: 13,
    title: "Rolex Submariner",
    fulltitle: "Rolex Submariner Stainless Steel Watch",
    brand: "Rolex",
    imageUrl: "images/Watches/RolexSubmariner.avif",
    alt: "Watch",
    newPrice: 8500,
    oldPrice: 9500,
    rating: "4.8",
    numberOfRating: "1200",
    description: "Iconic luxury watch with a rotating bezel and water resistance.",
    fullDescription: "The Rolex Submariner is a classic diving watch, made from high-quality stainless steel with a rotating bezel. Its water resistance makes it ideal for underwater exploration, while the elegant design ensures it works well in both casual and formal settings.",
    category: ["Mens"]
  },
  {
    id: 14,
    title: "Omega Seamaster",
    fulltitle: "Omega Seamaster Diver 300M Co-Axial Master Chronometer",
    brand: "Omega",
    imageUrl: "images/Watches/OmegaSeamaster.jpg",
    alt: "Watch",
    newPrice: 5500,
    oldPrice: 6000,
    rating: "4.7",
    numberOfRating: "800",
    description: "Elegant dive watch with superior chronometric performance.",
    fullDescription: "Omega Seamaster is designed for divers who need precise timekeeping in the water. Equipped with the co-axial movement and 300-meter water resistance, this watch combines style and functionality.",
    category: ["Mens"]
  },
  {
    id: 15,
    title: "TAG Heuer Carrera",
    fulltitle: "TAG Heuer Carrera Calibre 16 Chronograph",
    brand: "TAG Heuer",
    imageUrl: "images/Watches/TAGHeuerCarrera.webp",
    alt: "Watch",
    newPrice: 3200,
    oldPrice: 3500,
    rating: "4.5",
    numberOfRating: "650",
    description: "Sleek chronograph for motorsport enthusiasts.",
    fullDescription: "Inspired by motor racing, the TAG Heuer Carrera offers precise chronograph functions, a bold design, and a sophisticated automatic movement.",
    category: ["Mens"]
  },
  {
    id: 16,
    title: "Breitling Navitimer",
    fulltitle: "Breitling Navitimer Automatic 41",
    brand: "Breitling",
    imageUrl: "images/Watches/BreitlingNavitimer.webp",
    alt: "Watch",
    newPrice: 4700,
    oldPrice: 5200,
    rating: "4.6",
    numberOfRating: "900",
    description: "Classic aviation-inspired watch with a unique slide rule.",
    fullDescription: "The Breitling Navitimer is the watch for pilots. Its distinctive slide rule allows for complex aviation-related calculations, and it’s powered by a precise automatic movement.",
    category: ["Mens"]
  },
  {
    id: 17,
    title: "Seiko Presage",
    fulltitle: "Seiko Presage Cocktail Time Blue",
    brand: "Seiko",
    imageUrl: "images/Watches/SeikoPresage.jpg",
    alt: "Watch",
    newPrice: 450000,
    oldPrice: 500000,
    rating: "4.3",
    numberOfRating: "400",
    description: "Elegant mechanical watch with a stunning dial design.",
    fullDescription: "Seiko Presage Cocktail Time features a stunning sunburst dial with a rich blue hue. Powered by Seiko’s reliable mechanical movement, this watch offers both beauty and precision.",
    category: ["Mens"]
  },
  {
    id: 18,
    title: "Patek Philippe Nautilus",
    fulltitle: "Patek Philippe Nautilus 5711/1A",
    brand: "Patek Philippe",
    imageUrl: "images/Watches/PatekPhilippeNautilus.jpg",
    alt: "Watch",
    newPrice: 30000,
    oldPrice: 35000,
    rating: "5.0",
    numberOfRating: "200",
    description: "A luxurious and iconic design in the world of watches.",
    fullDescription: "The Patek Philippe Nautilus is a symbol of luxury. Known for its unique porthole design, it is highly sought after by watch collectors and enthusiasts for its craftsmanship and timeless appeal.",
    category: ["Mens"]
  },
  {
    id: 19,
    title: "Audemars Piguet Royal Oak",
    fulltitle: "Audemars Piguet Royal Oak 15400ST",
    brand: "Audemars Piguet",
    imageUrl: "images/Watches/AudemarsPiguetRoyalOak.webp",
    alt: "Watch",
    newPrice: 24000,
    oldPrice: 27000,
    rating: "4.9",
    numberOfRating: "500",
    description: "A sophisticated luxury watch with an iconic octagonal bezel.",
    fullDescription: "The Royal Oak by Audemars Piguet is known for its distinct octagonal bezel and integrated bracelet. With superior craftsmanship and iconic design, it is one of the most prestigious luxury watches in the world.",
    category: ["Mens"]
  },
  {
    id: 20,
    title: "Citizen Eco-Drive",
    fulltitle: "Citizen Eco-Drive Promaster Diver",
    brand: "Citizen",
    imageUrl: "images/Watches/CitizenEco-Drive.jpg",
    alt: "Watch",
    newPrice: 250000,
    oldPrice: 300000,
    rating: "4.4",
    numberOfRating: "550",
    description: "Environmentally friendly, solar-powered dive watch.",
    fullDescription: "The Citizen Eco-Drive is powered by light and does not require a battery change. This dive watch is perfect for those looking for a reliable timepiece with a low environmental impact.",
    category: ["Mens"]
  },
  {
    id: 21,
    title: "Casio G-Shock",
    fulltitle: "Casio G-Shock DW-5600E",
    brand: "Casio",
    imageUrl: "images/Watches/CasioG-Shock.avif",
    alt: "Watch",
    newPrice: 60000,
    oldPrice: 80000,
    rating: "4.8",
    numberOfRating: "2500",
    description: "Shock-resistant digital watch with backlight.",
    fullDescription: "The Casio G-Shock is built to withstand extreme conditions. With a digital display, shock resistance, and water resistance, it’s the perfect watch for those with an active lifestyle.",
    category: ["Mens"]
  },
  {
    id: 22,
    title: "Hamilton Khaki Field",
    fulltitle: "Hamilton Khaki Field Mechanical",
    brand: "Hamilton",
    imageUrl: "images/Watches/HamiltonKhakiField.jpg",
    alt: "Watch",
    newPrice: 375000,
    oldPrice: 420000,
    rating: "4.7",
    numberOfRating: "600",
    description: "Rugged and reliable military-inspired mechanical watch.",
    fullDescription: "The Hamilton Khaki Field is a rugged and reliable watch designed for outdoor use. Its military-inspired design and mechanical movement make it a favorite among adventure seekers.",
    category: ["Mens"]
  },
  {
    id: 23,
    title: "Longines Master Collection",
    fulltitle: "Longines Master Collection Chronograph",
    brand: "Longines",
    imageUrl: "images/Watches/LonginesMasterCollection.jpg",
    alt: "Watch",
    newPrice: 3200,
    oldPrice: 3500,
    rating: "4.6",
    numberOfRating: "750",
    description: "Elegant chronograph with a classic design.",
    fullDescription: "The Longines Master Collection features a sophisticated chronograph with elegant aesthetics. Known for its Swiss craftsmanship, it offers both function and beauty.",
    category: ["Mens"]
  },
  {
    id: 24,
    title: "IWC Big Pilot",
    fulltitle: "IWC Big Pilot's Watch 43",
    brand: "IWC",
    imageUrl: "images/Watches/IWCBigPilot.jpg",
    alt: "Watch",
    newPrice: 8000,
    oldPrice: 9000,
    rating: "4.9",
    numberOfRating: "650",
    description: "Large, bold pilot’s watch with precise timekeeping.",
    fullDescription: "The IWC Big Pilot’s Watch is designed for aviators who need a reliable and accurate timepiece. Its oversized case and clear dial ensure readability in all conditions.",
    category: ["Mens"]
  },
  {
    id: 25,
    title: "Seiko Quartz",
    fulltitle: "Seiko Quartz White Dial",
    brand: "Seiko",
    imageUrl: "images/Watches/SeikoQuartz.jpg",
    alt: "Watch",
    newPrice: 150000,
    oldPrice: 180000,
    rating: "4.4",
    numberOfRating: "800",
    description: "Affordable and reliable everyday watch.",
    fullDescription: "The Seiko Quartz White Dial watch is an affordable and stylish timepiece, featuring a clean white dial and stainless steel bracelet, perfect for daily wear.",
    category: ["Womens"]
  },
  {
    id: 26,
    title: "Apple Watch",
    fulltitle: "Apple Watch Series 10",
    brand: "Apple",
    imageUrl: "images/Watches/AppleWatchSeries10.jpg",
    alt: "Smartwatch",
    newPrice: 399000,
    oldPrice: 450000,
    rating: "4.7",
    numberOfRating: "5000",
    description: "High-tech smartwatch with fitness tracking.",
    fullDescription: "The Apple Watch Series 10 features advanced fitness tracking, seamless iOS integration, and a variety of customizable watch faces.",
    category: ["Womens", "Smartwatch"]
  },
  {
    id: 27,
    title: "Citizen Dress Watch",
    fulltitle: "Citizen Classic Dress Watch",
    brand: "Citizen",
    imageUrl: "images/Watches/CitizenDressWatch.jpg",
    alt: "Watch",
    newPrice: 250000,
    oldPrice: 300000,
    rating: "4.5",
    numberOfRating: "650",
    description: "Minimalist black leather strap dress watch.",
    fullDescription: "A sleek and stylish timepiece, the Citizen Classic Dress Watch features a black leather strap and silver-tone case, perfect for formal occasions.",
    category: ["Womens"]
  },
  {
    id: 28,
    title: "Rolex Day-Date",
    fulltitle: "Rolex Day-Date President",
    brand: "Rolex",
    imageUrl: "images/Watches/RolexDayDate.jpg",
    alt: "Luxury Watch",
    newPrice: 12000,
    oldPrice: 13000,
    rating: "4.9",
    numberOfRating: "400",
    description: "Luxury timepiece with day-date display.",
    fullDescription: "The Rolex Day-Date, also known as the 'President' watch, is a symbol of prestige, featuring an 18k gold case and day-date functionality.",
    category: ["Womens", "Luxury"]
  },
  {
    id: 29,
    title: "BVLGARI Serpenti",
    fulltitle: "BVLGARI Serpenti Tubogas",
    brand: "BVLGARI",
    imageUrl: "images/Watches/BvlgariSerpenti.jpg",
    alt: "Watch",
    newPrice: 9800,
    oldPrice: 10500,
    rating: "4.8",
    numberOfRating: "300",
    description: "Serpent-inspired luxury design.",
    fullDescription: "The BVLGARI Serpenti Tubogas watch features a bold, serpent-like coiled bracelet and exquisite craftsmanship, making it a true fashion statement.",
    category: ["Womens", "Luxury"]
  },
  {
    id: 30,
    title: "JLC Reverso",
    fulltitle: "Jaeger-LeCoultre Reverso Duetto",
    brand: "Jaeger-LeCoultre",
    imageUrl: "images/Watches/JLCReversoDuetto.webp",
    alt: "Watch",
    newPrice: 8500,
    oldPrice: 9200,
    rating: "4.9",
    numberOfRating: "250",
    description: "Elegant reversible watch with two dials.",
    fullDescription: "The Jaeger-LeCoultre Reverso Duetto features two contrasting dials and an Art Deco-inspired design, offering versatility and luxury in one timepiece.",
    category: ["Womens", "Luxury"]
  },
  {
    id: 31,
    title: "Rolex Datejust",
    fulltitle: "Rolex Datejust 31mm",
    brand: "Rolex",
    imageUrl: "images/Watches/RolexDatejust.jpg",
    alt: "Luxury Watch",
    newPrice: 9000,
    oldPrice: 9600,
    rating: "4.9",
    numberOfRating: "500",
    description: "Iconic Rolex with date function.",
    fullDescription: "The Rolex Datejust 31mm is a timeless and versatile luxury watch, featuring a classic design and high-end materials.",
    category: ["Womens", "Luxury"]
  },
  {
    id: 32,
    title: "Nomos Tangente",
    fulltitle: "Nomos Tangente Manual-Wind",
    brand: "Nomos",
    imageUrl: "images/Watches/NomosTangente.jpg",
    alt: "Watch",
    newPrice: 2200,
    oldPrice: 2500,
    rating: "4.6",
    numberOfRating: "700",
    description: "Minimalist Bauhaus-inspired design.",
    fullDescription: "The Nomos Tangente features a clean, Bauhaus-inspired aesthetic with a manual-wind movement, ideal for those who appreciate simplicity and precision.",
    category: ["Womens"]
  },
  {
    id: 33,
    title: "Patek Nautilus",
    fulltitle: "Patek Philippe Nautilus",
    brand: "Patek Philippe",
    imageUrl: "images/Watches/PatekNautilus.jpg",
    alt: "Luxury Watch",
    newPrice: 45000,
    oldPrice: 48000,
    rating: "5.0",
    numberOfRating: "100",
    description: "Highly sought-after luxury sports watch.",
    fullDescription: "The Patek Philippe Nautilus is a coveted luxury sports watch, known for its porthole-inspired design and exceptional craftsmanship.",
    category: ["Womens", "Luxury"]
  },
  {
    id: 34,
    title: "Omega Speedmaster",
    fulltitle: "Omega Speedmaster Reduced",
    brand: "Omega",
    imageUrl: "images/Watches/OmegaSpeedmaster.avif",
    alt: "Chronograph Watch",
    newPrice: 3500,
    oldPrice: 3800,
    rating: "4.7",
    numberOfRating: "900",
    description: "Compact version of the Moonwatch.",
    fullDescription: "The Omega Speedmaster Reduced is a smaller alternative to the classic Moonwatch, offering the same chronograph functionality in a compact design.",
    category: ["Womens"]
  },
  {
    id: 35,
    title: "Casio Vintage",
    fulltitle: "Casio LA670WGA-1 Digital",
    brand: "Casio",
    imageUrl: "images/Watches/CasioVintage.jpg",
    alt: "Watch",
    newPrice: 50000,
    oldPrice: 60000,
    rating: "4.3",
    numberOfRating: "1200",
    description: "Retro-inspired digital watch.",
    fullDescription: "The Casio LA670WGA-1 is a vintage-style digital watch with a gold-tone finish, blending nostalgia with modern practicality.",
    category: ["Womens", "Vintage"]
  },
  {
    id: 36,
    title: "Cartier Tank Française",
    fulltitle: "Cartier Tank Française Quartz",
    brand: "Cartier",
    imageUrl: "images/Watches/CartierTankFrancaise.avif",
    alt: "Watch",
    newPrice: 4500,
    oldPrice: 4800,
    rating: "4.8",
    numberOfRating: "1200",
    description: "A timeless rectangular classic with Roman numerals.",
    fullDescription: "The Cartier Tank Française Quartz is an elegant and sophisticated timepiece, featuring a sleek rectangular case and classic Roman numeral dial.",
    category: ["Womens"]
  },
  {
    "id": 37,
    "title": "Eternal Timekeeper",
    "fulltitle": "Eternal Timekeeper Mechanical Pocket Watch",
    "brand": "Heritage Horology",
    "imageUrl": "images/Watches/EternalTimekeeper.jpg",
    "alt": "Pocket Watch",
    "newPrice": 150000,
    "oldPrice": 180000,
    "rating": "4.6",
    "numberOfRating": "850",
    "description": "A vintage-inspired mechanical pocket watch.",
    "fullDescription": "The Eternal Timekeeper features a hand-wound mechanical movement encased in a beautifully engraved brass housing, offering a glimpse into horological craftsmanship.",
    "category": ["Pocket"]
  },
  {
    "id": 38,
    "title": "Regal Sentinel",
    "fulltitle": "Regal Sentinel Classic Pocket Watch",
    "brand": "Timeless Legacy",
    "imageUrl": "images/Watches/RegalSentinel.jpg",
    "alt": "Pocket Watch",
    "newPrice": 165000,
    "oldPrice": 190000,
    "rating": "4.7",
    "numberOfRating": "920",
    "description": "A classic pocket watch with a regal touch.",
    "fullDescription": "The Regal Sentinel boasts a gold-plated case with Roman numerals and a precision quartz movement, making it both elegant and reliable.",
    "category": ["Pocket"]
  },
  {
    "id": 39,
    "title": "Imperial Voyager",
    "fulltitle": "Imperial Voyager Skeleton Pocket Watch",
    "brand": "Grand Horology",
    "imageUrl": "images/Watches/ImperialVoyager.jpg",
    "alt": "Pocket Watch",
    "newPrice": 175000,
    "oldPrice": 210000,
    "rating": "4.8",
    "numberOfRating": "1050",
    "description": "A skeleton pocket watch showcasing fine mechanics.",
    "fullDescription": "With an exposed gear design, the Imperial Voyager lets you marvel at its intricate inner workings while maintaining a sophisticated style.",
    "category": ["Pocket"]
  },
  {
    "id": 40,
    "title": "Vintage Elegance",
    "fulltitle": "Vintage Elegance Quartz Pocket Watch",
    "brand": "Classic Timepieces",
    "imageUrl": "images/Watches/VintageElegance.jpg",
    "alt": "Pocket Watch",
    "newPrice": 130000,
    "oldPrice": 160000,
    "rating": "4.5",
    "numberOfRating": "780",
    "description": "A quartz pocket watch with vintage charm.",
    "fullDescription": "The Vintage Elegance pocket watch features a silver-tone case with an intricate floral engraving and a reliable quartz movement.",
    "category": ["Pocket","Vintage"]
  },
  {
    "id": 41,
    "title": "Majestic Gear",
    "fulltitle": "Majestic Gear Hand-Wound Pocket Watch",
    "brand": "Prestige Horology",
    "imageUrl": "images/Watches/MajesticGear.jpg",
    "alt": "Pocket Watch",
    "newPrice": 185000,
    "oldPrice": 220000,
    "rating": "4.9",
    "numberOfRating": "1100",
    "description": "A hand-wound masterpiece for collectors.",
    "fullDescription": "The Majestic Gear features a fully mechanical movement with a see-through dial that highlights the art of traditional watchmaking.",
    "category": ["Pocket"]
  },
  {
    "id": 42,
    "title": "Silver Guardian",
    "fulltitle": "Silver Guardian Open-Face Pocket Watch",
    "brand": "Legacy Watches",
    "imageUrl": "images/Watches/SilverGuardian.jpg",
    "alt": "Pocket Watch",
    "newPrice": 140000,
    "oldPrice": 170000,
    "rating": "4.6",
    "numberOfRating": "860",
    "description": "A sleek open-face pocket watch.",
    "fullDescription": "The Silver Guardian is designed with a polished silver case, an open-face display, and a clear Arabic numeral dial for easy readability.",
    "category": ["Pocket"]
  },
  {
    "id": 43,
    "title": "Golden Epoch",
    "fulltitle": "Golden Epoch Engraved Pocket Watch",
    "brand": "Timeless Heirloom",
    "imageUrl": "images/Watches/GoldenEpoch.jpg",
    "alt": "Pocket Watch",
    "newPrice": 195000,
    "oldPrice": 230000,
    "rating": "4.8",
    "numberOfRating": "970",
    "description": "A gold-plated pocket watch with fine engravings.",
    "fullDescription": "The Golden Epoch features a hand-engraved case with an ornate vintage design, blending beauty with function.",
    "category": ["Pocket"]
  },
  {
    "id": 44,
    "title": "Royal Heritage",
    "fulltitle": "Royal Heritage Hunter Case Pocket Watch",
    "brand": "Elite Timekeepers",
    "imageUrl": "images/Watches/RoyalHeritage.jpg",
    "alt": "Pocket Watch",
    "newPrice": 160000,
    "oldPrice": 190000,
    "rating": "4.7",
    "numberOfRating": "890",
    "description": "A hunter-case pocket watch with a classic appeal.",
    "fullDescription": "The Royal Heritage features a hunter-case design with a spring-hinged cover, protecting its delicate face while offering a touch of nostalgia.",
    "category": ["Pocket","Vintage"]
  },
  {
    "id": 45,
    "title": "Chrono Baron",
    "fulltitle": "Chrono Baron Dual-Time Pocket Watch",
    "brand": "Master Horology",
    "imageUrl": "images/Watches/ChronoBaron.jpg",
    "alt": "Pocket Watch",
    "newPrice": 210000,
    "oldPrice": 250000,
    "rating": "4.9",
    "numberOfRating": "1150",
    "description": "A dual-time pocket watch with precision engineering.",
    "fullDescription": "The Chrono Baron features a dual-time display, allowing world travelers to track multiple time zones with ease.",
    "category": ["Pocket"]
  },
  {
    "id": 46,
    "title": "Steampunk Legacy",
    "fulltitle": "Steampunk Legacy Mechanical Pocket Watch",
    "brand": "Retro Horology",
    "imageUrl": "images/Watches/SteampunkLegacy.jpg",
    "alt": "Pocket Watch",
    "newPrice": 145000,
    "oldPrice": 175000,
    "rating": "4.6",
    "numberOfRating": "830",
    "description": "A mechanical pocket watch with steampunk aesthetics.",
    "fullDescription": "The Steampunk Legacy features exposed gears, copper detailing, and a unique Victorian-era industrial charm.",
    "category": ["Pocket"]
  },
  {
    "id": 47,
    "title": "Celestial Navigator",
    "fulltitle": "Celestial Navigator Astronomical Pocket Watch",
    "brand": "Astro Time",
    "imageUrl": "images/Watches/CelestialNavigator.jpg",
    "alt": "Pocket Watch",
    "newPrice": 220000,
    "oldPrice": 260000,
    "rating": "5.0",
    "numberOfRating": "1250",
    "description": "A celestial-themed pocket watch with astronomical details.",
    "fullDescription": "The Celestial Navigator features an intricately designed dial inspired by the stars and constellations, making it a masterpiece for stargazers.",
    "category": ["Pocket"]
  },
  {
    "id": 48,
    "title": "Antique Prestige",
    "fulltitle": "Antique Prestige Handcrafted Pocket Watch",
    "brand": "Vintage Masters",
    "imageUrl": "images/Watches/AntiquePrestige.jpg",
    "alt": "Pocket Watch",
    "newPrice": 175000,
    "oldPrice": 210000,
    "rating": "4.8",
    "numberOfRating": "980",
    "description": "A handcrafted antique-style pocket watch.",
    "fullDescription": "The Antique Prestige is a meticulously handcrafted timepiece featuring hand-etched details and an old-world charm.",
    "category": ["Pocket"]
  },
  {
    "id": 49,
    "title": "NeoFit Pro",
    "fulltitle": "NeoFit Pro Advanced Smartwatch",
    "brand": "TechWear",
    "imageUrl": "images/Watches/NeoFitPro.jpg",
    "alt": "Smart Watch",
    "newPrice": 220000,
    "oldPrice": 260000,
    "rating": "4.8",
    "numberOfRating": "1200",
    "description": "A sleek smartwatch with fitness tracking.",
    "fullDescription": "The NeoFit Pro offers advanced fitness tracking, heart rate monitoring, and built-in GPS for an active lifestyle.",
    "category": ["Smart"]
  },
  {
    "id": 50,
    "title": "Titan X",
    "fulltitle": "Titan X Rugged Smartwatch",
    "brand": "X-Tech",
    "imageUrl": "images/Watches/TitanX.jpg",
    "alt": "Smart Watch",
    "newPrice": 250000,
    "oldPrice": 290000,
    "rating": "4.9",
    "numberOfRating": "1350",
    "description": "A rugged smartwatch built for extreme conditions.",
    "fullDescription": "The Titan X features a military-grade design, waterproof capabilities, and a long battery life for outdoor adventurers.",
    "category": ["Smart"]
  },
  {
    "id": 51,
    "title": "PulseTrack Elite",
    "fulltitle": "PulseTrack Elite Health Smartwatch",
    "brand": "WellnessTech",
    "imageUrl": "images/Watches/PulseTrackElite.jpg",
    "alt": "Smart Watch",
    "newPrice": 180000,
    "oldPrice": 210000,
    "rating": "4.7",
    "numberOfRating": "950",
    "description": "A smartwatch with advanced health tracking.",
    "fullDescription": "The PulseTrack Elite provides ECG monitoring, SpO2 tracking, and a sleep analyzer for optimal health insights.",
    "category": ["Smart"]
  },
  {
    "id": 52,
    "title": "AeroSync 2",
    "fulltitle": "AeroSync 2 GPS Smartwatch",
    "brand": "SyncWear",
    "imageUrl": "images/Watches/AeroSync2.jpg",
    "alt": "Smart Watch",
    "newPrice": 199000,
    "oldPrice": 240000,
    "rating": "4.6",
    "numberOfRating": "870",
    "description": "A GPS smartwatch for travelers.",
    "fullDescription": "The AeroSync 2 features real-time GPS tracking, offline maps, and an altimeter for precise navigation.",
    "category": ["Smart"]
  },
  {
    "id": 53,
    "title": "Vortex Prime",
    "fulltitle": "Vortex Prime AMOLED Smartwatch",
    "brand": "Infinity Wear",
    "imageUrl": "images/Watches/VortexPrime.jpg",
    "alt": "Smart Watch",
    "newPrice": 230000,
    "oldPrice": 270000,
    "rating": "4.8",
    "numberOfRating": "1100",
    "description": "A premium smartwatch with an AMOLED display.",
    "fullDescription": "The Vortex Prime boasts a stunning AMOLED display, voice assistant integration, and seamless smartphone connectivity.",
    "category": ["Smart"]
  },
  {
    "id": 54,
    "title": "ChronoActive S",
    "fulltitle": "ChronoActive S Sports Smartwatch",
    "brand": "SportyTech",
    "imageUrl": "images/Watches/ChronoActiveS.jpg",
    "alt": "Smart Watch",
    "newPrice": 175000,
    "oldPrice": 200000,
    "rating": "4.5",
    "numberOfRating": "820",
    "description": "A lightweight smartwatch for athletes.",
    "fullDescription": "The ChronoActive S offers multi-sport tracking, sweat resistance, and advanced performance metrics for athletes.",
    "category": ["Smart"]
  },
  {
    "id": 55,
    "title": "Zenith Watch GT",
    "fulltitle": "Zenith Watch GT Flagship Smartwatch",
    "brand": "ZenTech",
    "imageUrl": "images/Watches/ZenithWatchGT.jpg",
    "alt": "Smart Watch",
    "newPrice": 260000,
    "oldPrice": 300000,
    "rating": "4.9",
    "numberOfRating": "1450",
    "description": "A flagship smartwatch with a luxury finish.",
    "fullDescription": "The Zenith Watch GT combines premium materials with top-tier performance, featuring an ultra-clear display and wireless charging.",
    "category": ["Smart"]
  },
  {
    "id": 56,
    "title": "LumeSense 5",
    "fulltitle": "LumeSense 5 Smartwatch with AI Assistant",
    "brand": "LumeTech",
    "imageUrl": "images/Watches/LumeSense5.jpg",
    "alt": "Smart Watch",
    "newPrice": 210000,
    "oldPrice": 250000,
    "rating": "4.7",
    "numberOfRating": "1020",
    "description": "An AI-powered smartwatch with intuitive controls.",
    "fullDescription": "The LumeSense 5 features a built-in AI assistant, gesture controls, and automatic activity recognition.",
    "category": ["Smart"]
  },
  {
    "id": 57,
    "title": "OptiTrack Max",
    "fulltitle": "OptiTrack Max Ultra Fitness Smartwatch",
    "brand": "FitSync",
    "imageUrl": "images/Watches/OptiTrackMax.jpg",
    "alt": "Smart Watch",
    "newPrice": 190000,
    "oldPrice": 225000,
    "rating": "4.6",
    "numberOfRating": "950",
    "description": "A high-performance fitness smartwatch.",
    "fullDescription": "The OptiTrack Max provides real-time health insights, automatic workout detection, and a long-lasting battery.",
    "category": ["Smart"]
  },
  {
    "id": 58,
    "title": "VisionWave",
    "fulltitle": "VisionWave Smartwatch with Call Support",
    "brand": "WaveWear",
    "imageUrl": "images/Watches/VisionWave.jpg",
    "alt": "Smart Watch",
    "newPrice": 240000,
    "oldPrice": 280000,
    "rating": "4.8",
    "numberOfRating": "1120",
    "description": "A smartwatch with built-in call and messaging features.",
    "fullDescription": "The VisionWave features Bluetooth calling, message notifications, and a customizable interface for enhanced convenience.",
    "category": ["Smart"]
  },
  {
    "id": 59,
    "title": "HyperMove 3",
    "fulltitle": "HyperMove 3 Dynamic Sports Smartwatch",
    "brand": "ActiveWear",
    "imageUrl": "images/Watches/HyperMove3.jpg",
    "alt": "Smart Watch",
    "newPrice": 180000,
    "oldPrice": 215000,
    "rating": "4.5",
    "numberOfRating": "860",
    "description": "A sporty smartwatch with advanced motion tracking.",
    "fullDescription": "The HyperMove 3 features real-time motion analysis, sweat resistance, and automatic performance tracking.",
    "category": ["Smart"]
  },
  {
    "id": 60,
    "title": "Omega Sync",
    "fulltitle": "Omega Sync Hybrid Smartwatch",
    "brand": "Omega Tech",
    "imageUrl": "images/Watches/OmegaSync.jpg",
    "alt": "Smart Watch",
    "newPrice": 200000,
    "oldPrice": 240000,
    "rating": "4.7",
    "numberOfRating": "980",
    "description": "A hybrid smartwatch with both analog and digital functions.",
    "fullDescription": "The Omega Sync combines classic analog styling with smart features such as heart rate monitoring and activity tracking.",
    "category": ["Smart"]
  }
];

// CREATING A PRODUCT CARD
function createProductCard(product) {
  return `
    <div class="productCard fadeInZoom" data-id="${product.id}">
        <img class="productCardImage" src="${product.imageUrl}" alt="${product.alt}" />
        <div class="productCardContent">
          <h3 class="productCardTitle">${product.title}</h3>
          <div class="productPrice">
            <div class="productNewPrice">NPR${product.newPrice}</div>
            <div class="productOldPrice"><del>NPR${product.oldPrice}</del></div>
          </div>
          <span class="productCardDescription">${product.description}</span>
        </div>
      <div style="display: flex; justify-content: space-between;">
        <!-- Add to Cart Button -->
        <button class="add-to-cart">
          <div class="cart-icon">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
            </svg>
          </div>
          <div class="cart-text">Add to Cart</div>
        </button>
        <!-- Learn More Button -->
        <button class="learnMore view-details" data-id="${product.id}">
          <div class="cart-icon">
            <svg viewBox="0 0 16 16" fill="none" stroke="#ffffff">
              <path
                d="M14 2H5.5L4 3.5L6.83581 6.33579L0.585815 12.5858L3.41424 15.4142L9.66424 9.16421L12.5 12L14 10.5L14 2Z"
                fill="#197149"></path>
            </svg>
          </div>
          <div class="cart-text">Learn More</div>
        </button>
      </div>
    </div>
  `;
}
//SEARCH BAR FUNCTIONALITY
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".navbar-searchbar");
  const productContainer = document.getElementById("allProduct");
  function displayProducts(filteredProducts) {
    productContainer.innerHTML = ""; // Clear existing products
    filteredProducts.forEach((product) => {
      productContainer.innerHTML += createProductCard(product);
    });
  }
  // Initial display of all products
  displayProducts(products);
  // Search functionality
  searchInput.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  //ALL PRODUCTS
  let allProducts = '';
  products.forEach(product => {
    allProducts += createProductCard(product);
  });
  const allProduct = document.getElementById("allProduct");
  if (allProduct) {
    allProduct.innerHTML = allProducts;
  }
  // FEATURED COLLECTION
  const homeFeaturedProduct = document.getElementById("homeFeaturedProduct");
  const homeFeaturedItems = products.filter(product => [4, 6, 8, 9, 10, 12].includes(product.id));
  const featuredProductsHTML = homeFeaturedItems.map(createProductCard).join('');
  if (homeFeaturedProduct) {
    homeFeaturedProduct.innerHTML = allProducts;
  }

  // NEWLY ARRIVED
  const newArrivalsWatch = document.getElementById("newArrivalsWatch");
  const newarrivedwatches = products.filter(product => [2, 3, 7, 9, 10, 12].includes(product.id));
  const newarrivalscollection = newarrivedwatches.map(createProductCard).join('');
  if (newArrivalsWatch) {
    newArrivalsWatch.innerHTML = newarrivalscollection;
  }

  let currentGroup = 'all'; // Stores the current group selection
  let currentSort = ''; // Stores the current sorting selection

  // Function to update product display
  function updateDisplay(productsToDisplay) {
    const allProduct = document.getElementById("allProduct");
    if (allProduct) {
      allProduct.innerHTML = productsToDisplay.map(createProductCard).join('');
    }
  }

  // Function to get grouped products
  function getGroupedProducts(group) {
    switch (group) {
      case 'men': return products.filter(product => product.category.includes("Mens"));
      // case 'Men': console.log("Mens a");
      case 'women': return products.filter(product => product.category.includes("Womens"));
      case 'pocket': return products.filter(product => product.category.includes("Pocket"));
      case 'smart': return products.filter(product => product.category.includes("Smart"));
      case 'luxury': return products.filter(product => product.category.includes("Luxury"));
      case 'vintage': return products.filter(product => product.category.includes("Vintage"));
      default: return products;
    }
  }

  // Function to sort products
  function sortProducts(criteria) {
    currentSort = criteria; // Store selected sorting option
    let groupedProducts = getGroupedProducts(currentGroup);

    switch (criteria) {
      case 'sortByName':
        groupedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'sortByPriceAsc':
        groupedProducts.sort((a, b) => a.newPrice - b.newPrice);
        break;
      case 'sortByPriceDesc':
        groupedProducts.sort((a, b) => b.newPrice - a.newPrice);
        break;
      case 'sortByRating':
        groupedProducts.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        break;
    }

    updateDisplay(groupedProducts);
  }

  // Function to group products
  function groupProducts(criteria) {
    currentGroup = criteria; // Store the selected group
    let filteredProducts = getGroupedProducts(currentGroup); // Get grouped products

    console.log("Grouped products:", filteredProducts); // Debugging log

    updateDisplay(filteredProducts); // Update the display immediately
  }


  // Event listener for sorting
  const sortByDropdown = document.getElementById("navbar-sortby");
  if (sortByDropdown) {
    sortByDropdown.addEventListener("change", (event) => {
      sortProducts(event.target.value);
    });
  }

  // Event listener for grouping
  const groupByDropdown = document.getElementById("navbar-groupby");
  if (groupByDropdown) {
    groupByDropdown.addEventListener("change", (event) => {
      groupProducts(event.target.value); // Call the function directly
    });
  }




  // Check if category is passed in the URL
  // Check if category is passed in the URL
  const urlParams = new URLSearchParams(window.location.search);
  const selectedCategory = urlParams.get("category");

  if (selectedCategory) {
    console.log("Category from URL:", selectedCategory); // Debugging log
    groupProducts(selectedCategory); // Apply category filtering
    if (groupByDropdown) {
      groupByDropdown.value = selectedCategory; // Update dropdown selection
    }
    // Remove category from URL to avoid re-filtering on refresh
    window.history.replaceState({}, document.title, window.location.pathname);
  }


  //MODAL
  const productContainer = document.getElementById("productContainer"); // Ensure this exists in your HTML
  const modal = document.getElementById("productModal");
  const closeModal = document.querySelector(".close");

  function openModal(product) {
    document.getElementById("modalImage").src = product.imageUrl;
    document.getElementById("modalTitle").textContent = product.title;
    document.getElementById("modalFullTitle").textContent = product.fulltitle;
    document.getElementById("modalBrand").textContent = `Brand: ${product.brand}`;
    document.getElementById("modalFullDescription").textContent = product.fullDescription;
    document.getElementById("modalNewPrice").textContent = `NPR ${product.newPrice}`;
    document.getElementById("modalOldPrice").textContent = `NPR ${product.oldPrice}`;
    document.getElementById("modalRating").textContent = `Rating: ${product.rating} (${product.numberOfRating} reviews)`;

    modal.style.display = "flex";
  }

  // Adding an event listener to open the modal when clicking anywhere on the product card (except buttons)
  document.addEventListener("click", (event) => {
    // Check if the click was on the product card (but not on the buttons)
    if (event.target.closest(".productCard") && !event.target.closest(".add-to-cart") && !event.target.closest(".view-details")) {
      const productId = event.target.closest(".productCard").getAttribute("data-id");
      const selectedProduct = products.find(p => p.id == productId);
      if (selectedProduct) openModal(selectedProduct);
    }

    // Handling Learn More button click
    if (event.target.closest(".view-details")) {
      event.preventDefault(); // Prevent any default navigation
      const productId = event.target.closest(".view-details").getAttribute("data-id");
      const selectedProduct = products.find(p => p.id == productId);
      if (selectedProduct) openModal(selectedProduct);
    }
  });

  // Handling close button
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Load and filter products initially
  groupProducts(currentGroup);
});