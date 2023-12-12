const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const polifills = [
        './dist/apps/client/browser/polyfills.js',
        
      ];
    const main = [
        './dist/apps/client/browser/main.js'
    ]  
    const styles = [
        './dist/apps/client/browser/styles.css'
    ]  
    
      try {
        await fs.ensureDir('apps/services/src/assets');
        await concat(polifills, 'apps/services/src/assets/polyfills.js');
        await concat(main, 'apps/services/src/assets/web-component.js');
        await concat(styles, 'apps/services/src/assets/web-component.css');
      } catch(e) {
        console.log(e);
      }
}
build();