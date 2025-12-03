# 多语言内容支持

## 文件命名规则

内容文件支持多语言版本，使用以下命名规则：

### 格式
```
filename.{language}.mdx
```

### 支持的语言标识
- `zh-TW` - 繁体中文
- `zh-CN` - 简体中文
- `en` - 英文

### 示例

对于文件 `education.mdx`，可以创建以下多语言版本：

- `education.zh-TW.mdx` - 繁体中文版本
- `education.zh-CN.mdx` - 简体中文版本
- `education.en.mdx` - 英文版本
- `education.mdx` - 默认版本（无语言标识，作为回退）

## 语言回退机制

系统会按以下优先级加载内容：

### 繁体中文 (zh-TW)
1. `filename.zh-TW.mdx` - 首选
2. `filename.en.mdx` - 回退到英文
3. `filename.zh-CN.mdx` - 回退到简体中文
4. `filename.mdx` - 默认文件

### 简体中文 (zh-CN)
1. `filename.zh-CN.mdx` - 首选
2. `filename.en.mdx` - 回退到英文
3. `filename.zh-TW.mdx` - 回退到繁体中文
4. `filename.mdx` - 默认文件

### 英文 (en)
1. `filename.en.mdx` - 首选
2. `filename.zh-TW.mdx` - 回退到繁体中文
3. `filename.zh-CN.mdx` - 回退到简体中文
4. `filename.mdx` - 默认文件

## 使用建议

1. **每个叶子目录至少有一种语言**：确保每个内容文件至少有一个语言版本
2. **优先创建英文版本**：英文作为通用回退语言，建议优先创建
3. **保持文件结构一致**：同一目录下的文件应使用相同的命名规则

## 示例目录结构

```
content/
├── personal/
│   ├── education.zh-TW.mdx
│   ├── education.zh-CN.mdx
│   ├── education.en.mdx
│   ├── work_experience.zh-TW.mdx
│   └── work_experience.en.mdx  (只有繁体中文和英文)
└── notes/
    └── network/
        ├── http.zh-TW.mdx
        ├── http.en.mdx
        └── http.mdx  (默认回退文件)
```

## 注意事项

- 如果某个文件只有一种语言版本，系统会自动使用该版本，无论当前选择的语言是什么
- 建议为重要内容创建多语言版本，以提供更好的用户体验
- 默认文件（无语言标识）会作为最后的回退选项

