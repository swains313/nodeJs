/*
npm - global command , comes with code
npm --version


local dependency - use it only in this particular project
npm i <package name> 

global dependency - use it any project
npm install -g <package name>
sudo npm install -g <package name> (mac)

package.json - manifests file (store important info about project.package)
manual approach (create package.json in the root, create project etc)
npm init (step by step press enter to skip)
npm init -y (everything default)


*/


const _ =  require('lodash');

const items = [1,[2,[3,[4]]]];

const newItems=_.flattenDeep(items);
console.log(newItems);