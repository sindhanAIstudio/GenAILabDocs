
---
id: installation
title: Installing n8n
description: How to install and run n8n locally.
sidebar_position: 1
tags:
  - n8n
  - Automation
  - Installation
---

# Complete Guide to n8n

## 1. What Is n8n?

n8n is a workflow automation platform that connects applications, APIs, databases, and AI services to automate repetitive tasks.

It provides a visual editor where users connect nodes to create automated workflows.

For example, an HR team can automatically check attendance records and send notifications to employees or managers.

### Why Do We Use n8n?

* Automate repetitive tasks.
* Connect applications and services.
* Integrate APIs and databases.
* Process data automatically.
* Send email and messaging notifications.
* Build AI-powered workflows.
* Reduce manual work and errors.

### Real-World Example

An attendance automation workflow can:

1. Read employee attendance records.
2. Check each employee's attendance status.
3. Identify absent employees.
4. Send a notification to HR.
5. Save the workflow results.

---

## 2. Important Concepts in n8n

### Workflow

A workflow is a collection of connected steps that performs a task automatically.

Example: Receive a form submission, validate the information, store it in a database, and send a confirmation email.

### Node

A node is an individual step in a workflow.

Examples include:

* Schedule Trigger
* Manual Trigger
* HTTP Request
* Edit Fields
* IF
* Code
* MySQL
* Gmail

Each node has a specific purpose.

### Trigger

A trigger starts a workflow.

Common triggers include:

* Manual Trigger: Starts a workflow when you run it manually.
* Schedule Trigger: Starts a workflow at configured times.
* Webhook: Starts a workflow when an external application sends a request.
* Application Trigger: Starts a workflow when a supported application event occurs.

### Connection

A connection links nodes and determines how workflow data moves between steps.

### Credentials

Credentials store the authentication information needed to connect to external services.

Examples include API keys, OAuth connections, and database credentials.

Never publish passwords, tokens, or private API keys in documentation or public repositories.

---

## 3. How n8n Works

A typical workflow follows this sequence:

1. A trigger starts the workflow.
2. A node receives input data.
3. The node processes the data.
4. The result moves to the next connected node.
5. Conditional nodes determine which path to follow.
6. The workflow performs the final action.
7. Execution results can be inspected for debugging.

### Example Workflow

Manual Trigger → Edit Fields → IF → Notification

The Manual Trigger starts the workflow. Edit Fields creates or modifies data. IF checks a condition. The appropriate output path continues to the next node.

---

## 4. Installing n8n

n8n can be used through its hosted service or installed locally.

### Option A: Use n8n Cloud

1. Visit https://n8n.io/.
2. Review the available hosted plans.
3. Create an account if you want to use the hosted service.
4. Create a workflow in the visual editor.

Hosted services may require a paid subscription.

### Option B: Install n8n Locally with npm

Prerequisites:

* Node.js version supported by your chosen n8n release.
* npm.
* An internet connection for installation.

Check the installed versions:

```bash
node -v
npm -v
```

Install n8n globally:

```bash
npm install -g n8n
```

Start n8n:

```bash
n8n
```

Open the local editor:

http://localhost:5678

Follow the initial setup instructions shown in the browser.

**Note:** Check the official installation documentation for current Node.js requirements and supported installation methods before setting up a new environment.

Official guide: https://docs.n8n.io/hosting/installation/npm/

---

## 5. Creating Your First Workflow

### Objective

Create a workflow that displays a simple message.

### Step 1: Open n8n

Open http://localhost:5678 in your browser.

### Step 2: Create a workflow

Create a new workflow from the editor.

### Step 3: Add Manual Trigger

Search for Manual Trigger and add it to the canvas.

This node allows you to start the workflow manually.

### Step 4: Add Edit Fields

Add an Edit Fields node and connect it to Manual Trigger.

Create a field:

* Field name: `message`
* Value: `Welcome to n8n`

### Step 5: Execute the workflow

Click Execute Workflow.

### Step 6: Inspect the output

Select the Edit Fields node and inspect its output. It should contain the message field.

Example output:

```json
{
  "message": "Welcome to n8n"
}
```

### Expected Result

The workflow executes successfully and produces the configured message.

---

## 6. Understanding Important Nodes

### Manual Trigger

Starts a workflow manually during development or testing.

### Schedule Trigger

Runs a workflow on a schedule, such as every day or every hour.

Example use cases:

* Daily reports.
* Scheduled backups.
* Regular data synchronization.

### Webhook

Receives HTTP requests from external applications.

Example: A website submits a registration form, and the webhook starts a workflow.

### HTTP Request

Sends HTTP requests to APIs.

It supports common HTTP methods such as GET, POST, PUT, PATCH, and DELETE, depending on the API.

Example: Retrieve product information from an external service.

### Edit Fields

