import * as path from 'path';
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../..')

moduleAlias.addAliases({
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'test')
})

console.log(path)
console.log(path.join(files, 'src'))
console.log(path.join(files, 'test'))