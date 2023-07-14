# lodash
- [lodash官网](https://lodash.com/)
- [lodash中文文档](https://www.lodashjs.com/)
- [lodash github仓库](https://github.com/lodash/lodash)
- [lodash npm](https://www.npmjs.com/package/lodash)
- [lodash-cli github仓库](https://github.com/lodash/lodash-cli)
- [lodash-cli npm](https://www.npmjs.com/package/lodash-cli)


## s1e003: lodash-cli 源码快速了解

- [一文搞懂 cjs 和 mjs 如何相互使用](https://juejin.cn/post/7210003299109683258)
- [使用Travis进行持续集成](https://www.liaoxuefeng.com/article/1083103562955136)
- [偶然在github开源项目中发现了.travis.yml这货](https://blog.csdn.net/albertsh/article/details/125581553)

```sh
cd lodash-cli
nrm use taobao
pnpm install
```

1. vscode折叠所有代码块（ctrl+k,ctrl+0）
2. vscode展开所有代码块（ ctrl+k,ctrl+j）

## s1e003: lodash-cli的使用

```sh
npx lodash-cli --help                                          
Usage:
  lodash [commands] [options]

Commands:

  core         Create a 4 kB build
  modularize   Create a build with lodash split into modules
  strict       Create an ES strict mode enabled build

  include=..   Comma separated function/category names to include in the build

  minus=..     Comma separated function/category names to remove from the build

  plus=..      Comma separated function/category names to add to the build

  category=..  Comma separated categories of functions to include in the build
               (i.e. “array”, “collection”, “date”, “function”, “lang”,
               “object”, “number”, “seq”, “string”, & “util”)

  exports=..   Comma separated values of ways to export lodash.
               (i.e. “amd”, “es”, “global”, “node”, “none”, “npm”, & “umd”)

  iife=..      Code to replace the IIFE that wraps lodash
               (e.g. `lodash iife="\!function(){%output%}()"`)

  template=..  File path pattern used to match template files to precompile
               (e.g. `lodash template=./*.jst`)

  settings=..  Template settings used when precompiling templates
               (e.g. `lodash settings="{interpolate:/{{([\s\S]+?)}}/g}"`)

  moduleId=..  The AMD module ID used to export lodash in lodash builds or
               the module ID used to include lodash in compiled templates.

               Use “none” as the module ID to create compiled templates without
               a dependency on lodash.

  The `exports` values “es” & “npm” may only be used in conjunction with
  the `modularize` command.

  The `modularize` command uses the first `exports` values as its module format,
  ignoring subsequent values.

  Unless specified by `-o` or `--output` all files created are saved to the
  current working directory.

Options:

  -c, --stdout       Write output to standard output
  -d, --development  Write only the non-minified development output
  -h, --help         Display help information
  -m, --source-map   Generate a source map using an optional source map URL
  -o, --output       Write output to a given path/filename
  -p, --production   Write only the minified production output
  -s, --silent       Skip status updates normally logged to the console
  -V, --version      Output current version of lodash
```

```sh
npx lodash-cli core
npx lodash-cli strict
npx lodash-cli modularize

npx lodash-cli category=date,number
 npx lodash-cli exports=amd,es,global,node,none,npm,umd 
 
```

## s1e002: lodash的使用

```
_.size
_.now()
_.isPlainObject
_.every
_.memoize
```

## s1e001: 准备工作

- [vscode 下载](https://code.visualstudio.com/Download)
- [lodash github仓库](https://github.com/lodash/lodash)
- [lodash-cli github仓库](https://github.com/lodash/lodash-cli)

```sh
npm i -g nrm pnpm
```

n nvm

```sh
git clone https://github.com/lodash/lodash
cd lodash
git clone https://github.com/lodash/lodash-cli
```