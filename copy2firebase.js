const fs = require('fs-extra');

(async () => {
  const src = './dist';
  const copy = './functions/dist';

  await fs.remove(copy);
  await fs.copy(src, copy);
})();
