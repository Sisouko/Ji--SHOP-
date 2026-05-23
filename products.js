

function getProducts() {
  return [

    {
      id: 1, name: "Aurora Diamond Ring", category: "rings", material: "gold",
      price: 289, originalPrice: 349, badge: "Bestseller", isNew: false, isSale: true,
      rating: 4.9, reviews: 128,
      description: "An ethereal diamond solitaire in 18k yellow gold. Inspired by the northern lights.",
      svgIcon: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="rg1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fff8f0"/>
            <stop offset="100%" stop-color="#f0e0c8"/>
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="55" fill="url(#rg1)"/>
        <circle cx="60" cy="60" r="28" fill="none" stroke="#c9a86c" stroke-width="3.5"/>
        <circle cx="60" cy="60" r="20" fill="none" stroke="#c9a86c" stroke-width="1.5" opacity="0.4"/>
        <circle cx="60" cy="32" r="10" fill="#fff" stroke="#c9a86c" stroke-width="2"/>
        <polygon points="60,26 62,31 67,31 63,34 65,39 60,36 55,39 57,34 53,31 58,31" fill="#c9a86c" opacity="0.8"/>
      </svg>`
    },
    {
      id: 2, name: "Rose Gold Twisted Band", category: "rings", material: "rose-gold",
      price: 189, originalPrice: null, badge: "New", isNew: true, isSale: false,
      rating: 4.8, reviews: 64,
      description: "An artfully twisted rose gold band that catches the light from every angle.",
      svgIcon: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="rg2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fff0f0"/>
            <stop offset="100%" stop-color="#f5d9d0"/>
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="55" fill="url(#rg2)"/>
        <circle cx="60" cy="60" r="28" fill="none" stroke="#c9806c" stroke-width="4"/>
        <path d="M32 60 Q46 48 60 60 Q74 72 88 60" stroke="#c9806c" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M32 54 Q46 42 60 54 Q74 66 88 54" stroke="#c9806c" stroke-width="1.5" fill="none" opacity="0.5" stroke-linecap="round"/>
      </svg>`
    },
    {
      id: 3, name: "Sapphire Halo Ring", category: "rings", material: "platinum",
      price: 520, originalPrice: null, badge: null, isNew: false, isSale: false,
      rating: 5.0, reviews: 43,
      description: "A stunning sapphire surrounded by a halo of pavé diamonds in platinum.",
      svgIcon: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="rg3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f0f4ff"/>
            <stop offset="100%" stop-color="#d0d8f0"/>
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="55" fill="url(#rg3)"/>
        <circle cx="60" cy="60" r="30" fill="none" stroke="#8090b0" stroke-width="3"/>
        <circle cx="60" cy="32" r="12" fill="#4060c0" opacity="0.8"/>
        <circle cx="60" cy="32" r="12" fill="none" stroke="#c9a86c" stroke-width="2"/>
        <circle cx="60" cy="20" r="3" fill="#c9a86c"/>
        <circle cx="72" cy="32" r="3" fill="#c9a86c"/>
        <circle cx="60" cy="44" r="3" fill="#c9a86c"/>
        <circle cx="48" cy="32" r="3" fill="#c9a86c"/>
      </svg>`
    },
    {
      id: 4, name: "Emerald Eternity Band", category: "rings", material: "gold",
      price: 399, originalPrice: 450, badge: "Sale", isNew: false, isSale: true,
      rating: 4.7, reviews: 89,
      description: "A full eternity band set with channel-set emeralds in 18k gold.",
      svgIcon: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="rg4" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f0fff4"/><stop offset="100%" stop-color="#c0ecd4"/></radialGradient></defs>
        <circle cx="60" cy="60" r="55" fill="url(#rg4)"/>
        <circle cx="60" cy="60" r="30" fill="none" stroke="#c9a86c" stroke-width="6"/>
        <circle cx="60" cy="30" r="4" fill="#20a060"/>
        <circle cx="75" cy="35" r="4" fill="#20a060"/>
        <circle cx="85" cy="48" r="4" fill="#20a060"/>
        <circle cx="88" cy="63" r="4" fill="#20a060"/>
        <circle cx="82" cy="77" r="4" fill="#20a060"/>
        <circle cx="69" cy="87" r="4" fill="#20a060"/>
        <circle cx="55" cy="90" r="4" fill="#20a060"/>
        <circle cx="41" cy="85" r="4" fill="#20a060"/>
        <circle cx="31" cy="75" r="4" fill="#20a060"/>
        <circle cx="27" cy="61" r="4" fill="#20a060"/>
        <circle cx="30" cy="47" r="4" fill="#20a060"/>
        <circle cx="40" cy="35" r="4" fill="#20a060"/>
      </svg>`
    },

    {
      id: 5, name: "Celestial Gold Pendant", category: "necklaces", material: "gold",
      price: 249, originalPrice: null, badge: "Bestseller", isNew: false, isSale: false,
      rating: 4.9, reviews: 201,
      description: "A crescent moon and star pendant in 18k gold on a delicate 45cm chain.",
      svgIcon: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="ng1" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff8f0"/><stop offset="100%" stop-color="#f5e8d0"/></radialGradient></defs>
        <circle cx="60" cy="60" r="55" fill="url(#ng1)"/>
        <path d="M25 30 Q60 20 80 30" stroke="#c9a86c" stroke-width="1.5" fill="none"/>
        <path d="M60 30 L60 55" stroke="#c9a86c" stroke-width="1.5"/>
        <path d="M45 55 Q55 45 70 55 Q62 75 48 70 Q38 60 45 55Z" fill="#c9a86c" opacity="0.8"/>
        <polygon points="78,48 80,54 86,54 81,58 83,64 78,60 73,64 75,58 70,54 76,54" fill="#c9a86c" opacity="0.7" transform="scale(0.8) translate(20,10)"/>
      </svg>`
    },
    {
      id: 6, name: "Pearl Drop Necklace", category: "necklaces", material: "gold",
      price: 179, originalPrice: null, badge: "New", isNew: true, isSale: false,
      rating: 4.8, reviews: 77,
      description: "Freshwater pearl drop on a fine 18k gold chain — effortlessly timeless.",
      svgIcon: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="ng2" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fefefe"/><stop offset="100%" stop-color="#f0ece8"/></radialGradient></defs>
        <circle cx="60" cy="60" r="55" fill="url(#ng2)"/>
        <path d="M20 25 Q60 35 100 25" stroke="#c9a86c" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        <line x1="60" y1="35" x2="60" y2="65" stroke="#c9a86c" stroke-width="1.5"/>
        <ellipse cx="60" cy="76" rx="12" ry="14" fill="#f0f0f0" stroke="#c9a86c" stroke-width="1.5"/>
        <ellipse cx="55" cy="70" rx="4" ry="3" fill="white" opacity="0.8"/>
      </svg>`
    },
    {
      id: 7, name: "Diamond Tennis Necklace", category: "necklaces", material: "platinum",
      price: 890, originalPrice: 1050, badge: "Sale", isNew: false, isSale: true,
      rating: 5.0, reviews: 34,
      description: "A continuous line of pavé diamonds in platinum — pure, radiant luxury.",
      svgIcon: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="ng3" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f5f8ff"/><stop offset="100%" stop-color="#e0e8f8"/></radialGradient></defs>
        <circle cx="60" cy="60" r="55" fill="url(#ng3)"/>
        <path d="M22 30 Q60 48 98 30" stroke="#8090b0" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="30" cy="32" r="3" fill="#c9a86c"/>
        <circle cx="40" cy="36" r="3" fill="#c9a86c"/>
        <circle cx="50" cy="40" r="3" fill="#c9a86c"/>
        <circle cx="60" cy="42" r="3" fill="#c9a86c"/>
        <circle cx="70" cy="40" r="3" fill="#c9a86c"/>
        <circle cx="80" cy="36" r="3" fill="#c9a86c"/>
        <circle cx="90" cy="32" r="3" fill="#c9a86c"/>
      </svg>`
    },
    {
      id: 8, name: "Gold Chain Layering Set", category: "necklaces", material: "gold",
      price: 229, originalPrice: null, badge: "New", isNew: true, isSale: false,
      rating: 4.7, reviews: 112,
      description: "A set of three coordinated gold chains — 16\", 18\", and 20\" — for effortless layering.",
      svgIcon: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="ng4" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff8f0"/><stop offset="100%" stop-color="#f0e0c0"/></radialGradient></defs>
        <circle cx="60" cy="60" r="55" fill="url(#ng4)"/>
        <path d="M25 35 Q60 45 95 35" stroke="#c9a86c" stroke-width="2" fill="none" stroke-dasharray="3,2"/>
        <path d="M20 48 Q60 60 100 48" stroke="#c9a86c" stroke-width="1.5" fill="none" stroke-dasharray="4,2"/>
        <path d="M22 62 Q60 76 98 62" stroke="#c9a86c" stroke-width="1" fill="none" stroke-dasharray="5,3"/>
        <circle cx="60" cy="45" r="4" fill="#c9a86c"/>
        <circle cx="60" cy="60" r="3" fill="#c9a86c"/>
        <circle cx="60" cy="73" r="5" fill="none" stroke="#c9a86c" stroke-width="1.5"/>
        <circle cx="60" cy="73" r="2" fill="#c9a86c"/>
      </svg>`
    },

    {
      id: 9, name: "Diamond Stud Earrings", category: "earrings", material: "gold",
      price: 399, originalPrice: null, badge: "Bestseller", isNew: false, isSale: false,
      rating: 4.9, reviews: 315,
      description: "Classic 1ct total weight diamond studs in 18k gold — an essential forever piece.",
      svgIcon: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="eg1" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff8f0"/><stop offset="100%" stop-color="#f5e8d0"/></radialGradient></defs>
        <circle cx="60" cy="60" r="55" fill="url(#eg1)"/>
        <circle cx="38" cy="50" r="12" fill="#e8f4ff" stroke="#c9a86c" stroke-width="2"/>
        <polygon points="38,43 40,49 46,49 41,53 43,59 38,55 33,59 35,53 30,49 36,49" fill="#c9a86c" opacity="0.9" transform="scale(0.7) translate(17,18)"/>
        <circle cx="82" cy="50" r="12" fill="#e8f4ff" stroke="#c9a86c" stroke-width="2"/>
        <polygon points="82,43 84,49 90,49 85,53 87,59 82,55 77,59 79,53 74,49 80,49" fill="#c9a86c" opacity="0.9" transform="scale(0.7) translate(61,18)"/>
      </svg>`
    },
    {
      id: 10, name: "Gold Hoop Earrings", category: "earrings", material: "gold",
      price: 149, originalPrice: null, badge: null, isNew: false, isSale: false,
      rating: 4.8, reviews: 189,
      description: "Medium 25mm gold hoops with a hammered texture — modern, versatile, bold.",
      svgIcon: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="eg2" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff8e0"/><stop offset="100%" stop-color="#f0dca0"/></radialGradient></defs>
        <circle cx="60" cy="60" r="55" fill="url(#eg2)"/>
        <circle cx="36" cy="55" r="18" fill="none" stroke="#c9a86c" stroke-width="4" stroke-dasharray="56,6"/>
        <circle cx="84" cy="55" r="18" fill="none" stroke="#c9a86c" stroke-width="4" stroke-dasharray="56,6"/>
        <circle cx="36" cy="37" r="5" fill="#c9a86c"/>
        <circle cx="84" cy="37" r="5" fill="#c9a86c"/>
      </svg>`
    },
    {
      id: 11, name: "Pearl Drop Earrings", category: "earrings", material: "gold",
      price: 219, originalPrice: 260, badge: "Sale", isNew: false, isSale: true,
      rating: 4.9, reviews: 97,
      description: "Baroque pearl drops on 18k gold ear wires — romantic, feminine, timeless.",
      svgIcon: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="eg3" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fefefe"/><stop offset="100%" stop-color="#ece8e0"/></radialGradient></defs>
        <circle cx="60" cy="60" r="55" fill="url(#eg3)"/>
        <circle cx="36" cy="38" r="6" fill="#c9a86c"/>
        <line x1="36" y1="44" x2="36" y2="60" stroke="#c9a86c" stroke-width="1.5"/>
        <ellipse cx="36" cy="72" rx="10" ry="12" fill="#f8f4f0" stroke="#c9a86c" stroke-width="1.5"/>
        <ellipse cx="32" cy="67" rx="3" ry="2" fill="white" opacity="0.7"/>
        <circle cx="84" cy="38" r="6" fill="#c9a86c"/>
        <line x1="84" y1="44" x2="84" y2="60" stroke="#c9a86c" stroke-width="1.5"/>
        <ellipse cx="84" cy="72" rx="10" ry="12" fill="#f8f4f0" stroke="#c9a86c" stroke-width="1.5"/>
        <ellipse cx="80" cy="67" rx="3" ry="2" fill="white" opacity="0.7"/>
      </svg>`
    },
    {
      id: 12, name: "Chandelier Crystal Drops", category: "earrings", material: "gold",
      price: 299, originalPrice: null, badge: "New", isNew: true, isSale: false,
      rating: 4.7, reviews: 55,
      description: "Dramatic tiered chandelier earrings with crystal drops in antique gold.",
      svgIcon: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="eg4" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff9f0"/><stop offset="100%" stop-color="#f5e5d5"/></radialGradient></defs>
        <circle cx="60" cy="60" r="55" fill="url(#eg4)"/>
        <circle cx="36" cy="30" r="5" fill="#c9a86c"/>
        <line x1="36" y1="35" x2="36" y2="45" stroke="#c9a86c" stroke-width="1.5"/>
        <path d="M24 45 L36 45 L48 45" stroke="#c9a86c" stroke-width="1.5"/>
        <line x1="24" y1="45" x2="24" y2="58" stroke="#c9a86c" stroke-width="1"/>
        <line x1="36" y1="45" x2="36" y2="65" stroke="#c9a86c" stroke-width="1"/>
        <line x1="48" y1="45" x2="48" y2="58" stroke="#c9a86c" stroke-width="1"/>
        <polygon points="24,58 27,66 21,66" fill="#c9a86c" opacity="0.7"/>
        <polygon points="36,65 39,75 33,75" fill="#c9a86c" opacity="0.9"/>
        <polygon points="48,58 51,66 45,66" fill="#c9a86c" opacity="0.7"/>
        <circle cx="84" cy="30" r="5" fill="#c9a86c"/>
        <line x1="84" y1="35" x2="84" y2="45" stroke="#c9a86c" stroke-width="1.5"/>
        <path d="M72 45 L84 45 L96 45" stroke="#c9a86c" stroke-width="1.5"/>
        <line x1="72" y1="45" x2="72" y2="58" stroke="#c9a86c" stroke-width="1"/>
        <line x1="84" y1="45" x2="84" y2="65" stroke="#c9a86c" stroke-width="1"/>
        <line x1="96" y1="45" x2="96" y2="58" stroke="#c9a86c" stroke-width="1"/>
        <polygon points="72,58 75,66 69,66" fill="#c9a86c" opacity="0.7"/>
        <polygon points="84,65 87,75 81,75" fill="#c9a86c" opacity="0.9"/>
        <polygon points="96,58 99,66 93,66" fill="#c9a86c" opacity="0.7"/>
      </svg>`
    },

    {
      id: 13, name: "Gold Tennis Bracelet", category: "bracelets", material: "gold",
      price: 349, originalPrice: 420, badge: "Sale", isNew: false, isSale: true,
      rating: 4.9, reviews: 143,
      description: "A classic diamond tennis bracelet in 18k gold — the ultimate wrist statement.",
      svgIcon: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="bg1" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff8e8"/><stop offset="100%" stop-color="#f0dca8"/></radialGradient></defs>
        <circle cx="60" cy="60" r="55" fill="url(#bg1)"/>
        <circle cx="60" cy="60" r="30" fill="none" stroke="#c9a86c" stroke-width="5" stroke-dasharray="188,0"/>
        <circle cx="60" cy="30" r="5" fill="#c9a86c"/>
        <circle cx="79" cy="39" r="5" fill="#c9a86c"/>
        <circle cx="89" cy="59" r="5" fill="#c9a86c"/>
        <circle cx="79" cy="79" r="5" fill="#c9a86c"/>
        <circle cx="60" cy="90" r="5" fill="#c9a86c"/>
        <circle cx="40" cy="79" r="5" fill="#c9a86c"/>
        <circle cx="30" cy="59" r="5" fill="#c9a86c"/>
        <circle cx="40" cy="39" r="5" fill="#c9a86c"/>
      </svg>`
    },
    {
      id: 14, name: "Rose Gold Charm Bracelet", category: "bracelets", material: "rose-gold",
      price: 199, originalPrice: null, badge: "New", isNew: true, isSale: false,
      rating: 4.8, reviews: 88,
      description: "A delicate rose gold chain with 5 signature charms — moon, star, heart, key, and flower.",
      svgIcon: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="bg2" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff0f0"/><stop offset="100%" stop-color="#f5d5c5"/></radialGradient></defs>
        <circle cx="60" cy="60" r="55" fill="url(#bg2)"/>
        <path d="M15 60 Q30 55 45 60 Q60 65 75 60 Q90 55 105 60" stroke="#c9806c" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <!-- Heart charm -->
        <path d="M30 48 Q30 44 34 44 Q38 44 38 48 Q38 52 30 56 Q22 52 22 48 Q22 44 26 44 Q30 44 30 48Z" fill="#c9806c" opacity="0.7" transform="scale(0.5) translate(37,38)"/>
        <!-- Star charm -->
        <polygon points="45,48 46,51 49,51 47,53 48,56 45,54 42,56 43,53 41,51 44,51" fill="#c9806c" opacity="0.7" transform="scale(0.8) translate(8,5)"/>
        <!-- Moon charm -->
        <path d="M60 50 Q56 54 57 59 Q62 60 65 56 Q62 54 60 50Z" fill="#c9806c" opacity="0.7"/>
        <!-- Key charm -->
        <circle cx="78" cy="50" r="5" fill="none" stroke="#c9806c" stroke-width="1.5"/>
        <line x1="78" y1="55" x2="78" y2="68" stroke="#c9806c" stroke-width="1.5"/>
        <line x1="76" y1="62" x2="80" y2="62" stroke="#c9806c" stroke-width="1.5"/>
        <!-- Flower charm -->
        <circle cx="94" cy="55" r="3" fill="#c9806c" opacity="0.7"/>
        <circle cx="94" cy="49" r="2.5" fill="#c9806c" opacity="0.5"/>
        <circle cx="100" cy="52" r="2.5" fill="#c9806c" opacity="0.5"/>
        <circle cx="100" cy="58" r="2.5" fill="#c9806c" opacity="0.5"/>
        <circle cx="94" cy="61" r="2.5" fill="#c9806c" opacity="0.5"/>
        <circle cx="88" cy="58" r="2.5" fill="#c9806c" opacity="0.5"/>
        <circle cx="88" cy="52" r="2.5" fill="#c9806c" opacity="0.5"/>
      </svg>`
    },

    {
      id: 15, name: "The Golden Hour Set", category: "sets", material: "gold",
      price: 599, originalPrice: 720, badge: "Sale", isNew: false, isSale: true,
      rating: 5.0, reviews: 61,
      description: "Our signature 3-piece set: ring, necklace, and earrings in 18k gold.",
      svgIcon: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="sg1" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff8e0"/><stop offset="100%" stop-color="#f0d890"/></radialGradient></defs>
        <circle cx="60" cy="60" r="55" fill="url(#sg1)"/>
        <circle cx="38" cy="50" r="14" fill="none" stroke="#c9a86c" stroke-width="2.5"/>
        <circle cx="38" cy="36" r="7" fill="#c9a86c" opacity="0.8"/>
        <path d="M70 30 Q90 30 95 40" stroke="#c9a86c" stroke-width="1.5" fill="none"/>
        <line x1="82" y1="30" x2="82" y2="45" stroke="#c9a86c" stroke-width="1.5"/>
        <circle cx="82" cy="50" r="7" fill="#c9a86c" opacity="0.6"/>
        <circle cx="82" cy="50" r="4" fill="#c9a86c"/>
        <circle cx="55" cy="85" r="10" fill="none" stroke="#c9a86c" stroke-width="2"/>
        <circle cx="75" cy="85" r="10" fill="none" stroke="#c9a86c" stroke-width="2"/>
        <polygon points="55,79 57,84 62,84 58,87 60,92 55,89 50,92 52,87 48,84 53,84" fill="#c9a86c" opacity="0.8" transform="scale(0.6) translate(37,75)"/>
        <polygon points="75,79 77,84 82,84 78,87 80,92 75,89 70,92 72,87 68,84 73,84" fill="#c9a86c" opacity="0.8" transform="scale(0.6) translate(70,75)"/>
      </svg>`
    },
    {
      id: 16, name: "Pearl Bridal Collection", category: "sets", material: "gold",
      price: 449, originalPrice: null, badge: "New", isNew: true, isSale: false,
      rating: 4.9, reviews: 29,
      description: "A complete bridal set featuring freshwater pearls and 18k gold — perfect for your special day.",
      svgIcon: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="sg2" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fefefe"/><stop offset="100%" stop-color="#f0ece4"/></radialGradient></defs>
        <circle cx="60" cy="60" r="55" fill="url(#sg2)"/>
        <path d="M20 30 Q60 40 100 30" stroke="#c9a86c" stroke-width="1.5" fill="none"/>
        <line x1="60" y1="40" x2="60" y2="55" stroke="#c9a86c" stroke-width="1.5"/>
        <ellipse cx="60" cy="63" rx="9" ry="11" fill="#f8f4f0" stroke="#c9a86c" stroke-width="1.5"/>
        <ellipse cx="56" cy="58" rx="3" ry="2" fill="white" opacity="0.8"/>
        <circle cx="35" cy="80" r="7" fill="none" stroke="#c9a86c" stroke-width="2"/>
        <ellipse cx="35" cy="72" rx="5" ry="6" fill="#f8f4f0" stroke="#c9a86c" stroke-width="1.5"/>
        <circle cx="85" cy="80" r="7" fill="none" stroke="#c9a86c" stroke-width="2"/>
        <ellipse cx="85" cy="72" rx="5" ry="6" fill="#f8f4f0" stroke="#c9a86c" stroke-width="1.5"/>
        <circle cx="60" cy="88" r="9" fill="none" stroke="#c9a86c" stroke-width="2.5"/>
      </svg>`
    },
  ];
}

function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!products || products.length === 0) {
    container.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#999;padding:2rem">No products found.</p>';
    return;
  }
  container.innerHTML = products.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        ${p.badge ? `<span class="product-badge badge-${p.badge.toLowerCase().replace(' ','-')}">${p.badge}</span>` : ''}
        <button class="wishlist-btn" onclick="toggleWishlist(${p.id}, this)" title="Add to Wishlist">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
        <div class="product-img">${p.svgIcon}</div>
        <div class="product-actions">
          <button class="quick-add" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
      <div class="product-info">
        <p class="product-cat">${p.category.charAt(0).toUpperCase()+p.category.slice(1)}</p>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          <span class="stars-small">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))}</span>
          <span class="review-count">(${p.reviews})</span>
        </div>
        <div class="product-price">
          <span class="price-current">$${p.price}</span>
          ${p.originalPrice ? `<span class="price-original">$${p.originalPrice}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}