Creates, modifies, or selects fields in workflow data.

### IF

Checks a condition and routes data through the true or false output.

Example: Check whether an employee's attendance status is `Absent`.

### Switch

Routes data into different branches based on matching conditions.

Example: Route support requests into technical, billing, and general categories.

### Code

Runs JavaScript code to transform data or perform custom processing.

Use Code when built-in nodes do not meet the requirement.

### MySQL

Connects to a MySQL database for supported database operations.

Use appropriate credentials and permissions.

---

## 7. Understanding Workflow Data

n8n nodes commonly process data as items containing JSON objects.

Example:

```json
[
  {
    "employee": "Arun",
    "status": "Present"
  },
  {
    "employee": "Priya",
    "status": "Absent"
  }
]
```

Each item contains fields that later nodes can read.

For example, an expression can reference a field from the current item:

```text
{{ $json.employee }}
```

To reference the current item's attendance status:

```text
{{ $json.status }}
```

The exact expression depends on the node configuration and available input data.

### Why Is Data Important?

Understanding data structures helps you:

* Pass information between nodes.
* Filter records.
* Build conditional logic.
* Create notifications.
* Integrate external APIs.

---

## 8. Using the IF Node

Suppose the input data contains:

```json
{
  "employee": "Priya",
  "status": "Absent"
}
```

Configure an IF node to check whether `status` equals `Absent`.

The workflow can then follow two paths:

* True: Send an absence notification.
* False: Continue normal processing.

### Example Logic

```text
IF status == "Absent"
    Send notification
ELSE
    Continue normal workflow
```

This is useful for attendance monitoring, order processing, and business rule automation.

---

## 9. Integrating APIs

An API allows applications to exchange information.

The HTTP Request node can connect n8n to APIs that provide services such as weather data, product information, and business records.

### Example: Retrieve Data

1. Add an HTTP Request node.
2. Select the GET method.
3. Enter the API endpoint.
4. Configure authentication if required.
5. Execute the node.
6. Inspect the returned data.

### Example API

```text
GET https://jsonplaceholder.typicode.com/posts/1
```

This public demonstration endpoint returns a sample post.

Example response:

```json
{
  "userId": 1,
  "id": 1,
  "title": "Sample post title",
  "body": "Sample post content"
}
```

The exact response should be checked by executing the request.

### Important Rules

* Use trusted APIs.
* Read API documentation before configuring requests.
* Handle HTTP errors.
* Protect authentication credentials.
* Respect rate limits and access permissions.

---

## 10. Integrating MySQL

n8n can connect to a MySQL database using the appropriate database node and credentials.

### Example Use Case

A college stores student records in MySQL. n8n can retrieve the records and send notifications based on selected conditions.

