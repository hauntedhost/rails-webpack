import path from 'path';
import register from 'babel-core/register';
import resolver from 'babel-resolver';

// add resolver for ./frontend path so that tests can import relative
// e.g.: import Todo from 'components/todo';
const frontendPath = path.join(__dirname, '..');
register({
  presets: [
    'react',
    'es2015',
    'stage-1'
  ],
  resolveModuleSource: resolver(frontendPath)
});
