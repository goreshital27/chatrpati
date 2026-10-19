# ASSETS.md — Image Asset Directory & AI Generation Prompts

> Complete asset manifest for the Chhatrapati Shivaji Maharaj website. Every slot currently contains a handcrafted cinematic SVG graphic and can be substituted with AI-generated or licensed WebP / AVIF / PNG art.

---

## Art Direction Guidelines
- **Core Aesthetic:** Cinematic 4K game / movie concept art, dramatic sunset and twilight skies (saffron, ember, deep rose), dark Sahyadri mountain silhouettes, teal-gold glowing armor rim lighting, volumetric mist.
- **Aspect Ratio:**
  - Hero Layers: `16:9` (1920×1080) with transparent PNG/WebP background where appropriate.
  - Fort Cards: `4:5` (800×1000) or `16:9` (1200×675).
  - Warrior Cards: `4:5` (800×1000) portrait.
- **Midjourney Parameter Presets:** `--ar 4:5 --style raw --v 6.1 --s 250` or `--ar 16:9 --style raw --v 6.1`

---

## 1. Hero Parallax Layers (`/public/assets/hero/`)

| File Path | Description | Recommended AI Generation Prompt (Midjourney / Gemini) |
|---|---|---|
| `public/assets/hero/sky-sunset` | Sunset backdrop | `Ultra-wide cinematic sky at dusk over the Sahyadri mountains, radiant saffron and rose-gold sun glowing low on the horizon, ambient atmospheric haze, dramatic gradient clouds, cinematic concept art, 8k resolution, photorealistic digital painting --ar 16:9` |
| `public/assets/hero/raigad-far.svg` | Far Sahyadri ridges & Raigad silhouette | `Distant jagged Sahyadri mountain ridgeline with the formidable stone fortress plateau of Raigad Fort in deep silhouette, atmospheric purple-black mountains against sunset sky, layer separation, game art --ar 16:9` |
| `public/assets/hero/mid-ground-hills.svg` | Mid-ground hills with saffron flags | `Midground rocky Sahyadri ridge with Maratha saffron swallowtail flags (Bhagwa Zenda) fluttering proudly in the wind, silhouettes of raised spears and watchtowers, rim light on mountain edges, transparent sky --ar 16:9` |
| `public/assets/hero/shivaji-foreground.svg` | Shivaji Maharaj & Mavle warriors | `Majestic dark silhouette of Chhatrapati Shivaji Maharaj seated regally on his royal war horse atop a Sahyadri mountain precipice, raising his sacred Bhavani sword towards the sunset sky, surrounded by loyal Mavla soldiers with shields and spears, fluttering saffron banner, subtle teal and warm gold rim lighting highlighting traditional Maratha armor and turban, cinematic masterwork --ar 16:9` |
| `public/assets/hero/fog-1.svg` / `fog-2.svg` | Parallax mist layers | `Layered transparent pink-orange volumetric smoke and mountain mist clouds, soft diffusion, cinematic atmosphere, PNG cutout with alpha channel --ar 16:9` |
| `public/assets/hero/birds.svg` | Mountain birds | `Silhouettes of wild mountain eagles and hawks soaring across a vibrant dusk sky, minimalist vector-style flight formation, isolated transparent background` |

---

## 2. Fortresses (`/public/assets/forts/`)

