---
sidebar_position: 1
---

# Getting Started

Let's discover **AppGenPro in less than 5 minutes**.

## Installation

To get started with AppGenPro, follow these steps:

1. Create a Virtual Environment:
```shell
python3 -m venv myenv
source myenv/bin/activate
```

2. Install Python Dependencies:
```shell
pip install -r requirements.txt
```

3. Install Other Dependencies:
```shell
npm install @mermaid-js/mermaid-cli
```

4. Configuration:
* Navigate to `./appgen/config/config.yaml`.
* Validate the `mmdc` path by typing `ls ./node_modules/.bin/mmdc` in the terminal.
* Update `OAI_CONFIG_LIST` and `GITHUB_TOKEN` for OpenAPI model/key and to use github.

## Usage

To use appgenpro, you can either run it via the command line or through a Chat UI:

1. **Command Line:**

```shell
python appgenpro.py --idea "Type your app idea..."
```

For additional options, use:

```shell
python appgenpro.py --help
```

2. **Chat UI:**

Run AppGenPro using Chainlit for an enhanced user experience:

```shell
chainlit run appgenpro.py
```