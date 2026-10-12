---

id: langflow-ollama-installation
title: Langflow and Ollama Installation
description: Step-by-step guide to installing Langflow and Ollama on Windows and connecting a local language model.
sidebar_position: 2
tags:

* Langflow
* Ollama
* Generative AI
* Local LLM

---

# Langflow and Ollama Installation

## 1. Introduction

### What is Langflow?

Langflow is a visual, low-code platform for building AI applications and workflows. It allows developers to connect components such as prompts, language models, agents, and tools using a visual canvas.

**Uses of Langflow:**

* Build AI chatbots.
* Create Retrieval-Augmented Generation (RAG) applications.
* Design AI agent workflows.
* Connect language models with APIs and databases.
* Prototype generative AI applications without writing all the code manually.

### What is Ollama?

Ollama is a tool that lets you download and run supported large language models (LLMs) locally on your computer.

Examples of models include Qwen, Llama, and Gemma.

**Uses of Ollama:**

* Run AI models locally.
* Experiment with LLMs without a hosted model API key.
* Build local AI assistants.
* Connect models to applications and development tools.

### How do Langflow and Ollama work together?

Langflow provides the visual workflow builder, while Ollama runs the language model.

1. A user enters a question.
2. Langflow passes the question through the configured workflow.
3. The Ollama model processes the prompt.
4. The model generates a response.
5. Langflow displays the response.

## 2. Prerequisites

Before starting, make sure you have:

* Windows 10 or Windows 11.
* A supported Python version for your Langflow release.
* PowerShell or the VS Code terminal.
* Internet access for downloading software and models.
* Sufficient RAM and disk space for your chosen model.

## 3. Install Ollama

### Step 1: Download Ollama

Visit the official website:

https://ollama.com/

Download the Windows installer and complete the installation.

### Step 2: Verify the installation

Open PowerShell and run:

```powershell
ollama --version
```

### Step 3: Download a language model

For example, download Qwen 2.5:

```powershell
ollama pull qwen2.5:7b
```

This model requires several gigabytes of storage, and its performance depends on your available memory and hardware.

### Step 4: List installed models

```powershell
ollama list
```

### Step 5: Test the model

```powershell
ollama run qwen2.5:7b
```

Enter a question and verify that the model generates a response. Type `/bye` to exit.

Ollama normally runs as a background service on Windows.

## 4. Install Langflow

### Step 1: Install uv

If you have not installed `uv`, run:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

Close and reopen PowerShell, then verify:

```powershell
uv --version
```

### Step 2: Create a project folder

```powershell
mkdir langflow-ollama
cd langflow-ollama
```

### Step 3: Create a virtual environment

```powershell
uv venv
```

### Step 4: Activate the environment

```powershell
.venv\Scripts\activate
```

If PowerShell blocks script execution, review your system's security policy. On a personal development computer, you can allow locally created scripts for the current user:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then activate the environment again.

### Step 5: Install Langflow

```powershell
uv pip install langflow
```

Wait until the installation completes.

### Step 6: Start Langflow

```powershell
uv run langflow run
```

Open the following address in your browser:

http://127.0.0.1:7860

Keep the terminal running while you use Langflow.

## 5. Connect Langflow with Ollama

### Step 1: Open Langflow

Navigate to:

http://127.0.0.1:7860

Create a new flow.

### Step 2: Add the required components

Depending on your installed Langflow version, add components for:

* Chat Input
* Prompt Template, if needed
* Ollama language model
* Chat Output

### Step 3: Configure Ollama

Open the Ollama component settings and enter the local Ollama API address:

```text
http://127.0.0.1:11434
```

Select the model you downloaded, such as:

```text
qwen2.5:7b
```

If the component provides a model-refresh option, use it to load the installed models.

### Step 4: Connect the components

Connect the components according to their input and output types. Ensure that the language model output is connected to a component that accepts a language model.

Component names and connection ports may differ across Langflow versions.

### Step 5: Run the flow

Enter a prompt such as:

```text
Explain artificial intelligence in simple terms with three real-world examples.
```

Run the flow and check whether the model returns a response.

## 6. Verify the Ollama API

If Langflow cannot connect to Ollama, open PowerShell and run:

```powershell
Invoke-RestMethod http://127.0.0.1:11434/api/tags
```

A JSON response containing installed model information indicates that the Ollama API is reachable.

The default local addresses are:

| Application | Address                  |
| ----------- | ------------------------ |
| Langflow    | `http://127.0.0.1:7860`  |
| Ollama API  | `http://127.0.0.1:11434` |

## 7. Troubleshooting

### Problem: `ollama` is not recognized

Restart your terminal after installing Ollama. If the problem persists, check that its installation directory is available through your system's PATH.

### Problem: Ollama connection refused

* Confirm that Ollama is running.
* Check that the configured URL is `http://127.0.0.1:11434`.
* Test the API using the command in Section 6.

### Problem: No models appear in Langflow

Run:

```powershell
ollama list
```

Verify the model name and refresh the model list in Langflow if the option is available.

### Problem: Langflow installation fails

* Verify your Python version against the requirements for the Langflow release.
* Confirm that your virtual environment is activated.
* Review the terminal error for missing dependencies or installation conflicts.

### Problem: The model responds slowly

* Try a smaller model.
* Close other memory-intensive applications.
* Check the hardware requirements of the selected model.

## 8. Security Considerations

* Keep local AI services restricted to trusted users and applications.
* Do not expose the Ollama API or Langflow interface to an untrusted network without suitable security controls.
* Avoid placing passwords, API keys, or other secrets directly into shared workflows.
* Local model execution can reduce reliance on hosted APIs, but external integrations in a flow may still transmit data outside your computer.

## 9. Official Documentation

* Langflow installation: https://docs.langflow.org/get-started-installation
* Langflow Ollama integration: https://docs.langflow.org/next/bundles-ollama
* Ollama: https://ollama.com/
* Ollama model library: https://ollama.com/library

## 10. Conclusion

Langflow and Ollama provide a way to build and test AI applications using a visual workflow and a locally running language model.

Langflow manages the workflow, and Ollama runs the model. Once they are connected, you can experiment with chatbots, AI assistants, and other generative AI applications on your computer.
