# lodash大类

- [ ] Array 
- [ ] Collection 
- [x] Date 
  - [ ] now  
- [ ] Function 
- [ ] Lang 
- [ ] Math 
- [ ] Number 
  - [ ] clamp  
  - [ ] inRange
  - [ ] random
- [ ] Object 
- [ ] Seq 
- [ ] String 
- [ ] Util 
- [ ] Properties 
  - [ ] VERSION 
- [ ] Methods
  - [ ] templateSettings

xx
```
lodash
├─ date.js
│  ├─ now.js
│        └─ _root.js
│              └─ _freeGlobal.js
│  └─ date.defualt.js
├─ templateSettings.js
├─ escape.js
├─ ...
└─ package.json
```

## Date

```sh
cd lodash
git checkout es

# date.js
```


## 可视化依赖
- [madge github](https://github.com/pahen/madge)
  - VSCode 插件: Svg Preview
- VSCode 插件: Dependency Cruiser Extension
- [dependency-cruiser npm](https://www.npmjs.com/package/dependency-cruiser)
- [code2flow](https://github.com/scottrogowski/code2flow)
- [vis-network github](https://github.com/visjs/vis-network)
  - [vis-network npm](https://www.npmjs.com/package/vis-network)
  - [vite-plugin-inspect](https://github.com/antfu/vite-plugin-inspect)
- [diagrams: Diagram as Code for prototyping cloud system architectures](https://github.com/mingrammer/diagrams)
- [graphql-voyager:Represent any GraphQL API as an interactive graph](https://github.com/graphql-kit/graphql-voyager)
- [viz-js:A hack to put Graphviz on the web.](https://github.com/mdaines/viz-js)
- [diagrams](https://github.com/seflless/diagrams)
- [graphqlviz](https://github.com/sheerun/graphqlviz)

madge
```sh
brew install graphviz || port install graphviz
cd lodash
git checkout es
npx madge -i app.svg lodash.js
```

code2flow
```sh
conda activate py3
pip install code2flow
npm i -g acorn
code2flow lodash.js --source-type=module 
open out.png
```
