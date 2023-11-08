# @tomjs/vite-plugin-iconify

![npm](https://img.shields.io/npm/v/%40tomjs/vite-plugin-iconify) ![NPM](https://img.shields.io/npm/l/%40tomjs%2Feslint) ![npm package minimized gzipped size (scoped version select exports)](https://img.shields.io/bundlejs/size/%40tomjs/vite-plugin-iconify)

vite 插件，用于处理 iconify 图标集局域网等环境使用

## 安装

使用 `pnpm` 安装

```bash
pnpm add @tomjs/vite-plugin-iconify -D
```

使用 `yarn` 安装

```bash
yarn add @tomjs/vite-plugin-iconify -D
```

使用 `npm` 安装

```bash
npm i @tomjs/vite-plugin-iconify -D
```

## 使用说明

以 vue/react 项目为例

### 使用插件

#### vue示例

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import iconify from '@tomjs/vite-plugin-iconify';

export default defineConfig({
  plugins: [
    vue(),
    iconify({
      resources: ['https://unpkg.com/@iconify/json/json'],
      rotate: 3000,
      local: ['ant-design', 'ep'],
    }),
  ],
});
```

#### react示例

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import iconify from '@tomjs/vite-plugin-iconify';

export default defineConfig({
  plugins: [
    react(),
    iconify({
      resources: ['https://unpkg.com/@iconify/json/json'],
      rotate: 3000,
      local: ['ant-design', 'ep'],
    }),
  ],
});
```

#### 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| selector | `string` | 'title' | 标签选择器，注入IconifyProviders脚本添加在指定的标签后面 |
| resources | `string[]` | [] | 图标 API 地址，默认带上 https://api.iconify.design |
| rotate | `number` | 750 | 使用下一个主机之前的超时时间（以毫秒为单位） |
| timeout | `number` | 5000 | API 查询被视为失败之前的超时时间（以毫秒为单位） |
| local | `'boolean'\|'IconifySet[]'\|IconifyLocal[]` | false | 本地图标集配置 |

##### IconifySet

iconify 图标集，参考 [icon sets](https://icon-sets.iconify.design/) 或 [Icônes](https://icones.js.org/)

##### IconifyLocal

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| **sets** | `IconifySet[]` | [] | iconify 图标集 |
| base | `string` | '/' | 同 vite 配置 base 选项 |
| outDir | `string` | 'dist' | 本地输出目录, 默认同 vite 配置 build.outDir 选项 |
| path | `string` | 'npm/@iconify/json@{version}' | 本地输出路径，对应模块url也会替换为该路径 |

## 开发

- 开发环境

  - git
  - node>=16
  - pnpm>=8

- 首次使用，需要安装依赖，执行如下命令

```bash
# 安装依赖
pnpm i
# 生成本库的dist，安装 examples 依赖
pnpm bootstrap
```
