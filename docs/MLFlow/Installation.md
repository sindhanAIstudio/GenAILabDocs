---
id: mlflow-intro
title: Intro to ML Ops ft. MLFlow
description: Windows setup guide for uv, MLflow, and Jupyter Notebook.
sidebar_position: 1
tags:
  - MLOps
  - MLflow
  - Python
  - Jupyter
---

# Intro to ML Ops ft. MLFlow

## Step 0 — Install uv on Windows

`uv` is the Python package and project manager used to install and manage Python packages.

### 1. Open PowerShell

Open PowerShell or the PowerShell terminal in VS Code.

### 2. Install uv

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

### 3. Close and reopen the terminal

Verify that uv is installed:

```powershell
uv --version
```

Expected output:

```text
uv x.x.x
```

## Step 1 — Create the project and install MLflow

Use the project name `mlflow-project`. Avoid naming the project `mlflow`, because that can conflict with the installed package.

### 1. Create the project folder

```powershell
mkdir mlflow-project
```

### 2. Open the project folder

```powershell
cd mlflow-project
```

### 3. Create a virtual environment

```powershell
uv venv
```

This creates an isolated Python environment in the `.venv` folder.

### 4. Activate the virtual environment

```powershell
.venv\Scripts\activate
```

If PowerShell blocks script execution, run:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then activate the environment again.

### 5. Install the required packages

```powershell
uv pip install jupyter mlflow pandas numpy scikit-learn matplotlib xgboost imbalanced-learn
```

These packages provide Jupyter Notebook, MLflow experiment tracking, data processing, machine learning algorithms, and visualization tools.

## Step 2 — Launch Jupyter Notebook

### 1. Start Jupyter Notebook

Run this command while the virtual environment is activated:

```powershell
jupyter notebook
```

### 2. Open Jupyter Notebook

Visit:

http://localhost:8888

## Step 3 — Run the MLflow UI

Keep Jupyter running and open a new PowerShell terminal.

### 1. Navigate to the project folder

```powershell
cd mlflow-project
```

### 2. Activate the virtual environment

```powershell
.venv\Scripts\activate
```

### 3. Launch the MLflow UI

```powershell
mlflow ui
```

### 4. Open MLflow UI

Visit:

http://localhost:5000

The MLflow UI lets you inspect experiments and runs after your code logs parameters, metrics, or models.

## Jupyter Notebook files

Download the following notebook files and save them in your project folder:

* `first_experiment.ipynb`
* `ml_flow_binary_classification.ipynb`

Open Jupyter Notebook and click the notebook filename to open it.

## Troubleshooting

### uv is not recognized

Close and reopen the terminal. If the problem continues, check that the uv installation directory is included in your `PATH`.

### Virtual environment activation fails

Apply the PowerShell execution-policy command shown in Step 1 and try again.

### MLflow is not recognized

Activate the virtual environment and ensure MLflow installed successfully.

### Port 5000 or 8888 is already in use

Stop the other application using the port or configure the application to use another port.

### No experiments appear in MLflow

Run a notebook or Python script that logs experiment data to MLflow.

## Summary

* **uv:** Manages Python environments and packages.
* **Jupyter Notebook:** Provides an interactive Python environment.
* **MLflow:** Tracks machine learning experiments.
* **Scikit-learn and XGBoost:** Provide machine learning algorithms.
