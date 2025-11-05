import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Zap, Headphones, Star, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { PurchaseDialog } from "@/components/PurchaseDialog";
import { getVariantId } from "@/lib/sellhubVariants";

// Product Images
import rustExternalImg from "@/assets/RUST_External.png";
import mekRustImg from "@/assets/RUST_Mek.png";
import disconnectRustImg from "@/assets/RUST_Disconnect.png";
import bo6InternalImg from "@/assets/BO6_Internal.png";
import fortniteUltimateImg from "@/assets/Fortnite_Ultimate.png";
import disconnectFortniteImg from "@/assets/Fortnite_Disconnect.png";
import infernoR6Img from "@/assets/R6_Inferno.png";
import r6UnlockAllImg from "@/assets/R6_Unlock_All.png";
import exodusDeltaForceImg from "@/assets/delta_force_exodus.png";
import exodusApexImg from "@/assets/apex_legends_exodus_hero.png";
import predatorMarvelRivalsImg from "@/assets/marvel_rivals_predator.png";
import predatorCs2Img from "@/assets/cs2_predator.png";
import permSpooferImg from "@/assets/HWID_Spoofer_Perm.png";
import valorantColorbotImg from "@/assets/Valorant_Colorbot.png";
import exodusTempSpooferImg from "@/assets/Exodus_Temp_Spoofer.png";

