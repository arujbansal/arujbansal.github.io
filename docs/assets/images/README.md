# Profile Photo Instructions

To add your profile photo to the website:

1. **Add your photo** to this directory (`/assets/images/`) with the filename `profile.jpg`
2. **Recommended specs**:
   - Format: JPG or PNG
   - Size: At least 600x600 pixels (square aspect ratio works best)
   - File size: Under 1MB for optimal loading

3. **The photo will**:
   - Be displayed as a 300px circle on desktop
   - Scale to 250px on mobile devices
   - Have a hover effect with slight zoom
   - Show a placeholder if the image is missing

## Alternative Formats

If you prefer a different format or filename, you can update the image source in `index.md`:

```html
<img src="/assets/images/your-photo-name.png" alt="Aruj Bansal" class="profile-photo">
```

The placeholder will automatically hide once a valid image is detected.