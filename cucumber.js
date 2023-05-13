let options = [
  '--require config/config.js ',
  '--require setup/assertions.js',
  '--require setup/hooks.js', 
  '--require step-definitions/**/*.steps.js'
].join(' ');

let run_features = [
  'features/',
  options,
].join(' ');

module.exports = {
  test_runner: run_features
};