| File Path | Fort Name | Suggested AI Generation Prompt |
|---|---|---|
| `public/assets/forts/raigad.svg` | Raigad Fort | `Cinematic wide shot of Raigad Fort, the capital of Swarajya, perched on sheer 820m vertical cliffs of the Sahyadri, Maha Darwaja, Nagarkhana, golden sunset lighting, stone bastions, fluttering saffron flag, dramatic mist, 8k --ar 4:5` |
| `public/assets/forts/rajgad.svg` | Rajgad Fort | `The King of Forts, Rajgad, showing the formidable Sanjivani Machi with triple-layered zigzagging stone ramparts, Suvela Machi natural needle hole, sunset glow, epic aerial perspective --ar 4:5` |
| `public/assets/forts/torna.svg` | Torna Fort (Prachandagad) | `Torna Fort atop a razor-thin Sahyadri ridge shrouded in mountain clouds, Zunjar Machi cliff, cradle of Swarajya conquest, dramatic dramatic twilight lighting --ar 4:5` |
| `public/assets/forts/pratapgad.svg` | Pratapgad Fort | `Pratapgad fortress emerging from the dense Jawali jungle forest, towering double ramparts and Bhavani Mata temple silhouette, eerie twilight mist, dramatic historical atmosphere --ar 4:5` |
| `public/assets/forts/sinhagad.svg` | Sinhagad (Kondhana) | `The sheer vertical 90-degree Dronagiri cliff of Sinhagad fort at midnight under a full moon, dark rocky precipice, torches flickering on bastions, epic concept art --ar 4:5` |
| `public/assets/forts/purandar.svg` | Purandar Fort | `The twin citadel of Purandar and Vajragad (Rudra Mahal), stone parapets, panoramic view of Deccan plains below, heroic golden hour illumination, historic military architecture --ar 4:5` |
| `public/assets/forts/shivneri.svg` | Shivneri Fort | `Shivneri hill fort, cradle of Shivaji Maharaj, rock-cut ancient Buddhist caves, seven fortified security gates climbing the mountain, sacred morning dawn sunlight, dramatic Sahyadri scenery --ar 4:5` |
| `public/assets/forts/panhala.svg` | Panhala Fort | `Massive hill fortress of Panhala in the monsoon, Sajja Kothi watchtower overlooking sea of clouds, rain-swept stone ramparts, mysterious and grand atmosphere --ar 4:5` |
| `public/assets/forts/sindhudurg.svg` | Sindhudurg Fort | `Sindhudurg ocean fort on Kurte island, massive stone walls rising directly out of crashing Arabian sea waves, molten lead foundations, sunset ocean spray, Maratha naval bastions --ar 4:5` |
| `public/assets/forts/suvarnadurg.svg` | Suvarnadurg Fort | `The Golden Sea Fort of Suvarnadurg surrounded by turbulent blue ocean waters off Harnai coast, Maratha warships (Gurabs and Galbats) anchored nearby, dramatic marine sunset --ar 4:5` |

---

## 3. Mavle & Warriors (`/public/assets/warriors/`)

| File Path | Warrior | Suggested AI Generation Prompt |
|---|---|---|
| `public/assets/warriors/jijabai.svg` | Rajmata Jijabai | `Dignified portrait of Rajmata Jijabai Bhosale, traditional red and gold Paithani nine-yard saree, noble maternal grace and steel-willed eyes, holding sacred scriptures, palace courtyard in background, warm candlelight --ar 4:5` |
| `public/assets/warriors/tanaji.svg` | Subedar Tanaji Malusare | `Fierce warrior portrait of Subedar Tanaji Malusare, traditional Maratha armor, turban with war plume, holding broken shield and drawn talwar sword, battle scars, determined lion-like expression, sparks and embers --ar 4:5` |
| `public/assets/warriors/baji-prabhu.svg` | Baji Prabhu Deshpande | `Heroic stand of Baji Prabhu Deshpande in Pavankhind gorge, wielding twin dandpatta gauntlet swords in both hands, bloodied warrior armor, holding the narrow pass against overwhelming shadows, epic cinematic tribute --ar 4:5` |
| `public/assets/warriors/hambirrao.svg` | Senapati Hambirrao Mohite | `Commander-in-Chief Hambirrao Mohite on a galloping Maratha war horse, steel chainmail armor, spear in hand, leading a thunderous cavalry charge under the saffron flag, dust and motion blur --ar 4:5` |
| `public/assets/warriors/netaji.svg` | Netaji Palkar | `Cavalry master Netaji Palkar, agile Maratha scout armor, holding reins of steed, lightning background symbolizing whirlwind mobility, fierce strategic gaze --ar 4:5` |
| `public/assets/warriors/murarbaji.svg` | Murarbaji Deshpande | `Murarbaji Deshpande defending Purandar's Machi with his 700 Mavlas, wielding heavy broadsword, heroic defiant stance against enemy battlements, fiery smoke in background --ar 4:5` |
| `public/assets/warriors/shiva-kashid.svg` | Shiva Kashid | `Shiva Kashid dressed in royal gold-embroidered robes resembling Shivaji Maharaj, sitting calmly in a royal palanquin stepping willingly into danger, supreme selfless loyalty in his eyes --ar 4:5` |
| `public/assets/warriors/jiva-mahala.svg` | Jiva Mahala | `Jiva Mahala leaping forward with lightning reflexes to deflect a deadly blow, traditional bodyguard attire, swift motion, dramatic shadows of the Pratapgad royal shamiana --ar 4:5` |
| `public/assets/warriors/kanhoji-angre.svg` | Sarkhel Kanhoji Angre | `Grand Admiral Kanhoji Angre on the quarterdeck of a Maratha Gurab warship, stormy Arabian Sea, brass telescope and mariner sword, naval uniform, sovereign master of the seas --ar 4:5` |

