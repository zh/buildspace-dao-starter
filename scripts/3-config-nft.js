import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const bundleDrop = sdk.getBundleDropModule(
  '0xcD38675a09D1f2638b71c411816aF5e3bBeea7f4'
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: 'Awesome Coder',
        description: 'This NFT will give you access to CodeDAO!',
        image: readFileSync('scripts/assets/awesome.png'),
      },
    ]);
    console.log('✅ Successfully created a new NFT in the drop!');
  } catch (error) {
    console.error('failed to create the new NFT', error);
  }
})();
