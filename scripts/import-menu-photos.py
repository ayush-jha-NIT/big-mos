"""Recreate missing optimized food assets from the reviewed source/license manifest.
Requires Pillow. Existing files are retained; no image-search results are used.
"""
import json
import time
import urllib.error
import urllib.request
from io import BytesIO
from pathlib import Path
from PIL import Image, ImageOps
ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / "public/menu"
sources = json.loads((TARGET / "sources.json").read_text(encoding="utf-8"))
for key, source in sources.items():
    destination = TARGET / f"{key}.webp"
    if destination.exists():
        continue
    if source.get("localOriginal"):
        original = ROOT / source["localOriginal"]
        if not original.exists():
            print(f"{key}: original local file unavailable; retain the committed WebP asset", flush=True)
            continue
        destination.parent.mkdir(parents=True, exist_ok=True)
        image = ImageOps.exif_transpose(Image.open(original)).convert("RGB")
        image.thumbnail((1100,1100), Image.Resampling.LANCZOS)
        image.save(destination,"WEBP",quality=88,method=6)
        continue
    request = urllib.request.Request(source["url"], headers={"User-Agent":"BigMosWebsite/1.0 (reviewed food photograph import)"})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(request, timeout=45) as response:
                image = ImageOps.exif_transpose(Image.open(BytesIO(response.read()))).convert("RGB")
            image.thumbnail((1100,1100), Image.Resampling.LANCZOS)
            image.save(destination,"WEBP",quality=86,method=6)
            print(key,source["title"],flush=True)
            time.sleep(2)
            break
        except urllib.error.HTTPError as error:
            if error.code not in (429,503) or attempt == 3:
                raise
            time.sleep(max(30,int(error.headers.get("Retry-After","30"))) * (attempt+1))