---

## 4. Ashtapradhan Ministers (`/public/assets/ministers/`)

| File Path | Minister / Title | Size & Ratio | Suggested AI Image Prompt |
|---|---|---|---|
| `public/assets/ministers/peshwa.svg` | Moropant Pingle (Peshwa) | 800×1000 (4:5) | `Dramatic royal council portrait of Prime Minister Moropant Trimbak Pingle, seated in a grand Maratha darbar, wearing a deep saffron and maroon velvet angarkha, gold embroidered royal pagadi turban with pearl jigah, holding the royal seal of Swarajya, dark painterly silhouette, teal-gold glowing armor accents, cinematic lighting, 8k --ar 4:5` |
| `public/assets/ministers/amatya.svg` | Ramchandra Nilkanth (Amatya) | 800×1000 (4:5) | `Maratha Finance Minister Ramchandra Nilkanth in treasury chamber, calculating accounts of 300 fortresses with copper Shivrai and gold Hon coins, ornate inkwell and parchment, candlelit chiaroscuro, dark painterly silhouette, teal-gold glowing accents --ar 4:5` |
| `public/assets/ministers/sachiv.svg` | Annaji Datto (Sachiv) | 800×1000 (4:5) | `Chief Secretary Annaji Datto examining royal cadastral land survey scrolls, imperial secretariat chamber with carved teak pillars, dignified scholar-statesman, dark silhouette with warm golden rim light --ar 4:5` |
| `public/assets/ministers/mantri.svg` | Dattaji Trimbak (Mantri) | 800×1000 (4:5) | `Home Minister and Chief Chronicler Dattaji Trimbak writing the imperial court diary (Roznamcha), discreet palace alcove, intelligence scrolls, mysterious shadows, teal-gold ambient glow --ar 4:5` |
| `public/assets/ministers/senapati.svg` | Hambirrao Mohite (Senapati) | 800×1000 (4:5) | `Supreme Commander Hambirrao Mohite in battle armor, hand on hilt of broad talwar sword, commanding presence overlooking cavalry squadrons, sunset Sahyadri backdrop, fiery ember sparks, cinematic concept art --ar 4:5` |
| `public/assets/ministers/sumant.svg` | Ramchandra Trimbak (Sumant) | 800×1000 (4:5) | `Foreign Minister Ramchandra Trimbak welcoming foreign ambassadors in a starlit royal pavilion, intricate Maratha court attire, diplomatic treaties, moonlight and torches, royal purple and gold tones --ar 4:5` |
| `public/assets/ministers/nyayadhish.svg` | Niraji Raoji (Nyayadhish) | 800×1000 (4:5) | `Chief Justice Niraji Raoji presiding over the high tribunal court of justice, scales of righteousness, austere yet majestic dharmic authority, warm candlelight, dark painterly silhouette with gold highlights --ar 4:5` |
| `public/assets/ministers/panditrao.svg` | Raghunath Pandit (Panditrao) | 800×1000 (4:5) | `Minister of Religion and Cultural Charity Raghunath Pandit reviewing Sanskrit texts of the Rajya Vyavahara Kosha, temple courtyard backdrop, sacred saffron drapery, serene illuminated wisdom --ar 4:5` |

---

## 5. UI Elements (`/public/assets/ui/`)

| File Path | Description | Size & Ratio | Spec |
|---|---|---|---|
| `public/assets/ui/rajmudra.svg` | Royal Rajmudra Seal | 500×500 (1:1) | Octagonal royal seal with authentic Sanskrit shloka inscription in Devanagari calligraphy, gold gradient foil finish and rim glow. |

