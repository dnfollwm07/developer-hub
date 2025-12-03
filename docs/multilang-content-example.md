# 多语言内容配置示例

## 文件命名规则

支持两种文件组织方式：

### 方式一：文件夹结构（推荐）

对于 `content/personal/education`，创建文件夹并在其中放置多语言版本：

```
content/
└── personal/
    └── education/
        ├── index.zh-TW.mdx  # 繁体中文版本
        ├── index.zh-CN.mdx  # 简体中文版本
        └── index.en.mdx     # 英文版本
```

### 方式二：文件结构

也可以直接在目录下创建文件：

```
content/
└── personal/
    ├── education.zh-TW.mdx  # 繁体中文版本
    ├── education.zh-CN.mdx  # 简体中文版本
    └── education.en.mdx      # 英文版本
```

**注意**：如果使用文件夹结构，请删除没有语言后缀的 `education.mdx` 文件。

### 文件内容示例

#### `education/index.en.mdx` (英文)
```markdown
I am currently a first-year master's student in the Master of Computer Science program at the University of Virginia. My expected to graduate time is December 2025. I completed my undergraduate studies in Computer Science and Technology at Zhejiang University in China.
```

#### `education/index.zh-TW.mdx` (繁体中文)
```markdown
我目前是維吉尼亞大學計算機科學碩士課程的一年級研究生，預計於2025年12月畢業。我在中國浙江大學完成了計算機科學與技術的本科學業。
```

#### `education/index.zh-CN.mdx` (简体中文)
```markdown
我目前是维吉尼亚大学计算机科学硕士课程的一年级研究生，预计于2025年12月毕业。我在中国浙江大学完成了计算机科学与技术的本科学业。
```

## 语言回退机制

系统会按以下优先级自动加载内容：

**统一回退顺序：用户选择的语言 → 英文 → 简体中文 → 繁体中文**

### 所有语言的回退规则

无论用户选择哪种语言，系统都会：

1. **首选用户选择的语言**
   - `education/index.{用户选择的语言}.mdx`（文件夹形式）
   - `education.{用户选择的语言}.mdx`（文件形式）

2. **如果首选语言不存在，按以下顺序回退：**
   - `education/index.en.mdx`（文件夹形式）
   - `education.en.mdx`（文件形式）
   - `education/index.zh-CN.mdx`（文件夹形式）
   - `education.zh-CN.mdx`（文件形式）
   - `education/index.zh-TW.mdx`（文件夹形式）
   - `education.zh-TW.mdx`（文件形式）

### 示例

**用户选择繁体中文 (zh-TW)：**
1. `education/index.zh-TW.mdx` 或 `education.zh-TW.mdx`
2. 如果不存在 → `education/index.en.mdx` 或 `education.en.mdx`
3. 如果不存在 → `education/index.zh-CN.mdx` 或 `education.zh-CN.mdx`

**用户选择简体中文 (zh-CN)：**
1. `education/index.zh-CN.mdx` 或 `education.zh-CN.mdx`
2. 如果不存在 → `education/index.en.mdx` 或 `education.en.mdx`
3. 如果不存在 → `education/index.zh-TW.mdx` 或 `education.zh-TW.mdx`

**用户选择英文 (en)：**
1. `education/index.en.mdx` 或 `education.en.mdx`
2. 如果不存在 → `education/index.zh-CN.mdx` 或 `education.zh-CN.mdx`
3. 如果不存在 → `education/index.zh-TW.mdx` 或 `education.zh-TW.mdx`

## 使用建议

1. **优先创建英文版本**：英文作为第一回退语言，建议优先创建
2. **保持内容一致性**：确保不同语言版本的内容主题一致
3. **文件命名规范**：使用 `filename.{language}.mdx` 格式
4. **确保至少一种语言存在**：系统要求三个语言中至少有一个有内容

## 注意事项

- 系统会优先显示用户选择的语言
- 如果用户选择的语言不存在，会自动按 英文 → 简体中文 → 繁体中文 的顺序回退
- 建议为重要内容创建多语言版本，以提供更好的用户体验
- 文件路径中的语言标识必须使用枚举值：`zh-TW`、`zh-CN`、`en`

