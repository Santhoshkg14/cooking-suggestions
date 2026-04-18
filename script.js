const STORAGE_KEY = "amma_curry_history_v1";
const WEEKDAYS = ["திங்", "செவ்", "புத", "வியா", "வெள்", "சனி", "ஞாய்"];

const dishes = [
  {
    id: "sambar",
    tamilName: "சாம்பார்",
    englishName: "Lentil Sambar",
    category: "சாம்பார்",
    vegetarian: true,
    spice: "மிதமான",
    time: "30 நிமிடம்",
    tags: ["afternoon", "full"],
    ingredients: ["துவரம் பருப்பு", "சாம்பார் பொடி", "வெங்காயம்", "தக்காளி", "புளி", "முருங்கைக்காய்"],
    steps: ["பருப்பை வேகவைத்து மசிக்கவும்.", "காய்கறி மற்றும் புளித்தண்ணீரை கொதிக்க விடவும்.", "சாம்பார் பொடி சேர்த்து பருப்பு கலந்து காய்ச்சி இறக்கவும்."],
    tip: "இறுதியில் நெய் ஒரு டீஸ்பூன் சேர்த்தால் மணம் அதிகரிக்கும்."
  },
  { id: "meen-kuzhambu", tamilName: "மீன் குழம்பு", englishName: "Fish Curry", category: "குழம்பு", vegetarian: false, spice: "கார கார", time: "35 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["மீன் துண்டுகள்", "சின்ன வெங்காயம்", "புளி", "மிளகாய் தூள்", "தக்காளி", "வெந்தயம்"], steps: ["மசாலாவை வதக்கவும்.", "புளித்தண்ணீர் சேர்த்து கொதிக்க விடவும்.", "மீன் போட்டு மெதுவாக வேகவிடவும்."], tip: "குழம்பு ஒரு மணி நேரம் ஓய்வெடுத்தால் சுவை கூடும்." },
  { id: "mutton-kuzhambu", tamilName: "மட்டன் குழம்பு", englishName: "Mutton Curry", category: "குழம்பு", vegetarian: false, spice: "கார கார", time: "50 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["மட்டன்", "வெங்காயம்", "இஞ்சி பூண்டு விழுது", "கறி மசாலா", "தேங்காய் விழுது"], steps: ["மட்டனை மசாலாவுடன் பிரஷர் குக்கரில் வேகவைக்கவும்.", "வெங்காயம் தக்காளி வதக்கி விழுது சேர்க்கவும்.", "வேகிய மட்டன் சேர்த்து கெட்டியாக காய்ச்சி இறக்கவும்."], tip: "மிதமான தீயில் நன்றாக நொய்ய வைப்பது முக்கியம்." },
  { id: "chicken-kuzhambu", tamilName: "சிக்கன் குழம்பு", englishName: "Chicken Curry", category: "குழம்பு", vegetarian: false, spice: "மிதமான", time: "40 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["சிக்கன்", "வெங்காயம்", "தக்காளி", "மிளகாய் தூள்", "மஞ்சள்", "கரம் மசாலா"], steps: ["சிக்கனை மஞ்சள் உப்பு சேர்த்து கழுவவும்.", "வெங்காயம் தக்காளி வதக்கி மசாலா சேர்க்கவும்.", "சிக்கன் சேர்த்து தண்ணீர் ஊற்றி வேகவிடவும்."], tip: "கொத்தமல்லி தூவி பரிமாறினால் நறுமணம் அதிகம்." },
  { id: "vendakkai-curry", tamilName: "வெண்டைக்காய் கறி", englishName: "Okra Curry", category: "பொரியல்", vegetarian: true, spice: "குறைவான", time: "20 நிமிடம்", tags: ["night", "simple"], ingredients: ["வெண்டைக்காய்", "வெங்காயம்", "மிளகாய் தூள்", "கடுகு", "கறிவேப்பிலை"], steps: ["வெண்டைக்காயை உலர்த்தி நறுக்கவும்.", "தாளித்து வெங்காயம் வதக்கவும்.", "வெண்டைக்காய் சேர்த்து மெதுவாக வதக்கவும்."], tip: "பிசுபிசுப்பு வராமல் இருக்க தண்ணீர் சேர்க்க வேண்டாம்." },
  { id: "kathirikkai-curry", tamilName: "கத்திரிக்காய் கறி", englishName: "Brinjal Curry", category: "குழம்பு", vegetarian: true, spice: "மிதமான", time: "25 நிமிடம்", tags: ["night", "simple"], ingredients: ["கத்திரிக்காய்", "புளி", "சாம்பார் பொடி", "வெங்காயம்", "எண்ணெய்"], steps: ["கத்திரிக்காய் நறுக்கி வதக்கவும்.", "புளித்தண்ணீர் மற்றும் மசாலா சேர்க்கவும்.", "கெட்டியாக வரும்வரை சமைக்கவும்."], tip: "சிறிது வெல்லம் சேர்த்தால் சுவை சமன் ஆகும்." },
  { id: "keerai-kootu", tamilName: "கீரை கூட்டு", englishName: "Spinach Kootu", category: "கூட்டு", vegetarian: true, spice: "குறைவான", time: "22 நிமிடம்", tags: ["morning", "light"], ingredients: ["பசலை கீரை", "பாசிப்பருப்பு", "தேங்காய்", "சீரகம்", "பச்சை மிளகாய்"], steps: ["பருப்பு வேகவைக்கவும்.", "கீரை வேக வைத்து அரைத்த தேங்காய் விழுது சேர்க்கவும்.", "தாளித்து பருப்புடன் கலந்து கொதிக்க விடவும்."], tip: "கீரையை அதிக நேரம் சமைக்காதீர்கள்; நிறம் அழகாக இருக்கும்." },
  { id: "kondakadalai-curry", tamilName: "கொண்டைக்கடலை கறி", englishName: "Chickpea Curry", category: "குழம்பு", vegetarian: true, spice: "மிதமான", time: "35 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["கொண்டைக்கடலை", "வெங்காயம்", "தக்காளி", "இஞ்சி பூண்டு", "மசாலா தூள்"], steps: ["கடலையை ஊறவைத்து வேகவைக்கவும்.", "வெங்காயம் தக்காளி வதக்கி மசாலா சேர்க்கவும்.", "கடலை சேர்த்து கெட்டியாக சமைக்கவும்."], tip: "இரவில் ஊறவைத்தால் வேகும் நேரம் குறையும்." },
  { id: "murungakkai-sambar", tamilName: "முருங்கைக்காய் சாம்பார்", englishName: "Drumstick Sambar", category: "சாம்பார்", vegetarian: true, spice: "மிதமான", time: "30 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["முருங்கைக்காய்", "துவரம் பருப்பு", "புளி", "சாம்பார் பொடி"], steps: ["பருப்பு வேகவைக்கவும்.", "முருங்கைக்காய் புளித்தண்ணீரில் வேகவிடவும்.", "பருப்பு மற்றும் சாம்பார் பொடி சேர்த்து சமைக்கவும்."], tip: "முருங்கைக்காயை நடுத்தர அளவு துண்டாக நறுக்கவும்." },
  { id: "vatha-kuzhambu", tamilName: "வத்தக்குழம்பு", englishName: "Vatha Kuzhambu", category: "குழம்பு", vegetarian: true, spice: "கார கார", time: "28 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["சுண்டக்காய் வத்தல்", "புளி", "மிளகாய் தூள்", "வெந்தயம்", "எள்ளெண்ணெய்"], steps: ["எள்ளெண்ணெயில் தாளிக்கவும்.", "வத்தல் வதக்கி புளித்தண்ணீர் சேர்க்கவும்.", "கெட்டியாகும் வரை கொதிக்க விடவும்."], tip: "மறுநாள் இன்னும் சுவையாக இருக்கும்." },
  { id: "poosanikai-kootu", tamilName: "பூசணிக்காய் கூட்டு", englishName: "Ash Gourd Kootu", category: "கூட்டு", vegetarian: true, spice: "குறைவான", time: "20 நிமிடம்", tags: ["morning", "light"], ingredients: ["பூசணிக்காய்", "பாசிப்பருப்பு", "தேங்காய்", "சீரகம்"], steps: ["பூசணிக்காய் துண்டுகளை வேகவைக்கவும்.", "பாசிப்பருப்பு சேர்க்கவும்.", "தேங்காய் விழுது கலந்து தாளிக்கவும்."], tip: "சிறிது மிளகு சேர்த்தால் மணம் நன்றாக வரும்." },
  { id: "beans-poriyal", tamilName: "பீன்ஸ் பொரியல்", englishName: "Beans Poriyal", category: "பொரியல்", vegetarian: true, spice: "குறைவான", time: "18 நிமிடம்", tags: ["morning", "simple"], ingredients: ["பீன்ஸ்", "தேங்காய் துருவல்", "கடுகு", "உளுத்தம் பருப்பு"], steps: ["பீன்ஸை நறுக்கி வேகவிடவும்.", "தாளித்து பீன்ஸ் சேர்த்து வதக்கவும்.", "தேங்காய் தூவி இறக்கவும்."], tip: "சிறிது சர்க்கரை சேர்த்தால் குழந்தைகள் விரும்பி சாப்பிடுவார்கள்." },
  { id: "carrot-beans-poriyal", tamilName: "காரட் பீன்ஸ் பொரியல்", englishName: "Carrot Beans Stir-fry", category: "பொரியல்", vegetarian: true, spice: "குறைவான", time: "18 நிமிடம்", tags: ["morning", "light"], ingredients: ["காரட்", "பீன்ஸ்", "தேங்காய்", "கடுகு", "பச்சை மிளகாய்"], steps: ["காய்களை நறுக்கவும்.", "தாளித்து காய்கள் சேர்த்து வேகவிடவும்.", "தேங்காய் சேர்த்து இறக்கவும்."], tip: "அதிக நீர் விடாமல் மூடி வேக வைக்கவும்." },
  { id: "potato-fry", tamilName: "உருளைக்கிழங்கு பொரியல்", englishName: "Potato Fry", category: "பொரியல்", vegetarian: true, spice: "மிதமான", time: "25 நிமிடம்", tags: ["night", "simple"], ingredients: ["உருளைக்கிழங்கு", "மிளகாய் தூள்", "மஞ்சள்", "கடுகு", "எண்ணெய்"], steps: ["உருளைக்கிழங்கை வேக வைத்து நறுக்கவும்.", "தாளித்து மசாலா சேர்க்கவும்.", "உருளைக்கிழங்கு சேர்த்து பொன்னிறமாக வறுக்கவும்."], tip: "இரும்பு வாணலியில் செய்தால் crisp ஆக வரும்." },
  { id: "cauliflower-pepper", tamilName: "காலிபிளவர் மிளகு வறுவல்", englishName: "Cauliflower Pepper Fry", category: "பொரியல்", vegetarian: true, spice: "கார கார", time: "23 நிமிடம்", tags: ["night", "simple"], ingredients: ["காலிபிளவர்", "மிளகு", "சீரகம்", "வெங்காயம்"], steps: ["காலிபிளவரை சூடுநீரில் ஊறவைக்கவும்.", "வெங்காயம் வதக்கி மிளகு சேர்க்கவும்.", "காலிபிளவர் சேர்த்து வறுக்கவும்."], tip: "மிளகை புதிதாக அரைத்தால் ருசி கூடும்." },
  { id: "pavakkai-pitlai", tamilName: "பாகற்காய் பிட்ட்லை", englishName: "Bitter Gourd Pitlai", category: "கூட்டு", vegetarian: true, spice: "மிதமான", time: "30 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["பாகற்காய்", "துவரம் பருப்பு", "வறுத்த மசாலா", "புளி"], steps: ["பாகற்காயை வதக்கவும்.", "புளி மற்றும் பருப்பு சேர்க்கவும்.", "அரைத்த மசாலா சேர்த்து கொதிக்க விடவும்."], tip: "கசப்பு குறைக்க உப்பு நீரில் ஊறவைக்கலாம்." },
  { id: "kathamba-sambar", tamilName: "கதம்ப சாம்பார்", englishName: "Mixed Veg Sambar", category: "சாம்பார்", vegetarian: true, spice: "மிதமான", time: "35 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["கலவை காய்கறி", "துவரம் பருப்பு", "புளி", "சாம்பார் பொடி"], steps: ["பருப்பு வேக வைக்கவும்.", "காய்களை புளித்தண்ணீரில் வேகவிடவும்.", "பருப்பு மற்றும் சாம்பார் பொடி சேர்த்து சமைக்கவும்."], tip: "சிறிது வெந்தயம் தாளித்தால் மணம் கூடும்." },
  { id: "thakkali-kuzhambu", tamilName: "தக்காளி குழம்பு", englishName: "Tomato Curry", category: "குழம்பு", vegetarian: true, spice: "மிதமான", time: "20 நிமிடம்", tags: ["morning", "simple"], ingredients: ["தக்காளி", "வெங்காயம்", "பூண்டு", "மிளகாய் தூள்"], steps: ["வெங்காயம், பூண்டு வதக்கவும்.", "தக்காளி சேர்த்து மசிக்கவும்.", "மசாலா மற்றும் நீர் சேர்த்து கொதிக்க விடவும்."], tip: "சிறிது தேங்காய் பால் சேர்த்தால் மென்மையான சுவை கிடைக்கும்." },
  { id: "milagu-kuzhambu", tamilName: "மிளகு குழம்பு", englishName: "Pepper Kuzhambu", category: "குழம்பு", vegetarian: true, spice: "கார கார", time: "24 நிமிடம்", tags: ["night", "simple"], ingredients: ["மிளகு", "பூண்டு", "புளி", "சீரகம்", "எள்ளெண்ணெய்"], steps: ["மிளகு சீரகம் வறுத்து அரைக்கவும்.", "பூண்டு தாளித்து புளித்தண்ணீர் சேர்க்கவும்.", "அரைச்சதை சேர்த்து கொதிக்க விடவும்."], tip: "சளி இருக்கும் போது மிகவும் நல்லது." },
  { id: "paruppu-urundai-kuzhambu", tamilName: "பருப்பு உருண்டை குழம்பு", englishName: "Dal Dumpling Curry", category: "குழம்பு", vegetarian: true, spice: "மிதமான", time: "45 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["கடலை பருப்பு", "புளி", "வெங்காயம்", "மிளகாய்"], steps: ["பருப்பை அரைத்து உருண்டை செய்யவும்.", "புளி குழம்பை தயார் செய்யவும்.", "உருண்டைகளை சேர்த்து மெதுவாக வேகவிடவும்."], tip: "உருண்டை கெடாமல் இருக்க கொதிக்கும் குழம்பில் மட்டும் விடவும்." },
  { id: "moor-kuzhambu", tamilName: "மோர் குழம்பு", englishName: "Buttermilk Curry", category: "குழம்பு", vegetarian: true, spice: "குறைவான", time: "18 நிமிடம்", tags: ["morning", "light"], ingredients: ["மோர்", "தேங்காய்", "சீரகம்", "பச்சை மிளகாய்", "வெண்டைக்காய்"], steps: ["தேங்காய், சீரகம் அரைக்கவும்.", "மோரில் கலந்து மெதுவாக சூடு செய்யவும்.", "வதக்கிய வெண்டைக்காய் சேர்த்து தாளிக்கவும்."], tip: "கொதிக்க விடாதீர்கள்; மோர் உடைந்து விடும்." },
  { id: "avial", tamilName: "அவியல்", englishName: "Avial", category: "கூட்டு", vegetarian: true, spice: "குறைவான", time: "28 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["கலவை காய்கறி", "தேங்காய்", "தயிர்", "சீரகம்", "தேங்காய் எண்ணெய்"], steps: ["காய்கறி வேகவைக்கவும்.", "தேங்காய் விழுது சேர்க்கவும்.", "இறுதியில் தயிர் மற்றும் தேங்காய் எண்ணெய் சேர்க்கவும்."], tip: "மோர் அல்லது தயிர் இறுதியில் மட்டும் சேர்க்கவும்." },
  { id: "puli-kootu", tamilName: "புளி கூட்டு", englishName: "Tamarind Kootu", category: "கூட்டு", vegetarian: true, spice: "மிதமான", time: "24 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["சுரைக்காய்", "பாசிப்பருப்பு", "புளி", "மிளகாய்"], steps: ["பருப்பு வேகவைக்கவும்.", "காய்கறியை புளியில் வேகவிடவும்.", "பருப்பு சேர்த்து தாளித்து இறக்கவும்."], tip: "சிறிது வெல்லம் சேர்த்தால் புளிப்பு சமன் ஆகும்." },
  { id: "chow-chow-kootu", tamilName: "சௌ சௌ கூட்டு", englishName: "Chow Chow Kootu", category: "கூட்டு", vegetarian: true, spice: "குறைவான", time: "20 நிமிடம்", tags: ["morning", "light"], ingredients: ["சௌ சௌ", "பாசிப்பருப்பு", "தேங்காய்", "சீரகம்"], steps: ["சௌ சௌ துண்டுகளை வேகவைக்கவும்.", "பாசிப்பருப்பு சேர்க்கவும்.", "தேங்காய் அரைச்சதை சேர்த்து தாளிக்கவும்."], tip: "சௌ சௌ அதிகம் வெந்தால் கரையும்; கவனமாக வேக வைக்கவும்." },
  { id: "senai-roast", tamilName: "சேனைக்கிழங்கு வறுவல்", englishName: "Elephant Yam Roast", category: "பொரியல்", vegetarian: true, spice: "கார கார", time: "30 நிமிடம்", tags: ["night", "simple"], ingredients: ["சேனைக்கிழங்கு", "மிளகாய் தூள்", "அரிசி மாவு", "எண்ணெய்"], steps: ["சேனைக்கிழங்கை அரை வேகவைக்கவும்.", "மசாலா தடவி வைக்கவும்.", "தோசைக்கல்லில் வறுக்கவும்."], tip: "சேனை கைகள் அரிக்காமல் இருக்க எண்ணெய் தடவி நறுக்கவும்." },
  { id: "capsicum-masala", tamilName: "குடைமிளகாய் மசாலா", englishName: "Capsicum Masala", category: "பொரியல்", vegetarian: true, spice: "மிதமான", time: "18 நிமிடம்", tags: ["morning", "simple"], ingredients: ["குடைமிளகாய்", "வெங்காயம்", "மசாலா தூள்", "கடுகு"], steps: ["வெங்காயம் தாளித்து வதக்கவும்.", "குடைமிளகாய் சேர்த்து மசாலா சேர்க்கவும்.", "சிறிது நேரம் மட்டும் சமைக்கவும்."], tip: "குடைமிளகாய் crisp இருக்க அதிக நேரம் சமைக்காதீர்கள்." },
  { id: "pudalangai-kootu", tamilName: "புடலங்காய் கூட்டு", englishName: "Snake Gourd Kootu", category: "கூட்டு", vegetarian: true, spice: "குறைவான", time: "22 நிமிடம்", tags: ["morning", "light"], ingredients: ["புடலங்காய்", "பருப்பு", "தேங்காய்", "சீரகம்"], steps: ["புடலங்காய் வேகவைக்கவும்.", "பருப்பு சேர்க்கவும்.", "தேங்காய் விழுது, தாளிப்பு சேர்க்கவும்."], tip: "உடனே பரிமாறினால் சுவை சிறப்பாக இருக்கும்." },
  { id: "sura-puttu", tamilName: "சுறா புட்டு", englishName: "Shark Puttu", category: "பொரியல்", vegetarian: false, spice: "மிதமான", time: "30 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["சுறா மீன்", "வெங்காயம்", "பூண்டு", "மிளகாய்"], steps: ["மீனை வேக வைத்து நுரைக்கவும்.", "வெங்காயம் மசாலாவை வதக்கவும்.", "மீன் சேர்த்து கிளறி இறக்கவும்."], tip: "எலும்புகள் இல்லாமல் சுத்தம் செய்து பயன்படுத்தவும்." },
  { id: "nethili-fry", tamilName: "நெத்திலி மீன் வறுவல்", englishName: "Anchovy Fry", category: "பொரியல்", vegetarian: false, spice: "கார கார", time: "25 நிமிடம்", tags: ["night", "simple"], ingredients: ["நெத்திலி மீன்", "மிளகாய் தூள்", "எலுமிச்சை", "எண்ணெய்"], steps: ["மீனை சுத்தம் செய்யவும்.", "மசாலா தடவி ஊற வைக்கவும்.", "எண்ணெயில் வறுக்கவும்."], tip: "அரிசி மாவு சிறிது சேர்த்தால் crisp ஆகும்." },
  { id: "egg-curry", tamilName: "முட்டை குழம்பு", englishName: "Egg Curry", category: "குழம்பு", vegetarian: false, spice: "மிதமான", time: "24 நிமிடம்", tags: ["morning", "simple"], ingredients: ["முட்டை", "வெங்காயம்", "தக்காளி", "மிளகாய் தூள்", "தேங்காய்"], steps: ["முட்டை வேக வைத்து தோல் நீக்கவும்.", "குழம்பு மசாலா தயார் செய்யவும்.", "முட்டை சேர்த்து கொதிக்க விடவும்."], tip: "முட்டையில் சிறிய கீறல் போட்டால் சாறு நன்றாக ஊறும்." },
  { id: "karamani-kuzhambu", tamilName: "கராமணி குழம்பு", englishName: "Black-eyed Peas Curry", category: "குழம்பு", vegetarian: true, spice: "மிதமான", time: "32 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["கராமணி", "வெங்காயம்", "புளி", "மசாலா"], steps: ["கராமணி ஊறவைத்து வேகவைக்கவும்.", "மசாலா வதக்கி புளித்தண்ணீர் சேர்க்கவும்.", "கராமணி சேர்த்து சுண்டவிடவும்."], tip: "கடாயில் மெதுவாக சுண்டவைத்தால் சுவை அதிகம்." },
  { id: "thatta-payaru-kootu", tamilName: "தட்டைப்பயிறு கூட்டு", englishName: "Field Beans Kootu", category: "கூட்டு", vegetarian: true, spice: "குறைவான", time: "26 நிமிடம்", tags: ["morning", "light"], ingredients: ["தட்டைப்பயிறு", "தேங்காய்", "சீரகம்", "பூண்டு"], steps: ["பயிறு வேகவைக்கவும்.", "தேங்காய் விழுது சேர்க்கவும்.", "தாளித்து இறக்கவும்."], tip: "பயிறு மென்மையாக வெந்தால் குழந்தைகளுக்கும் எளிது." },
  { id: "manathakkali-vathal", tamilName: "மணத்தக்காளி வத்தல் குழம்பு", englishName: "Manathakkali Vathal Kuzhambu", category: "குழம்பு", vegetarian: true, spice: "கார கார", time: "26 நிமிடம்", tags: ["night", "simple"], ingredients: ["மணத்தக்காளி வத்தல்", "புளி", "மிளகாய் தூள்", "வெந்தயம்"], steps: ["வத்தலை எண்ணெயில் வறுக்கவும்.", "புளித்தண்ணீர் சேர்க்கவும்.", "மசாலா சேர்த்து சுண்டவிடவும்."], tip: "தயிர் சாதத்துடன் மிகவும் சுவை." },
  { id: "ennai-kathirikkai", tamilName: "எண்ணெய் கத்திரிக்காய்", englishName: "Stuffed Brinjal Curry", category: "குழம்பு", vegetarian: true, spice: "கார கார", time: "35 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["சின்ன கத்திரிக்காய்", "வேர்க்கடலை", "எள்", "மசாலா", "எண்ணெய்"], steps: ["மசாலாவை அரைத்து கத்திரிக்காயில் நிரப்பவும்.", "எண்ணெயில் வதக்கவும்.", "சிறிது நீர் சேர்த்து மூடி வேகவிடவும்."], tip: "சின்ன கத்திரிக்காய் பயன்படுத்தினால் சுவை சிறப்பு." },
  { id: "murungai-keerai-kootu", tamilName: "முருங்கைக்கீரை கூட்டு", englishName: "Drumstick Leaves Kootu", category: "கூட்டு", vegetarian: true, spice: "குறைவான", time: "20 நிமிடம்", tags: ["morning", "light"], ingredients: ["முருங்கைக்கீரை", "பாசிப்பருப்பு", "தேங்காய்", "சீரகம்"], steps: ["கீரை சுத்தம் செய்யவும்.", "பருப்பு வேகவைத்து கீரை சேர்க்கவும்.", "தேங்காய் விழுது மற்றும் தாளிப்பு சேர்க்கவும்."], tip: "இரும்புச்சத்து நிறைந்தது; வாரம் ஒரு முறை செய்யவும்." },
  { id: "channa-masala", tamilName: "சன்னா மசாலா", englishName: "Channa Masala", category: "குழம்பு", vegetarian: true, spice: "கார கார", time: "34 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["வெள்ளை கடலை", "வெங்காயம்", "தக்காளி", "கரம் மசாலா"], steps: ["கடலை வேகவைக்கவும்.", "மசாலா வதக்கி சேர்க்கவும்.", "கடலை சேர்த்து சுண்டவிடவும்."], tip: "சிறிது கசூரி மேத்தி சேர்த்தால் ஹோட்டல் சுவை வரும்." },
  { id: "peas-kurma", tamilName: "பட்டாணி குருமா", englishName: "Peas Kurma", category: "குழம்பு", vegetarian: true, spice: "மிதமான", time: "25 நிமிடம்", tags: ["morning", "simple"], ingredients: ["பட்டாணி", "தேங்காய்", "கசகசா", "வெங்காயம்"], steps: ["பட்டாணி வேகவைக்கவும்.", "தேங்காய் விழுது சேர்த்து கொதிக்க விடவும்.", "தாளித்து பரிமாறவும்."], tip: "சப்பாத்தி, இடியாப்பத்துக்கு பொருத்தமானது." },
  { id: "kollu-rasam", tamilName: "கொள்ளு ரசம்", englishName: "Horsegram Rasam", category: "சாம்பார்", vegetarian: true, spice: "மிதமான", time: "18 நிமிடம்", tags: ["night", "simple"], ingredients: ["கொள்ளு நீர்", "தக்காளி", "மிளகு", "பூண்டு", "புளி"], steps: ["கொள்ளு வேகவைத்த நீரை எடுக்கவும்.", "புளி, தக்காளி சேர்த்து கொதிக்க விடவும்.", "மிளகு பூண்டு அரைச்சதை சேர்த்து இறக்கவும்."], tip: "குளிர்காலத்தில் உடலை சூடாக்கும்." },
  { id: "paruppu-kootu", tamilName: "பருப்பு கூட்டு", englishName: "Simple Dal Kootu", category: "கூட்டு", vegetarian: true, spice: "குறைவான", time: "16 நிமிடம்", tags: ["morning", "light"], ingredients: ["துவரம் பருப்பு", "மஞ்சள்", "சீரகம்", "பூண்டு"], steps: ["பருப்பை வேகவைக்கவும்.", "உப்பு, மஞ்சள் சேர்க்கவும்.", "தாளித்து பரிமாறவும்."], tip: "குழந்தைகள் சாப்பிட நல்ல மென்மையான கூட்டு." },
  { id: "thenga-paal-kuzhambu", tamilName: "தேங்காய் பால் குழம்பு", englishName: "Coconut Milk Curry", category: "குழம்பு", vegetarian: true, spice: "குறைவான", time: "22 நிமிடம்", tags: ["night", "simple"], ingredients: ["தேங்காய் பால்", "காய்கறி", "மிளகு", "சீரகம்"], steps: ["காய்கறி வேகவைக்கவும்.", "மசாலா சேர்க்கவும்.", "தேங்காய் பால் சேர்த்து ஒரு கொதி வந்ததும் இறக்கவும்."], tip: "தேங்காய் பால் சேர்த்த பின் அதிகம் கொதிக்க விட வேண்டாம்." },
  { id: "prawn-curry", tamilName: "இறால் குழம்பு", englishName: "Prawn Curry", category: "குழம்பு", vegetarian: false, spice: "கார கார", time: "28 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["இறால்", "வெங்காயம்", "தக்காளி", "மிளகாய் தூள்", "தேங்காய்"], steps: ["இறாலை சுத்தம் செய்யவும்.", "மசாலா வதக்கி தேங்காய் விழுது சேர்க்கவும்.", "இறால் சேர்த்து குறைந்த நேரம் சமைக்கவும்."], tip: "இறால் அதிக நேரம் சமைத்தால் கடினமாகிவிடும்." },
  { id: "nandu-masala", tamilName: "நண்டு மசாலா", englishName: "Crab Masala", category: "குழம்பு", vegetarian: false, spice: "கார கார", time: "40 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["நண்டு", "வெங்காயம்", "தக்காளி", "மிளகு", "சோம்பு"], steps: ["நண்டை நன்றாக சுத்தம் செய்யவும்.", "மசாலா வதக்கி நண்டு சேர்க்கவும்.", "சாறு சுண்டும் வரை சமைக்கவும்."], tip: "சூடாக சாப்பிட்டால் சுவை அதிகம்." },
  { id: "karuveppilai-kuzhambu", tamilName: "கறிவேப்பிலை குழம்பு", englishName: "Curry Leaves Kuzhambu", category: "குழம்பு", vegetarian: true, spice: "மிதமான", time: "20 நிமிடம்", tags: ["morning", "simple"], ingredients: ["கறிவேப்பிலை", "புளி", "மிளகு", "சீரகம்"], steps: ["கறிவேப்பிலை வறுத்து அரைக்கவும்.", "புளித்தண்ணீர் கொதிக்க விடவும்.", "அரைச்சதை சேர்த்து சுண்டவிடவும்."], tip: "இரும்புச்சத்து மற்றும் செரிமானத்திற்கு நல்லது." },
  { id: "chowchow-sambar", tamilName: "சௌ சௌ சாம்பார்", englishName: "Chow Chow Sambar", category: "சாம்பார்", vegetarian: true, spice: "மிதமான", time: "28 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["சௌ சௌ", "துவரம் பருப்பு", "புளி", "சாம்பார் பொடி"], steps: ["பருப்பை வேகவைக்கவும்.", "சௌ சௌ புளியில் வேகவிடவும்.", "பருப்பு சேர்த்து தாளித்து இறக்கவும்."], tip: "சிறிது நெய் சேர்த்தால் சுவை உயரும்." },
  { id: "pumpkin-sambar", tamilName: "பரங்கிக்காய் சாம்பார்", englishName: "Pumpkin Sambar", category: "சாம்பார்", vegetarian: true, spice: "குறைவான", time: "27 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["பரங்கிக்காய்", "பருப்பு", "புளி", "சாம்பார் பொடி"], steps: ["பரங்கிக்காயை நறுக்கி வேகவிடவும்.", "பருப்பு சேர்க்கவும்.", "சாம்பார் பொடி, தாளிப்பு சேர்க்கவும்."], tip: "இயற்கை இனிப்பு சுவை காரணமாக குழந்தைகள் விரும்புவார்கள்." },
  { id: "chettinad-chicken", tamilName: "செட்டிநாடு சிக்கன் குழம்பு", englishName: "Chettinad Chicken Curry", category: "குழம்பு", vegetarian: false, spice: "கார கார", time: "45 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["சிக்கன்", "மிளகு", "சோம்பு", "கசகசா", "தேங்காய்"], steps: ["மசாலா வறுத்து அரைக்கவும்.", "சிக்கன் வதக்கி அரைச்சதை சேர்க்கவும்.", "நன்றாக சுண்டவைத்து இறக்கவும்."], tip: "மசாலாவை எண்ணெய் பிரியும் வரை வதக்கவும்." },
  { id: "paalak-dal", tamilName: "பசலை பருப்பு மசால்", englishName: "Spinach Dal", category: "கூட்டு", vegetarian: true, spice: "குறைவான", time: "19 நிமிடம்", tags: ["morning", "light"], ingredients: ["பசலை கீரை", "பருப்பு", "பூண்டு", "சீரகம்"], steps: ["பருப்பு வேகவைக்கவும்.", "கீரை சேர்த்து மென்மையாக்கவும்.", "பூண்டு தாளித்து சேர்க்கவும்."], tip: "ரோட்டி, சாதம் இரண்டுக்கும் பொருத்தம்." },
  { id: "kovakkai-poriyal", tamilName: "கோவைக்காய் பொரியல்", englishName: "Ivy Gourd Fry", category: "பொரியல்", vegetarian: true, spice: "மிதமான", time: "21 நிமிடம்", tags: ["night", "simple"], ingredients: ["கோவைக்காய்", "வெங்காயம்", "மிளகாய் தூள்", "கடுகு"], steps: ["கோவைக்காயை நறுக்கவும்.", "வெங்காயம் தாளித்து வதக்கவும்.", "கோவைக்காய் சேர்த்து வறுக்கவும்."], tip: "மெல்லியதாக நறுக்கினால் விரைவில் வெந்து விடும்." },
  { id: "chinna-vengaya-sambar", tamilName: "சின்ன வெங்காய சாம்பார்", englishName: "Shallot Sambar", category: "சாம்பார்", vegetarian: true, spice: "மிதமான", time: "30 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["சின்ன வெங்காயம்", "துவரம் பருப்பு", "புளி", "சாம்பார் பொடி"], steps: ["பருப்பு வேகவைக்கவும்.", "சின்ன வெங்காயம் வதக்கி புளி சேர்க்கவும்.", "பருப்பு சேர்த்து கொதிக்க விடவும்."], tip: "சின்ன வெங்காயம் தோல் நீக்கி முழுதாக போடலாம்." },
  { id: "masala-kulambu", tamilName: "மசாலா குழம்பு", englishName: "Mixed Masala Kuzhambu", category: "குழம்பு", vegetarian: true, spice: "கார கார", time: "26 நிமிடம்", tags: ["night", "simple"], ingredients: ["வெங்காயம்", "தக்காளி", "குழம்பு மசாலா", "புளி"], steps: ["வெங்காயம், தக்காளி வதக்கவும்.", "மசாலா மற்றும் புளித்தண்ணீர் சேர்க்கவும்.", "நன்றாக சுண்டவைத்து இறக்கவும்."], tip: "இட்லி, தோசைக்கும் நல்ல இணைப்பு." },
  { id: "urulai-peas-kurma", tamilName: "உருளைக்கிழங்கு பட்டாணி குருமா", englishName: "Potato Peas Kurma", category: "குழம்பு", vegetarian: true, spice: "மிதமான", time: "27 நிமிடம்", tags: ["morning", "simple"], ingredients: ["உருளைக்கிழங்கு", "பட்டாணி", "தேங்காய்", "மசாலா"], steps: ["உருளைக்கிழங்கு வேகவைக்கவும்.", "மசாலா வதக்கி பட்டாணி சேர்க்கவும்.", "தேங்காய் விழுது சேர்த்து கொதிக்க விடவும்."], tip: "பூரி, சப்பாத்திக்கு ஏற்றது." },
  { id: "thakkali-rasam", tamilName: "தக்காளி ரசம்", englishName: "Tomato Rasam", category: "சாம்பார்", vegetarian: true, spice: "குறைவான", time: "15 நிமிடம்", tags: ["night", "light"], ingredients: ["தக்காளி", "புளி", "ரசம் பொடி", "பூண்டு"], steps: ["தக்காளியை நசுக்கவும்.", "புளி நீர் மற்றும் ரசம் பொடி சேர்க்கவும்.", "ஒரு கொதி வந்ததும் தாளித்து இறக்கவும்."], tip: "கொதித்தவுடன் அடுப்பை அணைத்தால் மணம் நன்றாக இருக்கும்." },
  { id: "beetroot-poriyal", tamilName: "பீட்ரூட் பொரியல்", englishName: "Beetroot Poriyal", category: "பொரியல்", vegetarian: true, spice: "குறைவான", time: "18 நிமிடம்", tags: ["morning", "light"], ingredients: ["பீட்ரூட்", "தேங்காய்", "கடுகு", "பச்சை மிளகாய்"], steps: ["பீட்ரூட்டை துருவவும்.", "தாளித்து பீட்ரூட் சேர்க்கவும்.", "தேங்காய் சேர்த்து இறக்கவும்."], tip: "நிறம் காக்க மூடி வேகவைக்க வேண்டாம்." },
  { id: "cabbage-poriyal", tamilName: "முட்டைகோஸ் பொரியல்", englishName: "Cabbage Poriyal", category: "பொரியல்", vegetarian: true, spice: "குறைவான", time: "17 நிமிடம்", tags: ["morning", "light"], ingredients: ["முட்டைகோஸ்", "தேங்காய்", "கடுகு", "உளுத்தம் பருப்பு"], steps: ["முட்டைகோஸை நறுக்கவும்.", "தாளித்து காயை வதக்கவும்.", "தேங்காய் சேர்த்து இறக்கவும்."], tip: "அதிகம் சமைக்காமல் மென்மையாகவே பரிமாறவும்." },
  { id: "kara-kuzhambu", tamilName: "கார குழம்பு", englishName: "Spicy Kuzhambu", category: "குழம்பு", vegetarian: true, spice: "கார கார", time: "23 நிமிடம்", tags: ["night", "simple"], ingredients: ["வெங்காயம்", "பூண்டு", "மிளகாய் தூள்", "புளி"], steps: ["தாளித்து வெங்காயம் வதக்கவும்.", "மசாலா மற்றும் புளி நீர் சேர்க்கவும்.", "நன்றாக சுண்டவிடவும்."], tip: "சிறிது எள்ளெண்ணெய் பயன்படுத்தினால் சுவை உயரும்." },
  { id: "thengai-paal-meen", tamilName: "தேங்காய் பால் மீன் குழம்பு", englishName: "Coconut Fish Curry", category: "குழம்பு", vegetarian: false, spice: "மிதமான", time: "32 நிமிடம்", tags: ["afternoon", "full"], ingredients: ["மீன்", "தேங்காய் பால்", "சின்ன வெங்காயம்", "மிளகாய்"], steps: ["மசாலாவை வதக்கவும்.", "மீன் சேர்த்து சிறிது சமைக்கவும்.", "தேங்காய் பால் சேர்த்து மெதுவாக ஒரு கொதி விடவும்."], tip: "தேங்காய் பால் சேர்த்தபின் பலமாக கிளற வேண்டாம்." }
];

const history = loadHistory();
const today = new Date();
let selectedDate = formatDateKey(today);
let currentSuggestions = [];

const weekStrip = document.getElementById("weekStrip");
const cards = document.getElementById("cards");
const dateLabel = document.getElementById("dateLabel");
const timeContext = document.getElementById("timeContext");
const vegOnlyToggle = document.getElementById("vegOnlyToggle");
const shuffleBtn = document.getElementById("shuffleBtn");

init();

function init() {
  renderWeekStrip(today);
  attachEvents();
  updateSuggestions(selectedDate);
}

function attachEvents() {
  vegOnlyToggle.addEventListener("change", () => updateSuggestions(selectedDate, true));
  shuffleBtn.addEventListener("click", () => updateSuggestions(selectedDate, true, true));
}

function renderWeekStrip(baseDate) {
  weekStrip.innerHTML = "";
  const monday = startOfWeek(baseDate);

  for (let i = 0; i < 7; i += 1) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    const key = formatDateKey(date);

    const btn = document.createElement("button");
    btn.className = `day-btn ${key === selectedDate ? "active" : ""}`;
    btn.textContent = WEEKDAYS[i];
    btn.title = new Intl.DateTimeFormat("ta-IN", {
      weekday: "long",
      day: "numeric",
      month: "short"
    }).format(date);

    btn.addEventListener("click", () => {
      selectedDate = key;
      renderWeekStrip(baseDate);
      updateSuggestions(key);
    });

    weekStrip.appendChild(btn);
  }
}

function updateSuggestions(dateKey, forceRegenerate = false, manualShuffle = false) {
  const suggestionIds = getSuggestionIds(dateKey, forceRegenerate, manualShuffle);
  currentSuggestions = suggestionIds.map((id) => dishes.find((dish) => dish.id === id)).filter(Boolean);

  const selectedDateObj = parseDateKey(dateKey);
  dateLabel.textContent = `${formatTamilDate(selectedDateObj)} - உங்கள் சமையல் தேர்வு`;
  timeContext.textContent = getTimeMessage();

  renderCards();
}

function getSuggestionIds(dateKey, forceRegenerate, manualShuffle) {
  const vegOnly = vegOnlyToggle.checked;
  const saved = history.days[dateKey];
  const canReuse = saved && saved.vegOnly === vegOnly && !forceRegenerate;

  if (canReuse) return saved.ids;

  const excludeIds = recentIdsFor(dateKey, 7);
  const candidates = dishes.filter((dish) => {
    if (vegOnly && !dish.vegetarian) return false;
    if (excludeIds.has(dish.id)) return false;
    return true;
  });

  const withTimeWeight = prioritizeByTime(candidates);
  const picked = pickUnique(withTimeWeight, 2, manualShuffle ? [] : null);

  history.days[dateKey] = {
    ids: picked,
    vegOnly,
    updatedAt: Date.now()
  };

  saveHistory(history);
  return picked;
}

function prioritizeByTime(pool) {
  const segment = getTimeSegment();
  const preferred = pool.filter((dish) => dish.tags.includes(segment));
  const others = pool.filter((dish) => !dish.tags.includes(segment));
  return shuffle([...preferred, ...others]);
}

function pickUnique(pool, count) {
  const shuffled = shuffle(pool);
  if (shuffled.length <= count) return shuffled.map((dish) => dish.id);
  return shuffled.slice(0, count).map((dish) => dish.id);
}

function renderCards() {
  cards.innerHTML = "";
  const template = document.getElementById("cardTemplate");

  currentSuggestions.forEach((dish, index) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".tamil-name").textContent = `${index === 0 ? "⭐ " : ""}${dish.tamilName}`;
    clone.querySelector(".english-name").textContent = dish.englishName;
    clone.querySelector(".category").textContent = dish.category;
    clone.querySelector(".spice").textContent = dish.spice;
    clone.querySelector(".time").textContent = dish.time;

    const ingredientList = clone.querySelector(".ingredients");
    dish.ingredients.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ingredientList.appendChild(li);
    });

    const stepsList = clone.querySelector(".steps");
    dish.steps.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      stepsList.appendChild(li);
    });

    clone.querySelector(".tip-text").textContent = dish.tip;
    const link = clone.querySelector(".video-link");
    link.href = getYouTubeLink(dish);
    cards.appendChild(clone);
  });
}

function getYouTubeLink(dish) {
  const query = `${dish.tamilName} சமையல் தமிழ் recipe`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function recentIdsFor(dateKey, days = 7) {
  const ids = new Set();
  const date = parseDateKey(dateKey);

  for (let i = 1; i <= days; i += 1) {
    const d = new Date(date);
    d.setDate(date.getDate() - i);
    const key = formatDateKey(d);
    const record = history.days[key];
    if (record?.ids) record.ids.forEach((id) => ids.add(id));
  }

  return ids;
}

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { days: {} };
    const parsed = JSON.parse(raw);
    return parsed?.days ? parsed : { days: {} };
  } catch {
    return { days: {} };
  }
}

function saveHistory(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getTimeSegment() {
  const hour = new Date().getHours();
  if (hour < 11) return "morning";
  if (hour < 17) return "afternoon";
  return "night";
}

function getTimeMessage() {
  const segment = getTimeSegment();
  if (segment === "morning") return "காலை நேரம்: இலகு கறிகள் முன்னுரிமை.";
  if (segment === "afternoon") return "மதிய நேரம்: முழு உணவுக்கான கறிகள் முன்னுரிமை.";
  return "இரவு நேரம்: எளிய கறிகள் முன்னுரிமை.";
}

function startOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function formatDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function parseDateKey(key) {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function formatTamilDate(date) {
  return new Intl.DateTimeFormat("ta-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
