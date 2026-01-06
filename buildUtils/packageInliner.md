packgeInliner is a node script that for each package listed in package.json/dependencies:

1.  Creates a folder at the root whose name matches the name of the package (if such a folder doesn't exist).
2.  Copies all the *.js and *.ts files (however deeply nested) into that folder.  However, while copying them in:
  1.  Prepends all bare cross-package import specifiers (that start with an alphanumeric letter) with ../.  So for example


```JavaScript
import {foo} from 'bar/foo.js';

const {foo} = await import('bar/foo.js');
```

becomes:

```JavaScript
import {foo} from '../bar/foo.js';

const {foo} = await import('../bar/foo.js');
```

However, if the file being copied in is in a subfolder, add the appropriate number of "../"'s to the path so it will resolve.