const ProductDetail = () => {
  const [selectedPackage, setSelectedPackage] = useState("week");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [purchaseDialogOpen, setPurchaseDialogOpen] = useState(false);
  const location = useLocation();
  const slug = location.pathname.replace("/", "");

  const productMap = {
    "rust-external": {
      name: "Rust External",
      images: [rustExternalImg, rustExternalImg],
      anticheat: "EAC",
      packages: [
        { id: "3day", name: "3 Days", days: 3, price: "$14.99" },
        { id: "7day", name: "7 Days", days: 7, price: "$29.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$59.99" },
        { id: "lifetime", name: "Lifetime", days: null, price: "$229.99" },
      ],
      starting: "$14.99",
    },
    "mek-rust": {
      name: "Mek Rust",
      images: [mekRustImg, mekRustImg],
      anticheat: "EAC",
      packages: [
        { id: "1day", name: "1 Day", days: 1, price: "$7.99" },
        { id: "3day", name: "3 Days", days: 3, price: "$17.99" },
        { id: "7day", name: "7 Days", days: 7, price: "$29.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$59.99" },
        { id: "lifetime", name: "Lifetime", days: null, price: "$249.99" },
      ],
      starting: "$7.99",
    },
    "disconnect-rust": {
      name: "Disconnect Rust",
      images: [disconnectRustImg, disconnectRustImg],
      anticheat: "EAC",
      packages: [
        { id: "1day", name: "1 Day", days: 1, price: "$7.99" },
        { id: "3day", name: "3 Days", days: 3, price: "$17.99" },
        { id: "7day", name: "7 Days", days: 7, price: "$29.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$59.99" },
        { id: "lifetime", name: "Lifetime", days: null, price: "$279.99" },
      ],
      starting: "$7.99",
    },
    "bo6-internal": {
      name: "BO6 Internal",
      images: [bo6InternalImg, bo6InternalImg],
      anticheat: "Ricochet",
      packages: [
        { id: "1day", name: "1 Day", days: 1, price: "$5.99" },
        { id: "7day", name: "7 Days", days: 7, price: "$17.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$29.99" },
      ],
      starting: "$5.99",
    },
    "fortnite-ultimate": {
      name: "Fortnite Ultimate",
      images: [fortniteUltimateImg, fortniteUltimateImg],
      anticheat: "BattlEye",
      packages: [
        { id: "1day", name: "1 Day", days: 1, price: "$5.99" },
        { id: "3day", name: "3 Days", days: 3, price: "$14.99" },
        { id: "7day", name: "7 Days", days: 7, price: "$24.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$49.99" },
        { id: "lifetime", name: "Lifetime", days: null, price: "$199.99" },
      ],
      starting: "$5.99",
    },
    "disconnect-fortnite": {
      name: "Disconnect Fortnite",
      images: [disconnectFortniteImg, disconnectFortniteImg],
      anticheat: "BattlEye",
      packages: [
        { id: "1day", name: "1 Day", days: 1, price: "$8.99" },
        { id: "3day", name: "3 Days", days: 3, price: "$17.99" },
        { id: "7day", name: "7 Days", days: 7, price: "$34.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$64.99" },
        { id: "lifetime", name: "Lifetime", days: null, price: "$279.99" },
      ],
      starting: "$8.99",
    },
    "inferno-r6": {
      name: "Inferno R6",
      images: [infernoR6Img, infernoR6Img],
      anticheat: "BattlEye",
      packages: [
        { id: "1day", name: "1 Day", days: 1, price: "$5.99" },
        { id: "7day", name: "7 Days", days: 7, price: "$29.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$59.99" },
      ],
      starting: "$5.99",
    },
    "r6-unlock-all": {
      name: "R6 Unlock All",
      images: [r6UnlockAllImg, r6UnlockAllImg],
      anticheat: "BattlEye",
      packages: [
        { id: "1day", name: "1 Day", days: 1, price: "$4.99" },
        { id: "7day", name: "7 Days", days: 7, price: "$19.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$39.99" },
      ],
      starting: "$4.99",
    },
    "exodus-delta-force": {
      name: "Exodus Delta Force",
      images: [exodusDeltaForceImg, exodusDeltaForceImg],
      anticheat: "BattlEye",
      packages: [
        { id: "1day", name: "1 Day", days: 1, price: "$4.99" },
        { id: "3day", name: "3 Days", days: 3, price: "$9.99" },
        { id: "7day", name: "7 Days", days: 7, price: "$19.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$39.99" },
      ],
      starting: "$4.99",
    },
    "exodus-apex": {
      name: "Exodus Apex",
      images: [exodusApexImg, exodusApexImg],
      anticheat: "EAC",
      packages: [
        { id: "1day", name: "1 Day", days: 1, price: "$3.99" },
        { id: "3day", name: "3 Days", days: 3, price: "$6.99" },
        { id: "7day", name: "7 Days", days: 7, price: "$17.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$34.99" },
      ],
      starting: "$3.99",
    },
    "predator-marvel-rivals": {
      name: "Predator Marvel Rivals",
      images: [predatorMarvelRivalsImg, predatorMarvelRivalsImg],
      anticheat: "Ricochet",
      packages: [
        { id: "1day", name: "1 Day", days: 1, price: "$6.99" },
        { id: "7day", name: "7 Days", days: 7, price: "$12.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$24.99" },
        { id: "365day", name: "365 Days", days: 365, price: "$99.99" },
      ],
      starting: "$6.99",
    },
    "predator-cs2": {
      name: "Predator CS2",
      images: [predatorCs2Img, predatorCs2Img],
      anticheat: "VAC",
      packages: [
        { id: "1day", name: "1 Day", days: 1, price: "$2.49" },
        { id: "7day", name: "7 Days", days: 7, price: "$4.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$7.99" },
        { id: "365day", name: "1 Year", days: 365, price: "$59.99" },
      ],
      starting: "$2.49",
    },
    "valorant-colorbot": {
      name: "Valorant Colorbot",
      images: [valorantColorbotImg, valorantColorbotImg],
      anticheat: "Vanguard",
      packages: [
        { id: "1day", name: "1 Day", days: 1, price: "$5.99" },
        { id: "7day", name: "7 Days", days: 7, price: "$17.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$29.99" },
        { id: "lifetime", name: "Lifetime", days: null, price: "$89.99" },
      ],
      starting: "$5.99",
    },
    "perm-spoofer": {
      name: "Perm Spoofer",
      images: [permSpooferImg, permSpooferImg],
      anticheat: "ALL AC",
      packages: [
        { id: "onetime", name: "One-Time", days: null, price: "$19.99" },
        { id: "lifetime", name: "Lifetime", days: null, price: "$49.99" },
      ],
      starting: "$19.99",
    },
    "exodus-temp-spoofer": {
      name: "Exodus Temp Spoofer",
      images: [exodusTempSpooferImg, exodusTempSpooferImg],
      anticheat: "ALL AC",
      packages: [
        { id: "1day", name: "1 Day", days: 1, price: "$3.99" },
        { id: "3day", name: "3 Days", days: 3, price: "$7.99" },
        { id: "7day", name: "7 Days", days: 7, price: "$12.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$24.99" },
      ],
      starting: "$3.99",
    },
    valorant: {
      name: "Valorant",
      images: ["https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80", "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80"],
      anticheat: "Vanguard",
      packages: [
        { id: "7day", name: "7 Days", days: 7, price: "$13.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$29.99" },
        { id: "lifetime", name: "Lifetime", days: null, price: "$44.99" },
      ],
      starting: "$13.99",
    },
    "hwid-spoofer": {
      name: "HWID Unban",
      images: ["https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&q=80", "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&q=80"],
      anticheat: "ALL AC",
      packages: [
        { id: "7day", name: "7 Days", days: 7, price: "$19.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$29.99" },
        { id: "lifetime", name: "Lifetime", days: null, price: "$44.99" },
      ],
      starting: "$19.99",
    },
    "black-ops-6": {
      name: "Black Ops 6",
      images: ["https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80", "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80"],
      anticheat: "Ricochet",
      packages: [
        { id: "7day", name: "7 Days", days: 7, price: "$13.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$29.99" },
        { id: "lifetime", name: "Lifetime", days: null, price: "$44.99" },
      ],
      starting: "$13.99",
    },
    "delta-force": {
      name: "Delta Force",
      images: ["https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&q=80", "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&q=80"],
      anticheat: "BattlEye",
      packages: [
        { id: "7day", name: "7 Days", days: 7, price: "$13.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$29.99" },
        { id: "lifetime", name: "Lifetime", days: null, price: "$44.99" },
      ],
      starting: "$13.99",
    },
    "battlefield-2042": {
      name: "Battlefield 2042",
      images: ["https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&q=80", "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&q=80"],
      anticheat: "EAC",
      packages: [
        { id: "7day", name: "7 Days", days: 7, price: "$13.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$29.99" },
        { id: "lifetime", name: "Lifetime", days: null, price: "$44.99" },
      ],
      starting: "$13.99",
    },
    "apex-legends": {
      name: "Apex Legends",
      images: ["https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=1200&q=80", "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=1200&q=80"],
      anticheat: "EAC",
      packages: [
        { id: "7day", name: "7 Days", days: 7, price: "$13.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$29.99" },
        { id: "lifetime", name: "Lifetime", days: null, price: "$44.99" },
      ],
      starting: "$13.99",
    },
    cs2: {
      name: "CS2",
      images: ["https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1200&q=80", "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1200&q=80"],
      anticheat: "VAC",
      packages: [
        { id: "7day", name: "7 Days", days: 7, price: "$13.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$29.99" },
        { id: "lifetime", name: "Lifetime", days: null, price: "$44.99" },
      ],
      starting: "$13.99",
    },
    rust: {
      name: "Rust",
      images: ["https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80", "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80"],
      anticheat: "EAC",
      packages: [
        { id: "7day", name: "7 Days", days: 7, price: "$13.99" },
        { id: "30day", name: "30 Days", days: 30, price: "$29.99" },
        { id: "lifetime", name: "Lifetime", days: null, price: "$44.99" },
      ],
      starting: "$13.99",
    },
  } as const;

  const current = productMap[slug as keyof typeof productMap] ?? productMap["rust-external"];

  const packages = current.packages;

  // Ensure a valid default selected package per product
  useEffect(() => {
    const ids = packages.map((p) => p.id);
    if (!ids.includes(selectedPackage)) {
      setSelectedPackage(packages[0]?.id);
    }
    // Also re-init SellHub when the dialog may open for a new variant
    if ((window as any).SellHub?.init) {
      try { (window as any).SellHub.init(); } catch {}
    }
  }, [slug]);

  const productFeatures: Record<string, Array<{ title: string; items: string[] }>> = {
    "valorant-colorbot": [
      {
        title: "General Information",
        items: ["High quality aimbot + triggerbot", "Great Performance", "Fully External"],
      },
      {
        title: "Requirements",
        items: ["CPU: Intel / AMD", "OS: Windows 10/11"],
      },
      {
        title: "Features",
        items: ["Aim Assist", "Flickbot", "Custom Settings", "Custom FOV", "Custom Aimbind", "Custom RCS (Recoil Control System)", "Customizable Triggerbot"],
      },
    ],
    "fortnite-ultimate": [
      {
        title: "General Information",
        items: ["Streamproof", "Stretched Res Support", "Controller Support"],
      },
      {
        title: "Requirements",
        items: ["CPU: Intel / AMD", "OS: Windows 10 / 11"],
      },
      {
        title: "Aimbot",
        items: ["Enable", "FOV", "Smoothing", "Target Bone", "First & Second Keybind", "Configure by weapon", "FOV Circle", "Aimbot Distance", "Prediction", "Target Switch", "Visibility Check", "Ignore NPC", "Ignore Knocked", "FOV Color"],
      },
      {
        title: "Triggerbot",
        items: ["Enable", "Delay", "Auto Fire", "Keybind", "Only Shotgun", "Distance Slider"],
      },
      {
        title: "Visuals",
        items: ["Box", "Skeleton", "Head", "Distance", "Platform", "Name", "Weapon Name", "Rank", "Off Screen Arrow", "Off Screen", "Team Check", "Skeleton/Box Thickness"],
      },
    ],
    "r6-unlock-all": [
      {
        title: "General Information",
        items: ["Unlock All", "Server sided", "Works while using other products"],
      },
      {
        title: "Requirements",
        items: ["CPU: Intel / AMD", "OS: Windows 10 / 11", "All overlays must be disabled"],
      },
      {
        title: "Unlock All",
        items: ["Skins", "Charms", "Elites", "Operators & outfits", "Banners", "Drone skins", "and more!"],
      },
    ],
    "mek-rust": [
      {
        title: "General Information",
        items: ["Streamproof", "Unique Bypass", "Fully External"],
      },
      {
        title: "Requirements",
        items: ["CPU: Intel / AMD", "OS: Windows 10 / 11"],
      },
      {
        title: "Aimbot",
        items: ["Silent Aim (with Hit Chance)", "Memory Aim (with Smoothing)", "Aimbot Key Binding", "Field of View controls"],
      },
      {
        title: "Visuals",
        items: ["All options below are customizable", "Player ESP", "Teammate ESP", "Chams", "Resources", "Crates", "Weapons & Corpses", "World Colors"],
      },
      {
        title: "Misc",
        items: ["Fast Loot", "No Fall Damage", "Spider-Man", "Infinite Jump", "Remove Player Collision", "Shoot Mounted", "Jump Shoot", "Zoom", "FOV Modification", "Interactive/Debug Cam", "Remove Layers", "Head Hitbox Override", "One Shot Eoka", "No Spread", "Fast Projectile", "Recoil Control", "Remove Weapon Punch", "Thick Bullet"],
      },
      {
        title: "Settings",
        items: ["Bright Night", "Change World Time", "Panic Key", "Combat Key", "Configuration Management: Create, Refresh, Load, Save, Delete configurations"],
      },
    ],
    "predator-marvel-rivals": [
      {
        title: "General Information",
        items: ["Great for legit-rage", "Amazing Visuals", "Smooth Aimbot", "Undetected"],
      },
      {
        title: "Requirements",
        items: ["CPU: Intel / AMD", "OS: Windows 10 / 11"],
      },
      {
        title: "Aimbot",
        items: ["Enable", "Hit Groups (Enemy Body Parts)", "FOV", "Smooth", "Filters (Behind the walls, Distance)", "FOV type (Static, Dynamic)"],
      },
      {
        title: "Visuals",
        items: ["Players (Self, Teammates, Enemies)", "Preview (ESP preview)", "Box", "Distance", "Health bar", "Nickname", "Hero name", "Ultimate charge", "Only visible", "Skeleton"],
      },
      {
        title: "Other",
        items: ["Draw FOV", "Watermark", "Keybind list", "Radar (Out of view, Scale, Alpha)"],
      },
    ],
    "exodus-delta-force": [
      {
        title: "General Information",
        items: ["External Product", "Spoofer Included"],
      },
      {
        title: "Requirements",
        items: ["CPU: Intel / AMD", "OS: Windows 10 / 11", "16gb ram ++"],
      },
      {
        title: "Aimbot",
        items: ["General", "Enabled AimBot", "Aim Type (Static; Curved)", "Aim key ( key 1 and key 2)", "Fov", "Draw FOV", "Smooth", "Target", "Bone", "Force Bone", "Force key", "Only Visible", "Lock Target", "Lock Knocked"],
      },
      {
        title: "Visuals",
        items: ["Player", "Draw distance (slider)", "Esp Box (visible and invisible color)", "Esp Skeleton (visible and invisible color)", "Skeleton Thickness (slider)", "Esp Health", "Esp Line", "Esp Nick: color", "Esp Distance: color", "Additional Info", "Esp Team", "Esp Kills", "Enable Radar", "Radar size (slider)", "Draw Player: color"],
      },
      {
        title: "Radar",
        items: ["Enable", "Players: color", "AI", "Team: color"],
      },
      {
        title: "Object Setup",
        items: ["Enable: color", "Draw Name", "Draw distance", "Limit Distance (slider)"],
      },
      {
        title: "Misc",
        items: ["Show FPS", "FPS Locker (slider)", "Language settings (English and Chinese)"],
      },
      {
        title: "Config",
        items: ["Save settings", "Load settings", "Delete settings"],
      },
    ],
    "predator-cs2": [
      {
        title: "General Information",
        items: ["Best Legit Cheat For CS2", "Amazing Visuals / Performance / Menu"],
      },
      {
        title: "Requirements",
        items: ["CPU: Intel / AMD", "OS: Windows 10 / 11"],
      },
      {
        title: "Aimbot",
        items: ["Enable", "Hit Groups (enemy body parts)", "FOV Type", "FOV (viewing angle)", "Smooth", "Auto Wall (shoot through walls)", "Filters: Friendly Fire, Ignore Smoke, Ignore Flash", "RCS (Recoil Control): Pitch, Yaw, Start Bullet", "Delays", "Target Selection"],
      },
      {
        title: "Triggerbot",
        items: ["Enable", "Hit Groups", "Friendly Fire", "Only Scoped", "Ignore Smoke", "Ignore Flash", "Hitchance"],
      },
      {
        title: "Visuals",
        items: ["Preview", "Box", "Health Bar", "Armor Bar", "Nickname", "Weapon Text", "Bomb", "Defuse Kit", "Distance", "Flashed", "Scoped", "Planting", "Defusing", "Hostage", "Skeleton", "Chams", "Glow", "Out of FOV Arrows", "Items on Ground"],
      },
      {
        title: "World",
        items: ["Effects (hit/kill visuals)", "Night Mode", "Smoke Color", "Grenade Trajectory", "Grenade Warning"],
      },
      {
        title: "Other",
        items: ["C4 Timer", "Removals (smoke, sky, etc.)", "Hitmarker", "Damage Indicator", "Viewmodel (hand/weapon position)"],
      },
      {
        title: "Misc",
        items: ["SkinChanger", "Trusted Mode", "Auto Accept", "Spectator List", "Keybind List", "HitSound", "Preserve Killfeed", "Chatspam"],
      },
      {
        title: "Radar",
        items: ["External", "Scale", "Alpha (transparency)"],
      },
    ],
    "rust-external": [
      {
        title: "Aimbot",
        items: ["Aimbot", "Silent Aim", "Field of View (AIMBOT)", "Smoothing", "Hit Chance", "Bone Selection (Head, Chest, etc.)", "Target Friendly", "Target NPC", "Target Heli", "Terrain Check", "Lock Aim Target", "FOV Circle", "Aim Line"],
      },
      {
        title: "Weapons",
        items: ["Recoil Changer", "Spread Changer", "No Shotgun Spread", "No Sway", "Automatic Weapons", "Instant Eoka", "Instant Bow", "Instant Compound Bow", "Hitbox Override [Head/Body/Random]", "Heli Hitbox Override [Main/Tail Rotor]", "Hitbox Override Cycle Key"],
      },
      {
        title: "Player ESP",
        items: ["Box Type (Box, Corner)", "Show Skeleton", "Show Name", "Show Distance", "Show Weapon", "Show Hotbar", "Show Clothing", "Out Of FOV Info", "Aim Target", "Look Direction", "Show Friendly", "Show Team ID", "Show Sleepers", "Show NPC", "Show Ghosts", "Show Looking at Me", "Show Raids"],
      },
      {
        title: "Loot ESP",
        items: ["Advanced Underwater Crate", "Backpack", "Basic Underwater Crate", "Bradley Crate", "Diesel Barrel", "Elite Crate", "Event Collectable", "Fuel Barrel", "Hackable Crate", "Helicopter Crate", "Normal Crate", "Loot Barrel", "Medical Crate", "Military Crate", "Player Corpse", "Scientist Corpse", "Supply Drop", "Tool Crate"],
      },
      {
        title: "Item ESP",
        items: ["Weapons", "Placeables", "Items", "Resources", "Attire", "Tool", "Medical", "Food", "Ammunition", "Traps", "Misc", "Component", "Electrical", "Fun"],
      },
      {
        title: "Chams",
        items: ["Pink", "White ZTest", "Black ZTest", "Red Weave", "Blue Weave", "Aqua Weave", "Green Weave", "Yellow Weave", "Orange Weave", "Pink Weave", "Purple Weave", "White Weave", "Orange Reflect", "Lime Reflect", "Sun", "Lightning Bolt", "Fire Animated", "Censored", "Red Glow", "Green Glow", "Yellow Glow", "Bubble", "America", "Spark", "Smoke Animated", "Parachute Animated", "Slime Animated", "Slime", "Glass"],
      },
      {
        title: "Misc ESP",
        items: ["Animal ESP", "Resource ESP", "Vehicle ESP", "Food ESP", "Trap ESP"],
      },
      {
        title: "Exploits",
        items: ["Instant Loot", "Instant Revive", "Instant Untie", "Instant Pickup", "Instant Rack Reload", "Remove World Layers", "Third Person", "Zoom", "FOV Changer (player fov)", "Aspect Ratio Changer", "Full Bright", "Starry Night", "Time Changer", "Thick Bullet", "Extend Melee Range", "Melee Hit Assist", "Suicide", "Hit Sound", "Hit Tracer", "Custom Hit Material", "Spiderman", "Infinite Jump", "Fake Lag", "Anti Aim", "Always Shoot", "No Block Sprint", "No Collision", "Airstuck", "Fly Hack", "Interactive Debug", "Configs", "PlayerList", "Name", "Relation", "SteamID", "Show Base"],
      },
      {
        title: "Settings & Radar",
        items: ["Custom ESP Font", "Custom Crosshair", "Custom Menu Key", "Combat Mode", "Prefab ESP (Debug)", "Cheat Indicators", "Show Players", "Show Entities", "Radar Size Adjustment", "Max Radar Distance"],
      },
    ],
  };

  const currentFeatures = productFeatures[slug] || [];


  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Product Image and left column content */}
            <div className="relative">
              <Badge className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground">
                Undetected
              </Badge>
              <Card className="overflow-hidden border-border/50 relative group">
                <img
                  src={current.images[currentImageIndex]}
                  alt={current.name}
                  className="w-full aspect-video object-cover"
                />
                {current.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? current.images.length - 1 : prev - 1))}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === current.images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {current.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex ? "bg-primary w-8" : "bg-background/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </Card>
              <Badge variant="outline" className="mt-4 text-primary border-primary">
                Starting at {current.starting}
              </Badge>

              {/* Product Features below the image (top-to-bottom) */}
              {currentFeatures.map((section, idx) => (
                <Card key={idx} className="p-6 mt-6 border-border/50">
                  <h2 className="text-xl font-semibold mb-4 text-primary">{section.title}</h2>
                  <div className="space-y-2">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Product Info */}
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Premium Product
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{current.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">(125 reviews)</span>
              </div>
              <p className="text-muted-foreground mb-8">
                Get undetected Rust cheats featuring aimbot, wallhacks and more. Dominate your games safely and efficiently
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Choose your package</h3>
                <div className="space-y-3">
                  {packages.map((pkg) => {
                    const dailyRate = pkg.days 
                      ? `$${(parseFloat(pkg.price.replace('$', '')) / pkg.days).toFixed(2)}/day`
                      : pkg.name === "One-Time" ? "One-time payment" : "One time payment";
                    
                    return (
                      <button
                        key={pkg.id}
                        onClick={() => setSelectedPackage(pkg.id)}
                        className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                          selectedPackage === pkg.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold">{pkg.name}</div>
                            <div className="text-sm text-muted-foreground">{dailyRate}</div>
                          </div>
                          <div className="text-xl font-bold text-primary">{pkg.price}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>Instant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Headphones className="h-4 w-4 text-primary" />
                  <span>24/7 Support</span>
                </div>
              </div>

              <Button size="lg" className="w-full" onClick={() => setPurchaseDialogOpen(true)}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Purchase
              </Button>
              
              <PurchaseDialog
                open={purchaseDialogOpen}
                onOpenChange={setPurchaseDialogOpen}
                productName={current.name}
                packageName={(packages.find(p => p.id === selectedPackage) ?? packages[0])?.name || ""}
                price={(packages.find(p => p.id === selectedPackage) ?? packages[0])?.price || ""}
                variantId={getVariantId(slug, (packages.find(p => p.id === selectedPackage) ?? packages[0])?.id || "")}
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
