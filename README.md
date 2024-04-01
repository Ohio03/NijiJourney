A high-quality anime image generator API project by rehat666

## Preview

![Preview Image 1](./images/image_1.png)

![Preview Image 2](./images/image_2.png)

![Preview Image 3](./images/image_3.png)

![Preview Image 4](./images/image_4.png)


## Installation

```
npm install @rehat666/nijijourney
```
## Usage

```javascript
const { Niji } = require('@rehat666/nijijourney');

const prompt = ''; // Prompt to generate text to image.
const imageUrl = ''; // URL of the image for transforming an existing image with prompt.
const aspectRatio = ''; // Ratio for adjusting the image aspect ratio in text to image not recommended for transforming existing images.

Niji(prompt, imageUrl, aspectRatio)
  .then(imageUrl => console.log(imageUrl))
  .catch(error => console.error(error));
```

## License
- Don't sell my source code.
- Don't claim my source code as your own.
- NijiJourney Project Created By **[Abdullah Al Siam (siam38)](https://github.com/siam38)**
**[Saad Al Saud (Ohio03)](https://github.com/Ohio03)**

## Thanks for using @rehat666/nijijourney!
