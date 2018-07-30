# ts-sample

```sh
npm install

# 使用 tslint fix 存在的 error，某些 error 可能无法自动修复，需要手动 fix
node_modules/.bin/tslint -c tslint.json -p tsconfig.json --fix

# 使用 typescript-formatter
node_modules/.bin/tsfmt -r
```

## tslint.json 规则配置

- 每个文件最长 200 行， `max-file-line-count`
- 每行最长 120 个字符， `max-line-length`
- 文件内不同段落只使用一行空行分隔， `no-consecutive-blank-lines`
- 一行末尾不含多余的空格， `no-trailing-whitespace`
- 文件用一行空行结尾，`eofline`
- 统一使用 `LF` 换行， `linebreak-style`
- 只能使用 4 个空格缩进， `indent`
- 不使用分号， `semicolon`
- 一般使用双引号， `quotemark`
- 对 `object` 和 `array` 使用尾逗号， `linebreak-style`
- `import statement` 分组， `ordered-imports`
- 同一文件内不定义 3 个以上的类，`max-classes-per-file`
- 类名和接口名必须使用 `PascalCase` 命名方式， `class-name`
- 变量可使用 `lowerCamelCased`、`UPPER_CASED`、`snake_case` 三种命名方式， `variable-name`
- 禁止直接使用 `Array` 构造数组， `ban`
- 禁止使用 `eval`， `no-eval`
- 禁止使用 `Object、String、 Number、 Boolean` 做类型， `ban-types`
- 禁止使用 `any` 做类型， `no-any`
- 禁止使用 `var`， `no-var-keyword`
- 尽量使用 `const` 代替 `let`， `prefer-const`
- 使用 `===`、`!==` 代替 `==`、 `！=`，`triple-equals`
- 尽量使用 spread 操作符 `...` 而不是 `Object.assign()`， `prefer-object-spread`
- `switch` 语句必须含有 `default`， `switch-default`
- 返回 `promise` 的函数必须加 `async` 标记， `promise-function-async`
- `parseInt` 必须指明进制， `radix`
- 使用 `isNaN` 判断 `NaN`， `use-isnan`