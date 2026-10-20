import sharp from "sharp";
const svg=Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"><rect x="24" y="24" width="464" height="464" fill="#FF6B35" stroke="#0A0A0A" stroke-width="48"/><text x="256" y="330" text-anchor="middle" font-family="Arial" font-size="210" font-weight="900">SA</text></svg>`);
for(const size of[16,32,48,96,192,512])await sharp(svg).resize(size,size).png().toFile(`public/${size===192||size===512?`android-chrome-${size}x${size}`:`favicon-${size}x${size}`}.png`);await sharp(svg).resize(180,180).png().toFile("public/apple-touch-icon.png");