### Example Table

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(150),
    attendance_status VARCHAR(20)
);
```

### Example Query

```sql
SELECT id, name, email, attendance_status
FROM students;
```

### Workflow

Schedule Trigger → MySQL → IF → Email

This workflow can retrieve attendance records and process them automatically.

### Security

* Use a dedicated database account.
* Grant only the permissions required.
* Avoid placing database passwords directly in Code nodes.
* Validate inputs before using them in queries.

---

## 11. Building an Attendance Automation Project

### Project Objective

Automate attendance monitoring for students or employees.

### Requirements

* An attendance data source, such as MySQL or a spreadsheet.
* n8n.
* An email or messaging service.
* Correctly configured credentials.

### Workflow Design

Schedule Trigger → Read Attendance → Filter Absentees → Send Notification

### Step 1: Schedule Trigger

Configure the workflow to run at the required time.

### Step 2: Read Attendance

Retrieve the attendance records from the selected data source.

### Step 3: Filter Absentees

Use an IF node or another suitable filtering method to identify absent students.

### Step 4: Send Notifications

Connect the workflow to an approved email or messaging service.

### Step 5: Test the Workflow

Use sample records and confirm that only the intended recipients receive notifications.

### Expected Outcome

The workflow automatically identifies absent students and sends the configured notifications.

---

## 12. Building an AI Workflow

n8n can connect AI models, language model services, and external tools.

### Example: AI Learning Assistant

A student submits a question through a form or webhook.

The workflow:

1. Receives the question.
2. Validates the input.
3. Sends the question to a configured AI model.
4. Receives the response.
5. Returns the answer or stores it in a database.

### Example Architecture

Webhook → Validate Input → AI Model → Format Response → Return Result

### Common Use Cases

* Summarizing documents.
* Answering frequently asked questions.
* Classifying support tickets.
* Generating draft email responses.
* Extracting structured information from text.

### Important Considerations

* AI output can be inaccurate.
* Validate important results.
* Protect confidential data.
* Configure API credentials securely.
* Monitor model usage and cost.
* Add human approval for sensitive actions.

---

## 13. Connecting n8n with Ollama

Ollama can run supported language models locally. n8n can connect to Ollama using compatible integrations or its HTTP Request node.

### Prerequisites

* Ollama installed.
* A model downloaded locally.
* n8n running.
* The Ollama service accessible from the n8n environment.

### Step 1: Check Ollama

```bash
ollama list
```

### Step 2: Check the API

The default local Ollama API address is:

```text
http://localhost:11434
```

### Step 3: Test the API

```bash
curl http://localhost:11434/api/tags
```

### Step 4: Configure n8n

Use an appropriate Ollama integration or configure an HTTP Request node according to the Ollama API documentation.

For a local generation request, the endpoint is commonly:

```text
POST http://localhost:11434/api/generate
```

Example JSON request body:

```json
{
  "model": "qwen2.5:7b",
  "prompt": "Explain machine learning in simple terms.",
  "stream": false
}
```

Use a model name that actually appears in your Ollama installation.

### Networking Note

If n8n runs inside Docker, `localhost` refers to the container itself rather than necessarily referring to the Windows host. Configure networking appropriately for your environment.

---

## 14. Error Handling and Debugging

### Problem: Workflow does not execute

Possible solutions:

* Check whether the trigger is configured correctly.
* Confirm that the workflow is enabled when required.
* Inspect the execution history.
* Review errors shown by the failing node.

### Problem: API authentication fails

Possible solutions:

* Verify the credentials.
* Check the required authentication method.
* Confirm that the account has the required permissions.
* Review token expiry and API access restrictions.

### Problem: No data reaches the next node

Possible solutions:

* Inspect the previous node's output.
* Verify the field names.
* Check whether the node returned any items.
* Confirm that the connection follows the intended output path.

### Problem: MySQL connection fails

Possible solutions:

* Check the database host and port.
* Verify the username and password.
* Confirm that MySQL is running.
* Check network access and database permissions.

### Problem: Ollama cannot be reached

Possible solutions:

* Verify that the Ollama service is running.
* Check the API address.
* Confirm that the model exists.
* Check network access when n8n runs in a container.

---

## 15. Workflow Best Practices

1. Use meaningful workflow and node names.
2. Test workflows with sample data before enabling automation.
3. Store credentials securely.
4. Validate input data.
5. Handle errors and unexpected responses.
6. Avoid unnecessary API requests.
7. Use appropriate database permissions.
8. Monitor executions.
9. Document dependencies and configuration.
10. Disable workflows that are no longer required.

---

## 16. Practice Exercises

### Beginner Level

1. Create a workflow using Manual Trigger.
2. Use Edit Fields to create a message.
3. Retrieve data from a public demonstration API.
4. Filter records using an IF node.
5. Convert a set of input fields into a new JSON structure.

### Intermediate Level

1. Build a scheduled attendance workflow.
2. Connect n8n to MySQL.
3. Send an email when a condition is met.
4. Receive a form submission through a webhook.
5. Add error handling to an API workflow.

### Advanced Level

1. Build an AI question-answering workflow.
2. Connect n8n to a local Ollama model.
3. Create an automated support ticket classifier.
4. Build a document summarization workflow.
5. Add logging, monitoring, and approval steps to an automation.

---

## 17. Frequently Asked Questions

### Is n8n free?

n8n provides self-hosting options and paid hosted offerings. Self-hosting can avoid a hosted subscription, but infrastructure, maintenance, and external service costs may still apply. Review the current licensing terms.

### Do I need programming knowledge?

No. Many workflows can be created using the visual editor. JavaScript, expressions, and API knowledge are useful for more advanced tasks.

### Can n8n connect to AI models?

Yes. n8n supports AI-related nodes and integrations. The available options depend on the installed version and the configured services.

### Can n8n connect to databases?

Yes. It provides database integrations, including MySQL, subject to the appropriate configuration and credentials.

### Can n8n run automatically?

Yes. Workflows can use triggers such as Schedule Trigger, Webhook, and supported application triggers.

### Can n8n replace all programming?

No. n8n is useful for automation and integration, but custom applications and complex processing may still require programming.

---

## 18. Official Resources

* [n8n Official Website](https://n8n.io/)
* [n8n Documentation](https://docs.n8n.io/)
* [Installation Guide](https://docs.n8n.io/hosting/installation/)
* [Workflow Documentation](https://docs.n8n.io/workflows/)
* [Node Documentation](https://docs.n8n.io/integrations/)
* [Expressions](https://docs.n8n.io/code/expressions/)
* [AI Documentation](https://docs.n8n.io/advanced-ai/)

## Conclusion

n8n is a flexible workflow automation platform for connecting applications, processing data, and building AI-powered automations.

Start with simple workflows, learn how nodes exchange data, and gradually add APIs, databases, notifications, and AI integrations.
